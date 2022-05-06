import shapez from "../shapez";

const urlRoot = `http://127.0.0.1:5500/shapest-working/sprites/`;
// const urlRoot = `https://dimava.github.io/shapez.mods/shapest-working/sprites/`;
async function fetch64(img) {
    return `${urlRoot}${img}`;
    // http://127.0.0.1:8080/shapest-working/sprites/1.png
    // let r = await fetch(`http://127.0.0.1:8080/shapest-working/sprites/${img}`);
    // let t = await r.text();
    // return `data:image/${img.split('.').pop()};base64,${btoa(t)}`;
}
export const RESOURCES = {
    "flipper.png": await fetch64('flip.png'),
    flipper: await fetch64('flip.png'),
    flip_white: await fetch64('flip_white.png'),
    rotate31: await fetch64('rotate31.png'),
    rotate32: await fetch64('rotate32.png'),
    rotate81: await fetch64('rotate41.png'),
    rotate82: await fetch64('rotate42.png'),
    splitter1: await fetch64('splitter1.png'),
    tut_painter2: await fetch64('tut_painter2.png'),
};
export function strToH(s) {
    let hash = 0;
    for (let c of s) {
        hash = (((hash << 5) - hash) + c.charCodeAt(0)) | 0;
    }
    return hash.toString(16);
}
export function override(cls, name, fn) {
    let oldFnName = name;
    while (cls.prototype[oldFnName])
        oldFnName = '_' + oldFnName;
    cls.prototype[oldFnName] = cls.prototype[name];
    cls.prototype[name] = fn(oldFnName);
}
export function ExtendSuperclass(mod, cls, makeSubclass) {
    mod.modInterface.extendClass(cls, (old) => {
        if (cls.isPrototypeOf(makeSubclass))
            return makeSubclass;
        return makeSubclass(old).prototype;
    });
}
export function ExtendSuperclass2(subclass) {
    let x = subclass.prototype;
    let p = x.__proto__;
    let xd = Object.getOwnPropertyDescriptors(x);
    delete xd.constructor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvdHlwZXMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE1BQU0sT0FBTyxHQUFHLGdEQUFnRCxDQUFDO0FBQ2pFLG1GQUFtRjtBQUVuRixLQUFLLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakMsT0FBTyxHQUFHLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUMxQixzREFBc0Q7SUFDdEQsK0VBQStFO0lBQy9FLDBCQUEwQjtJQUMxQixpRUFBaUU7QUFDbEUsQ0FBQztBQUdELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRztJQUN4QixhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3hDLE9BQU8sRUFBRSxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDbEMsVUFBVSxFQUFFLE1BQU0sT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQzNDLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDdkMsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUN2QyxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ3ZDLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDdkMsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUN6QyxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUMsa0JBQWtCLENBQUM7Q0FDL0MsQ0FBQztBQUtGLE1BQU0sVUFBVSxNQUFNLENBQUMsQ0FBUztJQUMvQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEQ7SUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUlELE1BQU0sVUFBVSxRQUFRLENBRXRCLEdBQU0sRUFBRSxJQUFPLEVBQUUsRUFBMEI7SUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBYyxDQUFDO0lBQy9CLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUM3RCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBYyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUdELE1BQU0sVUFBVSxnQkFBZ0IsQ0FJOUIsR0FBUSxFQUFFLEdBQU0sRUFBRSxZQUEyQztJQUM5RCxHQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN6QyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1lBQUUsT0FBTyxZQUFZLENBQUM7UUFDekQsT0FBUSxZQUEwQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQStDLFFBQVc7SUFDMUYsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3BCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxPQUFRLEVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7QUFDM0IsQ0FBQztBQUVELG9DQUFvQztBQUNwQyxpREFBaUQ7QUFDakQsOEJBQThCO0FBQzlCLGVBQWU7QUFDZixrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLGlEQUFpRDtBQUNqRCw4QkFBOEI7QUFDOUIsZUFBZTtBQUNmLDBDQUEwQztBQUMxQyxvQ0FBb0M7QUFDcEMsaURBQWlEO0FBQ2pELDhCQUE4QjtBQUM5QixlQUFlO0FBQ2YsZ0VBQWdFO0FBR2hFLG9DQUFvQztBQUNwQyxpREFBaUQ7QUFDakQsOEJBQThCO0FBQzlCLGVBQWU7QUFDZix3RUFBd0U7QUFDeEUsc0JBQXNCO0FBQ3RCLHlDQUF5QztBQUV6QywrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsMkJBQTJCO0FBQzNCLGtEQUFrRDtBQUNsRCwyQkFBMkI7QUFDM0Isb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQixLQUFLO0FBR0wsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZCB9IGZyb20gXCIuLi9zaGFwZXouanNcIjtcclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcInNoYXBlei9nYW1lL2NvbXBvbmVudHMvaXRlbV9wcm9jZXNzb3JcIiB7XHJcblx0ZXhwb3J0IGludGVyZmFjZSBlbnVtSXRlbVByb2Nlc3NvclR5cGVzIHtcclxuXHRcdGZsaXBwZXI6ICdmbGlwcGVyJztcclxuXHRcdHByaW9yaXR5X2JhbGFuY2VyOiAncHJpb3JpdHlfYmFsYW5jZXInO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdXJsUm9vdCA9IGBodHRwOi8vMTI3LjAuMC4xOjU1MDAvc2hhcGVzdC13b3JraW5nL3Nwcml0ZXMvYDtcclxuLy8gY29uc3QgdXJsUm9vdCA9IGBodHRwczovL2RpbWF2YS5naXRodWIuaW8vc2hhcGV6Lm1vZHMvc2hhcGVzdC13b3JraW5nL3Nwcml0ZXMvYDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoNjQoaW1nOiBzdHJpbmcpIHtcclxuXHRyZXR1cm4gYCR7dXJsUm9vdH0ke2ltZ31gO1xyXG5cdC8vIGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9zaGFwZXN0LXdvcmtpbmcvc3ByaXRlcy8xLnBuZ1xyXG5cdC8vIGxldCByID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9zaGFwZXN0LXdvcmtpbmcvc3ByaXRlcy8ke2ltZ31gKTtcclxuXHQvLyBsZXQgdCA9IGF3YWl0IHIudGV4dCgpO1xyXG5cdC8vIHJldHVybiBgZGF0YTppbWFnZS8ke2ltZy5zcGxpdCgnLicpLnBvcCgpfTtiYXNlNjQsJHtidG9hKHQpfWA7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUkVTT1VSQ0VTID0ge1xyXG5cdFwiZmxpcHBlci5wbmdcIjogYXdhaXQgZmV0Y2g2NCgnZmxpcC5wbmcnKSxcclxuXHRmbGlwcGVyOiBhd2FpdCBmZXRjaDY0KCdmbGlwLnBuZycpLFxyXG5cdGZsaXBfd2hpdGU6IGF3YWl0IGZldGNoNjQoJ2ZsaXBfd2hpdGUucG5nJyksXHJcblx0cm90YXRlMzE6IGF3YWl0IGZldGNoNjQoJ3JvdGF0ZTMxLnBuZycpLFxyXG5cdHJvdGF0ZTMyOiBhd2FpdCBmZXRjaDY0KCdyb3RhdGUzMi5wbmcnKSxcclxuXHRyb3RhdGU4MTogYXdhaXQgZmV0Y2g2NCgncm90YXRlNDEucG5nJyksXHJcblx0cm90YXRlODI6IGF3YWl0IGZldGNoNjQoJ3JvdGF0ZTQyLnBuZycpLFxyXG5cdHNwbGl0dGVyMTogYXdhaXQgZmV0Y2g2NCgnc3BsaXR0ZXIxLnBuZycpLFxyXG5cdHR1dF9wYWludGVyMjogYXdhaXQgZmV0Y2g2NCgndHV0X3BhaW50ZXIyLnBuZycpLFxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0clRvSChzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdGxldCBoYXNoID0gMDtcclxuXHRmb3IgKGxldCBjIG9mIHMpIHtcclxuXHRcdGhhc2ggPSAoKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjLmNoYXJDb2RlQXQoMCkpIHwgMDtcclxuXHR9XHJcblx0cmV0dXJuIGhhc2gudG9TdHJpbmcoMTYpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvdmVycmlkZTxcclxuXHRDIGV4dGVuZHMgYWJzdHJhY3QgbmV3ICguLi5hcmdzOiBhbnkpID0+IGFueSwgVCBleHRlbmRzIEluc3RhbmNlVHlwZTxDPiwgSyBleHRlbmRzIGtleW9mIFRcclxuPihjbHM6IEMsIG5hbWU6IEssIGZuOiAob2xkRm5OYW1lOiBLKSA9PiBUW0tdKSB7XHJcblx0bGV0IG9sZEZuTmFtZSA9IG5hbWUgYXMgc3RyaW5nO1xyXG5cdHdoaWxlIChjbHMucHJvdG90eXBlW29sZEZuTmFtZV0pIG9sZEZuTmFtZSA9ICdfJyArIG9sZEZuTmFtZTtcclxuXHRjbHMucHJvdG90eXBlW29sZEZuTmFtZV0gPSBjbHMucHJvdG90eXBlW25hbWVdO1xyXG5cdGNscy5wcm90b3R5cGVbbmFtZV0gPSBmbihvbGRGbk5hbWUgYXMgSyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXh0ZW5kU3VwZXJjbGFzczxcclxuXHRDIGV4dGVuZHMgYWJzdHJhY3QgbmV3ICguLi5hcmdzOiBhbnkpID0+IGFueSxcclxuXHRUIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEM+LFxyXG5cdE8gZXh0ZW5kcyBDXHJcbj4obW9kOiBNb2QsIGNsczogQywgbWFrZVN1YmNsYXNzOiBPIHwgKChvbGQ6IHsgJG9sZDogVCB9KSA9PiBPKSkge1xyXG5cdG1vZC5tb2RJbnRlcmZhY2UuZXh0ZW5kQ2xhc3MoY2xzLCAob2xkKSA9PiB7XHJcblx0XHRpZiAoY2xzLmlzUHJvdG90eXBlT2YobWFrZVN1YmNsYXNzKSkgcmV0dXJuIG1ha2VTdWJjbGFzcztcclxuXHRcdHJldHVybiAobWFrZVN1YmNsYXNzIGFzICgob2xkOiB7ICRvbGQ6IFQgfSkgPT4gTykpKG9sZCkucHJvdG90eXBlO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXh0ZW5kU3VwZXJjbGFzczI8QyBleHRlbmRzIGFic3RyYWN0IG5ldyAoLi4uYXJnczogYW55KSA9PiBhbnk+KHN1YmNsYXNzOiBDKSB7XHJcblx0bGV0IHggPSBzdWJjbGFzcy5wcm90b3R5cGU7XHJcblx0bGV0IHAgPSB4Ll9fcHJvdG9fXztcclxuXHRsZXQgeGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh4KTtcclxuXHRkZWxldGUgKHhkIGFzIGFueSkuY29uc3RydWN0b3I7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMocCwgeGQpO1xyXG5cdHguX19wcm90b19fID0gcC5fX3Byb3RvX187XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBFeHRlbmRTdXBlcmNsYXNzPFxyXG4vLyBcdEMgZXh0ZW5kcyBhYnN0cmFjdCBuZXcgKC4uLmFyZ3M6IGFueSkgPT4gYW55LFxyXG4vLyBcdFQgZXh0ZW5kcyBJbnN0YW5jZVR5cGU8Qz4sXHJcbi8vIFx0TyBleHRlbmRzIENcclxuLy8gPihtb2Q6IE1vZCwgc3ViY2xhc3M6IE8pOiB2b2lkO1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gRXh0ZW5kU3VwZXJjbGFzczxcclxuLy8gXHRDIGV4dGVuZHMgYWJzdHJhY3QgbmV3ICguLi5hcmdzOiBhbnkpID0+IGFueSxcclxuLy8gXHRUIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEM+LFxyXG4vLyBcdE8gZXh0ZW5kcyBDXHJcbi8vID4obW9kOiBNb2QsIGNsczogQywgc3ViY2xhc3M6IE8pOiB2b2lkO1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gRXh0ZW5kU3VwZXJjbGFzczxcclxuLy8gXHRDIGV4dGVuZHMgYWJzdHJhY3QgbmV3ICguLi5hcmdzOiBhbnkpID0+IGFueSxcclxuLy8gXHRUIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEM+LFxyXG4vLyBcdE8gZXh0ZW5kcyBDXHJcbi8vID4obW9kOiBNb2QsIGNsczogQywgc3ViY2xhc3M6IChvbGQ6IHsgJG9sZDogVCB9KSA9PiBPKTogdm9pZDtcclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gRXh0ZW5kU3VwZXJjbGFzczxcclxuLy8gXHRDIGV4dGVuZHMgYWJzdHJhY3QgbmV3ICguLi5hcmdzOiBhbnkpID0+IGFueSxcclxuLy8gXHRUIGV4dGVuZHMgSW5zdGFuY2VUeXBlPEM+LFxyXG4vLyBcdE8gZXh0ZW5kcyBDXHJcbi8vID4obW9kOiBNb2QsIGNsczogQywgc3ViY2xhc3M/OiBPIHwgKChvbGQ6IHsgJG9sZDogVCB9KSA9PiBPKSk6IHZvaWQge1xyXG4vLyBcdGxldCBzdXBlcmNsYXNzOiBDO1xyXG4vLyBcdGxldCBjcmVhdG9yOiAob2xkOiB7ICRvbGQ6IFQgfSkgPT4gTztcclxuXHJcbi8vIFx0ZnVuY3Rpb24gc3VwZXJPdmVycmlkZShYKSB7XHJcbi8vIFx0XHRsZXQgUCA9IFguX19wcm90b19fO1xyXG4vLyBcdFx0bGV0IHggPSBYLnByb3RvdHlwZTtcclxuLy8gXHRcdGxldCBwID0geC5fX3Byb3RvX187XHJcbi8vIFx0XHRjb25zb2xlLmxvZyh7cCx4LFAsWH0pXHJcbi8vIFx0XHRsZXQgeGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh4KTtcclxuLy8gXHRcdGRlbGV0ZSB4ZC5jb25zdHJ1Y3RvcjtcclxuLy8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHAsIHhkKTtcclxuLy8gXHRcdHguX19wcm90b19fID0gcC5fX3Byb3RvX187XHJcbi8vIFx0fVxyXG5cclxuXHJcbi8vIH0iXX0=


