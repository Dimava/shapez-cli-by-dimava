import { base64ToPng } from "../types/dimavas-lib";
import { ModMetadata, ModBase } from "../types/shapez";

export const METADATA: ModMetadata = {
	website: "https://tobspr.io",
	author: "tobspr",
	name: "Mod Example: Patch Methods",
	version: "1",
	id: "patch-methods",
	description: "Shows how to patch existing methods to change the game by making the belts cost shapes",
	minimumGameVersion: ">=1.5.0",
};

export class Mod extends ModBase {
	init() {
		// Define our currency
		const CURRENCY = "CyCyCyCy:--------:CuCuCuCu";

		// Make sure the currency is always pinned
		this.modInterface.runAfterMethod(shapez.HUDPinnedShapes, "rerenderFull", function () {
			this.internalPinShape({
				key: CURRENCY,
				canUnpin: false,
				className: "currency",
			});
		});

		// Style it
		this.modInterface.registerCss(`
                #ingame_HUD_PinnedShapes .shape.currency::after {
                    content: " ";
                    position: absolute;
                    display: inline-block;
                    width: $scaled(8px);
                    height: $scaled(8px);
                    top: $scaled(4px);
                    left: $scaled(-7px);
                    background: url('${RESOURCES["currency.png"]}') center center / contain no-repeat;
                }

                .currencyIcon {
                    display: inline-block;
                    vertical-align: middle;
                    background: url('${RESOURCES["currency.png"]}') center center / contain no-repeat;
                }

                .currencyIcon.small {
                    width: $scaled(11px);
                    height: $scaled(11px);
                }
            `);

		// Make the player start with some currency
		this.modInterface.runAfterMethod(shapez.GameCore, "initNewGame", function () {
			this.root.hubGoals.storedShapes[CURRENCY] = 100;
		});

		// Make belts have a cost
		this.modInterface.replaceMethod(shapez.MetaBeltBuilding, "getAdditionalStatistics", function (
			$original,
			[root, variant]
		) {
			const oldStats = $original(root, variant);
			oldStats.push(["Cost", "1 x <span class='currencyIcon small'></span>"]);
			return oldStats;
		});

		// Only allow placing an entity when there is enough currency
		this.modInterface.replaceMethod(shapez.GameLogic, "checkCanPlaceEntity", function (
			$original,
			[entity, options]
		) {
			const storedCurrency = this.root.hubGoals.storedShapes[CURRENCY] || 0;
			return storedCurrency > 0 && $original(entity, options);
		});

		// Take shapes when placing a building
		this.modInterface.replaceMethod(shapez.GameLogic, "tryPlaceBuilding", function ($original, args) {
			const result = $original(...args);
			if (result && result.components.Belt) {
				this.root.hubGoals.storedShapes[CURRENCY]--;
			}
			return result;
		});
	}
}

$shapez_registerMod(Mod, METADATA);

import currencyPng from './resources/currency.png';

const RESOURCES = {
	"currency.png": base64ToPng(currencyPng),
};
