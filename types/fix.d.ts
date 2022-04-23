
declare module "fix/shapez/mods/modloader" {
	export type ModMetadata = {
		name: string;
		version: string;
		author: string;
		website: string;
		description: string;
		id: string;
		minimumGameVersion?: string;
		// vvv
		settings?: {};
		doesNotAffectSavegame?: boolean;
	};
}


declare module "fix/shapez/game/systems/item_processor" {
	import { enumItemProcessorTypes } from "fix/shapez/game/components/item_processor";
	import { ProcessorImplementationPayload } from "shapez/game/systems/item_processor";
	import { ItemProcessorSystem } from "shapez/game/systems/item_processor";
	export const MOD_ITEM_PROCESSOR_HANDLERS:
		Record<enumItemProcessorTypes, (this: ItemProcessorSystem, payload: ProcessorImplementationPayload) => void>;
}

declare module 'enumTypes' {
	export interface enumItemProcessorTypesMap {
		balancer: 'balancer';
		cutter: 'cutter';
		cutterQuad: 'cutterQuad';
		rotater: 'rotater';
		rotaterCCW: 'rotaterCCW';
		rotater180: 'rotater180';
		stacker: 'stacker';
		trash: 'trash';
		mixer: 'mixer';
		painter: 'painter';
		painterDouble: 'painterDouble';
		painterQuad: 'painterQuad';
		hub: 'hub';
		filter: 'filter';
		reader: 'reader';
		goal: 'goal';
	}
}

declare module "fix/shapez/game/components/item_processor" {
	import { enumItemProcessorTypesMap } from 'enumTypes';
	export type enumItemProcessorTypes = keyof enumItemProcessorTypesMap;
	export const enumItemProcessorTypes: {
		[K in enumItemProcessorTypes]: K;
	}
}


declare module "fix/shapez/game/hub_goals" {
	import { enumItemProcessorTypes } from "fix/shapez/game/components/item_processor";
	export const MOD_ITEM_PROCESSOR_SPEEDS: Record<enumItemProcessorTypes, () => number>;
}


declare module "fix/shapez/mods/mod_signals" {
	import { SerializedGame } from 'shapez/savegame/savegame_typedefs';

	export namespace MOD_SIGNALS {
		// Called when the application has booted and instances like the app settings etc are available
		export const appBooted: Signal,

		export const modifyLevelDefinitions: TypedSignal<[Array[Object]]>;
		export const modifyUpgrades: TypedSignal<[Object]>;

		export const hudElementInitialized: TypedSignal<[BaseHUDPart]>;
		export const hudElementFinalized: TypedSignal<[BaseHUDPart]>;

		export const hudInitializer: TypedSignal<[GameRoot]>;

		export const gameInitialized: TypedSignal<[GameRoot]>;
		export const gameLoadingStageEntered: TypedSignal<[InGameState, string]>;

		export const gameStarted: TypedSignal<[GameRoot]>;

		export const stateEntered: TypedSignal<[GameState]>;

		export const gameSerialized: TypedSignal<[GameRoot, SerializedGame]>;
		export const gameDeserialized: TypedSignal<[GameRoot, SerializedGame]>;
	}
}