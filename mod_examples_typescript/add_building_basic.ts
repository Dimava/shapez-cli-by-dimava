import { base64ToPng } from "../types/dimavas-lib";
import { Entity } from "../types/shapez";


const METADATA: shapez.ModMetadata = {
	website: "https://tobspr.io",
	author: "tobspr",
	name: "Mod Example: Add new basic building",
	version: "1",
	id: "add-building-basic",
	description: "Shows how to add a new basic building",
	minimumGameVersion: ">=1.5.0",
};

class MetaDemoModBuilding extends shapez.ModMetaBuilding {
	constructor() {
		super("demoModBuilding");
	}

	static getAllVariantCombinations() {
		return [
			{
				variant: shapez.defaultBuildingVariant,
				name: "A test name",
				description: "A test building",

				regularImageBase64: RESOURCES["demoBuilding.png"],
				blueprintImageBase64: RESOURCES["demoBuildingBlueprint.png"],
				tutorialImageBase64: RESOURCES["demoBuildingBlueprint.png"],
			},
		];
	}

	getSilhouetteColor() {
		return "red";
	}

	setupEntityComponents(entity: Entity) {
		// Here you can add components, for example an ItemProcessorComponent.
		// To get an idea what you can do with the builtin components, have a look
		// at the builtin buildings in <src/js/game/buildings/>
	}
}

class Mod extends shapez.Mod {
	init() {
		// Register the new building
		this.modInterface.registerNewBuilding({
			metaClass: MetaDemoModBuilding,
			buildingIconBase64: RESOURCES["demoBuilding.png"],
		});

		// Add it to the regular toolbar
		this.modInterface.addNewBuildingToToolbar({
			toolbar: "regular",
			location: "primary",
			metaClass: MetaDemoModBuilding,
		});
	}
}

$shapez_registerMod(Mod, METADATA);

////////////////////////////////////////////////////////////////////////
import demoBuildingPng from './resources/demoBuilding.png';
import demoBuildingBlueprintPng from './resources/demoBuildingBlueprint.png';
const RESOURCES = {
	"demoBuilding.png": base64ToPng(demoBuildingPng),
	"demoBuildingBlueprint.png": base64ToPng(demoBuildingBlueprintPng),
};
