

import { Entity, enumBalancerVariants, enumDirection, enumItemProcessorTypes, formatItemsPerSecond, GameRoot, MetaBalancerBuilding, Mod, T, Vector } from '../shapez.js';
import { RESOURCES } from '../types/common.js';

const var22 = 'two-two-balancer';
const var31 = 'tri-splitter';
const var13 = 'tri-merger';

export class Balancer22 {
	static install(mod: Mod) {
		// @ts-ignore
		enumBalancerVariants[var22] = var22;

		mod.modInterface.addVariantToExistingBuilding(
			// @ts-ignore
			MetaBalancerBuilding,
			var22,
			{
				name: "2-2 balancer",
				description: "Smaller is better",

				tutorialImageBase64: RESOURCES.splitter1,
				regularSpriteBase64: RESOURCES.splitter1,
				blueprintSpriteBase64: RESOURCES.splitter1,

				dimensions: new Vector(1, 1),

				additionalStatistics(root) {
					const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.balancer);
					return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed)]];
				},

				isUnlocked(root) {
					return true;
				},
			}
		);
		mod.modInterface.addVariantToExistingBuilding(
			// @ts-ignore
			MetaBalancerBuilding,
			var31,
			{
				name: "3-1 splitter",
				description: "For when you want to have multiple lines",

				tutorialImageBase64: RESOURCES.splitter1,
				regularSpriteBase64: RESOURCES.splitter1,
				blueprintSpriteBase64: RESOURCES.splitter1,

				dimensions: new Vector(1, 1),

				additionalStatistics(root) {
					const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.balancer);
					return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed)]];
				},

				isUnlocked(root) {
					return true;
				},
			}
		);
		mod.modInterface.addVariantToExistingBuilding(
			// @ts-ignore
			MetaBalancerBuilding,
			var13,
			{
				name: "1-3 merger",
				description: "three becomes one",

				tutorialImageBase64: RESOURCES.splitter1,
				regularSpriteBase64: RESOURCES.splitter1,
				blueprintSpriteBase64: RESOURCES.splitter1,

				dimensions: new Vector(1, 1),

				additionalStatistics(root) {
					const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.balancer);
					return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed)]];
				},

				isUnlocked(root) {
					return true;
				},
			}
		);

		// Extend instance methods
		mod.modInterface.extendClass(MetaBalancerBuilding, ({ $old }) => ({
			updateVariants(entity: Entity, rotationVariant: any, variant: string) {
				if (variant === var22) {
					entity.components.ItemEjector.setSlots([
						{ pos: new Vector(0, 0), direction: enumDirection.top },
						{ pos: new Vector(0, 0), direction: enumDirection.right },
					]);
					entity.components.ItemAcceptor.setSlots([
						{ pos: new Vector(0, 0), direction: enumDirection.bottom },
						{ pos: new Vector(0, 0), direction: enumDirection.left },
					]);
				} else if (variant === var13) {
					entity.components.ItemEjector.setSlots([
						{ pos: new Vector(0, 0), direction: enumDirection.top },
					]);
					entity.components.ItemAcceptor.setSlots([
						{ pos: new Vector(0, 0), direction: enumDirection.bottom },
						{ pos: new Vector(0, 0), direction: enumDirection.left },
						{ pos: new Vector(0, 0), direction: enumDirection.right },
					]);
				} else if (variant === var31} {
					entity.components.ItemEjector.setSlots([
						{ pos: new Vector(0, 0), direction: enumDirection.top },
						{ pos: new Vector(0, 0), direction: enumDirection.left },
						{ pos: new Vector(0, 0), direction: enumDirection.right },
					]);
					entity.components.ItemAcceptor.setSlots([
						{ pos: new Vector(0, 0), direction: enumDirection.bottom },
					]);
				} else {
					$old.updateVariants.call(this, entity, rotationVariant, variant);
				}
			},
			getAvailableVariants(root: GameRoot) {
				return [defaultBuildingVariant, var22, var13, var31];
			},
		}));
	}
}
