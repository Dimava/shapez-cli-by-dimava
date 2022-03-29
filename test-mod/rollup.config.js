
import { base64 } from 'rollup-plugin-base64';
import ts from 'rollup-plugin-typescript';

export default {
	input: './ts/main.ts',
	plugins: [
		base64({ include: "**/*.png" }),
		ts({ target: "esnext" }),
	],
	output: {
		file: './bundle.mod.js',
	},
};