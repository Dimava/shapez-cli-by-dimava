

import { Base64PngString, base64ToPng } from '../../types/dimavas-lib';
import fn_call from './sprites/virtual-function-call.png';
import fn_process from './sprites/virtual-function-process.png'

export const RESOURCES: Record<string, Base64PngString> = {
	fn_call: base64ToPng(fn_call),
	fn_process: base64ToPng(fn_process),
}