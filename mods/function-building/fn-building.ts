import { ModBase } from "../../types/dimavas-lib.js";
import { BaseItem, BOOL_FALSE_SINGLETON, BOOL_TRUE_SINGLETON, Entity, enumDirection, enumPinSlotType, GameRoot, LogicGateSystem, MetaVirtualProcessorBuilding, Vector } from "../../types/shapez.js";
import { RESOURCES } from "./resourses.js";

const var_call = 'virtual-function-call';
const var_process = 'virtual-function-process';
const STABLE_LIMIT = 20;

type hashFname = string;
type hashArgs = string;



export class FnBuilding extends MetaVirtualProcessorBuilding {
	updateVariants(entity: Entity, rotationVariant: number, variant: string) {
		const gateType = variant;
		entity.components.LogicGate.type = gateType;
		const pinComp = entity.components.WiredPins;
		pinComp.setSlots([
			// name
			{ pos: new Vector(0, 0), direction: enumDirection.left, type: enumPinSlotType.logicalAcceptor },
			// arguments
			{ pos: new Vector(0, 0), direction: enumDirection.bottom, type: enumPinSlotType.logicalAcceptor },
			{ pos: new Vector(1, 0), direction: enumDirection.bottom, type: enumPinSlotType.logicalAcceptor },
			{ pos: new Vector(2, 0), direction: enumDirection.bottom, type: enumPinSlotType.logicalAcceptor },
			{ pos: new Vector(3, 0), direction: enumDirection.bottom, type: enumPinSlotType.logicalAcceptor },
			// return
			{ pos: new Vector(0, 0), direction: enumDirection.top, type: enumPinSlotType.logicalEjector },
			{ pos: new Vector(1, 0), direction: enumDirection.top, type: enumPinSlotType.logicalEjector },
			{ pos: new Vector(2, 0), direction: enumDirection.top, type: enumPinSlotType.logicalEjector },
			{ pos: new Vector(3, 0), direction: enumDirection.top, type: enumPinSlotType.logicalEjector },
		]);
	}

	static requests: Record<
		hashFname,
		{ hashArgs: hashArgs, args: (BaseItem | null)[] }
	> = {};
	static results: Record<
		hashFname,
		Record<hashArgs,
			{ hashResult: hashArgs, result: (BaseItem | null)[], stability: number }
		>> = {};
	// static results : Map<string, >
	// static cache = new Map<string, (BaseItem | null)[]>();

	static compute_FN_CALL(parameters: Array<BaseItem | null>) {
		let [oName, ...oArgs] = parameters;
		let name = oName?.getAsCopyableKey() ?? 'null';
		let fnResults = FnBuilding.results[name] ??= {};
		let argsStr = oArgs.map(e => e?.getAsCopyableKey() ?? 'null').join(';');

		let result = fnResults[argsStr];
		if (result && result.stability >= STABLE_LIMIT) return result.result.concat([BOOL_TRUE_SINGLETON]);

		FnBuilding.requests[name] = {
			hashArgs: argsStr,
			args: oArgs,
		};
		if (result) return result.result.concat([BOOL_FALSE_SINGLETON]);

		// console.log('call:', parameters);
		return parameters.slice(1).concat([BOOL_FALSE_SINGLETON]);
	}

	static compute_FN_PROCESS(parameters: Array<BaseItem | null>) {
		let [oName, ...oArgs] = parameters;
		let name = oName?.getAsCopyableKey() ?? 'null';
		let resultStr = oArgs.map(e => e?.getAsCopyableKey() ?? 'null').join(';');

		let fnRequest = FnBuilding.requests[name];
		let fnResults = FnBuilding.results[name] ??= {};

		if (parameters.every(e => e?.getAsCopyableKey() == name)) {
			fnResults = FnBuilding.results[name] = {};
		}

		if (!fnRequest) return [null, null, null, null, BOOL_FALSE_SINGLETON];

		let result = fnResults[fnRequest.hashArgs] ??= { hashResult: '', result: [], stability: 0 };
		console.log(result);
		if (result.hashResult == resultStr) {
			result.stability++;
			if (result.stability > STABLE_LIMIT) delete FnBuilding.requests[name];
		} else {
			result.stability = 0;
			result.hashResult = resultStr;
			result.result = oArgs;
		}
		return fnRequest.args;
	}


	static install(mod: ModBase) {
		// MOD_ITEM_PROCESSOR_HANDLERS[FnBuilding.variant as any] = FnBuilding.process;
		mod.modInterface.addVariantToExistingBuilding(
			MetaVirtualProcessorBuilding,
			var_call,
			{
				name: 'Function',
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
		mod.modInterface.addVariantToExistingBuilding(
			MetaVirtualProcessorBuilding as any,
			var_process,
			{
				name: 'Function',
				description: 'test_desc',

				tutorialImageBase64: RESOURCES.fn_process,
				regularSpriteBase64: RESOURCES.fn_process,
				blueprintSpriteBase64: RESOURCES.fn_process,

				dimensions: new Vector(4, 1),
				isUnlocked(root) {
					return true as any;
				},
			}
		);
		mod.extendSuperclass<MetaVirtualProcessorBuilding>(
			$old =>
				class extends MetaVirtualProcessorBuilding {
					updateVariants(entity: Entity, rotationVariant: number, variant: string) {
						if (variant == var_call || variant == var_process) {
							return FnBuilding.prototype.updateVariants.call(this, entity, rotationVariant, variant);
						}
						return $old.updateVariants.call(this, entity, rotationVariant, variant);
					}
				});

		mod.extendSuperclass<LogicGateSystem>($old =>
			class extends LogicGateSystem {
				update() {
					this.boundOperations[var_call] ??= FnBuilding.compute_FN_CALL.bind(this);
					this.boundOperations[var_process] ??= FnBuilding.compute_FN_PROCESS.bind(this);
					return $old.update.call(this);
				}
			});
	}
}

