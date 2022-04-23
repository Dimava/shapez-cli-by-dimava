import { Mod } from "../shapez.js";


declare module "shapez/game/components/item_processor" {
	export interface enumItemProcessorTypes {
		flipper: 'flipper';
		priority_balancer: 'priority_balancer';
	}
}

const urlRoot = `http://127.0.0.1:5500/shapest-working/sprites/`;
// const urlRoot = `https://dimava.github.io/shapez.mods/shapest-working/sprites/`;

async function fetch64(img: string) {
	return `${urlRoot}${img}`;
	// http://127.0.0.1:8080/shapest-working/sprites/1.png
	// let r = await fetch(`http://127.0.0.1:8080/shapest-working/sprites/${img}`);
	// let t = await r.text();
	// return `data:image/${img.split('.').pop()};base64,${btoa(t)}`;
}

function base64ToPng(s: string) {
	return `data:image/png;base64,${s}`;
}

import flipper from '../../sprites/flip.png'
import flip_white from '../../sprites/flip_white.png';
import rotate31 from '../../sprites/rotate31.png';
import rotate32 from '../../sprites/rotate32.png';
import rotate81 from '../../sprites/rotate41.png';
import rotate82 from '../../sprites/rotate42.png';
import splitter1 from '../../sprites/splitter1.png';
import tut_painter2 from '../../sprites/tut_painter2.png';

export const RESOURCES = {
	flipper: base64ToPng(flipper),
	flip_white: base64ToPng(flip_white),
	rotate31: base64ToPng(rotate31),
	rotate32: base64ToPng(rotate32),
	rotate81: base64ToPng(rotate81),
	rotate82: base64ToPng(rotate82),
	splitter1: base64ToPng(splitter1),
	tut_painter2: base64ToPng(tut_painter2),
};

console.log(RESOURCES);



export function strToH(s: string): string {
	let hash = 0;
	for (let c of s) {
		hash = (((hash << 5) - hash) + c.charCodeAt(0)) | 0;
	}
	return hash.toString(16);
}



export function override<
	C extends abstract new (...args: any) => any, T extends InstanceType<C>, K extends keyof T
>(cls: C, name: K, fn: (oldFnName: K) => T[K]) {
	let oldFnName = name as string;
	while (cls.prototype[oldFnName]) oldFnName = '_' + oldFnName;
	cls.prototype[oldFnName] = cls.prototype[name];
	cls.prototype[name] = fn(oldFnName as K);
}


export function ExtendSuperclass<
	C extends abstract new (...args: any) => any,
	T extends InstanceType<C>,
	O extends C
>(mod: Mod, cls: C, makeSubclass: O | ((old: { $old: T }) => O)) {
	mod.modInterface.extendClass(cls, (old) => {
		if (cls.isPrototypeOf(makeSubclass)) return makeSubclass;
		return (makeSubclass as ((old: { $old: T }) => O))(old).prototype;
	});
}

export function ExtendSuperclass2<C extends abstract new (...args: any) => any>(subclass: C) {
	let x = subclass.prototype;
	let p = x.__proto__;
	let xd = Object.getOwnPropertyDescriptors(x);
	delete (xd as any).constructor;
	Object.defineProperties(p, xd);
	x.__proto__ = p.__proto__;
}

// export function ExtendSuperclass<
// 	C extends abstract new (...args: any) => any,
// 	T extends InstanceType<C>,
// 	O extends C
// >(mod: Mod, subclass: O): void;
// export function ExtendSuperclass<
// 	C extends abstract new (...args: any) => any,
// 	T extends InstanceType<C>,
// 	O extends C
// >(mod: Mod, cls: C, subclass: O): void;
// export function ExtendSuperclass<
// 	C extends abstract new (...args: any) => any,
// 	T extends InstanceType<C>,
// 	O extends C
// >(mod: Mod, cls: C, subclass: (old: { $old: T }) => O): void;


// export function ExtendSuperclass<
// 	C extends abstract new (...args: any) => any,
// 	T extends InstanceType<C>,
// 	O extends C
// >(mod: Mod, cls: C, subclass?: O | ((old: { $old: T }) => O)): void {
// 	let superclass: C;
// 	let creator: (old: { $old: T }) => O;

// 	function superOverride(X) {
// 		let P = X.__proto__;
// 		let x = X.prototype;
// 		let p = x.__proto__;
// 		console.log({p,x,P,X})
// 		let xd = Object.getOwnPropertyDescriptors(x);
// 		delete xd.constructor;
// 		Object.defineProperties(p, xd);
// 		x.__proto__ = p.__proto__;
// 	}


// }