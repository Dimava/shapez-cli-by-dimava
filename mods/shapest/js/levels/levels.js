import { SzDefinition } from "../shapest/definition.js";
import { SzInfo } from "../shapest/layer.js";
import { T } from "../shapez.js";
export class SzLevel {
    index;
    shapeName;
    shape;
    required;
    reward;
    throughputOnly = false;
    constructor(index, required, shape, reward) {
        this.index = index;
        if (named[shape]) {
            this.shapeName = shape;
            shape = named[shape];
        }
        this.shape = shape;
        this.required = required;
        this.reward = reward;
    }
    static modifyLevelDefinitions(levels) {
        Object.assign(levels, levelDefinitions);
        levels.map(d => {
            d.shape = SzDefinition.getHashfromRawHash(d.shape);
            d.required = ~~(d.required / 3);
        });
    }
    static modifyUpgrades(upgrades) {
        const map = {
            'sz!l!z|q!C-06,C-6c,C-ci,C-io|a!su0o|c!': 'sz!l!z|q!C-0o|a!su0o|c!',
            'sz!l!z|q!R-06,R-6c,R-ci,R-io|a!su0o|c!': 'sz!l!z|q!R-0c,R-co|a!su0o|c!',
            'sz!l!z|q!S-06,S-6c,S-ci,S-io|a!su0o|c!': 'sz!l!z|q!S-4c,S-ck,S-ks|a!su0o|c!',
            'CuCuCuCu': SzInfo.quad.named.circleSpawn,
            'RuRuRuRu': SzInfo.quad.named.squareSpawn,
            'SuSuSuSu': SzInfo.quad.named.starSpawn,
        };
        Object.values(upgrades).flat().flatMap(e => e.required)
            .map(e => {
            e.shape = SzDefinition.getHashfromRawHash(e.shape);
            if (map[e.shape])
                e.shape = map[e.shape];
            e.amount = Math.ceil(e.amount / 10);
        });
        Object.assign(globalThis, { upgrades });
    }
    static install(mod) {
        mod.signals.modifyLevelDefinitions.add(SzLevel.modifyLevelDefinitions);
        mod.signals.modifyUpgrades.add(SzLevel.modifyUpgrades);
        let r = 'reward_painter_double';
        T.storyRewards[r] = {
            title: 'Multicolor painter',
            desc: `
				You have unlocked <strong>Double Painter</strong>.<br>
				It can use more then a single paint at once to paint shapes in 7 combined colors
			`,
        };
        // const rewardName = T.storyRewards[reward].title;
        // let html = `
        // <div class="rewardName">
        //     ${T.ingame.levelCompleteNotification.unlockText.replace("<reward>", rewardName)}
        // </div>
        // <div class="rewardDesc">
        //     ${T.storyRewards[reward].desc}
        // </div>
    }
}
const named = SzInfo.quad.named;
export const levelDefinitions = [
    new SzLevel(1, 30, 'circle1', 'reward_cutter_and_trash'),
    new SzLevel(2, 40, 'circleHalfLeft', 'no_reward'),
    new SzLevel(3, 70, 'square2', 'reward_balancer'),
    new SzLevel(4, 70, 'squareHalfRight', 'reward_rotater'),
    new SzLevel(5, 170, 'circleHalfTop2', 'reward_tunnel'),
    new SzLevel(6, 270, 'squareHalfTop2', 'reward_painter'),
    new SzLevel(7, 300, 'circleRed', 'reward_rotater_ccw'),
    new SzLevel(8, 480, 'square3TopBlue', 'reward_painter_double'),
    new SzLevel(9, 600, 'star3Cyan', 'reward_rotater_180'),
    new SzLevel(10, 800, 'diamond', 'reward_stacker'),
    new SzLevel(11, 1000, 'squid', 'no_reward'),
    // new SzLevel(12, 1000, 'splikeball48', 'no_reward'),
    // // @ts-expect-error
    // new SzLevel(8, 480, "RbRb----", 'reward_mixer'),
    // // @ts-expect-error
    // new SzLevel(9, 600, "CpCpCpCp", 'reward_merger'),
    // // @ts-expect-error
    // new SzLevel(10, 800, "ScScScSc", 'reward_stacker'),
    // // @ts-expect-error
    // new SzLevel(11, 1000, "CgScScCg", 'reward_miner_chainable'),
    // // @ts-expect-error
    // new SzLevel(12, 1000, "CbCbCbRb:CwCwCwCw", 'reward_blueprints'),
];
// 	// Tunnel Tier 2
// 	{
// 		shape: chinaShapes ? "CuCuCuCu:CwCwCwCw:Sb--Sr--" : "RpRpRpRp:CwCwCwCw", // painting t3
// 		required: 3800,
// 		reward: enumHubGoalRewards.reward_underground_belt_tier_2,
// 	},
// 	// 14
// 	// Belt reader
// 	{
// 		shape: "--Cg----:--Cr----", // unused
// 		required: 8, // Per second!
// 		reward: enumHubGoalRewards.reward_belt_reader,
// 		throughputOnly: true,
// 	},
// 	// 15
// 	// Storage
// 	{
// 		shape: "SrSrSrSr:CyCyCyCy", // unused
// 		required: 10000,
// 		reward: enumHubGoalRewards.reward_storage,
// 	},
// 	// 16
// 	// Quad Cutter
// 	{
// 		shape: "SrSrSrSr:CyCyCyCy:SwSwSwSw", // belts t4 (two variants)
// 		required: 6000,
// 		reward: enumHubGoalRewards.reward_cutter_quad,
// 	},
// 	// 17
// 	// Double painter
// 	{
// 		shape: chinaShapes
// 			? "CyCyCyCy:CyCyCyCy:RyRyRyRy:RuRuRuRu"
// 			: "CbRbRbCb:CwCwCwCw:WbWbWbWb", // miner t4 (two variants)
// 		required: 20000,
// 		reward: enumHubGoalRewards.reward_painter_double,
// 	},
// 	// 18
// 	// Rotater (180deg)
// 	{
// 		shape: "Sg----Sg:CgCgCgCg:--CyCy--", // unused
// 		required: 20000,
// 		reward: enumHubGoalRewards.reward_rotater_180,
// 	},
// 	// 19
// 	// Compact splitter
// 	{
// 		shape: "CpRpCp--:SwSwSwSw",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_splitter, // X
// 	},
// 	// 20
// 	// WIRES
// 	{
// 		shape: finalGameShape,
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_wires_painter_and_levers,
// 	},
// 	// 21
// 	// Filter
// 	{
// 		shape: "CrCwCrCw:CwCrCwCr:CrCwCrCw:CwCrCwCr",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_filter,
// 	},
// 	// 22
// 	// Constant signal
// 	{
// 		shape: chinaShapes
// 			? "RrSySrSy:RyCrCwCr:CyCyRyCy"
// 			: "Cg----Cr:Cw----Cw:Sy------:Cy----Cy",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_constant_signal,
// 	},
// 	// 23
// 	// Display
// 	{
// 		shape: chinaShapes
// 			? "CrCrCrCr:CwCwCwCw:WwWwWwWw:CrCrCrCr"
// 			: "CcSyCcSy:SyCcSyCc:CcSyCcSy",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_display,
// 	},
// 	// 24 Logic gates
// 	{
// 		shape: chinaShapes
// 			? "Su----Su:RwRwRwRw:Cu----Cu:CwCwCwCw"
// 			: "CcRcCcRc:RwCwRwCw:Sr--Sw--:CyCyCyCy",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_logic_gates,
// 	},
// 	// 25 Virtual Processing
// 	{
// 		shape: "Rg--Rg--:CwRwCwRw:--Rg--Rg",
// 		required: 25000,
// 		reward: enumHubGoalRewards.reward_virtual_processing,
// 	},
// 	// 26 Freeplay
// 	{
// 		shape: "CbCuCbCu:Sr------:--CrSrCr:CwCwCwCw",
// 		required: 50000,
// 		reward: enumHubGoalRewards.reward_freeplay,
// 	},
// ]),
// ];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbGV2ZWxzL2xldmVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLE9BQU8sRUFBMkIsQ0FBQyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzFELE1BQU0sT0FBTyxPQUFPO0lBQ25CLEtBQUssQ0FBUztJQUNkLFNBQVMsQ0FBa0M7SUFDM0MsS0FBSyxDQUFjO0lBQ25CLFFBQVEsQ0FBUztJQUNqQixNQUFNLENBQXFCO0lBQzNCLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkIsWUFBWSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxLQUFtRCxFQUFFLE1BQTBCO1FBQzNILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksS0FBSyxDQUFDLEtBQXVDLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQXVDLENBQUM7WUFDekQsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUF1QyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQW9CLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxNQUszQjtRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFD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bUQ7QUFDbkQscUJBQXFCO0FBQ3JCLG1EQUFtRDtBQUNuRCxNQUFNO0FBRU4sU0FBUztBQUNULHVCQUF1QjtBQUN2QixLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQixxREFBcUQ7QUFDckQsTUFBTTtBQUVOLFNBQVM7QUFDVCxZQUFZO0FBQ1osS0FBSztBQUNMLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsZ0VBQWdFO0FBQ2hFLE1BQU07QUFFTixTQUFTO0FBQ1QsYUFBYTtBQUNiLEtBQUs7QUFDTCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLDhDQUE4QztBQUM5QyxNQUFNO0FBRU4sU0FBUztBQUNULHNCQUFzQjtBQUN0QixLQUFLO0FBQ0wsdUJBQXVCO0FBQ3ZCLG9DQUFvQztBQUNwQyw4Q0FBOEM7QUFDOUMscUJBQXFCO0FBQ3JCLHVEQUF1RDtBQUN2RCxNQUFNO0FBRU4sU0FBUztBQUNULGNBQWM7QUFDZCxLQUFLO0FBQ0wsdUJBQXVCO0FBQ3ZCLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLCtDQUErQztBQUMvQyxNQUFNO0FBRU4scUJBQXFCO0FBQ3JCLEtBQUs7QUFDTCx1QkFBdUI7QUFDdkIsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5QyxxQkFBcUI7QUFDckIsbURBQW1EO0FBQ25ELE1BQU07QUFFTiw0QkFBNEI7QUFDNUIsS0FBSztBQUNMLHlDQUF5QztBQUN6QyxxQkFBcUI7QUFDckIsMERBQTBEO0FBQzFELE1BQU07QUFFTixrQkFBa0I7QUFDbEIsS0FBSztBQUNMLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFDckIsZ0RBQWdEO0FBQ2hELE1BQU07QUFDTixNQUFNO0FBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN6RGVmaW5pdGlvbiB9IGZyb20gXCIuLi9zaGFwZXN0L2RlZmluaXRpb24uanNcIjtcclxuaW1wb3J0IHsgU3pJbmZvIH0gZnJvbSBcIi4uL3NoYXBlc3QvbGF5ZXIuanNcIjtcclxuaW1wb3J0IHsgc3pTaGFwZUhhc2ggfSBmcm9tIFwiLi4vc2hhcGVzdC9TekNvbnRleHQyRC5qc1wiO1xyXG5pbXBvcnQgeyBlbnVtSHViR29hbFJld2FyZHMsIE1vZCwgVCB9IGZyb20gXCIuLi9zaGFwZXouanNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3pMZXZlbCB7XHJcblx0aW5kZXg6IG51bWJlcjtcclxuXHRzaGFwZU5hbWU/OiBrZXlvZiB0eXBlb2YgU3pJbmZvLnF1YWQubmFtZWQ7XHJcblx0c2hhcGU6IHN6U2hhcGVIYXNoO1xyXG5cdHJlcXVpcmVkOiBudW1iZXI7XHJcblx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHM7XHJcblx0dGhyb3VnaHB1dE9ubHkgPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3RvcihpbmRleDogbnVtYmVyLCByZXF1aXJlZDogbnVtYmVyLCBzaGFwZTogc3pTaGFwZUhhc2ggfCBrZXlvZiB0eXBlb2YgU3pJbmZvLnF1YWQubmFtZWQsIHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzKSB7XHJcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XHJcblx0XHRpZiAobmFtZWRbc2hhcGUgYXMga2V5b2YgdHlwZW9mIFN6SW5mby5xdWFkLm5hbWVkXSkge1xyXG5cdFx0XHR0aGlzLnNoYXBlTmFtZSA9IHNoYXBlIGFzIGtleW9mIHR5cGVvZiBTekluZm8ucXVhZC5uYW1lZDtcclxuXHRcdFx0c2hhcGUgPSBuYW1lZFtzaGFwZSBhcyBrZXlvZiB0eXBlb2YgU3pJbmZvLnF1YWQubmFtZWRdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFwZSA9IHNoYXBlIGFzIHN6U2hhcGVIYXNoO1xyXG5cdFx0dGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xyXG5cdFx0dGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbW9kaWZ5TGV2ZWxEZWZpbml0aW9ucyhsZXZlbHM6IHtcclxuXHRcdHNoYXBlOiBzdHJpbmc7XHJcblx0XHRyZXF1aXJlZDogbnVtYmVyO1xyXG5cdFx0cmV3YXJkOiBzdHJpbmc7XHJcblx0XHR0aHJvdWdocHV0T25seTogYm9vbGVhbjtcclxuXHR9W10pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24obGV2ZWxzLCBsZXZlbERlZmluaXRpb25zKTtcclxuXHJcblx0XHRsZXZlbHMubWFwKGQgPT4ge1xyXG5cdFx0XHRkLnNoYXBlID0gU3pEZWZpbml0aW9uLmdldEhhc2hmcm9tUmF3SGFzaChkLnNoYXBlKTtcclxuXHRcdFx0ZC5yZXF1aXJlZCA9IH5+KGQucmVxdWlyZWQgLyAzKTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBtb2RpZnlVcGdyYWRlcyhcclxuXHRcdHVwZ3JhZGVzOiBSZWNvcmQ8c3RyaW5nLCB7XHJcblx0XHRcdHJlcXVpcmVkOiB7XHJcblx0XHRcdFx0c2hhcGU6IHN0cmluZztcclxuXHRcdFx0XHRhbW91bnQ6IG51bWJlcjtcclxuXHRcdFx0fVtdO1xyXG5cdFx0XHRleGNsdWRlUHJldmlvdXM/OiBib29sZWFuO1xyXG5cdFx0fVtdPikge1xyXG5cclxuXHRcdGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuXHRcdFx0J3N6IWwhenxxIUMtMDYsQy02YyxDLWNpLEMtaW98YSFzdTBvfGMhJzogJ3N6IWwhenxxIUMtMG98YSFzdTBvfGMhJyxcclxuXHRcdFx0J3N6IWwhenxxIVItMDYsUi02YyxSLWNpLFItaW98YSFzdTBvfGMhJzogJ3N6IWwhenxxIVItMGMsUi1jb3xhIXN1MG98YyEnLFxyXG5cdFx0XHQnc3ohbCF6fHEhUy0wNixTLTZjLFMtY2ksUy1pb3xhIXN1MG98YyEnOiAnc3ohbCF6fHEhUy00YyxTLWNrLFMta3N8YSFzdTBvfGMhJyxcclxuXHRcdFx0J0N1Q3VDdUN1JzogU3pJbmZvLnF1YWQubmFtZWQuY2lyY2xlU3Bhd24sXHJcblx0XHRcdCdSdVJ1UnVSdSc6IFN6SW5mby5xdWFkLm5hbWVkLnNxdWFyZVNwYXduLFxyXG5cdFx0XHQnU3VTdVN1U3UnOiBTekluZm8ucXVhZC5uYW1lZC5zdGFyU3Bhd24sXHJcblx0XHR9XHJcblxyXG5cdFx0T2JqZWN0LnZhbHVlcyh1cGdyYWRlcykuZmxhdCgpLmZsYXRNYXAoZSA9PiBlLnJlcXVpcmVkKVxyXG5cdFx0XHQubWFwKGUgPT4ge1xyXG5cdFx0XHRcdGUuc2hhcGUgPSBTekRlZmluaXRpb24uZ2V0SGFzaGZyb21SYXdIYXNoKGUuc2hhcGUpO1xyXG5cdFx0XHRcdGlmIChtYXBbZS5zaGFwZV0pIGUuc2hhcGUgPSBtYXBbZS5zaGFwZV07XHJcblx0XHRcdFx0ZS5hbW91bnQgPSBNYXRoLmNlaWwoZS5hbW91bnQgLyAxMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywgeyB1cGdyYWRlcyB9KVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaW5zdGFsbChtb2Q6IE1vZCkge1xyXG5cclxuXHRcdG1vZC5zaWduYWxzLm1vZGlmeUxldmVsRGVmaW5pdGlvbnMuYWRkKFN6TGV2ZWwubW9kaWZ5TGV2ZWxEZWZpbml0aW9ucyk7XHJcblx0XHRtb2Quc2lnbmFscy5tb2RpZnlVcGdyYWRlcy5hZGQoU3pMZXZlbC5tb2RpZnlVcGdyYWRlcyk7XHJcblxyXG5cdFx0bGV0IHI6IGVudW1IdWJHb2FsUmV3YXJkcyA9ICdyZXdhcmRfcGFpbnRlcl9kb3VibGUnO1xyXG5cdFx0VC5zdG9yeVJld2FyZHNbcl0gPSB7XHJcblx0XHRcdHRpdGxlOiAnTXVsdGljb2xvciBwYWludGVyJyxcclxuXHRcdFx0ZGVzYzogYFxyXG5cdFx0XHRcdFlvdSBoYXZlIHVubG9ja2VkIDxzdHJvbmc+RG91YmxlIFBhaW50ZXI8L3N0cm9uZz4uPGJyPlxyXG5cdFx0XHRcdEl0IGNhbiB1c2UgbW9yZSB0aGVuIGEgc2luZ2xlIHBhaW50IGF0IG9uY2UgdG8gcGFpbnQgc2hhcGVzIGluIDcgY29tYmluZWQgY29sb3JzXHJcblx0XHRcdGAsXHJcblx0XHR9IGFzIGFueTtcclxuXHJcblx0XHQvLyBjb25zdCByZXdhcmROYW1lID0gVC5zdG9yeVJld2FyZHNbcmV3YXJkXS50aXRsZTtcclxuXHJcblx0XHQvLyBsZXQgaHRtbCA9IGBcclxuXHRcdC8vIDxkaXYgY2xhc3M9XCJyZXdhcmROYW1lXCI+XHJcblx0XHQvLyAgICAgJHtULmluZ2FtZS5sZXZlbENvbXBsZXRlTm90aWZpY2F0aW9uLnVubG9ja1RleHQucmVwbGFjZShcIjxyZXdhcmQ+XCIsIHJld2FyZE5hbWUpfVxyXG5cdFx0Ly8gPC9kaXY+XHJcblxyXG5cdFx0Ly8gPGRpdiBjbGFzcz1cInJld2FyZERlc2NcIj5cclxuXHRcdC8vICAgICAke1Quc3RvcnlSZXdhcmRzW3Jld2FyZF0uZGVzY31cclxuXHRcdC8vIDwvZGl2PlxyXG5cclxuXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3QgbmFtZWQgPSBTekluZm8ucXVhZC5uYW1lZDtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsZXZlbERlZmluaXRpb25zID0gW1xyXG5cdG5ldyBTekxldmVsKDEsIDMwLCAnY2lyY2xlMScsICdyZXdhcmRfY3V0dGVyX2FuZF90cmFzaCcpLFxyXG5cdG5ldyBTekxldmVsKDIsIDQwLCAnY2lyY2xlSGFsZkxlZnQnLCAnbm9fcmV3YXJkJyksXHJcblx0bmV3IFN6TGV2ZWwoMywgNzAsICdzcXVhcmUyJywgJ3Jld2FyZF9iYWxhbmNlcicpLFxyXG5cdG5ldyBTekxldmVsKDQsIDcwLCAnc3F1YXJlSGFsZlJpZ2h0JywgJ3Jld2FyZF9yb3RhdGVyJyksXHJcblx0bmV3IFN6TGV2ZWwoNSwgMTcwLCAnY2lyY2xlSGFsZlRvcDInLCAncmV3YXJkX3R1bm5lbCcpLFxyXG5cdG5ldyBTekxldmVsKDYsIDI3MCwgJ3NxdWFyZUhhbGZUb3AyJywgJ3Jld2FyZF9wYWludGVyJyksXHJcblx0bmV3IFN6TGV2ZWwoNywgMzAwLCAnY2lyY2xlUmVkJywgJ3Jld2FyZF9yb3RhdGVyX2NjdycpLFxyXG5cclxuXHRuZXcgU3pMZXZlbCg4LCA0ODAsICdzcXVhcmUzVG9wQmx1ZScsICdyZXdhcmRfcGFpbnRlcl9kb3VibGUnKSxcclxuXHJcblx0bmV3IFN6TGV2ZWwoOSwgNjAwLCAnc3RhcjNDeWFuJywgJ3Jld2FyZF9yb3RhdGVyXzE4MCcpLFxyXG5cclxuXHRuZXcgU3pMZXZlbCgxMCwgODAwLCAnZGlhbW9uZCcsICdyZXdhcmRfc3RhY2tlcicpLFxyXG5cclxuXHRuZXcgU3pMZXZlbCgxMSwgMTAwMCwgJ3NxdWlkJywgJ25vX3Jld2FyZCcpLFxyXG5cclxuXHQvLyBuZXcgU3pMZXZlbCgxMiwgMTAwMCwgJ3NwbGlrZWJhbGw0OCcsICdub19yZXdhcmQnKSxcclxuXHJcblxyXG5cclxuXHQvLyAvLyBAdHMtZXhwZWN0LWVycm9yXHJcblx0Ly8gbmV3IFN6TGV2ZWwoOCwgNDgwLCBcIlJiUmItLS0tXCIsICdyZXdhcmRfbWl4ZXInKSxcclxuXHQvLyAvLyBAdHMtZXhwZWN0LWVycm9yXHJcblx0Ly8gbmV3IFN6TGV2ZWwoOSwgNjAwLCBcIkNwQ3BDcENwXCIsICdyZXdhcmRfbWVyZ2VyJyksXHJcblx0Ly8gLy8gQHRzLWV4cGVjdC1lcnJvclxyXG5cdC8vIG5ldyBTekxldmVsKDEwLCA4MDAsIFwiU2NTY1NjU2NcIiwgJ3Jld2FyZF9zdGFja2VyJyksXHJcblx0Ly8gLy8gQHRzLWV4cGVjdC1lcnJvclxyXG5cdC8vIG5ldyBTekxldmVsKDExLCAxMDAwLCBcIkNnU2NTY0NnXCIsICdyZXdhcmRfbWluZXJfY2hhaW5hYmxlJyksXHJcblx0Ly8gLy8gQHRzLWV4cGVjdC1lcnJvclxyXG5cdC8vIG5ldyBTekxldmVsKDEyLCAxMDAwLCBcIkNiQ2JDYlJiOkN3Q3dDd0N3XCIsICdyZXdhcmRfYmx1ZXByaW50cycpLFxyXG5cclxuXTtcclxuXHJcblxyXG5cclxuLy8gXHQvLyBUdW5uZWwgVGllciAyXHJcbi8vIFx0e1xyXG4vLyBcdFx0c2hhcGU6IGNoaW5hU2hhcGVzID8gXCJDdUN1Q3VDdTpDd0N3Q3dDdzpTYi0tU3ItLVwiIDogXCJScFJwUnBScDpDd0N3Q3dDd1wiLCAvLyBwYWludGluZyB0M1xyXG4vLyBcdFx0cmVxdWlyZWQ6IDM4MDAsXHJcbi8vIFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfdW5kZXJncm91bmRfYmVsdF90aWVyXzIsXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMTRcclxuLy8gXHQvLyBCZWx0IHJlYWRlclxyXG4vLyBcdHtcclxuLy8gXHRcdHNoYXBlOiBcIi0tQ2ctLS0tOi0tQ3ItLS0tXCIsIC8vIHVudXNlZFxyXG4vLyBcdFx0cmVxdWlyZWQ6IDgsIC8vIFBlciBzZWNvbmQhXHJcbi8vIFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfYmVsdF9yZWFkZXIsXHJcbi8vIFx0XHR0aHJvdWdocHV0T25seTogdHJ1ZSxcclxuLy8gXHR9LFxyXG5cclxuLy8gXHQvLyAxNVxyXG4vLyBcdC8vIFN0b3JhZ2VcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogXCJTclNyU3JTcjpDeUN5Q3lDeVwiLCAvLyB1bnVzZWRcclxuLy8gXHRcdHJlcXVpcmVkOiAxMDAwMCxcclxuLy8gXHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9zdG9yYWdlLFxyXG4vLyBcdH0sXHJcblxyXG4vLyBcdC8vIDE2XHJcbi8vIFx0Ly8gUXVhZCBDdXR0ZXJcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogXCJTclNyU3JTcjpDeUN5Q3lDeTpTd1N3U3dTd1wiLCAvLyBiZWx0cyB0NCAodHdvIHZhcmlhbnRzKVxyXG4vLyBcdFx0cmVxdWlyZWQ6IDYwMDAsXHJcbi8vIFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfY3V0dGVyX3F1YWQsXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMTdcclxuLy8gXHQvLyBEb3VibGUgcGFpbnRlclxyXG4vLyBcdHtcclxuLy8gXHRcdHNoYXBlOiBjaGluYVNoYXBlc1xyXG4vLyBcdFx0XHQ/IFwiQ3lDeUN5Q3k6Q3lDeUN5Q3k6UnlSeVJ5Unk6UnVSdVJ1UnVcIlxyXG4vLyBcdFx0XHQ6IFwiQ2JSYlJiQ2I6Q3dDd0N3Q3c6V2JXYldiV2JcIiwgLy8gbWluZXIgdDQgKHR3byB2YXJpYW50cylcclxuLy8gXHRcdHJlcXVpcmVkOiAyMDAwMCxcclxuLy8gXHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9wYWludGVyX2RvdWJsZSxcclxuLy8gXHR9LFxyXG5cclxuLy8gXHQvLyAxOFxyXG4vLyBcdC8vIFJvdGF0ZXIgKDE4MGRlZylcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogXCJTZy0tLS1TZzpDZ0NnQ2dDZzotLUN5Q3ktLVwiLCAvLyB1bnVzZWRcclxuLy8gXHRcdHJlcXVpcmVkOiAyMDAwMCxcclxuLy8gXHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9yb3RhdGVyXzE4MCxcclxuLy8gXHR9LFxyXG5cclxuLy8gXHQvLyAxOVxyXG4vLyBcdC8vIENvbXBhY3Qgc3BsaXR0ZXJcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogXCJDcFJwQ3AtLTpTd1N3U3dTd1wiLFxyXG4vLyBcdFx0cmVxdWlyZWQ6IDI1MDAwLFxyXG4vLyBcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX3NwbGl0dGVyLCAvLyBYXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMjBcclxuLy8gXHQvLyBXSVJFU1xyXG4vLyBcdHtcclxuLy8gXHRcdHNoYXBlOiBmaW5hbEdhbWVTaGFwZSxcclxuLy8gXHRcdHJlcXVpcmVkOiAyNTAwMCxcclxuLy8gXHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF93aXJlc19wYWludGVyX2FuZF9sZXZlcnMsXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMjFcclxuLy8gXHQvLyBGaWx0ZXJcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogXCJDckN3Q3JDdzpDd0NyQ3dDcjpDckN3Q3JDdzpDd0NyQ3dDclwiLFxyXG4vLyBcdFx0cmVxdWlyZWQ6IDI1MDAwLFxyXG4vLyBcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX2ZpbHRlcixcclxuLy8gXHR9LFxyXG5cclxuLy8gXHQvLyAyMlxyXG4vLyBcdC8vIENvbnN0YW50IHNpZ25hbFxyXG4vLyBcdHtcclxuLy8gXHRcdHNoYXBlOiBjaGluYVNoYXBlc1xyXG4vLyBcdFx0XHQ/IFwiUnJTeVNyU3k6UnlDckN3Q3I6Q3lDeVJ5Q3lcIlxyXG4vLyBcdFx0XHQ6IFwiQ2ctLS0tQ3I6Q3ctLS0tQ3c6U3ktLS0tLS06Q3ktLS0tQ3lcIixcclxuLy8gXHRcdHJlcXVpcmVkOiAyNTAwMCxcclxuLy8gXHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF9jb25zdGFudF9zaWduYWwsXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMjNcclxuLy8gXHQvLyBEaXNwbGF5XHJcbi8vIFx0e1xyXG4vLyBcdFx0c2hhcGU6IGNoaW5hU2hhcGVzXHJcbi8vIFx0XHRcdD8gXCJDckNyQ3JDcjpDd0N3Q3dDdzpXd1d3V3dXdzpDckNyQ3JDclwiXHJcbi8vIFx0XHRcdDogXCJDY1N5Q2NTeTpTeUNjU3lDYzpDY1N5Q2NTeVwiLFxyXG4vLyBcdFx0cmVxdWlyZWQ6IDI1MDAwLFxyXG4vLyBcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX2Rpc3BsYXksXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMjQgTG9naWMgZ2F0ZXNcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogY2hpbmFTaGFwZXNcclxuLy8gXHRcdFx0PyBcIlN1LS0tLVN1OlJ3UndSd1J3OkN1LS0tLUN1OkN3Q3dDd0N3XCJcclxuLy8gXHRcdFx0OiBcIkNjUmNDY1JjOlJ3Q3dSd0N3OlNyLS1Tdy0tOkN5Q3lDeUN5XCIsXHJcbi8vIFx0XHRyZXF1aXJlZDogMjUwMDAsXHJcbi8vIFx0XHRyZXdhcmQ6IGVudW1IdWJHb2FsUmV3YXJkcy5yZXdhcmRfbG9naWNfZ2F0ZXMsXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMjUgVmlydHVhbCBQcm9jZXNzaW5nXHJcbi8vIFx0e1xyXG4vLyBcdFx0c2hhcGU6IFwiUmctLVJnLS06Q3dSd0N3Unc6LS1SZy0tUmdcIixcclxuLy8gXHRcdHJlcXVpcmVkOiAyNTAwMCxcclxuLy8gXHRcdHJld2FyZDogZW51bUh1YkdvYWxSZXdhcmRzLnJld2FyZF92aXJ0dWFsX3Byb2Nlc3NpbmcsXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0Ly8gMjYgRnJlZXBsYXlcclxuLy8gXHR7XHJcbi8vIFx0XHRzaGFwZTogXCJDYkN1Q2JDdTpTci0tLS0tLTotLUNyU3JDcjpDd0N3Q3dDd1wiLFxyXG4vLyBcdFx0cmVxdWlyZWQ6IDUwMDAwLFxyXG4vLyBcdFx0cmV3YXJkOiBlbnVtSHViR29hbFJld2FyZHMucmV3YXJkX2ZyZWVwbGF5LFxyXG4vLyBcdH0sXHJcbi8vIF0pLFxyXG4vLyBdOyJdfQ==