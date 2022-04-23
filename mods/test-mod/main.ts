
import { base64ToPng } from '../../types/dimavas-lib';
import { Entity, GameRoot, ModMetaBuilding, ShapeItem } from '../../types/shapez';
import { ModMetadata, ShapeDefinition } from '../../types/shapez';

const METADATA: ModMetadata = {
	website: "https://tobspr.io",
	author: "tobspr",
	name: "Mod Example: Add a flipper building",
	version: "1.0.0",
	id: "add-building-extended",
	description:
		"Shows how to add a new building with logic, in this case it flips/mirrors shapez from top to down",
	minimumGameVersion: ">=1.5.0",
};

declare module 'enumTypes' {
	export interface enumItemProcessorTypesMap {
		flipper: 'flipper';
	}
}



// Declare a new type of item processor
shapez.enumItemProcessorTypes.flipper = "flipper";

// For now, flipper always has the same speed
shapez.MOD_ITEM_PROCESSOR_SPEEDS.flipper = () => 10;

// Declare a handler for the processor so we define the "flip" operation
shapez.MOD_ITEM_PROCESSOR_HANDLERS.flipper = function (payload) {
	let shapeItem = payload.items.get(0)! as ShapeItem;
	const shapeDefinition = shapeItem.definition;

	// Flip bottom with top on a new, cloned item (NEVER modify the incoming item!)
	const newLayers = shapeDefinition.getClonedLayers();
	newLayers.forEach(layer => {
		const tr = layer[shapez.TOP_RIGHT];
		const br = layer[shapez.BOTTOM_RIGHT];
		const bl = layer[shapez.BOTTOM_LEFT];
		const tl = layer[shapez.TOP_LEFT];

		layer[shapez.BOTTOM_LEFT] = tl;
		layer[shapez.BOTTOM_RIGHT] = tr;

		layer[shapez.TOP_LEFT] = bl;
		layer[shapez.TOP_RIGHT] = br;
	});

	const newDefinition = new shapez.ShapeDefinition({ layers: newLayers });
	payload.outItems.push({
		item: this.root.shapeDefinitionMgr.getShapeItemFromDefinition(newDefinition),
	});
};

// Create the building
class MetaModFlipperBuilding extends ModMetaBuilding {
	constructor() {
		super("modFlipperBuilding");
	}

	static getAllVariantCombinations() {
		return [
			{
				name: "Flipper",
				description: "Flipps/Mirrors shapez from top to bottom",
				variant: shapez.defaultBuildingVariant,

				regularImageBase64: RESOURCES["flipper.png"],
				blueprintImageBase64: RESOURCES["flipper.png"],
				tutorialImageBase64: RESOURCES["flipper.png"],
			},
		];
	}

	getSilhouetteColor() {
		return "red";
	}

	getAdditionalStatistics(root: GameRoot): [[string, string]] {
		const speed = root.hubGoals.getProcessorBaseSpeed(shapez.enumItemProcessorTypes.flipper);
		return [[shapez.T.ingame.buildingPlacement.infoTexts.speed, shapez.formatItemsPerSecond(speed)]];
	}

	getIsUnlocked(root: GameRoot) {
		return true;
	}

	setupEntityComponents(entity: Entity) {
		// Accept shapes from the bottom
		entity.addComponent(
			new shapez.ItemAcceptorComponent({
				slots: [
					{
						pos: new shapez.Vector(0, 0),
						direction: shapez.enumDirection.bottom,
						filter: "shape",
					},
				],
			})
		);

		// Process those shapes with tye processor type "flipper" (which we added above)
		entity.addComponent(
			new shapez.ItemProcessorComponent({
				inputsPerCharge: 1,
				processorType: shapez.enumItemProcessorTypes.flipper,
			})
		);

		// Eject the result to the top
		entity.addComponent(
			new shapez.ItemEjectorComponent({
				slots: [{ pos: new shapez.Vector(0, 0), direction: shapez.enumDirection.top }],
			})
		);
	}
}

class Mod extends shapez.Mod {
	init() {
		// Register the new building
		this.modInterface.registerNewBuilding({
			metaClass: MetaModFlipperBuilding,
			buildingIconBase64: RESOURCES["flipper.png"],
		});

		// Add it to the regular toolbar
		this.modInterface.addNewBuildingToToolbar({
			toolbar: "regular",
			location: "primary",
			metaClass: MetaModFlipperBuilding,
		});
	}
}

////////////////////////////////////////////////////////////////////////

import flipper from './sprites/flipper.png';

const RESOURCES = {
	'flipper.png': base64ToPng(flipper),
}

$shapez_registerMod(Mod, METADATA);