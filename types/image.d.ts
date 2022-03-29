
declare module "*.png" {
	type ImageString = string & { _: ImageString };
	const s: ImageString;
	export default s;
}