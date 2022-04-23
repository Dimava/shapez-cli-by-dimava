const METADATA = {
	website: "",
	author: "Dimava",
	name: "Dimava's Mod Loader",
	version: "1.5.0",
	id: "--dml",
	description: "Import mods directly from shapez.mods.io!",
	minimumGameVersion: ">=1.5.0",

	// You can specify this parameter if savegames will still work
	// after your mod has been uninstalled
	doesNotAffectSavegame: true,

	settings: {
		dml_modListString: 'hexagonal'
	},
};

class Mod extends shapez.Mod {
	init() {
		// Increment the setting every time we launch the mod
		this.settings.dml_modListString = dml.dml_modListString;
		this.saveSettings();

		// Show a dialog in the main menu with the settings
		this.signals.stateEntered.add((state: any) => {
			if (state instanceof shapez.ModsState) {
				this.modsState();
			}
		});
	}

	modsState() {
		if (!globalThis.PoopJs) location.reload();
		qq('.dml').map(e => e.remove());
		q.orElm('head>style#qwe').innerHTML = `
			textarea.dml {
				font-family: monospace;
				font-size: 16px;
				line-height: 1.4;
				white-space: nowrap;
			}
			#dml-container {
				display: grid;
				grid-template-areas: "a b c" "a b d";
			}
			[area="a"] {grid-area: a;}
			[area="b"] {grid-area: b;}
			[area="c"] {grid-area: c;}
			[area="d"] {grid-area: d;}
		`;

		let container = elm('#dml-container');
		let ta = elm('textarea.dml[area="a"]');

		ta.value = this.settings.dml_modListString;
		if (!ta.value.startsWith('// insert'))
			ta.value = '// insert mod ids here, one per line\n// Alt-R to reload game\n' + ta.value;
		ta.rows = ta.value.split('\n').length + 2;
		if (ta.rows < 5) ta.rows = 5;


		let ta2 = elm('textarea.dml[area="b"]');
		ta2.value = '// active mods:\n'
			+ shapez.MODS.mods.map(e => {
				let id = e.metadata.id;
				if (!(e.metadata as any).dmlImported) id = '    ' + id + ' // local file'
				return id;
			}).sort().sort((a, b) => +a.startsWith(' ') - +b.startsWith(' ')).join('\n')
		ta2.rows = ta2.value.split('\n').length;


		let ta3 = elm('textarea.dml[area="d"]');

		ta.rows = ta2.rows = ta3.rows = Math.max(ta.rows, ta2.rows, 10);
		ta3.rows--;

		let srch = elm('textarea.dml[area="c"][rows="1"]');
		srch.placeholder = "filter (split by spaces, supports \"-\")"
		srch.oninput = () => {
			let vv = srch.value.toLowerCase().match(/\S+/g) || [];
			function filter(s: string) {
				s = s.toLowerCase();
				return vv.every(v => {
					if (v[0] == '-') return !s.includes(v.slice(1) || '%%%');
					return s.includes(v);
				})
			}
			ta3.value = `// all mods on shapez.mods.io:\n`
				+ dml.api.modList.map(e => `${e.name_id} (by ${e.submitted_by.username})`).sort()
					.filter(filter)
					.join('\n');
		}
		srch.oninput(new Event(''));

		q('.modsList').prepend(container);
		container.append(ta, ta2, ta3, srch);

		ta.oninput = () => {
			console.log(ta.value)
			this.settings.dml_modListString = ta.value;
			this.saveSettings();
		}

	}


}

$shapez_registerMod(Mod, METADATA);


let dml = new class DimavasModLoader {
	$shapez_registerMod = window.$shapez_registerMod;
	initialized = false;
	import = (s: string) => import(s);

	dml_modListString = '';
	api!: ModApi;

	async init(text: string) {
		let v: any;
		try {
			v = JSON.parse(text);
		} catch (e) {
			return;
		}
		console.log(this, 'initializing DML...', this.dml_modListString, { v })
		if (v.dml_modListString == null) return;
		this.dml_modListString = v.dml_modListString;

		if (this.initialized) return;
		this.initialized = true;

		this.api = new ModApi();

		this.api.log(`Loading libraries... (poopjs)`);
		await this.import('https://unpkg.com/@dimava/poopjs@1.4.3/dist/poop.js');
		console.log({ PoopJs });
		__init__;
		PoopJs.FetchExtension.defaults = {};
		PoopJs.kds['>R'] = () => location.reload();
		this.api.log(`Loading libraries... (jszip)`);
		await this.import('https://unpkg.com/jszip@3.1.5/dist/jszip.min.js');

		this.api.import = this.import;

		await this.api.fetchShapezMods();

		await this.importRequestedMods();

	}

	get modIdList() {
		return this.dml_modListString.match(/^(http|file)\S+|^[\w-_]+/gm) || [];
	}

	async importRequestedMods() {
		let mods = this.modIdList;
		// debugger;
		for (let m of mods) {
			try {
				await this.importMod(m);
			} catch (err) {
				console.error(err);
				alert(`failed to load mod ${m}: ${err}`);
			}
		}
	}

	async importMod(modName = "wires-plus") {
		let z = modName.match(/^(http|file)/) ? () => this.importHttpMod(modName)
			: await this.api.importMod(modName);
		window.$shapez_registerMod = (modClass, meta) => {
			(modClass as any).dmlImported = true;
			(meta as any).dmlImported = true;
			this.$shapez_registerMod(modClass, meta);
		};
		let modInstance = await z();
		console.log({ modName, modInstance });
		delete ((window as any).$shapez_registerMod);
	}

	async importHttpMod(url: string) {
		let mod = await this.import(url);
		if (mod.default && mod.METADATA) {
			$shapez_registerMod(mod.default, mod.METADATA);
		}
	}
}

Object.assign(globalThis, { dml });


for (let proto of [
	shapez.StorageImplBrowserIndexedDB.prototype,
	shapez.StorageImplElectron.prototype,
]) {
	(proto as any)._readFileAsync = proto.readFileAsync;
	proto.readFileAsync = async function (...a) {
		let v = await (this as any)._readFileAsync(...a);
		await dml.init(v);
		return v;
	}
}

// this does not work dunno why
for (let proto of [
	shapez.MainMenuState.prototype
]) {
	(proto as any)._checkForModDifferences = proto.checkForModDifferences;
	proto.checkForModDifferences = function (save) {
		requestAnimationFrame(() => {
			let ta = document.createElement('textarea');
			q('.dialogModsMod')?.before(ta);
			ta.value = `// missing mods:\n`
				+ (save.currentData as any).mods.map((e: any) => e.id)
					.filter((e: string) => !dml.modIdList.includes(e))
					.join('\n');
			ta.style.cssText = 'width: 100%; height: 10em;';
		});
		console.log({ save });
		return (this as any)._checkForModDifferences(save);
	}
	console.log(proto, proto.checkForModDifferences)
	setTimeout(() => console.log(proto.checkForModDifferences), 10000)
}
