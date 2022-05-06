import { SzColorItem } from "../shapest/color.js";
import { SzShapeItem } from "../shapest/item.js";
import { BeltUnderlaysComponent, ColorItem, defaultBuildingVariant, Entity, enumDirection, enumPainterVariants, ItemProcessorSystem, MetaPainterBuilding, Mod, MOD_ITEM_PROCESSOR_HANDLERS, ProcessorImplementationPayload, ShapeItem, Vector } from "../shapez.js";

export class PainterOverride extends MetaPainterBuilding {

	static processPayload(this: ItemProcessorSystem, payload: ProcessorImplementationPayload) {
		const shapeItem = payload.items.get(0) as ShapeItem | SzShapeItem | ColorItem | SzColorItem;
		const colorItem = payload.items.get(1) as ColorItem | SzColorItem;
		function push(v: typeof payload.outItems[0]) { payload.outItems.push(v); }
		const paint = (si: ShapeItem | SzShapeItem, color: string) =>
			this.root.shapeDefinitionMgr.getShapeItemFromDefinition(
				this.root.shapeDefinitionMgr.shapeActionPaintWith(si.definition, color));


		if (shapeItem instanceof ShapeItem || shapeItem instanceof SzShapeItem) {
			if (colorItem instanceof ColorItem) {
				push({ item: paint(shapeItem, colorItem.color), requiredSlot: 0 });
			} else {
				let [color, outColor] = colorItem.splitColor();
				push({ item: paint(shapeItem, color), requiredSlot: 0 });
				if (outColor)
					push({ item: outColor, requiredSlot: 1, doNotTrack: true });
			}
		} else if (shapeItem instanceof SzColorItem) {
			if (colorItem instanceof SzColorItem) {
				let [c1, c2] = shapeItem.fillFromColor(colorItem);
				push({ item: c1, requiredSlot: 0 });
				if (c2) push({ item: c2, requiredSlot: 1, doNotTrack: true });
			}
		}
	}

	static processPayload2(this: ItemProcessorSystem, payload: ProcessorImplementationPayload) {
		function push(v: typeof payload.outItems[0]) { payload.outItems.push(v); }
		const paint = (si: ShapeItem | SzShapeItem, color: string | null) =>
			!color ? si :
				this.root.shapeDefinitionMgr.getShapeItemFromDefinition(
					this.root.shapeDefinitionMgr.shapeActionPaintWith(si.definition, color));

		const shapeItem1 = payload.items.get(0) as ShapeItem | SzShapeItem;
		const shapeItem2 = payload.items.get(1) as ShapeItem | SzShapeItem;
		const colorItem = payload.items.get(2) as ColorItem | SzColorItem;

		if (colorItem instanceof ColorItem) {
			push({ item: paint(shapeItem1, colorItem.color) });
			push({ item: shapeItem1 });
			return;
		}
		let [c1, c2] = colorItem.splitIntoColors();
		push({ item: paint(shapeItem1, c1) });
		push({ item: paint(shapeItem2, c2) });
	}


	static install(mod: Mod) {

		MOD_ITEM_PROCESSOR_HANDLERS.painter = this.processPayload;
		MOD_ITEM_PROCESSOR_HANDLERS.painterDouble = this.processPayload2;


		mod.modInterface.extendClass(MetaPainterBuilding, ({ $old }) => ({
			updateVariants(entity: Entity, rotationVariant: any, variant: string) {
				$old.updateVariants.call(this, entity, rotationVariant, variant);
				if (!entity.components.BeltUnderlays) {
					entity.addComponent(new BeltUnderlaysComponent({ underlays: [] }));
				}
				entity.components.BeltUnderlays.underlays = [];
				if (variant == defaultBuildingVariant || variant == enumPainterVariants.mirrored) {
					let x = variant == defaultBuildingVariant;
					let { top, bottom, left, right } = enumDirection;
					entity.components.ItemEjector.setSlots([
						{ pos: new Vector(1, 0), direction: right },
						{ pos: new Vector(1, 0), direction: x ? bottom : top },
					]);
					entity.components.ItemAcceptor.setSlots([
						{ pos: new Vector(0, 0), direction: left },
						{ pos: new Vector(1, 0), direction: x ? top : bottom, filter: "color" },
					]);
					entity.components.BeltUnderlays.underlays = [
						{ pos: new Vector(1, 0), direction: x ? bottom : top },
					];
				}
			},
		}));

		// mod.modInterface.addVariantToExistingBuilding
	}
}