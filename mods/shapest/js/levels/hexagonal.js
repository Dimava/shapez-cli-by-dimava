import { RandomNumberGenerator } from "shapez/core/rng";
import { findNiceIntegerValue } from "shapez/core/utils";
import { GameMode } from "shapez/game/game_mode";
import { enumHubGoalRewards } from "shapez/game/tutorial_goals";
import { SzDefinition } from "../shapest/definition";
import { SzShapeItem } from "../shapest/item";
export const namedShapes = {
    circle: "6CuCuCuCuCuCu",
    circleHalf: "6------CuCuCu",
    rect: "6RuRuRuRuRuRu",
    rectHalf: "6RuRuRu------",
    circleHalfRotated: "6Cu------CuCu",
    circleQuad: "6CuCu--------",
    circleRed: "6CrCrCrCrCrCr",
    rectHalfBlue: "6RbRbRb------",
    circlePurple: "6CpCpCpCpCpCp",
    starCyan: "6ScScScScScSc",
    fish: "6CgCgScScCgCg",
    blueprint: "6CbCbCbCbCbRb:6CwCwCwCwCwCw",
    rectCircle: "6RpRpRpRpRpRp:6CwCwCwCwCwCw",
    watermelon: "6--CgCg------:6--CrCr------",
    starCircle: "6SrSrSrSrSrSr:6CyCyCyCyCyCy",
    starCircleStar: "6SrSrSrSrSrSr:6CyCyCyCyCyCy:6SwSwSwSwSwSw",
    fan: "6CbCbRbRbCbCb:6CwCwCwCwCwCw:6WbWbWbWbWbWb",
    monster: "6Sg--------Sg:6CgCgCgCgCgCg:6--CyCyCyCy--",
    bouquet: "6CpCpRpCpCp--:6SwSwSwSwSwSw",
    logo: "6RwCuCw--CwCu:6------Ru----",
    target: "6CrCwCrCwCrCw:6CwCrCwCrCwCr:6CrCwCrCwCrCw:6CwCrCwCrCwCr",
    speedometer: "6CgCb----CrCy:6CwCw----CwCw:6Sc----------:6CyCy----CyCy",
    spikedBall: "6CcSyCcSyCcSy:6SyCcSyCcSyCc:6CcSyCcSyCcSy:6SyCcSyCcSyCc",
    compass: "6CcRcRcCcRcRc:6RwCwCwRwCwCw:6----Sr----Sb:6CyCyCyCyCyCy",
    plant: "6Rg--Rg--Rg--:6CwRwCwRwCwRw:6--Rg--Rg--Rg",
    rocket: "6CbCuCbCuCbCu:6Sr----------:6--CrCrSrCrCr:6CwCwCwCwCwCw",
    mill: "6CwCwCwCwCwCw:6WbWbWbWbWbWb",
    star: "6SuSuSuSuSuSu",
    circleStar: "6CwCrCwCrCwCr:6SgSgSgSgSgSg",
    clown: "6WrRgWrRgWrRg:6CwCrCwCrCwCr:6SgSgSgSgSgSg",
    windmillRed: "6WrWrWrWrWrWr",
    fanTriple: "6WpWpWpWpWpWp:6CwCwCwCwCwCw:6WpWpWpWpWpWp",
    fanQuadruple: "6WpWpWpWpWpWp:6CwCwCwCwCwCw:6WpWpWpWpWpWp:6CwCwCwCwCwCw",
    bird: "6Sr----------:6--CgCg--CgCg:6Sb----Sb----:6--CwCw--CwCw",
    scissors: "6Sr----------:6--CgCgCgCgCg:6----Sb------:6CwCw--CwCwCw",
};
// Tiers need % of the previous tier as requirement too
const tierGrowth = 2.5;
/**
 * Generates all upgrades
 * @returns {Object<string, import("../game_mode").UpgradeTiers>} */
function generateUpgrades(limitedVersion = false) {
    //                         1 2  3  4  6  8
    const fixedImprovementsT1 = [1, 1, 1, 2, 2];
    //                         6 7  8  9  10 12
    const fixedImprovementsT2 = [1, 1, 1, 1, 2];
    const maxSpeed = 30;
    const fixedImprovements = fixedImprovementsT1.concat(fixedImprovementsT2);
    while (fixedImprovements.reduce((v, e) => v + 1, 1) < maxSpeed) {
        fixedImprovements.push(0.5);
    }
    const numEndgameUpgrades = limitedVersion ? 0 : 1000 - fixedImprovements.length - 1;
    const upgrades = {
        belt: [
            { required: [{ shape: namedShapes.circle, amount: 30 }], },
            { required: [{ shape: namedShapes.circleHalfRotated, amount: 500 }], },
            { required: [{ shape: namedShapes.circlePurple, amount: 1000 }], },
            { required: [{ shape: namedShapes.starCircle, amount: 6000 }], },
            { required: [{ shape: namedShapes.starCircleStar, amount: 25000 }], },
        ],
        miner: [
            { required: [{ shape: namedShapes.rect, amount: 300 }], },
            { required: [{ shape: namedShapes.circleQuad, amount: 800 }], },
            { required: [{ shape: namedShapes.starCyan, amount: 3500 }], },
            { required: [{ shape: namedShapes.mill, amount: 23000 }], },
            { required: [{ shape: namedShapes.fan, amount: 50000 }], },
        ],
        processors: [
            { required: [{ shape: namedShapes.star, amount: 500 }], },
            { required: [{ shape: namedShapes.rectHalf, amount: 600 }], },
            { required: [{ shape: namedShapes.fish, amount: 3500 }], },
            { required: [{ shape: namedShapes.circleStar, amount: 25000 }], },
            { required: [{ shape: namedShapes.clown, amount: 50000 }], },
        ],
        painting: [
            { required: [{ shape: namedShapes.rectHalfBlue, amount: 600 }], },
            { required: [{ shape: namedShapes.windmillRed, amount: 3800 }], },
            { required: [{ shape: namedShapes.rectCircle, amount: 6500 }], },
            { required: [{ shape: namedShapes.fanTriple, amount: 25000 }], },
            { required: [{ shape: namedShapes.fanQuadruple, amount: 50000 }], },
        ],
    };
    // Automatically generate tier levels
    for (const upgradeId in upgrades) {
        const upgradeTiers = upgrades[upgradeId];
        let currentTierRequirements = [];
        for (let i = 0; i < upgradeTiers.length; ++i) {
            const tierHandle = upgradeTiers[i];
            tierHandle.improvement = fixedImprovements[i];
            const originalRequired = tierHandle.required.slice();
            for (let k = currentTierRequirements.length - 1; k >= 0; --k) {
                const oldTierRequirement = currentTierRequirements[k];
                if (!tierHandle.excludePrevious) {
                    tierHandle.required.unshift({
                        shape: oldTierRequirement.shape,
                        amount: oldTierRequirement.amount,
                    });
                }
            }
            currentTierRequirements.push(...originalRequired.map(req => ({
                amount: req.amount,
                shape: req.shape,
            })));
            currentTierRequirements.forEach(tier => {
                tier.amount = findNiceIntegerValue(tier.amount * tierGrowth);
            });
        }
    }
    upgrades.global = [];
    const globalShapes = [
        namedShapes.bouquet,
        namedShapes.logo,
        namedShapes.rocket,
        namedShapes.bird,
        namedShapes.scissors,
    ];
    for (let i = 0; i < 8; i++) {
        let upgrade = {
            required: [],
            improvement: 1 / 16,
        };
        for (let j = 0; j <= i && j < globalShapes.length; j++) {
            upgrade.required.push({
                shape: globalShapes[j],
                amount: 1000 * (5 + i) * (5 + j),
            });
        }
        upgrades.global.push(upgrade);
    }
    return upgrades;
}
/**
 * Generates the level definitions
 * @param {boolean} limitedVersion
 */
export function generateLevelDefinitions(limitedVersion = false) {
    const levelDefinitions = [
        // 1: Circle
        {
            shape: namedShapes.circle,
            required: 30,
            reward: enumHubGoalRewards.reward_cutter_and_trash,
        },
        // 2: Cutter
        {
            shape: namedShapes.circleHalf,
            required: 40,
            reward: enumHubGoalRewards.no_reward,
        },
        // 3: Rectangle
        {
            shape: namedShapes.rect,
            required: 70,
            reward: enumHubGoalRewards.reward_balancer,
        },
        // 4
        {
            shape: namedShapes.rectHalf,
            required: 70,
            reward: enumHubGoalRewards.reward_rotater,
        },
        // 5: Rotater
        {
            shape: namedShapes.circleHalfRotated,
            required: 170,
            reward: enumHubGoalRewards.reward_tunnel,
        },
        // 6
        {
            shape: namedShapes.circleQuad,
            required: 270,
            reward: enumHubGoalRewards.reward_painter,
        },
        // 7: Painter
        {
            shape: namedShapes.circleRed,
            required: 300,
            reward: enumHubGoalRewards.reward_rotater_ccw,
        },
        // 8:
        {
            shape: namedShapes.rectHalfBlue,
            required: 480,
            reward: enumHubGoalRewards.reward_mixer,
        },
        // 9: Mixing (purple)
        {
            shape: namedShapes.circlePurple,
            required: 600,
            reward: enumHubGoalRewards.reward_merger,
        },
        // 10: STACKER: Star shape + cyan
        {
            shape: namedShapes.starCyan,
            required: 800,
            reward: enumHubGoalRewards.reward_stacker,
        },
        // 11: Chainable miner
        {
            shape: namedShapes.fish,
            required: 1000,
            reward: enumHubGoalRewards.reward_miner_chainable,
        },
        // 12: Blueprints
        {
            shape: namedShapes.blueprint,
            required: 1000,
            reward: enumHubGoalRewards.reward_blueprints,
        },
        // 13: Tunnel Tier 2
        {
            shape: namedShapes.rectCircle,
            required: 3800,
            reward: enumHubGoalRewards.reward_underground_belt_tier_2,
        },
        // 14: Belt reader
        {
            shape: namedShapes.watermelon,
            required: 8,
            reward: enumHubGoalRewards.reward_belt_reader,
            throughputOnly: true,
        },
        // 15: Storage
        {
            shape: namedShapes.starCircle,
            required: 10000,
            reward: enumHubGoalRewards.reward_storage,
        },
        // 16: Quad Cutter
        {
            shape: namedShapes.starCircleStar,
            required: 6000,
            reward: enumHubGoalRewards.reward_cutter_quad,
        },
        // 17: Double painter
        {
            shape: namedShapes.fan,
            required: 20000,
            reward: enumHubGoalRewards.reward_painter_double,
        },
        // 18: Rotater (180deg)
        {
            shape: namedShapes.monster,
            required: 20000,
            reward: enumHubGoalRewards.reward_rotater_180,
        },
        // 19: Compact splitter
        {
            shape: namedShapes.bouquet,
            required: 25000,
            reward: enumHubGoalRewards.reward_splitter,
        },
        // 20: WIRES
        {
            shape: namedShapes.logo,
            required: 25000,
            reward: enumHubGoalRewards.reward_wires_painter_and_levers,
        },
        // 21: Filter
        {
            shape: namedShapes.target,
            required: 25000,
            reward: enumHubGoalRewards.reward_filter,
        },
        // 22: Constant signal
        {
            shape: namedShapes.speedometer,
            required: 25000,
            reward: enumHubGoalRewards.reward_constant_signal,
        },
        // 23: Display
        {
            shape: namedShapes.spikedBall,
            required: 25000,
            reward: enumHubGoalRewards.reward_display,
        },
        // 24: Logic gates
        {
            shape: namedShapes.compass,
            required: 25000,
            reward: enumHubGoalRewards.reward_logic_gates,
        },
        // 25: Virtual Processing
        {
            shape: namedShapes.plant,
            required: 25000,
            reward: enumHubGoalRewards.reward_virtual_processing,
        },
        // 26: Freeplay
        {
            shape: namedShapes.rocket,
            required: 50000,
            reward: enumHubGoalRewards.reward_freeplay,
        },
    ];
    return levelDefinitions;
}
export const hexa_fullVersionUpgrades = generateUpgrades(false);
export const hexa_fullVersionLevels = generateLevelDefinitions(false);
export class HexagonalGameMode extends GameMode {
    adjustZone(w, h) {
        throw new Error("Method not implemented.");
    }
    constructor(root) {
        super(root);
    }
    getName() {
        return "Hexagonal";
    }
    getUpgrades() {
        return hexa_fullVersionUpgrades;
    }
    getIsFreeplayAvailable() {
        return true;
    }
    getBlueprintShapeKey() {
        return namedShapes.blueprint;
    }
    getLevelDefinitions() {
        return hexa_fullVersionLevels;
    }
    generateFreeplayLevel(level) {
        const rng = new RandomNumberGenerator(this.root.map.seed + "/" + level);
        let throughputOnly = level % 10 == 0;
        let required = !throughputOnly ? level * 5 : Math.min(320, level * 0.5);
        //Math.min(50, 80 + (level - 27) * 5);
        return {
            definition: computeFreeplayShape(level, rng),
            required,
            reward: enumHubGoalRewards.no_reward_freeplay,
            throughputOnly,
        };
    }
    static install(mod) {
        // Modify the goal of the first level to add our goal
        mod.signals.modifyLevelDefinitions.add((levels) => {
            Object.assign(levels, hexa_fullVersionLevels);
        });
        mod.signals.modifyUpgrades.add((upgrades) => {
            for (let k in upgrades) {
                upgrades[k] = hexa_fullVersionUpgrades[k];
            }
            // Object.assign(upgrades, hexa_fullVersionUpgrades);
            // Object.assign(globalThis.sz, {x: hexa_fullVersionUpgrades});
        });
    }
}
/**
 * @param {number} level
 * @param {RandomNumberGenerator} rng
*/
function computeFreeplayShape(level, rng) {
    let layerCount = 1;
    if (level >= 50)
        layerCount = 2;
    if (level >= 75)
        layerCount = 3;
    if (level >= 100)
        layerCount = 4;
    if (rng.next() < 0.2) {
        layerCount && layerCount--;
        if (rng.next() < 0.25) {
            layerCount && layerCount--;
        }
    }
    const allowGray = level > 35;
    const allowHoles = level > 60;
    const allowUnstackable = false;
    const allowText = false;
    const allowNumbers = false;
    const allowNumbersInText = false;
    const allowColoredText = false;
    const allowMultiColoredText = false;
    const allow4Shapes = false;
    const allowEmoji = false;
    let choice = (s) => rng.choice(s.split(''));
    const shapes = "RCSW";
    const symmetries = [
        "012210",
        "012321",
        "012012",
        "010101", // third-rotate
    ];
    const colorWheel = "rygcbp".repeat(3);
    const extraColors = level < 50 ? "w" : "wu";
    const colorWheelGroups = [
        "a012",
        "a024",
        "ab03",
        "0134", // opposite pairs
    ];
    const symmetryOffset = +choice('012345');
    const cwOffset = +choice('012345');
    const symmetry = rng.choice(symmetries).repeat(3).slice(symmetryOffset, symmetryOffset + 6);
    const colors = rng.choice(colorWheelGroups)
        .replace(/\d/g, n => colorWheel[+n + cwOffset])
        .replace(/[ab]/g, () => choice(extraColors));
    /** @type {ShapestLayer[]} */
    let layers = [];
    for (let layerIndex = 0; layerIndex <= layerCount; layerIndex++) {
        const quads = Array(6).fill('').map(() => choice(shapes) + choice(colors));
        if (allowHoles) {
            quads[+choice('012345')] = '--';
            if (allowUnstackable) {
                quads[+choice('2345')] = '--';
            }
        }
        // const layer = new Shape6Layer('6' + symmetry.replace(/\d/g, n => quads[+n]), layerIndex);
        // if (!allowUnstackable && layers.length && layer.can_fall_through(layers[layers.length - 1])) {
        // 	layerIndex--;
        // } else {
        // 	layers.push(layer);
        // }
        layers.push('6' + symmetry.replace(/\d/g, n => quads[+n]));
    }
    return new SzShapeItem(SzDefinition.fromShortKey(layers.join(':')));
}
// Object.
// Object.getOwnPropertyDescriptors(HexagonalGameMode.prototype).map(e => {
// 	Object.defineProperty(RegularGameMode, e.)
// })
// Object.setPrototypeOf(HexagonalGameMode.prototype, RegularGameMode.prototype)
// RegularGameMode.prototype =  HexagonalGameMode.prototype;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGV4YWdvbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbGV2ZWxzL2hleGFnb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUk5QyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDMUIsTUFBTSxFQUFFLGVBQWU7SUFDdkIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsSUFBSSxFQUFFLGVBQWU7SUFDckIsUUFBUSxFQUFFLGVBQWU7SUFDekIsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixTQUFTLEVBQUUsZUFBZTtJQUMxQixZQUFZLEVBQUUsZUFBZTtJQUM3QixZQUFZLEVBQUUsZUFBZTtJQUM3QixRQUFRLEVBQUUsZUFBZTtJQUN6QixJQUFJLEVBQUUsZUFBZTtJQUNyQixTQUFTLEVBQUUsNkJBQTZCO0lBQ3hDLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsVUFBVSxFQUFFLDZCQUE2QjtJQUN6QyxVQUFVLEVBQUUsNkJBQTZCO0lBQ3pDLGNBQWMsRUFBRSwyQ0FBMkM7SUFDM0QsR0FBRyxFQUFFLDJDQUEyQztJQUNoRCxPQUFPLEVBQUUsMkNBQTJDO0lBQ3BELE9BQU8sRUFBRSw2QkFBNkI7SUFDdEMsSUFBSSxFQUFFLDZCQUE2QjtJQUNuQyxNQUFNLEVBQUUseURBQXlEO0lBQ2pFLFdBQVcsRUFBRSx5REFBeUQ7SUFD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RUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHO1lBQzNELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRztTQUMxRDtRQUNELFVBQVUsRUFBRTtZQUNYLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztZQUN6RCxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7WUFDN0QsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHO1lBQzFELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRztZQUNqRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUc7U0FDNUQ7UUFDRCxRQUFRLEVBQUU7WUFDVCxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7WUFDakUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHO1lBQ2pFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRztZQUNoRSxFQUFFLFFBQVEs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QUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLGdCQUFnQixFQUFFO2dCQUNyQixLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDOUI7U0FDRDtRQUNELDRGQUE0RjtRQUM1RixpR0FBaUc7UUFDakcsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsSUFBSTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0lBRUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFFRCxVQUFVO0FBRVYsMkVBQTJFO0FBQzNFLDhDQUE4QztBQUM5QyxLQUFLO0FBRUwsZ0ZBQWdGO0FBRWhGLDREQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbU51bWJlckdlbmVyYXRvciB9IGZyb20gXCJzaGFwZXovY29yZS9ybmdcIjtcclxuaW1wb3J0IHsgZmluZE5pY2VJbnRlZ2VyVmFsdWUgfSBmcm9tIFwic2hhcGV6L2NvcmUvdXRpbHNcIjtcclxuaW1wb3J0IHsgR2FtZU1vZGUgfSBmcm9tIFwic2hhcGV6L2dhbWUvZ2FtZV9tb2RlXCI7XHJcbmltcG9ydCB7IFJlZ3VsYXJHYW1lTW9kZSB9IGZyb20gXCJzaGFwZXovZ2FtZS9tb2Rlcy9yZWd1bGFyXCI7XHJcbmltcG9ydCB7IEdhbWVSb290IH0gZnJvbSBcInNoYXBlei9nYW1lL3Jvb3RcIjtcclxuaW1wb3J0IHsgZW51bUh1YkdvYWxSZXdhcmRzIH0gZnJvbSBcInNoYXBlei9nYW1lL3R1dG9yaWFsX2dvYWxzXCI7XHJcbmltcG9ydCB7IE1vZCB9IGZyb20gXCJzaGFwZXovbW9kcy9tb2RcIjtcclxuaW1wb3J0IHsgU3pEZWZpbml0aW9uIH0gZnJvbSBcIi4uL3NoYXBlc3QvZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBTelNoYXBlSXRlbSB9IGZyb20gXCIuLi9zaGFwZXN0L2l0ZW1cIjtcclxuaW1wb3J0IHsgU3pMYXllciB9IGZyb20gXCIuLi9zaGFwZXN0L2xheWVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG5hbWVkU2hhcGVzID0ge1xyXG5cdGNpcmNsZTogXCI2Q3VDdUN1Q3VDdUN1XCIsXHJcblx0Y2lyY2xlSGFsZjogXCI2LS0tLS0tQ3VDdUN1XCIsXHJcblx0cmVjdDogXCI2UnVSdVJ1UnVSdVJ1XCIsXHJcblx0cmVjdEhhbGY6IFwiNlJ1UnVSdS0tLS0tLVwiLFxyXG5cdGNpcmNsZUhhbGZSb3RhdGVkOiBcIjZDdS0tLS0tLUN1Q3VcIixcclxuXHRjaXJjbGVRdWFkOiBcIjZDdUN1LS0tLS0tLS1cIixcclxuXHRjaXJjbGVSZWQ6IFwiNkNyQ3JDckNyQ3JDclwiLFxyXG5cdHJlY3RIYWxmQmx1ZTogXCI2UmJSYlJiLS0tLS0tXCIsXHJcblx0Y2lyY2xlUHVycGxlOiBcIjZDcENwQ3BDcENwQ3BcIixcclxuXHRzdGFyQ3lhbjogXCI2U2NTY1NjU2NTY1NjXCIsXHJcblx0ZmlzaDogXCI2Q2dDZ1NjU2NDZ0NnXCIsXHJcblx0Ymx1ZXByaW50OiBcIjZDYkNiQ2JDYkNiUmI6NkN3Q3dDd0N3Q3dDd1wiLFxyXG5cdHJlY3RDaXJjbGU6IFwiNlJwUnBScFJwUnBScDo2Q3dDd0N3Q3dDd0N3XCIsXHJcblx0d2F0ZXJtZWxvbjogXCI2LS1DZ0NnLS0tLS0tOjYtLUNyQ3ItLS0tLS1cIixcclxuXHRzdGFyQ2lyY2xlOiBcIjZTclNyU3JTclNyU3I6NkN5Q3lDeUN5Q3lDeVwiLFxyXG5cdHN0YXJDaXJjbGVTdGFyOiBcIjZTclNyU3JTclNyU3I6NkN5Q3lDeUN5Q3lDeTo2U3dTd1N3U3dTd1N3XCIsXHJcblx0ZmFuOiBcIjZDYkNiUmJSYkNiQ2I6NkN3Q3dDd0N3Q3dDdzo2V2JXYldiV2JXYldiXCIsXHJcblx0bW9uc3RlcjogXCI2U2ctLS0tLS0tLVNnOjZDZ0NnQ2dDZ0NnQ2c6Ni0tQ3lDeUN5Q3ktLVwiLFxyXG5cdGJvdXF1ZXQ6IFwiNkNwQ3BScENwQ3AtLTo2U3dTd1N3U3dTd1N3XCIsXHJcblx0bG9nbzogXCI2UndDdUN3LS1Dd0N1OjYtLS0tLS1SdS0tLS1cIixcclxuXHR0YXJnZXQ6IFwiNkNyQ3dDckN3Q3JDdzo2Q3dDckN3Q3JDd0NyOjZDckN3Q3JDd0NyQ3c6NkN3Q3JDd0NyQ3dDclwiLFxyXG5cdHNwZWVkb21ldGVyOiBcIjZDZ0NiLS0tLUNyQ3k6NkN3Q3ctLS0tQ3dDdzo2U2MtLS0tLS0tLS0tOjZDeUN5LS0tLUN5Q3lcIixcclxuXHRzcGlrZWRCYWxsOiBcIjZDY1N5Q2NTeUNjU3k6NlN5Q2NTeUNjU3lDYzo2Q2NTeUNjU3lDY1N5OjZTeUNjU3lDY1N5Q2NcIixcclxuXHRjb21wYXNzOiBcIjZDY1JjUmNDY1JjUmM6NlJ3Q3dDd1J3Q3dDdzo2LS0tLVNyLS0tLVNiOjZDeUN5Q3lDeUN5Q3lcIixcclxuXHRwbGFudDogXCI2UmctLVJnLS1SZy0tOjZDd1J3Q3dSd0N3Unc6Ni0tUmctLVJnLS1SZ1wiLFxyXG5cdHJvY2tldDogXCI2Q2JDdUNiQ3VDYkN1OjZTci0tLS0tLS0tLS06Ni0tQ3JDclNyQ3JDcjo2Q3dDd0N3Q3dDd0N3XCIsXHJcblxyXG5cdG1pbGw6IFwiNkN3Q3dDd0N3Q3dDdzo2V2JXYldiV2JXYldiXCIsXHJcblx0c3RhcjogXCI2U3VTdVN1U3VTdVN1XCIsXHJcblx0Y2lyY2xlU3RhcjogXCI2Q3dDckN3Q3JDd0NyOjZTZ1NnU2dTZ1NnU2dcIixcclxuXHRjbG93bjogXCI2V3JSZ1dyUmdXclJnOjZDd0NyQ3dDckN3Q3I6NlNnU2dTZ1NnU2dTZ1wiLFxyXG5cdHdpbmRtaWxsUmVkOiBcIjZXcldyV3JXcldyV3JcIixcclxuXHRmYW5UcmlwbGU6IFwiNldwV3BXcFdwV3BXcDo2Q3dDd0N3Q3dDd0N3OjZXcFdwV3BXcFdwV3BcIixcclxuXHRmYW5RdWFkcnVwbGU6IFwiNldwV3BXcFdwV3BXcDo2Q3dDd0N3Q3dDd0N3OjZXcFdwV3BXcFdwV3A6NkN3Q3dDd0N3Q3dDd1wiLFxyXG5cclxuXHRiaXJkOiBcIjZTci0tLS0tLS0tLS06Ni0tQ2dDZy0tQ2dDZzo2U2ItLS0tU2ItLS0tOjYtLUN3Q3ctLUN3Q3dcIixcclxuXHRzY2lzc29yczogXCI2U3ItLS0tLS0tLS0tOjYtLUNnQ2dDZ0NnQ2c6Ni0tLS1TYi0tLS0tLTo2Q3dDdy0tQ3dDd0N3XCIsXHJcbn1cclxuXHJcbi8vIFRpZXJzIG5lZWQgJSBvZiB0aGUgcHJldmlvdXMgdGllciBhcyByZXF1aXJlbWVudCB0b29cclxuY29uc3QgdGllckdyb3d0aCA9IDIuNTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYWxsIHVwZ3JhZGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBpbXBvcnQoXCIuLi9nYW1lX21vZGVcIikuVXBncmFkZVRpZXJzPn0gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVVcGdyYWRlcyhsaW1pdGVkVmVyc2lvbiA9IGZhbHNlKSB7XHJcblx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgMSAyICAzICA0ICA2ICA4XHJcblx0Y29uc3QgZml4ZWRJbXByb3ZlbWVudHNUMSA9IFsxLCAxLCAxLCAyLCAyXTtcclxuXHQvLyAgICAgICAgICAgICAgICAgICAgICAgICA2IDcgIDggIDkgIDEwIDEyXHJcblx0Y29uc3QgZml4ZWRJbXByb3ZlbWVudHNUMiA9IFsxLCAxLCAxLCAxLCAyXTtcclxuXHRjb25zdCBtYXhTcGVlZCA9IDMwO1xyXG5cclxuXHRjb25zdCBmaXhlZEltcHJvdmVtZW50cyA9IGZpeGVkSW1wcm92ZW1lbnRzVDEuY29uY2F0KGZpeGVkSW1wcm92ZW1lbnRzVDIpO1xyXG5cclxuXHR3aGlsZSAoZml4ZWRJbXByb3ZlbWVudHMucmVkdWNlKCh2LCBlKSA9PiB2ICsgMSwgMSkgPCBtYXhTcGVlZCkge1xyXG5cdFx0Zml4ZWRJbXByb3ZlbWVudHMucHVzaCgwLjUpXHJcblx0fVxyXG5cclxuXHRjb25zdCBudW1FbmRnYW1lVXBncmFkZXMgPSBsaW1pdGVkVmVyc2lvbiA/IDAgOiAxMDAwIC0gZml4ZWRJbXByb3ZlbWVudHMubGVuZ3RoIC0gMTtcclxuXHJcblx0Y29uc3QgdXBncmFkZXM6IFJlY29yZDxzdHJpbmcsIHtcclxuXHRcdGltcHJvdmVtZW50PzogbnVtYmVyO1xyXG5cdFx0ZXhjbHVkZVByZXZpb3VzPzogYm9vbGVhbjtcclxuXHRcdHJlcXVpcmVkOiB7XHJcblx0XHRcdHNoYXBlOiBzdHJpbmc7XHJcblx0XHRcdGFtb3VudDogbnVtYmVyO1xyXG5cdFx0fVtdO1xyXG5cdH1bXT4gPSB7XHJcblx0XHRiZWx0OiBbXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGUsIGFtb3VudDogMzAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGVIYWxmUm90YXRlZCwgYW1vdW50OiA1MDAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGVQdXJwbGUsIGFtb3VudDogMTAwMCB9XSwgfSxcclxuXHRcdFx0eyByZXF1aXJlZDogW3sgc2hhcGU6IG5hbWVkU2hhcGVzLnN0YXJDaXJjbGUsIGFtb3VudDogNjAwMCB9XSwgfSxcclxuXHRcdFx0eyByZXF1aXJlZDogW3sgc2hhcGU6IG5hbWVkU2hhcGVzLnN0YXJDaXJjbGVTdGFyLCBhbW91bnQ6IDI1MDAwIH1dLCB9LFxyXG5cdFx0XSxcclxuXHRcdG1pbmVyOiBbXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5yZWN0LCBhbW91bnQ6IDMwMCB9XSwgfSxcclxuXHRcdFx0eyByZXF1aXJlZDogW3sgc2hhcGU6IG5hbWVkU2hhcGVzLmNpcmNsZVF1YWQsIGFtb3VudDogODAwIH1dLCB9LFxyXG5cdFx0XHR7IHJlcXVpcmVkOiBbeyBzaGFwZTogbmFtZWRTaGFwZXMuc3RhckN5YW4sIGFtb3VudDogMzUwMCB9XSwgfSxcclxuXHRcdFx0eyByZXF1aXJlZDogW3sgc2hhcGU6IG5hbWVkU2hhcGVzLm1pbGwsIGFtb3VudDogMjMwMDAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5mYW4sIGFtb3VudDogNTAwMDAgfV0sIH0sXHJcblx0XHRdLFxyXG5cdFx0cHJvY2Vzc29yczogW1xyXG5cdFx0XHR7IHJlcXVpcmVkOiBbeyBzaGFwZTogbmFtZWRTaGFwZXMuc3RhciwgYW1vdW50OiA1MDAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5yZWN0SGFsZiwgYW1vdW50OiA2MDAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5maXNoLCBhbW91bnQ6IDM1MDAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGVTdGFyLCBhbW91bnQ6IDI1MDAwIH1dLCB9LFxyXG5cdFx0XHR7IHJlcXVpcmVkOiBbeyBzaGFwZTogbmFtZWRTaGFwZXMuY2xvd24sIGFtb3VudDogNTAwMDAgfV0sIH0sXHJcblx0XHRdLFxyXG5cdFx0cGFpbnRpbmc6IFtcclxuXHRcdFx0eyByZXF1aXJlZDogW3sgc2hhcGU6IG5hbWVkU2hhcGVzLnJlY3RIYWxmQmx1ZSwgYW1vdW50OiA2MDAgfV0sIH0sXHJcblx0XHRcdHsgcmVxdWlyZWQ6IFt7IHNoYXBlOiBuYW1lZFNoYXBlcy53aW5kbWlsbFJlZCwgYW1vdW50OiAzODAwIH1dLCB9LFxyXG5cdFx0XHR7IHJlcXVpcmVkOiBbeyBzaGFwZTogbmFtZWRTaGFwZXMucmVjdENpcmNsZSwgYW1vdW50OiA2NTAwIH1dLCB9LFxyXG5cdFx0XHR7IHJlcXVpcmVkOiBbeyBzaGFwZTogbmFtZWRTaGFwZXMuZmFuVHJpcGxlLCBhbW91bnQ6IDI1MDAwIH1dLCB9LFxyXG5cdFx0XHR7IHJlcXVpcmVkOiBbeyBzaGFwZTogbmFtZWRTaGFwZXMuZmFuUXVhZHJ1cGxlLCBhbW91bnQ6IDUwMDAwIH1dLCB9LFxyXG5cdFx0XSxcclxuXHR9O1xyXG5cclxuXHQvLyBBdXRvbWF0aWNhbGx5IGdlbmVyYXRlIHRpZXIgbGV2ZWxzXHJcblx0Zm9yIChjb25zdCB1cGdyYWRlSWQgaW4gdXBncmFkZXMpIHtcclxuXHRcdGNvbnN0IHVwZ3JhZGVUaWVycyA9IHVwZ3JhZGVzW3VwZ3JhZGVJZF07XHJcblxyXG5cdFx0bGV0IGN1cnJlbnRUaWVyUmVxdWlyZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHVwZ3JhZGVUaWVycy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRjb25zdCB0aWVySGFuZGxlID0gdXBncmFkZVRpZXJzW2ldO1xyXG5cdFx0XHR0aWVySGFuZGxlLmltcHJvdmVtZW50ID0gZml4ZWRJbXByb3ZlbWVudHNbaV07XHJcblx0XHRcdGNvbnN0IG9yaWdpbmFsUmVxdWlyZWQgPSB0aWVySGFuZGxlLnJlcXVpcmVkLnNsaWNlKCk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBrID0gY3VycmVudFRpZXJSZXF1aXJlbWVudHMubGVuZ3RoIC0gMTsgayA+PSAwOyAtLWspIHtcclxuXHRcdFx0XHRjb25zdCBvbGRUaWVyUmVxdWlyZW1lbnQgPSBjdXJyZW50VGllclJlcXVpcmVtZW50c1trXTtcclxuXHRcdFx0XHRpZiAoIXRpZXJIYW5kbGUuZXhjbHVkZVByZXZpb3VzKSB7XHJcblx0XHRcdFx0XHR0aWVySGFuZGxlLnJlcXVpcmVkLnVuc2hpZnQoe1xyXG5cdFx0XHRcdFx0XHRzaGFwZTogb2xkVGllclJlcXVpcmVtZW50LnNoYXBlLFxyXG5cdFx0XHRcdFx0XHRhbW91bnQ6IG9sZFRpZXJSZXF1aXJlbWVudC5hbW91bnQsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y3VycmVudFRpZXJSZXF1aXJlbWVudHMucHVzaChcclxuXHRcdFx0XHQuLi5vcmlnaW5hbFJlcXVpcmVkLm1hcChyZXEgPT4gKHtcclxuXHRcdFx0XHRcdGFtb3VudDogcmVxLmFtb3VudCxcclxuXHRcdFx0XHRcdHNoYXBlOiByZXEuc2hhcGUsXHJcblx0XHRcdFx0fSkpXHJcblx0XHRcdCk7XHJcblx0XHRcdGN1cnJlbnRUaWVyUmVxdWlyZW1lbnRzLmZvckVhY2godGllciA9PiB7XHJcblx0XHRcdFx0dGllci5hbW91bnQgPSBmaW5kTmljZUludGVnZXJWYWx1ZSh0aWVyLmFtb3VudCAqIHRpZXJHcm93dGgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZ3JhZGVzLmdsb2JhbCA9IFtdO1xyXG5cdGNvbnN0IGdsb2JhbFNoYXBlcyA9IFtcclxuXHRcdG5hbWVkU2hhcGVzLmJvdXF1ZXQsXHJcblx0XHRuYW1lZFNoYXBlcy5sb2dvLFxyXG5cdFx0bmFtZWRTaGFwZXMucm9ja2V0LFxyXG5cdFx0bmFtZWRTaGFwZXMuYmlyZCxcclxuXHRcdG5hbWVkU2hhcGVzLnNjaXNzb3JzLFxyXG5cdF07XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHRcdGxldCB1cGdyYWRlOiB0eXBlb2YgdXBncmFkZXMuZ2xvYmFsWzBdID0ge1xyXG5cdFx0XHRyZXF1aXJlZDogW10sXHJcblx0XHRcdGltcHJvdmVtZW50OiAxIC8gMTYsXHJcblx0XHR9O1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPD0gaSAmJiBqIDwgZ2xvYmFsU2hhcGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdHVwZ3JhZGUucmVxdWlyZWQucHVzaCh7XHJcblx0XHRcdFx0c2hhcGU6IGdsb2JhbFNoYXBlc1tqXSxcclxuXHRcdFx0XHRhbW91bnQ6IDEwMDAgKiAoNSArIGkpICogKDUgKyBqKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHR1cGdyYWRlcy5nbG9iYWwucHVzaCh1cGdyYWRlKTtcclxuXHR9XHJcblx0cmV0dXJuIHVwZ3JhZGVzO1xyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIHRoZSBsZXZlbCBkZWZpbml0aW9uc1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGxpbWl0ZWRWZXJzaW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbERlZmluaXRpb25zKGxpbWl0ZWRWZXJzaW9uID0gZmFsc2UpIHtcclxuXHRjb25zdCBsZXZlbERlZmluaXRpb25zID0gW1xyXG5cdFx0Ly8gMTogQ2lyY2xlXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGUsIC8vIGJlbHRzIHQxXHJcblx0XHRcdHJlcXVpcmVkOiAzMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX2N1dHRlcl9hbmRfdHJhc2gsXHJcblx0XHR9LFxyXG5cdFx0Ly8gMjogQ3V0dGVyXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGVIYWxmLCAvL1xyXG5cdFx0XHRyZXF1aXJlZDogNDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLm5vX3Jld2FyZCxcclxuXHRcdH0sXHJcblx0XHQvLyAzOiBSZWN0YW5nbGVcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLnJlY3QsIC8vIG1pbmVycyB0MVxyXG5cdFx0XHRyZXF1aXJlZDogNzAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9iYWxhbmNlcixcclxuXHRcdH0sXHJcblx0XHQvLyA0XHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5yZWN0SGFsZiwgLy8gcHJvY2Vzc29ycyB0MlxyXG5cdFx0XHRyZXF1aXJlZDogNzAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9yb3RhdGVyLFxyXG5cdFx0fSxcclxuXHRcdC8vIDU6IFJvdGF0ZXJcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLmNpcmNsZUhhbGZSb3RhdGVkLCAvLyBiZWx0cyB0MlxyXG5cdFx0XHRyZXF1aXJlZDogMTcwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfdHVubmVsLFxyXG5cdFx0fSxcclxuXHRcdC8vIDZcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLmNpcmNsZVF1YWQsIC8vIG1pbmVycyB0MlxyXG5cdFx0XHRyZXF1aXJlZDogMjcwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfcGFpbnRlcixcclxuXHRcdH0sXHJcblx0XHQvLyA3OiBQYWludGVyXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGVSZWQsIC8vIHVudXNlZFxyXG5cdFx0XHRyZXF1aXJlZDogMzAwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfcm90YXRlcl9jY3csXHJcblx0XHR9LFxyXG5cdFx0Ly8gODpcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLnJlY3RIYWxmQmx1ZSwgLy8gcGFpbnRlciB0MlxyXG5cdFx0XHRyZXF1aXJlZDogNDgwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfbWl4ZXIsXHJcblx0XHR9LFxyXG5cdFx0Ly8gOTogTWl4aW5nIChwdXJwbGUpXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5jaXJjbGVQdXJwbGUsIC8vIGJlbHRzIHQzXHJcblx0XHRcdHJlcXVpcmVkOiA2MDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9tZXJnZXIsXHJcblx0XHR9LFxyXG5cdFx0Ly8gMTA6IFNUQUNLRVI6IFN0YXIgc2hhcGUgKyBjeWFuXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5zdGFyQ3lhbiwgLy8gbWluZXJzIHQzXHJcblx0XHRcdHJlcXVpcmVkOiA4MDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9zdGFja2VyLFxyXG5cdFx0fSxcclxuXHRcdC8vIDExOiBDaGFpbmFibGUgbWluZXJcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLmZpc2gsIC8vIHByb2Nlc3NvcnMgdDNcclxuXHRcdFx0cmVxdWlyZWQ6IDEwMDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9taW5lcl9jaGFpbmFibGUsXHJcblx0XHR9LFxyXG5cdFx0Ly8gMTI6IEJsdWVwcmludHNcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLmJsdWVwcmludCxcclxuXHRcdFx0cmVxdWlyZWQ6IDEwMDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9ibHVlcHJpbnRzLFxyXG5cdFx0fSxcclxuXHRcdC8vIDEzOiBUdW5uZWwgVGllciAyXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5yZWN0Q2lyY2xlLCAvLyBwYWludGluZyB0M1xyXG5cdFx0XHRyZXF1aXJlZDogMzgwMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX3VuZGVyZ3JvdW5kX2JlbHRfdGllcl8yLFxyXG5cdFx0fSxcclxuXHRcdC8vIDE0OiBCZWx0IHJlYWRlclxyXG5cdFx0e1xyXG5cdFx0XHRzaGFwZTogbmFtZWRTaGFwZXMud2F0ZXJtZWxvbiwgLy8gdW51c2VkXHJcblx0XHRcdHJlcXVpcmVkOiA4LCAvLyBQZXIgc2Vjb25kIVxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfYmVsdF9yZWFkZXIsXHJcblx0XHRcdHRocm91Z2hwdXRPbmx5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdC8vIDE1OiBTdG9yYWdlXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5zdGFyQ2lyY2xlLCAvLyB1bnVzZWRcclxuXHRcdFx0cmVxdWlyZWQ6IDEwMDAwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfc3RvcmFnZSxcclxuXHRcdH0sXHJcblx0XHQvLyAxNjogUXVhZCBDdXR0ZXJcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLnN0YXJDaXJjbGVTdGFyLCAvLyBiZWx0cyB0NCAodHdvIHZhcmlhbnRzKVxyXG5cdFx0XHRyZXF1aXJlZDogNjAwMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX2N1dHRlcl9xdWFkLFxyXG5cdFx0fSxcclxuXHRcdC8vIDE3OiBEb3VibGUgcGFpbnRlclxyXG5cdFx0e1xyXG5cdFx0XHRzaGFwZTogbmFtZWRTaGFwZXMuZmFuLCAvLyBtaW5lciB0NCAodHdvIHZhcmlhbnRzKVxyXG5cdFx0XHRyZXF1aXJlZDogMjAwMDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9wYWludGVyX2RvdWJsZSxcclxuXHRcdH0sXHJcblx0XHQvLyAxODogUm90YXRlciAoMTgwZGVnKVxyXG5cdFx0e1xyXG5cdFx0XHRzaGFwZTogbmFtZWRTaGFwZXMubW9uc3RlciwgLy8gdW51c2VkXHJcblx0XHRcdHJlcXVpcmVkOiAyMDAwMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX3JvdGF0ZXJfMTgwLFxyXG5cdFx0fSxcclxuXHRcdC8vIDE5OiBDb21wYWN0IHNwbGl0dGVyXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5ib3VxdWV0LFxyXG5cdFx0XHRyZXF1aXJlZDogMjUwMDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9zcGxpdHRlcixcclxuXHRcdH0sXHJcblx0XHQvLyAyMDogV0lSRVNcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLmxvZ28sXHJcblx0XHRcdHJlcXVpcmVkOiAyNTAwMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX3dpcmVzX3BhaW50ZXJfYW5kX2xldmVycyxcclxuXHRcdH0sXHJcblx0XHQvLyAyMTogRmlsdGVyXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy50YXJnZXQsXHJcblx0XHRcdHJlcXVpcmVkOiAyNTAwMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX2ZpbHRlcixcclxuXHRcdH0sXHJcblx0XHQvLyAyMjogQ29uc3RhbnQgc2lnbmFsXHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5zcGVlZG9tZXRlcixcclxuXHRcdFx0cmVxdWlyZWQ6IDI1MDAwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfY29uc3RhbnRfc2lnbmFsLFxyXG5cdFx0fSxcclxuXHRcdC8vIDIzOiBEaXNwbGF5XHJcblx0XHR7XHJcblx0XHRcdHNoYXBlOiBuYW1lZFNoYXBlcy5zcGlrZWRCYWxsLFxyXG5cdFx0XHRyZXF1aXJlZDogMjUwMDAsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9kaXNwbGF5LFxyXG5cdFx0fSxcclxuXHRcdC8vIDI0OiBMb2dpYyBnYXRlc1xyXG5cdFx0e1xyXG5cdFx0XHRzaGFwZTogbmFtZWRTaGFwZXMuY29tcGFzcyxcclxuXHRcdFx0cmVxdWlyZWQ6IDI1MDAwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfbG9naWNfZ2F0ZXMsXHJcblx0XHR9LFxyXG5cdFx0Ly8gMjU6IFZpcnR1YWwgUHJvY2Vzc2luZ1xyXG5cdFx0e1xyXG5cdFx0XHRzaGFwZTogbmFtZWRTaGFwZXMucGxhbnQsXHJcblx0XHRcdHJlcXVpcmVkOiAyNTAwMCxcclxuXHRcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX3ZpcnR1YWxfcHJvY2Vzc2luZyxcclxuXHRcdH0sXHJcblx0XHQvLyAyNjogRnJlZXBsYXlcclxuXHRcdHtcclxuXHRcdFx0c2hhcGU6IG5hbWVkU2hhcGVzLnJvY2tldCxcclxuXHRcdFx0cmVxdWlyZWQ6IDUwMDAwLFxyXG5cdFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfZnJlZXBsYXksXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdHJldHVybiBsZXZlbERlZmluaXRpb25zO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGV4YV9mdWxsVmVyc2lvblVwZ3JhZGVzID0gZ2VuZXJhdGVVcGdyYWRlcyhmYWxzZSk7XHJcblxyXG5leHBvcnQgY29uc3QgaGV4YV9mdWxsVmVyc2lvbkxldmVscyA9IGdlbmVyYXRlTGV2ZWxEZWZpbml0aW9ucyhmYWxzZSk7XHJcblxyXG5leHBvcnQgY2xhc3MgSGV4YWdvbmFsR2FtZU1vZGUgZXh0ZW5kcyBHYW1lTW9kZSB7XHJcblx0YWRqdXN0Wm9uZSh3PzogbnVtYmVyLCBoPzogbnVtYmVyKTogdm9pZCB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3Iocm9vdDogR2FtZVJvb3QpIHtcclxuXHRcdHN1cGVyKHJvb3QpO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiBcIkhleGFnb25hbFwiO1xyXG5cdH1cclxuXHJcblx0Z2V0VXBncmFkZXMoKSB7XHJcblx0XHRyZXR1cm4gaGV4YV9mdWxsVmVyc2lvblVwZ3JhZGVzO1xyXG5cdH1cclxuXHJcblx0Z2V0SXNGcmVlcGxheUF2YWlsYWJsZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0Qmx1ZXByaW50U2hhcGVLZXkoKSB7XHJcblx0XHRyZXR1cm4gbmFtZWRTaGFwZXMuYmx1ZXByaW50O1xyXG5cdH1cclxuXHJcblx0Z2V0TGV2ZWxEZWZpbml0aW9ucygpIHtcclxuXHRcdHJldHVybiBoZXhhX2Z1bGxWZXJzaW9uTGV2ZWxzO1xyXG5cdH1cclxuXHJcblx0Z2VuZXJhdGVGcmVlcGxheUxldmVsKGxldmVsOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IHJuZyA9IG5ldyBSYW5kb21OdW1iZXJHZW5lcmF0b3IodGhpcy5yb290Lm1hcC5zZWVkICsgXCIvXCIgKyBsZXZlbCk7XHJcblx0XHRsZXQgdGhyb3VnaHB1dE9ubHkgPSBsZXZlbCAlIDEwID09IDA7XHJcblx0XHRsZXQgcmVxdWlyZWQgPSAhdGhyb3VnaHB1dE9ubHkgPyBsZXZlbCAqIDUgOiBNYXRoLm1pbigzMjAsIGxldmVsICogMC41KTtcclxuXHRcdC8vTWF0aC5taW4oNTAsIDgwICsgKGxldmVsIC0gMjcpICogNSk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkZWZpbml0aW9uOiBjb21wdXRlRnJlZXBsYXlTaGFwZShsZXZlbCwgcm5nKSxcclxuXHRcdFx0cmVxdWlyZWQsXHJcblx0XHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLm5vX3Jld2FyZF9mcmVlcGxheSxcclxuXHRcdFx0dGhyb3VnaHB1dE9ubHksXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGluc3RhbGwobW9kOiBNb2QpIHtcclxuXHJcblx0XHQvLyBNb2RpZnkgdGhlIGdvYWwgb2YgdGhlIGZpcnN0IGxldmVsIHRvIGFkZCBvdXIgZ29hbFxyXG5cdFx0bW9kLnNpZ25hbHMubW9kaWZ5TGV2ZWxEZWZpbml0aW9ucy5hZGQoKFxyXG5cdFx0XHRsZXZlbHM6IHtcclxuXHRcdFx0XHRzaGFwZTogc3RyaW5nO1xyXG5cdFx0XHRcdHJlcXVpcmVkOiBudW1iZXI7XHJcblx0XHRcdFx0cmV3YXJkOiBzdHJpbmc7XHJcblx0XHRcdFx0dGhyb3VnaHB1dE9ubHk6IGJvb2xlYW47XHJcblx0XHRcdH1bXVxyXG5cdFx0KSA9PiB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24obGV2ZWxzLCBoZXhhX2Z1bGxWZXJzaW9uTGV2ZWxzKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1vZC5zaWduYWxzLm1vZGlmeVVwZ3JhZGVzLmFkZCgoXHJcblx0XHRcdHVwZ3JhZGVzOiBSZWNvcmQ8c3RyaW5nLCB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6IHtcclxuXHRcdFx0XHRcdHNoYXBlOiBzdHJpbmc7XHJcblx0XHRcdFx0XHRhbW91bnQ6IG51bWJlcjtcclxuXHRcdFx0XHR9W107XHJcblx0XHRcdFx0ZXhjbHVkZVByZXZpb3VzPzogYm9vbGVhbjtcclxuXHRcdFx0fVtdPlxyXG5cdFx0KSA9PiB7XHJcblx0XHRcdGZvciAobGV0IGsgaW4gdXBncmFkZXMpIHtcclxuXHRcdFx0XHR1cGdyYWRlc1trXSA9IGhleGFfZnVsbFZlcnNpb25VcGdyYWRlc1trXTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBPYmplY3QuYXNzaWduKHVwZ3JhZGVzLCBoZXhhX2Z1bGxWZXJzaW9uVXBncmFkZXMpO1xyXG5cdFx0XHQvLyBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMuc3osIHt4OiBoZXhhX2Z1bGxWZXJzaW9uVXBncmFkZXN9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcclxuICogQHBhcmFtIHtSYW5kb21OdW1iZXJHZW5lcmF0b3J9IHJuZ1xyXG4qL1xyXG5mdW5jdGlvbiBjb21wdXRlRnJlZXBsYXlTaGFwZShsZXZlbDogbnVtYmVyLCBybmc6IFJhbmRvbU51bWJlckdlbmVyYXRvcikge1xyXG5cdGxldCBsYXllckNvdW50ID0gMTtcclxuXHRpZiAobGV2ZWwgPj0gNTApIGxheWVyQ291bnQgPSAyO1xyXG5cdGlmIChsZXZlbCA+PSA3NSkgbGF5ZXJDb3VudCA9IDM7XHJcblx0aWYgKGxldmVsID49IDEwMCkgbGF5ZXJDb3VudCA9IDQ7XHJcblx0aWYgKHJuZy5uZXh0KCkgPCAwLjIpIHtcclxuXHRcdGxheWVyQ291bnQgJiYgbGF5ZXJDb3VudC0tO1xyXG5cdFx0aWYgKHJuZy5uZXh0KCkgPCAwLjI1KSB7XHJcblx0XHRcdGxheWVyQ291bnQgJiYgbGF5ZXJDb3VudC0tO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zdCBhbGxvd0dyYXkgPSBsZXZlbCA+IDM1O1xyXG5cdGNvbnN0IGFsbG93SG9sZXMgPSBsZXZlbCA+IDYwO1xyXG5cdGNvbnN0IGFsbG93VW5zdGFja2FibGUgPSBmYWxzZTtcclxuXHRjb25zdCBhbGxvd1RleHQgPSBmYWxzZTtcclxuXHRjb25zdCBhbGxvd051bWJlcnMgPSBmYWxzZTtcclxuXHRjb25zdCBhbGxvd051bWJlcnNJblRleHQgPSBmYWxzZTtcclxuXHRjb25zdCBhbGxvd0NvbG9yZWRUZXh0ID0gZmFsc2U7XHJcblx0Y29uc3QgYWxsb3dNdWx0aUNvbG9yZWRUZXh0ID0gZmFsc2U7XHJcblx0Y29uc3QgYWxsb3c0U2hhcGVzID0gZmFsc2U7XHJcblx0Y29uc3QgYWxsb3dFbW9qaSA9IGZhbHNlO1xyXG5cclxuXHRsZXQgY2hvaWNlID0gKHM6IHN0cmluZykgPT4gcm5nLmNob2ljZShzLnNwbGl0KCcnKSk7XHJcblxyXG5cdGNvbnN0IHNoYXBlcyA9IFwiUkNTV1wiO1xyXG5cdGNvbnN0IHN5bW1ldHJpZXMgPSBbXHJcblx0XHRcIjAxMjIxMFwiLCAvLyBoYWxmLW1pcnJvclxyXG5cdFx0XCIwMTIzMjFcIiwgLy8gaGFsZi1taXJyb3ItZGlhZ2luYWxcclxuXHRcdFwiMDEyMDEyXCIsIC8vIGhhbGYtcm90YXRlXHJcblx0XHRcIjAxMDEwMVwiLCAvLyB0aGlyZC1yb3RhdGVcclxuXHRdO1xyXG5cdGNvbnN0IGNvbG9yV2hlZWwgPSBcInJ5Z2NicFwiLnJlcGVhdCgzKTtcclxuXHRjb25zdCBleHRyYUNvbG9ycyA9IGxldmVsIDwgNTAgPyBcIndcIiA6IFwid3VcIjtcclxuXHRjb25zdCBjb2xvcldoZWVsR3JvdXBzID0gW1xyXG5cdFx0XCJhMDEyXCIsIC8vIG5lYXJcclxuXHRcdFwiYTAyNFwiLCAvLyB0cmlwbGVcclxuXHRcdFwiYWIwM1wiLCAvLyBvcHBvc2l0ZVxyXG5cdFx0XCIwMTM0XCIsIC8vIG9wcG9zaXRlIHBhaXJzXHJcblx0XTtcclxuXHJcblx0Y29uc3Qgc3ltbWV0cnlPZmZzZXQgPSArY2hvaWNlKCcwMTIzNDUnKTtcclxuXHRjb25zdCBjd09mZnNldCA9ICtjaG9pY2UoJzAxMjM0NScpO1xyXG5cdGNvbnN0IHN5bW1ldHJ5ID0gcm5nLmNob2ljZShzeW1tZXRyaWVzKS5yZXBlYXQoMykuc2xpY2Uoc3ltbWV0cnlPZmZzZXQsIHN5bW1ldHJ5T2Zmc2V0ICsgNik7XHJcblx0Y29uc3QgY29sb3JzID0gcm5nLmNob2ljZShjb2xvcldoZWVsR3JvdXBzKVxyXG5cdFx0LnJlcGxhY2UoL1xcZC9nLCBuID0+IGNvbG9yV2hlZWxbK24gKyBjd09mZnNldF0pXHJcblx0XHQucmVwbGFjZSgvW2FiXS9nLCAoKSA9PiBjaG9pY2UoZXh0cmFDb2xvcnMpKTtcclxuXHJcblx0LyoqIEB0eXBlIHtTaGFwZXN0TGF5ZXJbXX0gKi9cclxuXHRsZXQgbGF5ZXJzID0gW107XHJcblx0Zm9yIChsZXQgbGF5ZXJJbmRleCA9IDA7IGxheWVySW5kZXggPD0gbGF5ZXJDb3VudDsgbGF5ZXJJbmRleCsrKSB7XHJcblx0XHRjb25zdCBxdWFkcyA9IEFycmF5KDYpLmZpbGwoJycpLm1hcCgoKSA9PiBjaG9pY2Uoc2hhcGVzKSArIGNob2ljZShjb2xvcnMpKTtcclxuXHRcdGlmIChhbGxvd0hvbGVzKSB7XHJcblx0XHRcdHF1YWRzWytjaG9pY2UoJzAxMjM0NScpXSA9ICctLSc7XHJcblx0XHRcdGlmIChhbGxvd1Vuc3RhY2thYmxlKSB7XHJcblx0XHRcdFx0cXVhZHNbK2Nob2ljZSgnMjM0NScpXSA9ICctLSc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIGNvbnN0IGxheWVyID0gbmV3IFNoYXBlNkxheWVyKCc2JyArIHN5bW1ldHJ5LnJlcGxhY2UoL1xcZC9nLCBuID0+IHF1YWRzWytuXSksIGxheWVySW5kZXgpO1xyXG5cdFx0Ly8gaWYgKCFhbGxvd1Vuc3RhY2thYmxlICYmIGxheWVycy5sZW5ndGggJiYgbGF5ZXIuY2FuX2ZhbGxfdGhyb3VnaChsYXllcnNbbGF5ZXJzLmxlbmd0aCAtIDFdKSkge1xyXG5cdFx0Ly8gXHRsYXllckluZGV4LS07XHJcblx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0Ly8gXHRsYXllcnMucHVzaChsYXllcik7XHJcblx0XHQvLyB9XHJcblx0XHRsYXllcnMucHVzaCgnNicgKyBzeW1tZXRyeS5yZXBsYWNlKC9cXGQvZywgbiA9PiBxdWFkc1srbl0pKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXcgU3pTaGFwZUl0ZW0oU3pEZWZpbml0aW9uLmZyb21TaG9ydEtleShsYXllcnMuam9pbignOicpKSk7XHJcbn1cclxuXHJcbi8vIE9iamVjdC5cclxuXHJcbi8vIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKEhleGFnb25hbEdhbWVNb2RlLnByb3RvdHlwZSkubWFwKGUgPT4ge1xyXG4vLyBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWd1bGFyR2FtZU1vZGUsIGUuKVxyXG4vLyB9KVxyXG5cclxuLy8gT2JqZWN0LnNldFByb3RvdHlwZU9mKEhleGFnb25hbEdhbWVNb2RlLnByb3RvdHlwZSwgUmVndWxhckdhbWVNb2RlLnByb3RvdHlwZSlcclxuXHJcbi8vIFJlZ3VsYXJHYW1lTW9kZS5wcm90b3R5cGUgPSAgSGV4YWdvbmFsR2FtZU1vZGUucHJvdG90eXBlOyJdfQ==