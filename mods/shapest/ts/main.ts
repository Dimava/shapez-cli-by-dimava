import { Balancer22 } from "./buildings/balancer22.js";
import { PainterOverride } from "./buildings/painterOverride.js";
import { Rotator3 } from "./buildings/rotator3.js";
import { SzLevel } from "./levels/levels.js";
import { SandboxMode } from "./sandbox.js";
import { SzColorItem } from "./shapest/color.js";
import { SzDefinition } from "./shapest/definition.js";
import { SzShapeItem } from "./shapest/item.js";
import { SzInfo } from "./shapest/layer.js";
import { Mod as ModBase } from "./shapez.js";
import { SpawnOwerride } from "./SpawnOverride.js";

const METADATA: shapez.ModMetadata = {
	website: "",
	author: "Dimava",
	name: "Shapest (working)",
	version: "1.0.0",
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