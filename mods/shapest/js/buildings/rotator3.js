import { SzDefinition } from "../shapest/definition.js";
import { defaultBuildingVariant, enumItemProcessorTypes, enumRotaterVariants, formatItemsPerSecond, MetaRotaterBuilding, MOD_ITEM_PROCESSOR_HANDLERS, MOD_ITEM_PROCESSOR_SPEEDS, T, Vector } from "../shapez.js";
import { RESOURCES } from "../types/common.js";
const var41 = defaultBuildingVariant;
const var42 = enumRotaterVariants.ccw;
const var180 = enumRotaterVariants.rotate180;
const var31 = 'rotator-three-right';
const var32 = 'rotator-three-left';
const var81 = 'rotator-8-right';
const var82 = 'rotator-8-left';
export class Rotator3 {
    static process_rotate31_cache = new Map();
    static process_rotate32_cache = new Map();
    static process_rotate81_cache = new Map();
    static process_rotate82_cache = new Map();
    static processOrCached(cache, hash, process) {
        let v = cache.get(hash);
        if (!v)
            cache.set(hash, v = process());
        return v;
    }
    static process_31(payload) {
        const push = (d) => payload.outItems.push({ item: payload.entity.root.shapeDefinitionMgr.getShapeItemFromDefinition(d) });
        let item = payload.items.get(0);
        let def = () => item.definition instanceof SzDefinition ? item.definition
            : SzDefinition.fromRawShape(item.definition);
        push(Rotator3.processOrCached(Rotator3.process_rotate31_cache, item.definition.getHash(), () => def().cloneRotate24(8)));
    }
    static process_32(payload) {
        const push = (d) => payload.outItems.push({ item: payload.entity.root.shapeDefinitionMgr.getShapeItemFromDefinition(d) });
        let item = payload.items.get(0);
        let def = () => item.definition instanceof SzDefinition ? item.definition
            : SzDefinition.fromRawShape(item.definition);
        push(Rotator3.processOrCached(Rotator3.process_rotate32_cache, item.definition.getHash(), () => def().cloneRotate24(24 - 8)));
    }
    static process_81(payload) {
        const push = (d) => payload.outItems.push({ item: payload.entity.root.shapeDefinitionMgr.getShapeItemFromDefinition(d) });
        let item = payload.items.get(0);
        let def = () => item.definition instanceof SzDefinition ? item.definition
            : SzDefinition.fromRawShape(item.definition);
        push(Rotator3.processOrCached(Rotator3.process_rotate81_cache, item.definition.getHash(), () => def().cloneRotate24(3)));
    }
    static process_82(payload) {
        const push = (d) => payload.outItems.push({ item: payload.entity.root.shapeDefinitionMgr.getShapeItemFromDefinition(d) });
        let item = payload.items.get(0);
        let def = () => item.definition instanceof SzDefinition ? item.definition
            : SzDefinition.fromRawShape(item.definition);
        push(Rotator3.processOrCached(Rotator3.process_rotate82_cache, item.definition.getHash(), () => def().cloneRotate24(24 - 3)));
    }
    static install(mod) {
        Object.assign(enumRotaterVariants, {
            [var31]: var31,
            [var32]: var32,
            [var81]: var81,
            [var82]: var82,
        });
        mod.modInterface.addVariantToExistingBuilding(
        // @ts-ignore
        MetaRotaterBuilding, var31, {
            name: "Cutter (Mirrored)",
            description: "A mirrored cutter",
            tutorialImageBase64: RESOURCES.rotate31,
            regularSpriteBase64: RESOURCES.rotate31,
            blueprintSpriteBase64: RESOURCES.rotate31,
            dimensions: new Vector(1, 1),
            additionalStatistics(root) {
                const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.rotater);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed),],
                ];
            },
            // isUnlocked(root) {
            // 	return true;
            // },
        });
        mod.modInterface.addVariantToExistingBuilding(
        // @ts-ignore
        MetaRotaterBuilding, var32, {
            name: "Cutter (Mirrored)",
            description: "A mirrored cutter",
            tutorialImageBase64: RESOURCES.rotate32,
            regularSpriteBase64: RESOURCES.rotate32,
            blueprintSpriteBase64: RESOURCES.rotate32,
            dimensions: new Vector(1, 1),
            additionalStatistics(root) {
                const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.rotater);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed),],
                ];
            },
            // isUnlocked(root) {
            // 	return true;
            // },
        });
        mod.modInterface.addVariantToExistingBuilding(
        // @ts-ignore
        MetaRotaterBuilding, var81, {
            name: "Cutter (Mirrored)",
            description: "A mirrored cutter",
            tutorialImageBase64: RESOURCES.rotate81,
            regularSpriteBase64: RESOURCES.rotate81,
            blueprintSpriteBase64: RESOURCES.rotate81,
            dimensions: new Vector(1, 1),
            additionalStatistics(root) {
                const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.rotater);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed),],
                ];
            },
            // isUnlocked(root) {
            // 	return true;
            // },
        });
        mod.modInterface.addVariantToExistingBuilding(
        // @ts-ignore
        MetaRotaterBuilding, var82, {
            name: "Cutter (Mirrored)",
            description: "A mirrored cutter",
            tutorialImageBase64: RESOURCES.rotate82,
            regularSpriteBase64: RESOURCES.rotate82,
            blueprintSpriteBase64: RESOURCES.rotate82,
            dimensions: new Vector(1, 1),
            additionalStatistics(root) {
                const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.rotater);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed),],
                ];
            },
            // isUnlocked(root) {
            // 	return true;
            // },
        });
        // Extend instance methods
        mod.modInterface.extendClass(MetaRotaterBuilding, ({ $old }) => ({
            updateVariants(entity, rotationVariant, variant) {
                if (variant === var31) {
                    entity.components.ItemProcessor.type = var31;
                }
                else if (variant === var32) {
                    entity.components.ItemProcessor.type = var32;
                }
                else if (variant === var81) {
                    entity.components.ItemProcessor.type = var81;
                }
                else if (variant === var82) {
                    entity.components.ItemProcessor.type = var82;
                }
                else {
                    $old.updateVariants.call(this, entity, rotationVariant, variant);
                }
            },
            getAvailableVariants(root) {
                let vars = [];
                if (root.hubGoals.isRewardUnlocked('reward_rotater')) {
                    vars.push(var41, var42);
                }
                if (root.hubGoals.isRewardUnlocked('reward_rotater_ccw')) {
                    vars.push(var31, var32);
                }
                if (root.hubGoals.isRewardUnlocked('reward_rotater_180')) {
                    vars.push(var180, var81, var82);
                }
                return vars;
            },
        }));
        function registerProcessor(variant, speed, processor) {
            Object.assign(enumItemProcessorTypes, {
                [variant]: variant
            });
            Object.assign(MOD_ITEM_PROCESSOR_SPEEDS, {
                [variant]: (root) => root.hubGoals.getProcessorBaseSpeed(speed)
            });
            Object.assign(MOD_ITEM_PROCESSOR_HANDLERS, {
                [variant]: processor
            });
        }
        registerProcessor(var31, 'rotater', Rotator3.process_31);
        registerProcessor(var32, 'rotater', Rotator3.process_32);
        registerProcessor(var81, 'rotater', Rotator3.process_81);
        registerProcessor(var82, 'rotater', Rotator3.process_82);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRvcjMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9idWlsZGluZ3Mvcm90YXRvcjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBWSxtQkFBbUIsRUFBTywyQkFBMkIsRUFBRSx5QkFBeUIsRUFBOEQsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1UixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHL0MsTUFBTSxLQUFLLEdBQUcsc0JBQXNCLENBQUM7QUFDckMsTUFBTSxLQUFLLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDO0FBQ3RDLE1BQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztBQUU3QyxNQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztBQUNwQyxNQUFNLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztBQUNuQyxNQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztBQUNoQyxNQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztBQUUvQixNQUFNLE9BQU8sUUFBUTtJQUdwQixNQUFNLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFDaEUsTUFBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQUNoRSxNQUFNLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFDaEUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFnQyxFQUFFLElBQVksRUFBRSxPQUEyQjtRQUNqRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFD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QyxNQUFNLENBQUMsMkJBQTJCLEVBQUU7Z0JBQzFDLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUzthQUNwQixDQUFDLENBQUE7UUFDSCxDQUFDO1FBRUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN6RGVmaW5pdGlvbiB9IGZyb20gXCIuLi9zaGFwZXN0L2RlZmluaXRpb24uanNcIjtcclxuaW1wb3J0IHsgU3pTaGFwZUl0ZW0gfSBmcm9tIFwiLi4vc2hhcGVzdC9pdGVtLmpzXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRCdWlsZGluZ1ZhcmlhbnQsIGVudW1JdGVtUHJvY2Vzc29yVHlwZXMsIGVudW1Sb3RhdGVyVmFyaWFudHMsIGZvcm1hdEl0ZW1zUGVyU2Vjb25kLCBHYW1lUm9vdCwgTWV0YVJvdGF0ZXJCdWlsZGluZywgTW9kLCBNT0RfSVRFTV9QUk9DRVNTT1JfSEFORExFUlMsIE1PRF9JVEVNX1BST0NFU1NPUl9TUEVFRFMsIFByb2Nlc3NvckltcGxlbWVudGF0aW9uUGF5bG9hZCwgU2hhcGVEZWZpbml0aW9uLCBTaGFwZUl0ZW0sIFQsIFZlY3RvciB9IGZyb20gXCIuLi9zaGFwZXouanNcIjtcclxuaW1wb3J0IHsgUkVTT1VSQ0VTIH0gZnJvbSBcIi4uL3R5cGVzL2NvbW1vbi5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHZhcjQxID0gZGVmYXVsdEJ1aWxkaW5nVmFyaWFudDtcclxuY29uc3QgdmFyNDIgPSBlbnVtUm90YXRlclZhcmlhbnRzLmNjdztcclxuY29uc3QgdmFyMTgwID0gZW51bVJvdGF0ZXJWYXJpYW50cy5yb3RhdGUxODA7XHJcblxyXG5jb25zdCB2YXIzMSA9ICdyb3RhdG9yLXRocmVlLXJpZ2h0JztcclxuY29uc3QgdmFyMzIgPSAncm90YXRvci10aHJlZS1sZWZ0JztcclxuY29uc3QgdmFyODEgPSAncm90YXRvci04LXJpZ2h0JztcclxuY29uc3QgdmFyODIgPSAncm90YXRvci04LWxlZnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0b3IzIHtcclxuXHJcblxyXG5cdHN0YXRpYyBwcm9jZXNzX3JvdGF0ZTMxX2NhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFN6RGVmaW5pdGlvbj4oKTtcclxuXHRzdGF0aWMgcHJvY2Vzc19yb3RhdGUzMl9jYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBTekRlZmluaXRpb24+KCk7XHJcblx0c3RhdGljIHByb2Nlc3Nfcm90YXRlODFfY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgU3pEZWZpbml0aW9uPigpO1xyXG5cdHN0YXRpYyBwcm9jZXNzX3JvdGF0ZTgyX2NhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFN6RGVmaW5pdGlvbj4oKTtcclxuXHRzdGF0aWMgcHJvY2Vzc09yQ2FjaGVkKGNhY2hlOiBNYXA8c3RyaW5nLCBTekRlZmluaXRpb24+LCBoYXNoOiBzdHJpbmcsIHByb2Nlc3M6ICgpID0+IFN6RGVmaW5pdGlvbik6IFN6RGVmaW5pdGlvbiB7XHJcblx0XHRsZXQgdiA9IGNhY2hlLmdldChoYXNoKTtcclxuXHRcdGlmICghdikgY2FjaGUuc2V0KGhhc2gsIHYgPSBwcm9jZXNzKCkpO1xyXG5cdFx0cmV0dXJuIHY7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcHJvY2Vzc18zMShwYXlsb2FkOiBQcm9jZXNzb3JJbXBsZW1lbnRhdGlvblBheWxvYWQpIHtcclxuXHRcdGNvbnN0IHB1c2ggPSAoZDogU2hhcGVEZWZpbml0aW9uKSA9PiBwYXlsb2FkLm91dEl0ZW1zLnB1c2goeyBpdGVtOiBwYXlsb2FkLmVudGl0eS5yb290LnNoYXBlRGVmaW5pdGlvbk1nci5nZXRTaGFwZUl0ZW1Gcm9tRGVmaW5pdGlvbihkKSB9KTtcclxuXHRcdGxldCBpdGVtID0gcGF5bG9hZC5pdGVtcy5nZXQoMCkgYXMgU2hhcGVJdGVtIHwgU3pTaGFwZUl0ZW07XHJcblx0XHRsZXQgZGVmID0gKCkgPT4gaXRlbS5kZWZpbml0aW9uIGluc3RhbmNlb2YgU3pEZWZpbml0aW9uID8gaXRlbS5kZWZpbml0aW9uXHJcblx0XHRcdDogU3pEZWZpbml0aW9uLmZyb21SYXdTaGFwZShpdGVtLmRlZmluaXRpb24pO1xyXG5cdFx0cHVzaChcclxuXHRcdFx0Um90YXRvcjMucHJvY2Vzc09yQ2FjaGVkKFxyXG5cdFx0XHRcdFJvdGF0b3IzLnByb2Nlc3Nfcm90YXRlMzFfY2FjaGUsXHJcblx0XHRcdFx0aXRlbS5kZWZpbml0aW9uLmdldEhhc2goKSxcclxuXHRcdFx0XHQoKSA9PiBkZWYoKS5jbG9uZVJvdGF0ZTI0KDgpLFxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHByb2Nlc3NfMzIocGF5bG9hZDogUHJvY2Vzc29ySW1wbGVtZW50YXRpb25QYXlsb2FkKSB7XHJcblx0XHRjb25zdCBwdXNoID0gKGQ6IFNoYXBlRGVmaW5pdGlvbikgPT4gcGF5bG9hZC5vdXRJdGVtcy5wdXNoKHsgaXRlbTogcGF5bG9hZC5lbnRpdHkucm9vdC5zaGFwZURlZmluaXRpb25NZ3IuZ2V0U2hhcGVJdGVtRnJvbURlZmluaXRpb24oZCkgfSk7XHJcblx0XHRsZXQgaXRlbSA9IHBheWxvYWQuaXRlbXMuZ2V0KDApIGFzIFNoYXBlSXRlbSB8IFN6U2hhcGVJdGVtO1xyXG5cdFx0bGV0IGRlZiA9ICgpID0+IGl0ZW0uZGVmaW5pdGlvbiBpbnN0YW5jZW9mIFN6RGVmaW5pdGlvbiA/IGl0ZW0uZGVmaW5pdGlvblxyXG5cdFx0XHQ6IFN6RGVmaW5pdGlvbi5mcm9tUmF3U2hhcGUoaXRlbS5kZWZpbml0aW9uKTtcclxuXHRcdHB1c2goXHJcblx0XHRcdFJvdGF0b3IzLnByb2Nlc3NPckNhY2hlZChcclxuXHRcdFx0XHRSb3RhdG9yMy5wcm9jZXNzX3JvdGF0ZTMyX2NhY2hlLFxyXG5cdFx0XHRcdGl0ZW0uZGVmaW5pdGlvbi5nZXRIYXNoKCksXHJcblx0XHRcdFx0KCkgPT4gZGVmKCkuY2xvbmVSb3RhdGUyNCgyNCAtIDgpLFxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblxyXG5cdHN0YXRpYyBwcm9jZXNzXzgxKHBheWxvYWQ6IFByb2Nlc3NvckltcGxlbWVudGF0aW9uUGF5bG9hZCkge1xyXG5cdFx0Y29uc3QgcHVzaCA9IChkOiBTaGFwZURlZmluaXRpb24pID0+IHBheWxvYWQub3V0SXRlbXMucHVzaCh7IGl0ZW06IHBheWxvYWQuZW50aXR5LnJvb3Quc2hhcGVEZWZpbml0aW9uTWdyLmdldFNoYXBlSXRlbUZyb21EZWZpbml0aW9uKGQpIH0pO1xyXG5cdFx0bGV0IGl0ZW0gPSBwYXlsb2FkLml0ZW1zLmdldCgwKSBhcyBTaGFwZUl0ZW0gfCBTelNoYXBlSXRlbTtcclxuXHRcdGxldCBkZWYgPSAoKSA9PiBpdGVtLmRlZmluaXRpb24gaW5zdGFuY2VvZiBTekRlZmluaXRpb24gPyBpdGVtLmRlZmluaXRpb25cclxuXHRcdFx0OiBTekRlZmluaXRpb24uZnJvbVJhd1NoYXBlKGl0ZW0uZGVmaW5pdGlvbik7XHJcblx0XHRwdXNoKFxyXG5cdFx0XHRSb3RhdG9yMy5wcm9jZXNzT3JDYWNoZWQoXHJcblx0XHRcdFx0Um90YXRvcjMucHJvY2Vzc19yb3RhdGU4MV9jYWNoZSxcclxuXHRcdFx0XHRpdGVtLmRlZmluaXRpb24uZ2V0SGFzaCgpLFxyXG5cdFx0XHRcdCgpID0+IGRlZigpLmNsb25lUm90YXRlMjQoMyksXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcHJvY2Vzc184MihwYXlsb2FkOiBQcm9jZXNzb3JJbXBsZW1lbnRhdGlvblBheWxvYWQpIHtcclxuXHRcdGNvbnN0IHB1c2ggPSAoZDogU2hhcGVEZWZpbml0aW9uKSA9PiBwYXlsb2FkLm91dEl0ZW1zLnB1c2goeyBpdGVtOiBwYXlsb2FkLmVudGl0eS5yb290LnNoYXBlRGVmaW5pdGlvbk1nci5nZXRTaGFwZUl0ZW1Gcm9tRGVmaW5pdGlvbihkKSB9KTtcclxuXHRcdGxldCBpdGVtID0gcGF5bG9hZC5pdGVtcy5nZXQoMCkgYXMgU2hhcGVJdGVtIHwgU3pTaGFwZUl0ZW07XHJcblx0XHRsZXQgZGVmID0gKCkgPT4gaXRlbS5kZWZpbml0aW9uIGluc3RhbmNlb2YgU3pEZWZpbml0aW9uID8gaXRlbS5kZWZpbml0aW9uXHJcblx0XHRcdDogU3pEZWZpbml0aW9uLmZyb21SYXdTaGFwZShpdGVtLmRlZmluaXRpb24pO1xyXG5cdFx0cHVzaChcclxuXHRcdFx0Um90YXRvcjMucHJvY2Vzc09yQ2FjaGVkKFxyXG5cdFx0XHRcdFJvdGF0b3IzLnByb2Nlc3Nfcm90YXRlODJfY2FjaGUsXHJcblx0XHRcdFx0aXRlbS5kZWZpbml0aW9uLmdldEhhc2goKSxcclxuXHRcdFx0XHQoKSA9PiBkZWYoKS5jbG9uZVJvdGF0ZTI0KDI0IC0gMyksXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHN0YXRpYyBpbnN0YWxsKG1vZDogTW9kKSB7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbihlbnVtUm90YXRlclZhcmlhbnRzLCB7XHJcblx0XHRcdFt2YXIzMV06IHZhcjMxLFxyXG5cdFx0XHRbdmFyMzJdOiB2YXIzMixcclxuXHRcdFx0W3ZhcjgxXTogdmFyODEsXHJcblx0XHRcdFt2YXI4Ml06IHZhcjgyLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5hZGRWYXJpYW50VG9FeGlzdGluZ0J1aWxkaW5nKFxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdE1ldGFSb3RhdGVyQnVpbGRpbmcsXHJcblx0XHRcdHZhcjMxLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJDdXR0ZXIgKE1pcnJvcmVkKVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgbWlycm9yZWQgY3V0dGVyXCIsXHJcblxyXG5cdFx0XHRcdHR1dG9yaWFsSW1hZ2VCYXNlNjQ6IFJFU09VUkNFUy5yb3RhdGUzMSxcclxuXHRcdFx0XHRyZWd1bGFyU3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzEsXHJcblx0XHRcdFx0Ymx1ZXByaW50U3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzEsXHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoMSwgMSksXHJcblxyXG5cdFx0XHRcdGFkZGl0aW9uYWxTdGF0aXN0aWNzKHJvb3QpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNwZWVkID0gcm9vdC5odWJHb2Fscy5nZXRQcm9jZXNzb3JCYXNlU3BlZWQoZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcy5yb3RhdGVyKTtcclxuXHRcdFx0XHRcdHJldHVybiBbW1QuaW5nYW1lLmJ1aWxkaW5nUGxhY2VtZW50LmluZm9UZXh0cy5zcGVlZCwgZm9ybWF0SXRlbXNQZXJTZWNvbmQoc3BlZWQpLF0sXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gaXNVbmxvY2tlZChyb290KSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5hZGRWYXJpYW50VG9FeGlzdGluZ0J1aWxkaW5nKFxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdE1ldGFSb3RhdGVyQnVpbGRpbmcsXHJcblx0XHRcdHZhcjMyLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJDdXR0ZXIgKE1pcnJvcmVkKVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgbWlycm9yZWQgY3V0dGVyXCIsXHJcblxyXG5cdFx0XHRcdHR1dG9yaWFsSW1hZ2VCYXNlNjQ6IFJFU09VUkNFUy5yb3RhdGUzMixcclxuXHRcdFx0XHRyZWd1bGFyU3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzIsXHJcblx0XHRcdFx0Ymx1ZXByaW50U3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzIsXHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoMSwgMSksXHJcblxyXG5cdFx0XHRcdGFkZGl0aW9uYWxTdGF0aXN0aWNzKHJvb3QpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNwZWVkID0gcm9vdC5odWJHb2Fscy5nZXRQcm9jZXNzb3JCYXNlU3BlZWQoZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcy5yb3RhdGVyKTtcclxuXHRcdFx0XHRcdHJldHVybiBbW1QuaW5nYW1lLmJ1aWxkaW5nUGxhY2VtZW50LmluZm9UZXh0cy5zcGVlZCwgZm9ybWF0SXRlbXNQZXJTZWNvbmQoc3BlZWQpLF0sXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gaXNVbmxvY2tlZChyb290KSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5hZGRWYXJpYW50VG9FeGlzdGluZ0J1aWxkaW5nKFxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdE1ldGFSb3RhdGVyQnVpbGRpbmcsXHJcblx0XHRcdHZhcjgxLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJDdXR0ZXIgKE1pcnJvcmVkKVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgbWlycm9yZWQgY3V0dGVyXCIsXHJcblxyXG5cdFx0XHRcdHR1dG9yaWFsSW1hZ2VCYXNlNjQ6IFJFU09VUkNFUy5yb3RhdGU4MSxcclxuXHRcdFx0XHRyZWd1bGFyU3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlODEsXHJcblx0XHRcdFx0Ymx1ZXByaW50U3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlODEsXHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoMSwgMSksXHJcblxyXG5cdFx0XHRcdGFkZGl0aW9uYWxTdGF0aXN0aWNzKHJvb3QpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNwZWVkID0gcm9vdC5odWJHb2Fscy5nZXRQcm9jZXNzb3JCYXNlU3BlZWQoZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcy5yb3RhdGVyKTtcclxuXHRcdFx0XHRcdHJldHVybiBbW1QuaW5nYW1lLmJ1aWxkaW5nUGxhY2VtZW50LmluZm9UZXh0cy5zcGVlZCwgZm9ybWF0SXRlbXNQZXJTZWNvbmQoc3BlZWQpLF0sXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gaXNVbmxvY2tlZChyb290KSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5hZGRWYXJpYW50VG9FeGlzdGluZ0J1aWxkaW5nKFxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdE1ldGFSb3RhdGVyQnVpbGRpbmcsXHJcblx0XHRcdHZhcjgyLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJDdXR0ZXIgKE1pcnJvcmVkKVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgbWlycm9yZWQgY3V0dGVyXCIsXHJcblxyXG5cdFx0XHRcdHR1dG9yaWFsSW1hZ2VCYXNlNjQ6IFJFU09VUkNFUy5yb3RhdGU4MixcclxuXHRcdFx0XHRyZWd1bGFyU3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlODIsXHJcblx0XHRcdFx0Ymx1ZXByaW50U3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlODIsXHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoMSwgMSksXHJcblxyXG5cdFx0XHRcdGFkZGl0aW9uYWxTdGF0aXN0aWNzKHJvb3QpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNwZWVkID0gcm9vdC5odWJHb2Fscy5nZXRQcm9jZXNzb3JCYXNlU3BlZWQoZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcy5yb3RhdGVyKTtcclxuXHRcdFx0XHRcdHJldHVybiBbW1QuaW5nYW1lLmJ1aWxkaW5nUGxhY2VtZW50LmluZm9UZXh0cy5zcGVlZCwgZm9ybWF0SXRlbXNQZXJTZWNvbmQoc3BlZWQpLF0sXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gaXNVbmxvY2tlZChyb290KSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIEV4dGVuZCBpbnN0YW5jZSBtZXRob2RzXHJcblx0XHRtb2QubW9kSW50ZXJmYWNlLmV4dGVuZENsYXNzKE1ldGFSb3RhdGVyQnVpbGRpbmcsICh7ICRvbGQgfSkgPT4gKHtcclxuXHRcdFx0dXBkYXRlVmFyaWFudHMoZW50aXR5OiB7IGNvbXBvbmVudHM6IHsgSXRlbVByb2Nlc3NvcjogeyB0eXBlOiBzdHJpbmc7IH07IH07IH0sIHJvdGF0aW9uVmFyaWFudDogYW55LCB2YXJpYW50OiBzdHJpbmcpIHtcclxuXHRcdFx0XHRpZiAodmFyaWFudCA9PT0gdmFyMzEpIHtcclxuXHRcdFx0XHRcdGVudGl0eS5jb21wb25lbnRzLkl0ZW1Qcm9jZXNzb3IudHlwZSA9IHZhcjMxO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFyaWFudCA9PT0gdmFyMzIpIHtcclxuXHRcdFx0XHRcdGVudGl0eS5jb21wb25lbnRzLkl0ZW1Qcm9jZXNzb3IudHlwZSA9IHZhcjMyO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFyaWFudCA9PT0gdmFyODEpIHtcclxuXHRcdFx0XHRcdGVudGl0eS5jb21wb25lbnRzLkl0ZW1Qcm9jZXNzb3IudHlwZSA9IHZhcjgxO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFyaWFudCA9PT0gdmFyODIpIHtcclxuXHRcdFx0XHRcdGVudGl0eS5jb21wb25lbnRzLkl0ZW1Qcm9jZXNzb3IudHlwZSA9IHZhcjgyO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkb2xkLnVwZGF0ZVZhcmlhbnRzLmNhbGwodGhpcywgZW50aXR5LCByb3RhdGlvblZhcmlhbnQsIHZhcmlhbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0QXZhaWxhYmxlVmFyaWFudHMocm9vdDogR2FtZVJvb3QpIHtcclxuXHRcdFx0XHRsZXQgdmFycyA9IFtdO1xyXG5cdFx0XHRcdGlmIChyb290Lmh1YkdvYWxzLmlzUmV3YXJkVW5sb2NrZWQoJ3Jld2FyZF9yb3RhdGVyJykpIHtcclxuXHRcdFx0XHRcdHZhcnMucHVzaCh2YXI0MSwgdmFyNDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocm9vdC5odWJHb2Fscy5pc1Jld2FyZFVubG9ja2VkKCdyZXdhcmRfcm90YXRlcl9jY3cnKSkge1xyXG5cdFx0XHRcdFx0dmFycy5wdXNoKHZhcjMxLCB2YXIzMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyb290Lmh1YkdvYWxzLmlzUmV3YXJkVW5sb2NrZWQoJ3Jld2FyZF9yb3RhdGVyXzE4MCcpKSB7XHJcblx0XHRcdFx0XHR2YXJzLnB1c2godmFyMTgwLCB2YXI4MSwgdmFyODIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFycztcclxuXHRcdFx0fSxcclxuXHRcdH0pKTtcclxuXHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVnaXN0ZXJQcm9jZXNzb3IodmFyaWFudDogc3RyaW5nLCBzcGVlZDoga2V5b2YgZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcywgcHJvY2Vzc29yOiAocGF5bG9hZDogUHJvY2Vzc29ySW1wbGVtZW50YXRpb25QYXlsb2FkKSA9PiB2b2lkKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24oZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcywge1xyXG5cdFx0XHRcdFt2YXJpYW50XTogdmFyaWFudFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbihNT0RfSVRFTV9QUk9DRVNTT1JfU1BFRURTLCB7XHJcblx0XHRcdFx0W3ZhcmlhbnRdOiAocm9vdDogR2FtZVJvb3QpID0+IHJvb3QuaHViR29hbHMuZ2V0UHJvY2Vzc29yQmFzZVNwZWVkKHNwZWVkKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbihNT0RfSVRFTV9QUk9DRVNTT1JfSEFORExFUlMsIHtcclxuXHRcdFx0XHRbdmFyaWFudF06IHByb2Nlc3NvclxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHJlZ2lzdGVyUHJvY2Vzc29yKHZhcjMxLCAncm90YXRlcicsIFJvdGF0b3IzLnByb2Nlc3NfMzEpO1xyXG5cdFx0cmVnaXN0ZXJQcm9jZXNzb3IodmFyMzIsICdyb3RhdGVyJywgUm90YXRvcjMucHJvY2Vzc18zMik7XHJcblxyXG5cdFx0cmVnaXN0ZXJQcm9jZXNzb3IodmFyODEsICdyb3RhdGVyJywgUm90YXRvcjMucHJvY2Vzc184MSk7XHJcblx0XHRyZWdpc3RlclByb2Nlc3Nvcih2YXI4MiwgJ3JvdGF0ZXInLCBSb3RhdG9yMy5wcm9jZXNzXzgyKTtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==