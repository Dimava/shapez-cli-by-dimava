import { ModMetadata, ModBase } from "../types/shapez";

export const METADATA: ModMetadata = {
	website: "https://tobspr.io",
	author: "tobspr",
	name: "Mod Example: Base",
	version: "1",
	id: "base",
	description: "The most basic mod",
	minimumGameVersion: ">=1.5.0",

	// You can specify this parameter if savegames will still work
	// after your mod has been uninstalled
	doesNotAffectSavegame: true,
};

export class Mod extends ModBase {
	init() {
		// Start the modding here
	}
}
$shapez_registerMod(Mod, METADATA);