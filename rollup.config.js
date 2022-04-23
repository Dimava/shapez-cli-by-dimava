
import { base64 } from 'rollup-plugin-base64';
import ts from 'rollup-plugin-typescript';
import fs from 'fs';

// let dir = process.argv.find(e => e.includes('--cwd=')).slice('--cwd='.length);
let dir = process.argv.pop();
console.log({ dir });

let txt = fs.readFileSync(`./mods/${dir}/main.ts`, 'utf-8');
let version_m = txt.match(/\bversion:.*/g);
let version = version_m[0].match(/\d[\d\.]*[^'"]*/)[0];
console.log({ version });

export default {
	input: `mods/${dir}/main.ts`,
	plugins: [
		base64({ include: "**/*.png" }),
		ts({
			target: "esnext",
			rootDirs: [
				`mods/${dir}/`,
				"./types/"
			],
		}),
	],
	output: {
		format: 'iife',
		file: `mods/${dir}/${dir}@${version}.mod.js`,
	},
};