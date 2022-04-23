
declare type Base64FileString = string & { _: 'Base64FileString' };
declare module "*.png" {
	const s: Base64FileString;
	export default s;
}