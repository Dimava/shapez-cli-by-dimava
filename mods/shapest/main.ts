import { Balancer22 } from "./ts/buildings/balancer22";
import { PainterOverride } from "./ts/buildings/painterOverride";
import { Rotator3 } from "./ts/buildings/rotator3";
import { SzLevel } from "./ts/levels/levels";
import { SandboxMode } from "./ts/sandbox";
import { SzColorItem } from "./ts/shapest/color";
import { SzDefinition } from "./ts/shapest/definition";
import { SzShapeItem } from "./ts/shapest/item";
import { SzInfo } from "./ts/shapest/layer";
import { Mod as ModBase } from "./ts/shapez";
import { SpawnOwerride } from "./ts/SpawnOverride";

const METADATA: shapez.ModMetadata = {
	website: "",
	author: "Dimava",
	name: "Shapest (working)",
	version: "1.1.0",
	id: "shapest",
	description: "test!",
	minimumGameVersion: ">=1.5.0",

	doesNotAffectSavegame: false,

	settings: {},
};

class Mod extends ModBase {
	init() {
		this.use(SandboxMode);

		this.use(SzDefinition);
		this.use(SzShapeItem);
		this.use(SzColorItem);

		this.use(PainterOverride);
		this.use(Balancer22);

		this.use(Rotator3);

		this.use(SpawnOwerride);

		this.use(SzLevel);


	}

	use(module: { install(mod: ModBase): void }) {
		module.install(this);
		return this;
	}
}

window.$shapez_registerMod(Mod, METADATA);