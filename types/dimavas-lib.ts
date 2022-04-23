import { Mod, ModMetadata } from "./shapez";

export type Base64PngString = string & { _: 'Base64PngString' };
type Base64FileString = string & { _: 'Base64FileString' };

export function base64ToPng(file: Base64FileString) {
	return `data:image/png;base64,${file}` as Base64PngString;
}


export function Metadata(METADATA: ModMetadata) {
	return (Mod: typeof ModBase) => {
		Mod.register(METADATA);
	}
}
type Class<T> = abstract new (...args: any) => T;
export class ModBase extends Mod {
	extendSuperclass<T>(makeSubclass: ($old: T) => Class<T>): void;
	extendSuperclass<T>(subclass: Class<T>): void;
	extendSuperclass<T>(subclassOrMaker: Class<T> | (($old: T) => Class<T>)): void {
		if (subclassOrMaker.prototype) {
			let subclass = subclassOrMaker as Class<T>;
			let superclass = Object.getPrototypeOf(subclass);
			return this.modInterface.extendClass(superclass, () => subclass.prototype);
		} else {
			let maker = subclassOrMaker as ($old: T) => Class<T>;
			let superclass = Object.getPrototypeOf(maker({} as any));
			return this.modInterface.extendClass(superclass, ({ $old }) => maker($old).prototype);
		}
	}
	static register(metadata: ModMetadata) {
		window.$shapez_registerMod(this, metadata);
	}
	use(module: { install(mod: ModBase): void }): this {
		module.install(this);
		return this;
	}
}