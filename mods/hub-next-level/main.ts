import { Base64PngString, base64ToPng, ModBase } from "../../types/dimavas-lib";
import { Entity, GameRoot, gMetaBuildingRegistry, MetaConstantSignalBuilding, MetaHubBuilding, ModMetadata, MOD_SIGNALS, Vector } from "../../types/shapez";

const METADATA: ModMetadata = {
	author: 'Dimava',
	description: '',
	id: 'hub-next-level',
	name: 'Hub Next Level',
	version: '1.0.0',
	website: '',
}

class Mod extends ModBase {
	init() {
		this.use(HubNext);
	}
}


class HubNext extends MetaConstantSignalBuilding {
	static variant = 'hub-next-level';
	updateVariants(entity: Entity, rotationVariant: number, variant: string): void {

	}
	static install(mod: ModBase) {
		mod.extendSuperclass(this);

		mod.modInterface.addVariantToExistingBuilding(
			MetaConstantSignalBuilding,
			HubNext.variant,
			{
				name: 'HubNextLevel',
				description: 'test_desc',

				tutorialImageBase64: RESOURCES.fn_call,
				regularSpriteBase64: RESOURCES.fn_call,
				blueprintSpriteBase64: RESOURCES.fn_call,

				dimensions: new Vector(4, 1),
				isUnlocked(root: GameRoot) {
					return true as any;
				},
			}
		);

		MOD_SIGNALS.gameStarted.add((root: GameRoot) => {
			root.map.getTileContent(new Vector(1, 1), '');
			debugger;

			const hub = gMetaBuildingRegistry.findByClass(MetaConstantSignalBuilding).createEntity({
				root: root,
				origin: new Vector(-10, -10),
				rotation: 0,
				originalRotation: 0,
				rotationVariant: 0,
				variant: HubNext.variant,
			});
			root.map.placeStaticEntity(hub);
			root.entityMgr.registerEntity(hub);

		});
	}
}


Mod.register(METADATA);


import fn_process from '../function-building/sprites/virtual-function-process.png'

const RESOURCES: Record<string, Base64PngString> = {
	fn_process: base64ToPng(fn_process),
}