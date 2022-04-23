
import { MetaBeltBuilding } from "../types/shapez";
import { ModMetadata, ModBase } from "../types/shapez";

const METADATA: ModMetadata = {
	website: "https://tobspr.io",
	author: "tobspr",
	name: "Mod Example: Class Extensions",
	version: "1",
	id: "class-extensions",
	description: "Shows how to extend builtin classes",
	minimumGameVersion: ">=1.5.0",
};

const BeltExtension = ({ $old }: { $old: MetaBeltBuilding }) =>
	// this example uses $old, otherwise just pass the subclass
	class BeltExtMetaBeltBuildingEx extends MetaBeltBuilding {
		getShowWiresLayerPreview() {
			// Access the old method
			return !$old.getShowWiresLayerPreview();
		}
		getIsReplaceable(variant: string, rotationVariant: number): boolean {
			// just use super
			return super.getIsReplaceable(variant, rotationVariant);
		}
		getIsRemoveable() {
			return false;
		}
	};

class Mod extends ModBase {
	init() {
		this.extendSuperclass(BeltExtension);
	}
}
$shapez_registerMod(Mod, METADATA);
