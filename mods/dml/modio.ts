interface ModioApiModObject {
	"id": 2,
	"game_id": 2,
	"status": 1,
	"visible": 1,
	"submitted_by": {
		"id": 1,
		"name_id": "xant",
		"username": "XanT",
		"display_name_portal": null,
		"date_online": 1509922961,
		"date_joined": 1509922961,
		"avatar": {
			"filename": "modio-color-dark.png",
			"original": "https://static.mod.io/v1/images/branding/modio-color-dark.png",
			"thumb_50x50": "https://static.mod.io/v1/images/branding/modio-color-dark.png",
			"thumb_100x100": "https://static.mod.io/v1/images/branding/modio-color-dark.png"
		},
		"timezone": "",
		"language": "",
		"profile_url": "https://mod.io/members/xant"
	},
	"date_added": 1492564103,
	"date_updated": 1499841487,
	"date_live": 1499841403,
	"maturity_option": 0,
	"logo": {
		"filename": "modio-color-dark.png",
		"original": "https://static.mod.io/v1/images/branding/modio-color-dark.png",
		"thumb_320x180": "https://static.mod.io/v1/images/branding/modio-color-dark.png",
		"thumb_640x360": "https://static.mod.io/v1/images/branding/modio-color-dark.png",
		"thumb_1280x720": "https://static.mod.io/v1/images/branding/modio-color-dark.png"
	},
	"homepage_url": "https://www.rogue-hdpack.com/",
	"name": "Rogue Knight HD Pack",
	"name_id": "rogue-knight-hd-pack",
	"summary": "It's time to bask in the glory of beautiful 4k textures!",
	"description": "<p>Rogue HD Pack does exactly what you thi...",
	"description_plaintext": "Rogue HD Pack does exactly what you thi...",
	"metadata_blob": "rogue,hd,high-res,4k,hd textures",
	"profile_url": "https://rogue-knight.mod.io/hd-pack",
	"media": {
		"youtube": [
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
		],
		"sketchfab": [
			"https://sketchfab.com/models/ef40b2d300334d009984c8865b2db1c8"
		],
		"images": [
			{
				"filename": "modio-color-dark.png",
				"original": "https://static.mod.io/v1/images/branding/modio-color-dark.png",
				"thumb_320x180": "https://static.mod.io/v1/images/branding/modio-color-dark.png"
			}
		]
	},
	"modfile": {
		"id": 2,
		"mod_id": 2,
		"date_added": 1499841487,
		"date_scanned": 1499841487,
		"virus_status": 0,
		"virus_positive": 0,
		"virustotal_hash": "f9a7bf4a95ce20787337b685a79677cae2281b83c63ab0a25f091407741692af-1508147401",
		"filesize": 15181,
		"filehash": {
			"md5": "2d4a0e2d7273db6b0a94b0740a88ad0d"
		},
		"filename": "rogue-knight-v1.zip",
		"version": "1.3",
		"changelog": "VERSION 1.3 -- Changes -- Fixed critical castle floor bug.",
		"metadata_blob": "rogue,hd,high-res,4k,hd textures",
		"download": {
			"binary_url": "https://mod.io/mods/file/1/c489a0354111a4d76640d47f0cdcb294",
			"date_expires": 1579316848
		}
	},
	"metadata_kvp": [
		{
			"metakey": "pistol-dmg",
			"metavalue": "800"
		}
	],
	"tags": [
		{
			"name": "Unity",
			"date_added": 1499841487
		}
	],
	"stats": {
		"mod_id": 2,
		"popularity_rank_position": 13,
		"popularity_rank_total_mods": 204,
		"downloads_today": 327,
		"downloads_total": 27492,
		"subscribers_total": 16394,
		"ratings_total": 1230,
		"ratings_positive": 1047,
		"ratings_negative": 183,
		"ratings_percentage_positive": 91,
		"ratings_weighted_aggregate": 87.38,
		"ratings_display_text": "Very Positive",
		"date_expires": 1492564103
	},
	jsList: JSZip.JSZipObject[],
}

class ModApi {
	apiKey = `656f778b10cf1651d8f10e221b8c774c`;
	shapezId = '2978';
	modList: ModioApiModObject[] = JSON.parse(localStorage.api_modList || '[]');

	import = (1, eval)('s => import(s)');// s => import(s);

	get headers() { return { 'Accept': 'application/json' }; }
	get oHeaders() { return { headers: this.headers }; }
	get modsByName(): Record<string, ModioApiModObject> { return Object.fromEntries(this.modList.map(e => [e.name_id, e])) }

	async fetchGameList() {
		let j: any = await fetch.cached.json(`https://api.mod.io/v1/games/?api_key=${this.apiKey}`, this.oHeaders);
		(this as any).shapez = j.data.find((e: any) => e.name_id == 'shapez');
		return j.data;
	}

	async fetchShapezMods() {
		this.log(`Downloading mod list...`);
		let j = await fetch.json(`https://api.mod.io/v1/games/${this.shapezId}/mods/?api_key=${this.apiKey}`, this.oHeaders) as {data: ModioApiModObject[]};
		this.modList = j.data;
		localStorage.api_modList = JSON.stringify(j.data);
		return j.data;
	}

	async fetchModZip(modName: string) {
		this.log(`Downloading mod ${modName}...`);
		let mod = this.modsByName[modName];
		if (!mod) {
			dml.dml_modListString = dml.dml_modListString
				.split('\n')
				.map(e => {
					if ((e.match(/^[\w-_]+/gm) || [])[0] != modName) return e;
					return e.replace(modName, '// ' + modName + ' // does not exist ');
				})
				.join('\n');
			throw new Error(`\nMod with id "${modName}" does not exist!\nPlease remove it from the imported mod pane`);
		}
		let url = mod.modfile.download.binary_url;
		let f = await fetch.cached(url)
		let z = await JSZip.loadAsync(f.blob());
		return z;
	}

	async importMod(modName: string) {
		let z = await this.fetchModZip(modName);
		let jsList = Object.values(z.files).filter((e) => e.name.endsWith('.js'));
		this.modsByName[modName].jsList = jsList;
		if (jsList.length > 1) throw new Error('Multiple JS files in mod!');

		// import(...)
		let import_blob = await jsList[0].async('blob');
		let import_jsBlob = new Blob([import_blob], { type: 'text/javascript' });
		let import_blobUrl = URL.createObjectURL(import_jsBlob);

		// eval(...)
		let eval_raw = await jsList[0].async('string');
		let eval_escaped = eval_raw.replace(/[^\x00-\xff]/g, '');
		let eval_js = eval_escaped + `
			if (typeof Mod !== 'undefined') {
				if (typeof METADATA !== 'object') {
					throw new Error("No METADATA variable found");
				}
				window.$shapez_registerMod(Mod, METADATA);
				return {Mod, METADATA};
			}
		`;

		let hasExport = !!eval_raw.match('\bexport\b');
		let hasRegister = eval_raw.includes('$shapez_registerMod');

		return async () => {
			this.log(`Importing mod ${modName}...`);
			try {
				if (!hasExport) {
					return new Function(eval_js)();
				} else if (!hasRegister) {
					let mod = await this.import(import_blobUrl);
					if (!(mod.default || mod.Mod) || !mod.METADATA) {
						console.error(mod);
						throw new Error('mod with export has bad exports!')
					}
					window.$shapez_registerMod(mod.default || mod.Mod, mod.METADATA);
					return mod;
				} else {
					return await this.import(import_blobUrl);
				}
			} catch (err) {
				console.error({ err });
				return new Function(eval_js)();
			}
		};
	}

	log(s: string) {
		console.log(s);
		let el = document.querySelector<HTMLDivElement>('.prefab_GameHint');
		if (!el) el = document.querySelector<HTMLDivElement>('#ll_p div');
		if (el) el.innerText = s;
	}
}
