import { Metadata, ModBase } from '../../types/dimavas-lib';
import { FnBuilding } from './fn-building';

@Metadata({
	name: 'Function Building',
	version: '1.0.1',
	author: '',
	website: '',
	description: '',
	id: 'fn-building'
})
export class Mod extends ModBase {
	init() {
		this.use(FnBuilding);
	}
}
