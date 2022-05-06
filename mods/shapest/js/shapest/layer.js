const config = {
    disableCuts: true,
    disableQuadColors: true,
    debugBadLayers: true,
};
export var SzInfo;
(function (SzInfo) {
    let color;
    (function (color_1) {
        const colorWheelNameList = [
            'red', 'orange', 'yellow',
            'lawngreen', 'green', 'cyan',
            'blue', 'purple', 'pink',
        ];
        const colorGreyNameList = [
            'black', 'grey', 'white',
        ];
        color_1.list = [
            { name: 'red', style: 'red', code: 'r', combo: 'rrr' },
            { name: 'orange', style: 'orange', code: 'o', combo: 'grr' },
            { name: 'yellow', style: 'yellow', code: 'y', combo: 'ggr' },
            { name: 'green', style: 'green', code: 'g', combo: 'ggg' },
            { name: 'lawngreen', style: 'lawngreen', code: 'l', combo: 'bgg' },
            { name: 'cyan', style: 'cyan', code: 'c', combo: 'bbg' },
            { name: 'blue', style: 'blue', code: 'b', combo: 'bbb' },
            { name: 'purple', style: 'purple', code: 'v', combo: 'bbr' },
            { name: 'pink', style: 'pink', code: 'p', combo: 'brr' },
            { name: 'black', style: 'black', code: 'k' },
            { name: 'grey', style: 'grey', code: 'u' },
            { name: 'white', style: 'white', code: 'w' },
            { name: 'cover', style: 'sz-cover', code: 'j' },
            { name: 'none', style: 'none', code: '-' },
        ];
        Object.assign(globalThis, { list: color_1.list });
        color_1.colorList = color_1.list.map(e => e.name);
        color_1.byName = Object.fromEntries(color_1.list.map(e => [e.name, e]));
        color_1.byChar = Object.fromEntries(color_1.list.map(e => [e.code, e]));
        color_1.byCombo = Object.fromEntries(color_1.list.filter(e => e.combo).map(e => [e.combo, e]));
        Object.assign(color_1.byName, color_1.byCombo);
        function exampleLayer(color) {
            let i = 0;
            return new SzLayer({
                quads: [
                    { shape: 'circle', from: i, to: i += 6, color },
                    { shape: 'square', from: i, to: i += 6, color },
                    { shape: 'circle', from: i, to: i += 6, color },
                    { shape: 'square', from: i, to: i += 6, color },
                ],
                areas: [
                    { shape: 'sector', from: 0, to: 24, color },
                ]
            });
        }
        color_1.exampleLayer = exampleLayer;
    })(color = SzInfo.color || (SzInfo.color = {}));
    let quad;
    (function (quad_1) {
        quad_1.list = [
            { name: 'circle', code: 'C', combo: 'C', spawn: 'sz!l!z|q!C-0o|a!su0o|c!' },
            { name: 'square', code: 'R', combo: 'R', spawn: 'sz!l!z|q!R-0c,R-co|a!su0o|c!' },
            { name: 'star', code: 'S', combo: 'S', spawn: 'sz!l!z|q!S-4c,S-ck,S-ks|a!su0o|c!' },
            { name: 'windmill', code: 'W', combo: 'W', spawn: 'sz!l!z|q!S-4c,S-ck,S-ks|a!su0o|c!' },
            {
                name: 'cover', code: 'J',
                path(ctx, { from, to }) {
                    ctx.arc(0, 0, 1.15, from, to);
                },
            }, {
                name: 'clover', code: 'L',
                path(ctx, { from, to }) {
                    const r = 0.5, R = 1;
                    ctx.rotate(from);
                    // export const extraShapes: Record<string, (ctx: SzContext2D, quad: SzLayerQuad) => void> = {
                    // 	clover(ctx: SzContext2D) {
                    // 		// begin({ size: 1.3, path: true, zero: true });
                    const inner = 0.5;
                    const inner_center = 0.45;
                    ctx.ctx.lineTo(0, inner);
                    ctx.ctx.bezierCurveTo(0, 1, inner, 1, inner_center, inner_center);
                    ctx.ctx.bezierCurveTo(1, inner, 1, 0, inner, 0);
                    // 	},
                }
            }, {
                name: '', code: '',
                // 	star8(ctx: SzContext2D, { from, to }: SzLayerQuad) {
                // 		const r = 1.22 / 2, R = 1.22, d = (n: number) => from * (1 - n) + to * n;
                // 		ctx
                // 			.lineToR(r, d(0))
                // 			.lineToR(R, d(0.25))
                // 			.lineToR(r, d(0.5))
                // 			.lineToR(R, d(0.75))
                // 			.lineToR(r, d(1))
                // 	},
            }, {
                name: '', code: '',
                // 	rhombus(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	plus(ctx: SzContext2D, { from, to }: SzLayerQuad) {
                // 		const r = 0.4, R = 1.0, d = (n: number) => from * (1 - n) + to * n;
                // 		const rr = (r1: number, r2: number) => (r1 * r1 + r2 * r2) ** 0.5
                // 		const at = (a: number, b: number) => Math.atan2(b, a) / Math.PI * 2;
                // 		const tor = (r: number, R: number) => [rr(r, R), d(at(r, R))] as const;
                // 		ctx
                // 			.lineToR(...tor(R, 0))
                // 			.lineToR(...tor(R, r))
                // 			.lineToR(...tor(r, r))
                // 			.lineToR(...tor(r, R))
                // 			.lineToR(...tor(0, R))
                // 	},
            }, {
                name: '', code: '',
                // 	saw(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	sun(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	leaf(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	diamond(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	mill(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	halfleaf(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	yinyang(ctx: SzContext2D) {
                // 	},
            }, {
                name: '', code: '',
                // 	octagon(ctx: SzContext2D) {
                // 	},
            },
        ];
        while (quad_1.list.find(e => !e.name)) {
            quad_1.list.splice(quad_1.list.findIndex(e => !e.name), 1);
        }
        quad_1.named4 = {
            circleSpawn: 'CuCuCuCu',
            squareSpawn: 'RuRuRuRu',
            starSpawn: 'SuSuSuSu',
            windmillSpawn: 'WuWuWuWu',
            circleBottom: '--CuCu--',
            circle: "CuCuCuCu",
            circleHalf: "----CuCu",
            rect: "RuRuRuRu",
            rectHalf: "RuRu----",
            circleHalfRotated: "Cu----Cu",
            circleQuad: "Cu------",
            circleRed: "CrCrCrCr",
            rectHalfBlue: "RbRb----",
            circlePurple: "CpCpCpCp",
            starCyan: "ScScScSc",
            fish: "CgScScCg",
            blueprint: "CbCbCbRb:CwCwCwCw",
            rectCircle: "RpRpRpRp:CwCwCwCw",
            watermelon: "--Cg----:--Cr----",
            starCircle: "SrSrSrSr:CyCyCyCy",
            starCircleStar: "SrSrSrSr:CyCyCyCy:SwSwSwSw",
            fan: "CbRbRbCb:CwCwCwCw:WbWbWbWb",
            monster: "Sg----Sg:CgCgCgCg:--CyCy--",
            bouquet: "CpRpCp--:SwSwSwSw",
            logo: "RuCw--Cw:----Ru--",
            target: "CrCwCrCw:CwCrCwCr:CrCwCrCw:CwCrCwCr",
            speedometer: "Cg----Cr:Cw----Cw:Sy------:Cy----Cy",
            // spikedBall: "CcSyCcSy:SyCcSyCc:CcSyCcSy:SyCcSyCc",
            spikedBall: "CcSyCcSy:SyCcSyCc:CcSyCcSy",
            compass: "CcRcCcRc:RwCwRwCw:Sr--Sw--:CyCyCyCy",
            plant: "Rg--Rg--:CwRwCwRw:--Rg--Rg",
            rocket: "CbCuCbCu:Sr------:--CrSrCr:CwCwCwCw",
            mill: "CwCwCwCw:WbWbWbWb",
            star: "SuSuSuSu",
            circleStar: "CwCrCwCr:SgSgSgSg",
            clown: "WrRgWrRg:CwCrCwCr:SgSgSgSg",
            windmillRed: "WrWrWrWr",
            fanTriple: "WpWpWpWp:CwCwCwCw:WpWpWpWp",
            fanQuadruple: "WpWpWpWp:CwCwCwCw:WpWpWpWp:CwCwCwCw",
            bird: "Sr------:--Cg--Cg:Sb--Sb--:--Cw--Cw",
            scissors: "Sr------:--CgCgCg:--Sb----:Cw--CwCw",
        };
        quad_1.named6 = {
            circleSpawn: '6CuCuCuCuCuCu',
            squareSpawn: '6RuRuRuRuRuRu',
            starSpawn: '6SuSuSuSuSuSu',
            windmillSpawn: '6WuWuWuWuWuWu',
            circleBottom: '6----CuCuCu--',
            circle: "6CuCuCuCuCuCu",
            circleHalf: "6------CuCuCu",
            rect: "6RuRuRuRuRuRu",
            rectHalf: "6RuRuRu------",
            circleHalfRotated: "6Cu------CuCu",
            circleQuad: "6CuCu--------",
            circleRed: "6CrCrCrCrCrCr",
            rectHalfBlue: "6RbRbRb------",
            circlePurple: "6CpCpCpCpCpCp",
            starCyan: "6ScScScScScSc",
            fish: "6CgCgScScCgCg",
            blueprint: "6CbCbCbCbCbRb:6CwCwCwCwCwCw",
            rectCircle: "6RpRpRpRpRpRp:6CwCwCwCwCwCw",
            watermelon: "6--CgCg------:6--CrCr------",
            starCircle: "6SrSrSrSrSrSr:6CyCyCyCyCyCy",
            starCircleStar: "6SrSrSrSrSrSr:6CyCyCyCyCyCy:6SwSwSwSwSwSw",
            fan: "6CbCbRbRbCbCb:6CwCwCwCwCwCw:6WbWbWbWbWbWb",
            monster: "6Sg--------Sg:6CgCgCgCgCgCg:6--CyCyCyCy--",
            bouquet: "6CpCpRpCpCp--:6SwSwSwSwSwSw",
            logo: "6RwCuCw--CwCu:6------Ru----",
            target: "6CrCwCrCwCrCw:6CwCrCwCrCwCr:6CrCwCrCwCrCw:6CwCrCwCrCwCr",
            speedometer: "6CgCb----CrCy:6CwCw----CwCw:6Sc----------:6CyCy----CyCy",
            spikedBall: "6CcSyCcSyCcSy:6SyCcSyCcSyCc:6CcSyCcSyCcSy:6SyCcSyCcSyCc",
            compass: "6CcRcRcCcRcRc:6RwCwCwRwCwCw:6----Sr----Sb:6CyCyCyCyCyCy",
            plant: "6Rg--Rg--Rg--:6CwRwCwRwCwRw:6--Rg--Rg--Rg",
            rocket: "6CbCuCbCuCbCu:6Sr----------:6--CrCrSrCrCr:6CwCwCwCwCwCw",
            mill: "6CwCwCwCwCwCw:6WbWbWbWbWbWb",
            star: "6SuSuSuSuSuSu",
            circleStar: "6CwCrCwCrCwCr:6SgSgSgSgSgSg",
            clown: "6WrRgWrRgWrRg:6CwCrCwCrCwCr:6SgSgSgSgSgSg",
            windmillRed: "6WrWrWrWrWrWr",
            fanTriple: "6WpWpWpWpWpWp:6CwCwCwCwCwCw:6WpWpWpWpWpWp",
            fanQuadruple: "6WpWpWpWpWpWp:6CwCwCwCwCwCw:6WpWpWpWpWpWp:6CwCwCwCwCwCw",
            bird: "6Sr----------:6--CgCg--CgCg:6Sb----Sb----:6--CwCw--CwCw",
            scissors: "6Sr----------:6--CgCgCgCgCg:6----Sb------:6CwCw--CwCwCw",
        };
        quad_1.named = {
            circleSpawn: 'sz!l!z|q!C-0o|a!su0o|c!',
            squareSpawn: 'sz!l!z|q!R-0c,R-co|a!su0o|c!',
            starSpawn: 'sz!l!z|q!S-4c,S-ck,S-ks|a!su0o|c!',
            windmillSpawn: 'sz!l!z|q!W-06,W-6c,W-ci,W-io|a!su0o|c!',
            circle1: 'sz!l!z|q!C-0o|a!su0o|c!',
            circleHalfLeft: 'sz!l!z|q!C-co|a!su0o|c!',
            square2: 'sz!l!z|q!R-0c,R-co|a!su0o|c!',
            squareHalfRight: 'sz!l!z|q!R-0c|a!su0o|c!',
            squareHalfTop2: 'sz!l!z|q!R-6c,R-ci|a!su6i|c!',
            circleHalfTop2: 'sz!l!z|q!C-06,C-io|a!suiu|c!',
            circleQuad1: 'sz!l!z|q!C-ou|a!su0o|c!',
            circleRed: 'sz!l!z|q!C-0o|a!sr0o|c!',
            // squarehalfLeftBlue: 'sz!l!z|q!R-co|a!sb0o|c!',
            // circlePurple: 'sz!l!z|q!C-0o|a!sv0o|c!',
            square3TopBlue: 'sz!l!z|q!R-ks|a!sbks|c!',
            star3Cyan: 'sz!l!z|q!S-4c,S-ck,S-ks|a!sc0o|c!',
            squid: 'sz!l!z|q!S-6c,S-ci,C-iu|a!sc6i,sgiu|c!',
            diamond: 'sz!l!z|q!R-03,R-lo|a!sclr|c!',
            palm: 'sz!l!z|q!S-02,S-24,S-46,S-ik,S-km,S-mo|a!sgiu|c!:l!z|q!R-ae|a!soae|c!:l!z|q!C-6i|a!sp6i|c!',
            counter: 'sz!l!z|q!C-iu|a!sr26,sgim,symq|c!:l!z|q!R-26,R-im,R-mq|a!swiu|c!:l!z|q!S-04|a!su04|c!:l!z|q!C-iu|a!suiu|c!',
            window: 'sz!l!z|q!R-06,R-6c,R-ci,R-io|a!sc0o|c!:l!z|q!R-28,R-8e,R-ek,R-kq|a!so0o|c!:l!z|q!R-4a,R-ag,R-gm,R-ms|a!sy0o|c!:l!z|q!R-06,R-6c,R-ci,R-io|a!sw0o|c!',
            splikeball48: 'sz!l!z|q!C-02,S-24,C-46,S-68,C-8a,S-ac,C-ce,S-eg,C-gi,S-ik,C-km,S-mo|a!sc02,sy24,sc46,sy68,sc8a,syac,scce,syeg,scgi,syik,sckm,symo|c!:l!z|q!S-02,C-24,S-46,C-68,S-8a,C-ac,S-ce,C-eg,S-gi,C-ik,S-km,C-mo|a!sy02,sc24,sy46,sc68,sy8a,scac,syce,sceg,sygi,scik,sykm,scmo|c!:l!z|q!C-02,S-24,C-46,S-68,C-8a,S-ac,C-ce,S-eg,C-gi,S-ik,C-km,S-mo|a!sc02,sy24,sc46,sy68,sc8a,syac,scce,syeg,scgi,syik,sckm,symo|c!:l!z|q!S-02,C-24,S-46,C-68,S-8a,C-ac,S-ce,C-eg,S-gi,C-ik,S-km,C-mo|a!sy02,sc24,sy46,sc68,sy8a,scac,syce,sceg,sygi,scik,sykm,scmo|c!',
        };
        quad_1.byName = Object.fromEntries(quad_1.list.map(e => [e.name, e]));
        quad_1.byChar = Object.fromEntries(quad_1.list.map(e => [e.code, e]));
        function exampleLayer(shape) {
            let i = 0;
            return new SzLayer({
                quads: [
                    { shape, from: i, to: i += 6, color: 'grey' },
                    { shape, from: i, to: i += 6, color: 'grey' },
                    { shape, from: i, to: i += 6, color: 'grey' },
                    { shape, from: i, to: i += 6, color: 'grey' },
                ],
                areas: [
                    { shape: 'sector', from: 0, to: 24, color: 'grey' },
                ],
            });
        }
        quad_1.exampleLayer = exampleLayer;
        // Object.entries(extraShapes).map(([k, v]) => list.push({ name: k } as any));
        quad_1.quadList = quad_1.list.map(e => e.name);
    })(quad = SzInfo.quad || (SzInfo.quad = {}));
    let area;
    (function (area) {
        area.list = [
            { name: 'sector', code: 's' },
            { name: 'whole', code: 'w' },
        ];
        area.byName = Object.fromEntries(area.list.map(e => [e.name, e]));
        area.byChar = Object.fromEntries(area.list.map(e => [e.code, e]));
    })(area = SzInfo.area || (SzInfo.area = {}));
    let s = Array(100).fill(0).map((e, i) => i.toString(36)).join('').slice(0, 36);
    s += s.slice(10).toUpperCase();
    SzInfo.nToChar = s.split('');
    SzInfo.charToN = Object.fromEntries(SzInfo.nToChar.map((e, i) => [e, i]));
    /* old:

    
export const shape4svg = {
    R: "M 0 0 L 1 0 L 1 1 L 0 1 Z",
    C: "M 0 0 L 1 0 A 1 1 0 0 1 0 1 Z",
    S: "M 0 0 L 0.6 0 L 1 1 L 0 0.6 Z",
    W: "M 0 0 L 0.6 0 L 1 1 L 0 1 Z",
    "-": "M 0 0",
}
function dotPos(l, a) {
    return `${l * Math.cos(Math.PI / a)} ${l * Math.sin(Math.PI / a)}`;
}

function sinPiBy(a) {
    return Math.sin(Math.PI / a);
}
function cosPiBy(a) {
    return Math.cos(Math.PI / a);
}
let shape6long = 1 / cosPiBy(6);

export const shape6svg = {
    R: `M 0 0 L 1 0 L ${dotPos(shape6long, 6)} L ${dotPos(1, 3)} Z`,
    C: `M 0 0 L 1 0 A 1 1 0 0 1 ${dotPos(1, 3)} Z`,
    S: `M 0 0 L 0.6 0 L ${dotPos(shape6long, 6)} L ${dotPos(0.6, 3)} Z`,
    W: `M 0 0 L 0.6 0 L ${dotPos(shape6long, 6)} L ${dotPos(1, 3)} Z`,
    "-": "M 0 0",
}



registerCustomShape({
    id: "rhombus",
    code: "B",
    ...customDefaults,
    draw({ dims, innerDims, layer, quad, context, color, begin }) {
        begin({ size: 1.2, path: true, zero: true });
        const rad = 0.001;
        // with rounded borders
        context.arcTo(0, 1, 1, 0, rad);
        context.arcTo(1, 0, 0, 0, rad);
    },
});

registerCustomShape({
    id: "plus",
    code: "P",
    ...customDefaults,
    draw: "M 0 0 L 1.1 0 1.1 0.5 0.5 0.5 0.5 1.1 0 1.1 z",
    tier: 3,
});

registerCustomShape({
    id: "saw",
    code: "Z",
    ...customDefaults,
    draw({ dims, innerDims, layer, quad, context, color, begin }) {
        begin({ size: 1.1, path: true, zero: true });
        const inner = 0.5;
        context.lineTo(inner, 0);
        context.bezierCurveTo(inner, 0.3, 1, 0.3, 1, 0);
        context.bezierCurveTo(
            1,
            inner,
            inner * Math.SQRT2 * 0.9,
            inner * Math.SQRT2 * 0.9,
            inner * Math.SQRT1_2,
            inner * Math.SQRT1_2
        );
        context.rotate(Math.PI / 4);
        context.bezierCurveTo(inner, 0.3, 1, 0.3, 1, 0);
        context.bezierCurveTo(
            1,
            inner,
            inner * Math.SQRT2 * 0.9,
            inner * Math.SQRT2 * 0.9,
            inner * Math.SQRT1_2,
            inner * Math.SQRT1_2
        );
    },
    tier: 3,
});

registerCustomShape({
    id: "sun",
    code: "U",
    ...customDefaults,
    spawnColor: "yellow",
    draw({ dims, innerDims, layer, quad, context, color, begin }) {
        begin({ size: 1.3, path: true, zero: true });
        const PI = Math.PI;
        const PI3 = ((PI * 3) / 8) * 0.75;
        const c = 1 / Math.cos(Math.PI / 8);
        const b = c * Math.sin(Math.PI / 8);

        context.moveTo(0, 0);
        context.rotate(Math.PI / 2);
        context.arc(c, 0, b, -PI, -PI + PI3);
        context.rotate(-Math.PI / 4);
        context.arc(c, 0, b, -PI - PI3, -PI + PI3);
        context.rotate(-Math.PI / 4);
        context.arc(c, 0, b, PI - PI3, PI);
    },
});

registerCustomShape({
    id: "leaf",
    code: "F",
    ...customDefaults,
    draw: "M 0 0 v 0.5 a 0.5 0.5 0 0 0 0.5 0.5 h 0.5 v -0.5 a 0.5 0.5 0 0 0 -0.5 -0.5 z",
});

registerCustomShape({
    id: "diamond",
    code: "D",
    ...customDefaults,
    draw: "M 0 0 l 0 0.5 0.5 0.5 0.5 0 0 -0.5 -0.5 -0.5 z",
});

registerCustomShape({
    id: "mill",
    code: "M",
    ...customDefaults,
    draw: "M 0 0 L 0 1 1 1 Z",
});

// registerCustomShape({
//     id: "halfleaf",
//     code: "H",
//     ...customDefaults,
//     draw: "100 M 0 0 L 0 100 A 45 45 0 0 0 30 30 A 45 45 0 0 0 100 0 Z",
// })

registerCustomShape({
    id: "yinyang",
    code: "Y",
    ...customDefaults,
    // draw({ dims, innerDims, layer, quad, context, color, begin }) {
    //     begin({ size: 1/(0.5+Math.SQRT1_2), path: true });

    //     /** @type{CanvasRenderingContext2D} * /
    //     let ctx = context;

    //     with (ctx) { with (Math) {
    //     ////////////////////////
    //     // draw mostly in [0,1]x[0,1] square
    //     // draw: "100 M 0 50 A 50 50 0 1 1 85 85 A 121 121 0 0 1 -85 85 A 50 50 0 0 0 0 50",
    //     moveTo(0, 0.5);
    //     arc(0.5, 0.5, 0.5, PI, PI/4)
    //     arc(0, 0, 0.5+SQRT1_2, PI/4, PI/4+PI/2, 0)
    //     arc(-0.5, 0.5, 0.5, 3*PI/4, 0, 1)

    //     moveTo(0.6, 0.5)
    //     arc(0.5, 0.5, 0.1, 0, 2*PI)
    //     }}

    // },
    draw:
        "120.71 M 0 50 A 50 50 0 1 1 85.355 85.355 A 120.71 120.71 0 0 1 -85.355 85.355 A 50 50 0 0 0 0 50 Z M 40 50 A 10 10 0 1 0 40 49.99 Z",
    tier: 4,
});

registerCustomShape({
    id: "octagon",
    code: "O",
    ...customDefaults,
    draw: "M 0 0 L 0 1 0.4142 1 1 0.4142 1 0 Z",
});

    
    */
})(SzInfo || (SzInfo = {}));
export class SzLayerCut {
    shape = 'line';
    color = 'black';
    from = 0;
    to = 0;
    constructor(source) {
        Object.assign(this, source);
    }
    clone() { return new SzLayerCut(this); }
    get smallRadius() {
        return 0.0001;
    }
    pathInside(ctx) {
        switch (this.shape) {
            case 'line': {
                ctx.lineToR(0.5, this.from);
                ctx.lineToR(this.smallRadius, this.from);
                return;
            }
            default: {
                throw this;
            }
        }
    }
    pathOutsize(ctx) {
        switch (this.shape) {
            case 'line': {
                ctx.lineToR(this.smallRadius, this.from);
                ctx.lineToR(0.5, this.from);
                return;
            }
            default: {
                throw this;
            }
        }
    }
    getHash() {
        // fixme
        return ``;
    }
    static fromShortKey(e) {
        // fixme
        return new SzLayerCut({});
    }
}
export class SzLayerQuad {
    shape = 'circle';
    color = 'none';
    from = 0;
    to = 0;
    constructor(source) {
        Object.assign(this, source);
        if (config.disableQuadColors) {
            this.color = 'none';
        }
    }
    clone() { return new SzLayerQuad(this); }
    outerPath(ctx, layer) {
        switch (this.shape) {
            case 'circle': {
                ctx.arc(0, 0, 1, this.from, this.to);
                return;
            }
            case 'square': {
                ctx.lineToR(1, this.from);
                // 6 -> Math.SQRT2, 12 -> 1
                let a = this.to - this.from;
                let ar = a * (Math.PI / 24);
                let R = a <= 6 ? 1 / Math.cos(ar) : 1;
                ctx.lineToR(R, (this.from + this.to) / 2);
                ctx.lineToR(1, this.to);
                return;
            }
            case 'star': {
                ctx.lineToR(0.6, this.from);
                ctx.lineToR(Math.SQRT2, (this.from + this.to) / 2);
                ctx.lineToR(0.6, this.to);
                return;
            }
            case 'windmill': {
                ctx.lineToR(1, this.from);
                let a = this.to - this.from;
                let ar = a * (Math.PI / 24);
                let R = a <= 6 ? 1 / Math.cos(ar) : 1;
                ctx.lineToR(R, (this.from + this.to) / 2);
                ctx.lineToR(0.6, this.to);
                // let originX = -quadrantHalfSize;
                // let originY = quadrantHalfSize - dims;
                // const moveInwards = dims * 0.4;
                // context.moveTo(originX, originY + moveInwards);
                // context.lineTo(originX + dims, originY);
                // context.lineTo(originX + dims, originY + dims);
                // context.lineTo(originX, originY + dims);
                // context.closePath();
                // context.fill();
                // context.stroke();
                break;
            }
            default: {
                ctx.saved(ctx => {
                    if (this.shape == 'cover') {
                        ctx.scale(1 / layer.layerScale());
                    }
                    SzInfo.quad.byName[this.shape].path(ctx, this);
                });
                return;
            }
        }
    }
    getHash() {
        return `${SzInfo.quad.byName[this.shape].code}${SzInfo.color.byName[this.color].code}${SzInfo.nToChar[this.from]}${SzInfo.nToChar[this.to]}`;
    }
    static fromShortKey(e) {
        return new SzLayerQuad({
            shape: SzInfo.quad.byChar[e[0]].name,
            color: SzInfo.color.byChar[e[1]].name,
            from: SzInfo.charToN[e[2]],
            to: SzInfo.charToN[e[3]],
        });
    }
}
export class SzLayerArea {
    shape = 'sector';
    color = 'black';
    from = 0;
    to = 0;
    constructor(source) {
        Object.assign(this, source);
    }
    clone() { return new SzLayerArea(this); }
    outerPath(ctx) {
        switch (this.shape) {
            case 'whole': {
                ctx.beginPath();
                ctx.arc(0, 0, 5, 0, 24);
                ctx.closePath();
                return;
            }
            case 'sector': {
                if (this.from == 0 && this.to == 24) {
                    ctx.beginPath();
                    ctx.arc(0, 0, 5, 0, 24);
                    ctx.closePath();
                    return;
                }
                ;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, 5, this.from, this.to);
                ctx.closePath();
                return;
            }
            default: {
                throw this;
            }
        }
    }
    clip(ctx) {
        this.outerPath(ctx);
        ctx.clip();
    }
    fill(ctx) {
        this.outerPath(ctx);
        ctx.fillStyle = SzInfo.color.byName[this.color].style;
        ctx.fill();
    }
    getHash() {
        return `${SzInfo.area.byName[this.shape].code}${SzInfo.color.byName[this.color].code}${SzInfo.nToChar[this.from]}${SzInfo.nToChar[this.to]}`;
    }
    static fromShortKey(e) {
        return new SzLayerArea({
            shape: SzInfo.area.byChar[e[0]].name,
            color: SzInfo.color.byChar[e[1]].name,
            from: SzInfo.charToN[e[2]],
            to: SzInfo.charToN[e[3]],
        });
    }
}
const testTemplate = {
    cuts: [
        { from: 10, to: 10, shape: 'line', color: 'blue' },
        { from: 14, to: 14, shape: 'line', color: 'blue' },
    ],
    quads: [
        { shape: 'square', color: 'green', from: 2, to: 4 },
        { shape: 'circle', color: 'pink', from: 5, to: 19 },
        { shape: 'square', color: 'green', from: 20, to: 22 },
    ],
    areas: [
        { shape: 'sector', color: 'red', from: 11, to: 13 },
    ],
};
export class SzLayer {
    layerIndex = 0;
    cuts = [];
    quads = [];
    areas = [];
    static createTest() {
        let l = new SzLayer(testTemplate);
        l.areas.map(e => {
            let r = (Math.random() - 0.5) * 8;
            e.from += r;
            e.to += r;
        });
        console.error('test layer', l);
        return l;
    }
    constructor(source, layerIndex) {
        if (source) {
            this.cuts = (source.cuts ?? []).map(e => new SzLayerCut(e));
            this.quads = (source.quads ?? []).map(e => new SzLayerQuad(e));
            this.areas = (source.areas ?? []).map(e => new SzLayerArea(e));
            if (source.layerIndex) {
                this.layerIndex = source.layerIndex;
            }
        }
        if (layerIndex != null) {
            this.layerIndex = layerIndex;
        }
        if (config.disableCuts)
            this.cuts = [];
        return this.normalize();
    }
    layerScale(layerIndex) {
        layerIndex ??= this.layerIndex;
        return 0.9 - 0.22 * layerIndex;
    }
    drawCenteredLayerScaled(ctx, layerIndex) {
        ctx.saved(ctx => {
            ctx.scale(this.layerScale(layerIndex));
            this.drawCenteredNormalized(ctx);
        });
    }
    drawCenteredNormalized(ctx) {
        ctx.saved(ctx => {
            this.clipShapes(ctx);
            // this.quads.forEach(q => ctx.saved(ctx => this.fillQuad(q, ctx)));
            this.cuts.forEach(c => ctx.saved(ctx => this.strokeCut(c, ctx)));
            this.areas.forEach(a => ctx.saved(ctx => this.fillArea(a, ctx)));
        });
        ctx.saved(ctx => this.drawQuadOutline(ctx, true));
    }
    strokeCut(cut, ctx) {
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = cut.color;
        ctx.beginPath();
        if (cut.shape == 'line') {
            ctx.rotate(cut.from);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 1);
            ctx.stroke();
        }
        else {
            throw this;
        }
    }
    fillQuad(quad, ctx) {
        ctx.fillStyle = SzInfo.color.byName[quad.color].style;
        if (quad.color == 'cover')
            [
            // ctx.ctx.globalCompositeOperation = 'destination-out'
            ];
        ctx.beginPath();
        ctx.moveTo(0, 0);
        quad.outerPath(ctx, this);
        ctx.fill();
    }
    fillArea(area, ctx) {
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = ctx.fillStyle = SzInfo.color.byName[area.color].style;
        area.clip(ctx);
        ctx.fill();
    }
    fullQuadPath(ctx, withCuts) {
        ctx.beginPath();
        for (let i = 0; i < this.quads.length; i++) {
            let prev = i > 0 ? this.quads[i - 1] : this.quads.slice(-1)[0];
            let quad = this.quads[i];
            if (withCuts || quad.from != prev.to % 24)
                ctx.lineTo(0, 0);
            quad.outerPath(ctx, this);
        }
        ctx.closePath();
    }
    drawQuadOutline(ctx, withCuts) {
        this.fullQuadPath(ctx, withCuts);
        ctx.lineWidth = 0.05;
        ctx.strokeStyle = 'orange';
        ctx.stroke();
    }
    clipShapes(ctx) {
        this.fullQuadPath(ctx);
        ctx.clip();
    }
    clone() {
        return new SzLayer(this);
    }
    isNormalized() {
        for (let i = 0; i < this.quads.length; i++) {
            let next = this.quads[i];
            let prev = this.quads[i - 1] || this.quads[this.quads.length - 1];
            if (next.from < 0 || next.from >= 24)
                return false;
            if (next.from >= next.to)
                return false;
            if (i == 0) {
                if (prev.to > 24 && prev.to % 24 > next.from)
                    return false;
            }
            else {
                if (prev.to > next.from)
                    return false;
            }
        }
        for (let i = 0; i < this.areas.length; i++) {
            let next = this.areas[i];
            let prev = this.areas[i - 1] || this.areas[this.areas.length - 1];
            if (next.from < 0 || next.from >= 24)
                return false;
            if (next.from >= next.to)
                return false;
            if (i == 0) {
                if (prev.to > 24 && prev.to % 24 > next.from)
                    return false;
            }
            else {
                if (prev.to > next.from)
                    return false;
            }
            if (prev.to % 24 == next.from && prev.color == next.color) {
                if (prev != next)
                    return false;
                if (next.from != 0)
                    return false;
            }
        }
        let places = Array(24).fill('');
        let paints = Array(24).fill('');
        for (let q of this.quads) {
            for (let i = q.from; i < q.to; i++) {
                if (places[i % 24])
                    return false;
                places[i % 24] = q.shape;
            }
        }
        for (let a of this.areas) {
            for (let i = a.from; i < a.to; i++) {
                if (!places[i % 24])
                    return false;
                if (paints[i % 24])
                    return false;
                paints[i % 24] = a.color;
            }
        }
        // fixme: cuts check;
        return true;
    }
    normalize() {
        if (this.isNormalized())
            return this;
        for (let i = 0; i < this.quads.length; i++) {
            let q = this.quads[i];
            if (q.from > q.to) {
                this.quads.splice(i, 1);
                i--;
                continue;
            }
            if (q.from >= 24) {
                q.from -= 24;
                q.to -= 24;
            }
        }
        this.quads.sort((a, b) => a.from - b.from);
        let places = Array(24).fill('');
        let paints = Array(24).fill('');
        for (let q of this.quads) {
            for (let i = q.from; i < q.to; i++) {
                places[i % 24] = q.shape;
            }
        }
        for (let a of this.areas) {
            for (let i = a.from; i < a.to; i++) {
                paints[i % 24] = a.color;
            }
        }
        for (let i = 0; i < 24; i++)
            if (!places[i])
                paints[i] = '';
        this.areas = [];
        let last;
        for (let i = 0; i < 24; i++) {
            if (!paints[i])
                continue;
            if (last && last.color == paints[i] && last.to == i) {
                last.to++;
            }
            else {
                this.areas.push(last = new SzLayerArea({
                    color: paints[i], from: i, to: i + 1, shape: 'sector',
                }));
            }
        }
        if (this.areas.length > 1) {
            let last = this.areas[this.areas.length - 1];
            if (last.color == this.areas[0].color && last.to % 24 == this.areas[0].from) {
                this.areas[this.areas.length - 1].to += this.areas[0].to;
                this.areas.splice(0, 1);
            }
        }
        // fixme: cuts
        if (!this.isNormalized()) {
            Object.assign(globalThis, { layer: this });
            console.error('Layer failed to normalize properly!', this);
            if (config.debugBadLayers)
                debugger;
        }
        return this;
    }
    isEmpty() {
        return this.quads.length == 0;
    }
    getQuadAtSector(s) {
        let s1 = (s + 0.5) % 24, s2 = s1 + 24;
        return this.quads.find(q => (q.from < s1 && q.to > s1) || (q.from < s2 && q.to > s2));
    }
    canStackWith(upper) {
        if (!upper)
            return true;
        for (let i = 0; i < 24; i++) {
            let q1 = this.getQuadAtSector(i);
            let q2 = upper.getQuadAtSector(i);
            if (q1 && q2)
                return false;
        }
        return true;
    }
    stackWith(upper) {
        if (!upper)
            return this.clone();
        return new SzLayer({
            areas: this.areas.concat(upper.areas),
            quads: this.quads.concat(upper.quads),
            cuts: this.cuts.concat(upper.cuts),
        });
    }
    rotate(rot) {
        this.areas.map(e => { e.from += rot; e.to += rot; });
        this.cuts.map(e => { e.from += rot; });
        this.quads.map(e => { e.from += rot; e.to += rot; });
        return this.normalize();
    }
    cloneFilteredByQuadrants(includeQuadrants) {
        const good = (n) => includeQuadrants.includes((~~(n / 6)) % 4);
        let allowed = Array(48).fill(0).map((e, i) => good(i + 0.5));
        function convert(old) {
            let filled = Array(48).fill(0).map((e, i) => old.from < i + 0.5 && i + 0.5 < old.to);
            let last = old.clone();
            last.to = -999;
            let list = [];
            for (let i = 0; i < 48; i++) {
                if (!filled[i])
                    continue;
                if (!allowed[i])
                    continue;
                if (last.to != i) {
                    last = old.clone();
                    last.from = i;
                    last.to = i + 1;
                    list.push(last);
                }
                else {
                    last.to++;
                }
            }
            return list;
        }
        return new SzLayer({
            areas: this.areas.flatMap(convert),
            quads: this.quads.flatMap(convert),
            cuts: this.cuts.flatMap(convert),
        });
    }
    cloneAsCover() {
        function convert(quad) {
            return new SzLayerQuad({
                color: 'cover',
                shape: 'cover',
                from: quad.from, to: quad.to,
            });
        }
        return new SzLayer({
            quads: this.quads.flatMap(convert),
        }).paint('cover').normalize();
    }
    removeCover() {
        this.quads = this.quads.filter(e => e.shape != 'cover');
        return this;
    }
    filterPaint(paint) {
        return paint.map((e, i) => {
            let quad = this.getQuadAtSector(i);
            return quad && quad.shape == 'cover' ? null : e;
        });
    }
    paint(paint) {
        if (!Array.isArray(paint))
            paint = Array(24).fill(paint);
        paint.map((color, i) => {
            if (color) {
                this.areas.push(new SzLayerArea({
                    color,
                    from: i, to: i + 1,
                    shape: 'sector',
                }));
            }
        });
        return this.normalize();
        ;
    }
    static fromShapezHash(hash, err = true) {
        if (hash[0] == '6')
            hash = hash.slice(1);
        if (hash.length != 8 && hash.length != 12) {
            if (!err)
                return null;
            throw new Error(`Invalid shape hash: ${hash}`);
        }
        let angle = 24 / (hash.length / 2);
        return new SzLayer({
            areas: hash.match(/../g).map((s, i) => {
                if (s[0] == '-')
                    return null;
                return new SzLayerArea({
                    shape: 'sector',
                    color: SzInfo.color.byChar[s[1]].name,
                    from: i * angle,
                    to: (i + 1) * angle,
                });
            }).filter(e => e),
            quads: hash.match(/../g).map((s, i) => {
                if (s[0] == '-')
                    return null;
                return new SzLayerQuad({
                    shape: SzInfo.quad.byChar[s[0]].name,
                    color: SzInfo.color.byChar[s[1]].name,
                    from: i * angle,
                    to: (i + 1) * angle,
                });
            }).filter(e => e),
            cuts: [],
        });
    }
    getHash() {
        for (let qn of [4, 6]) {
            let qw = 24 / qn;
            if (!this.quads.every(e => e.from % qw == 0 && e.to - e.from == qw))
                continue;
            if (!this.areas.every(e => e.from % qw == 0 && e.to % qw == 0))
                continue;
            let data = Array.from({ length: qn }, (_, i) => ({ shape: '-', color: '-' }));
            for (let q of this.quads) {
                data[q.from / qw].shape = SzInfo.quad.byName[q.shape].code;
            }
            for (let a of this.areas) {
                for (let i = a.from / qw; i < a.to / qw; i++) {
                    data[i % qn].color = SzInfo.color.byName[a.color].code;
                }
            }
            return data.map(({ shape, color }) => shape == '-' ? '--' : shape + color).join('');
        }
        return `l!z|q!${this.quads.map(e => e.getHash()).join(',')}|a!${this.areas.map(e => e.getHash()).join(',')}|c!${this.cuts.map(e => e.getHash()).join(',')}`;
    }
    static fromShortKey(key) {
        if (key.startsWith('sz!')) {
            key = key.slice(3);
        }
        if (key.startsWith('l!z|')) {
            let layer = new SzLayer();
            for (let part of key.split('|')) {
                if (part.startsWith('q!')) {
                    let strs = part.slice('q!'.length).split(',');
                    layer.quads = strs.map(e => SzLayerQuad.fromShortKey(e));
                }
                if (part.startsWith('a!')) {
                    let strs = part.slice('a!'.length).split(',');
                    layer.areas = strs.map(e => SzLayerArea.fromShortKey(e));
                }
                if (part.startsWith('c!')) {
                    let strs = part.slice('c!'.length).split(',');
                    layer.cuts = strs.map(e => SzLayerCut.fromShortKey(e));
                }
            }
            return layer;
        }
        return SzLayer.fromShapezHash(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9zaGFwZXN0L2xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sTUFBTSxHQUFHO0lBQ2QsV0FBVyxFQUFFLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixjQUFjLEVBQUUsSUFBSTtDQUNwQixDQUFBO0FBc0JELE1BQU0sS0FBVyxNQUFNLENBcWZ0QjtBQXJmRCxXQUFpQixNQUFNO0lBQ3RCLElBQWlCLEtBQUssQ0FxRHJCO0lBckRELFdBQWlCLE9BQUs7UUFDckIsTUFBTSxrQkFBa0IsR0FBRztZQUMxQixLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVE7WUFDekIsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNO1lBQzVCLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDWCxNQUFNLGlCQUFpQixHQUFHO1lBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTztTQUNmLENBQUM7UUFJRSxZQUFJLEdBQXlCO1lBQ3pDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUN0RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzVELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUMxRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFF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LElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDOUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2RDthQUNEO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUNELE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTekRlZmluaXRpb24gfSBmcm9tIFwiLi9kZWZpbml0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGNoYXIsIHJvdGF0aW9uMjQsIHN0eWxlU3RyaW5nLCBTekNvbnRleHQyRCB9IGZyb20gXCIuL1N6Q29udGV4dDJELmpzXCI7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0ZGlzYWJsZUN1dHM6IHRydWUsXHJcblx0ZGlzYWJsZVF1YWRDb2xvcnM6IHRydWUsXHJcblx0ZGVidWdCYWRMYXllcnM6IHRydWUsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIGN1dFNoYXBlID0gKFxyXG5cdHwgJ2xpbmUnXHJcbik7XHJcbmV4cG9ydCB0eXBlIHF1YWRTaGFwZSA9IChcclxuXHR8ICdjaXJjbGUnIHwgJ3NxdWFyZScgfCAnc3RhcicgfCAnd2luZG1pbGwnXHJcblx0fCAnY292ZXInXHJcbik7XHJcbmV4cG9ydCB0eXBlIGFyZWFTaGFwZSA9IChcclxuXHR8ICd3aG9sZScgfCAnc2VjdG9yJ1xyXG4pO1xyXG5leHBvcnQgdHlwZSBjb2xvciA9XHJcblx0fCAncmVkJyB8ICdvcmFuZ2UnIHwgJ3llbGxvdydcclxuXHR8ICdsYXduZ3JlZW4nIHwgJ2dyZWVuJyB8ICdjeWFuJ1xyXG5cdHwgJ2JsdWUnIHwgJ3B1cnBsZScgfCAncGluaydcclxuXHR8ICdibGFjaycgfCAnZ3JleScgfCAnd2hpdGUnXHJcblx0fCAnY292ZXInIHwgJ25vbmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgY29sb3JDaGFyID0gJ3InIHwgJ2cnIHwgJ2InIHwgJy0nO1xyXG5leHBvcnQgdHlwZSBjb2xvclN0cmluZyA9IGAke2NvbG9yQ2hhcn0ke2NvbG9yQ2hhcn0ke2NvbG9yQ2hhcn1gO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBTekluZm8ge1xyXG5cdGV4cG9ydCBuYW1lc3BhY2UgY29sb3Ige1xyXG5cdFx0Y29uc3QgY29sb3JXaGVlbE5hbWVMaXN0ID0gW1xyXG5cdFx0XHQncmVkJywgJ29yYW5nZScsICd5ZWxsb3cnLFxyXG5cdFx0XHQnbGF3bmdyZWVuJywgJ2dyZWVuJywgJ2N5YW4nLFxyXG5cdFx0XHQnYmx1ZScsICdwdXJwbGUnLCAncGluaycsXHJcblx0XHRdIGFzIGNvbnN0O1xyXG5cdFx0Y29uc3QgY29sb3JHcmV5TmFtZUxpc3QgPSBbXHJcblx0XHRcdCdibGFjaycsICdncmV5JywgJ3doaXRlJyxcclxuXHRcdF0gYXMgY29uc3Q7XHJcblxyXG5cdFx0ZXhwb3J0IHR5cGUgY29sb3JJbmZvID0geyBuYW1lOiBjb2xvciwgc3R5bGU6IHN0eWxlU3RyaW5nLCBjb2RlOiBjaGFyLCBjb21ibz86IGNvbG9yU3RyaW5nIH07IC8vIGJiZ2dyclxyXG5cclxuXHRcdGV4cG9ydCBjb25zdCBsaXN0OiByZWFkb25seSBjb2xvckluZm9bXSA9IFtcclxuXHRcdFx0eyBuYW1lOiAncmVkJywgc3R5bGU6ICdyZWQnLCBjb2RlOiAncicsIGNvbWJvOiAncnJyJyB9LFxyXG5cdFx0XHR7IG5hbWU6ICdvcmFuZ2UnLCBzdHlsZTogJ29yYW5nZScsIGNvZGU6ICdvJywgY29tYm86ICdncnInIH0sXHJcblx0XHRcdHsgbmFtZTogJ3llbGxvdycsIHN0eWxlOiAneWVsbG93JywgY29kZTogJ3knLCBjb21ibzogJ2dncicgfSxcclxuXHRcdFx0eyBuYW1lOiAnZ3JlZW4nLCBzdHlsZTogJ2dyZWVuJywgY29kZTogJ2cnLCBjb21ibzogJ2dnZycgfSxcclxuXHRcdFx0eyBuYW1lOiAnbGF3bmdyZWVuJywgc3R5bGU6ICdsYXduZ3JlZW4nLCBjb2RlOiAnbCcsIGNvbWJvOiAnYmdnJyB9LFxyXG5cdFx0XHR7IG5hbWU6ICdjeWFuJywgc3R5bGU6ICdjeWFuJywgY29kZTogJ2MnLCBjb21ibzogJ2JiZycgfSxcclxuXHRcdFx0eyBuYW1lOiAnYmx1ZScsIHN0eWxlOiAnYmx1ZScsIGNvZGU6ICdiJywgY29tYm86ICdiYmInIH0sXHJcblx0XHRcdHsgbmFtZTogJ3B1cnBsZScsIHN0eWxlOiAncHVycGxlJywgY29kZTogJ3YnLCBjb21ibzogJ2JicicgfSxcclxuXHRcdFx0eyBuYW1lOiAncGluaycsIHN0eWxlOiAncGluaycsIGNvZGU6ICdwJywgY29tYm86ICdicnInIH0sXHJcblx0XHRcdHsgbmFtZTogJ2JsYWNrJywgc3R5bGU6ICdibGFjaycsIGNvZGU6ICdrJyB9LFxyXG5cdFx0XHR7IG5hbWU6ICdncmV5Jywgc3R5bGU6ICdncmV5JywgY29kZTogJ3UnIH0sXHJcblx0XHRcdHsgbmFtZTogJ3doaXRlJywgc3R5bGU6ICd3aGl0ZScsIGNvZGU6ICd3JyB9LFxyXG5cdFx0XHR7IG5hbWU6ICdjb3ZlcicsIHN0eWxlOiAnc3otY292ZXInLCBjb2RlOiAnaicgfSxcclxuXHRcdFx0eyBuYW1lOiAnbm9uZScsIHN0eWxlOiAnbm9uZScsIGNvZGU6ICctJyB9LFxyXG5cdFx0XSBhcyBjb25zdDtcclxuXHRcdE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywgeyBsaXN0IH0pO1xyXG5cclxuXHRcdGV4cG9ydCBjb25zdCBjb2xvckxpc3QgPSBsaXN0Lm1hcChlID0+IGUubmFtZSk7XHJcblxyXG5cdFx0ZXhwb3J0IGNvbnN0IGJ5TmFtZTogUmVjb3JkPGNvbG9yLCBjb2xvckluZm8+ID0gT2JqZWN0LmZyb21FbnRyaWVzKGxpc3QubWFwKGUgPT4gW2UubmFtZSwgZV0gYXMgY29uc3QpKTtcclxuXHRcdGV4cG9ydCBjb25zdCBieUNoYXI6IFJlY29yZDxjaGFyLCBjb2xvckluZm8+ID0gT2JqZWN0LmZyb21FbnRyaWVzKGxpc3QubWFwKGUgPT4gW2UuY29kZSwgZV0gYXMgY29uc3QpKTtcclxuXHRcdGV4cG9ydCBjb25zdCBieUNvbWJvOiBSZWNvcmQ8Y29sb3JTdHJpbmcsIGNvbG9ySW5mbz4gPSBPYmplY3QuZnJvbUVudHJpZXMobGlzdC5maWx0ZXIoZSA9PiBlLmNvbWJvKS5tYXAoZSA9PiBbZS5jb21ibyEsIGVdKSk7XHJcblxyXG5cdFx0T2JqZWN0LmFzc2lnbihieU5hbWUsIGJ5Q29tYm8pO1xyXG5cclxuXHRcdGV4cG9ydCBmdW5jdGlvbiBleGFtcGxlTGF5ZXIoY29sb3I6IGNvbG9yKSB7XHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0cmV0dXJuIG5ldyBTekxheWVyKHtcclxuXHRcdFx0XHRxdWFkczogW1xyXG5cdFx0XHRcdFx0eyBzaGFwZTogJ2NpcmNsZScsIGZyb206IGksIHRvOiBpICs9IDYsIGNvbG9yIH0sXHJcblx0XHRcdFx0XHR7IHNoYXBlOiAnc3F1YXJlJywgZnJvbTogaSwgdG86IGkgKz0gNiwgY29sb3IgfSxcclxuXHRcdFx0XHRcdHsgc2hhcGU6ICdjaXJjbGUnLCBmcm9tOiBpLCB0bzogaSArPSA2LCBjb2xvciB9LFxyXG5cdFx0XHRcdFx0eyBzaGFwZTogJ3NxdWFyZScsIGZyb206IGksIHRvOiBpICs9IDYsIGNvbG9yIH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRhcmVhczogW1xyXG5cdFx0XHRcdFx0eyBzaGFwZTogJ3NlY3RvcicsIGZyb206IDAsIHRvOiAyNCwgY29sb3IgfSxcclxuXHRcdFx0XHRdXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0ZXhwb3J0IG5hbWVzcGFjZSBxdWFkIHtcclxuXHRcdGV4cG9ydCB0eXBlIHF1YWRJbmZvID0ge1xyXG5cdFx0XHRuYW1lOiBxdWFkU2hhcGUsIGNvZGU6IGNoYXIsIGNvbWJvPzogc3RyaW5nLCBzcGF3bj86IHN0cmluZyxcclxuXHRcdFx0cGF0aD86IChjdHg6IFN6Q29udGV4dDJELCBxdWFkOiBTekxheWVyUXVhZCkgPT4gdm9pZCxcclxuXHRcdH07XHJcblxyXG5cdFx0ZXhwb3J0IGNvbnN0IGxpc3Q6IHF1YWRJbmZvW10gPSBbXHJcblx0XHRcdHsgbmFtZTogJ2NpcmNsZScsIGNvZGU6ICdDJywgY29tYm86ICdDJywgc3Bhd246ICdzeiFsIXp8cSFDLTBvfGEhc3Uwb3xjIScgfSxcclxuXHRcdFx0eyBuYW1lOiAnc3F1YXJlJywgY29kZTogJ1InLCBjb21ibzogJ1InLCBzcGF3bjogJ3N6IWwhenxxIVItMGMsUi1jb3xhIXN1MG98YyEnIH0sXHJcblx0XHRcdHsgbmFtZTogJ3N0YXInLCBjb2RlOiAnUycsIGNvbWJvOiAnUycsIHNwYXduOiAnc3ohbCF6fHEhUy00YyxTLWNrLFMta3N8YSFzdTBvfGMhJyB9LFxyXG5cdFx0XHR7IG5hbWU6ICd3aW5kbWlsbCcsIGNvZGU6ICdXJywgY29tYm86ICdXJywgc3Bhd246ICdzeiFsIXp8cSFTLTRjLFMtY2ssUy1rc3xhIXN1MG98YyEnIH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRuYW1lOiAnY292ZXInLCBjb2RlOiAnSicsXHJcblx0XHRcdFx0cGF0aChjdHgsIHsgZnJvbSwgdG8gfSkge1xyXG5cdFx0XHRcdFx0Y3R4LmFyYygwLCAwLCAxLjE1LCBmcm9tLCB0byk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdG5hbWU6ICdjbG92ZXInIGFzIGFueSwgY29kZTogJ0wnLFxyXG5cdFx0XHRcdHBhdGgoY3R4LCB7IGZyb20sIHRvIH0pIHtcclxuXHRcdFx0XHRcdGNvbnN0IHIgPSAwLjUsIFIgPSAxO1xyXG5cdFx0XHRcdFx0Y3R4LnJvdGF0ZShmcm9tKTtcclxuXHJcblx0XHRcdFx0XHQvLyBleHBvcnQgY29uc3QgZXh0cmFTaGFwZXM6IFJlY29yZDxzdHJpbmcsIChjdHg6IFN6Q29udGV4dDJELCBxdWFkOiBTekxheWVyUXVhZCkgPT4gdm9pZD4gPSB7XHJcblx0XHRcdFx0XHQvLyBcdGNsb3ZlcihjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRcdFx0XHQvLyBcdFx0Ly8gYmVnaW4oeyBzaXplOiAxLjMsIHBhdGg6IHRydWUsIHplcm86IHRydWUgfSk7XHJcblx0XHRcdFx0XHRjb25zdCBpbm5lciA9IDAuNTtcclxuXHRcdFx0XHRcdGNvbnN0IGlubmVyX2NlbnRlciA9IDAuNDU7XHJcblx0XHRcdFx0XHRjdHguY3R4LmxpbmVUbygwLCBpbm5lcik7XHJcblx0XHRcdFx0XHRjdHguY3R4LmJlemllckN1cnZlVG8oMCwgMSwgaW5uZXIsIDEsIGlubmVyX2NlbnRlciwgaW5uZXJfY2VudGVyKTtcclxuXHRcdFx0XHRcdGN0eC5jdHguYmV6aWVyQ3VydmVUbygxLCBpbm5lciwgMSwgMCwgaW5uZXIsIDApO1xyXG5cdFx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdG5hbWU6ICcnLCBjb2RlOiAnJyxcclxuXHRcdFx0XHQvLyBcdHN0YXI4KGN0eDogU3pDb250ZXh0MkQsIHsgZnJvbSwgdG8gfTogU3pMYXllclF1YWQpIHtcclxuXHRcdFx0XHQvLyBcdFx0Y29uc3QgciA9IDEuMjIgLyAyLCBSID0gMS4yMiwgZCA9IChuOiBudW1iZXIpID0+IGZyb20gKiAoMSAtIG4pICsgdG8gKiBuO1xyXG5cdFx0XHRcdC8vIFx0XHRjdHhcclxuXHRcdFx0XHQvLyBcdFx0XHQubGluZVRvUihyLCBkKDApKVxyXG5cdFx0XHRcdC8vIFx0XHRcdC5saW5lVG9SKFIsIGQoMC4yNSkpXHJcblx0XHRcdFx0Ly8gXHRcdFx0LmxpbmVUb1IociwgZCgwLjUpKVxyXG5cdFx0XHRcdC8vIFx0XHRcdC5saW5lVG9SKFIsIGQoMC43NSkpXHJcblx0XHRcdFx0Ly8gXHRcdFx0LmxpbmVUb1IociwgZCgxKSlcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRuYW1lOiAnJywgY29kZTogJycsXHJcblx0XHRcdFx0Ly8gXHRyaG9tYnVzKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRuYW1lOiAnJywgY29kZTogJycsXHJcblx0XHRcdFx0Ly8gXHRwbHVzKGN0eDogU3pDb250ZXh0MkQsIHsgZnJvbSwgdG8gfTogU3pMYXllclF1YWQpIHtcclxuXHRcdFx0XHQvLyBcdFx0Y29uc3QgciA9IDAuNCwgUiA9IDEuMCwgZCA9IChuOiBudW1iZXIpID0+IGZyb20gKiAoMSAtIG4pICsgdG8gKiBuO1xyXG5cdFx0XHRcdC8vIFx0XHRjb25zdCByciA9IChyMTogbnVtYmVyLCByMjogbnVtYmVyKSA9PiAocjEgKiByMSArIHIyICogcjIpICoqIDAuNVxyXG5cdFx0XHRcdC8vIFx0XHRjb25zdCBhdCA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gTWF0aC5hdGFuMihiLCBhKSAvIE1hdGguUEkgKiAyO1xyXG5cdFx0XHRcdC8vIFx0XHRjb25zdCB0b3IgPSAocjogbnVtYmVyLCBSOiBudW1iZXIpID0+IFtycihyLCBSKSwgZChhdChyLCBSKSldIGFzIGNvbnN0O1xyXG5cdFx0XHRcdC8vIFx0XHRjdHhcclxuXHRcdFx0XHQvLyBcdFx0XHQubGluZVRvUiguLi50b3IoUiwgMCkpXHJcblx0XHRcdFx0Ly8gXHRcdFx0LmxpbmVUb1IoLi4udG9yKFIsIHIpKVxyXG5cdFx0XHRcdC8vIFx0XHRcdC5saW5lVG9SKC4uLnRvcihyLCByKSlcclxuXHRcdFx0XHQvLyBcdFx0XHQubGluZVRvUiguLi50b3IociwgUikpXHJcblx0XHRcdFx0Ly8gXHRcdFx0LmxpbmVUb1IoLi4udG9yKDAsIFIpKVxyXG5cdFx0XHRcdC8vIFx0fSxcclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdG5hbWU6ICcnLCBjb2RlOiAnJyxcclxuXHRcdFx0XHQvLyBcdHNhdyhjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bmFtZTogJycsIGNvZGU6ICcnLFxyXG5cdFx0XHRcdC8vIFx0c3VuKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRuYW1lOiAnJywgY29kZTogJycsXHJcblx0XHRcdFx0Ly8gXHRsZWFmKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRuYW1lOiAnJywgY29kZTogJycsXHJcblx0XHRcdFx0Ly8gXHRkaWFtb25kKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRuYW1lOiAnJywgY29kZTogJycsXHJcblx0XHRcdFx0Ly8gXHRtaWxsKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdFx0XHQvLyBcdH0sXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRuYW1lOiAnJywgY29kZTogJycsXHJcblx0XHRcdFx0Ly8gXHRoYWxmbGVhZihjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bmFtZTogJycsIGNvZGU6ICcnLFxyXG5cdFx0XHRcdC8vIFx0eWlueWFuZyhjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0bmFtZTogJycsIGNvZGU6ICcnLFxyXG5cdFx0XHRcdC8vIFx0b2N0YWdvbihjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XSBhcyBxdWFkSW5mb1tdO1xyXG5cdFx0d2hpbGUgKGxpc3QuZmluZChlID0+ICFlLm5hbWUpKSB7XHJcblx0XHRcdGxpc3Quc3BsaWNlKGxpc3QuZmluZEluZGV4KGUgPT4gIWUubmFtZSksIDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV4cG9ydCBjb25zdCBuYW1lZDQgPSB7XHJcblxyXG5cdFx0XHRjaXJjbGVTcGF3bjogJ0N1Q3VDdUN1JyxcclxuXHRcdFx0c3F1YXJlU3Bhd246ICdSdVJ1UnVSdScsXHJcblx0XHRcdHN0YXJTcGF3bjogJ1N1U3VTdVN1JyxcclxuXHRcdFx0d2luZG1pbGxTcGF3bjogJ1d1V3VXdVd1JyxcclxuXHJcblx0XHRcdGNpcmNsZUJvdHRvbTogJy0tQ3VDdS0tJyxcclxuXHJcblx0XHRcdGNpcmNsZTogXCJDdUN1Q3VDdVwiLFxyXG5cdFx0XHRjaXJjbGVIYWxmOiBcIi0tLS1DdUN1XCIsXHJcblx0XHRcdHJlY3Q6IFwiUnVSdVJ1UnVcIixcclxuXHRcdFx0cmVjdEhhbGY6IFwiUnVSdS0tLS1cIixcclxuXHRcdFx0Y2lyY2xlSGFsZlJvdGF0ZWQ6IFwiQ3UtLS0tQ3VcIixcclxuXHRcdFx0Y2lyY2xlUXVhZDogXCJDdS0tLS0tLVwiLFxyXG5cdFx0XHRjaXJjbGVSZWQ6IFwiQ3JDckNyQ3JcIixcclxuXHRcdFx0cmVjdEhhbGZCbHVlOiBcIlJiUmItLS0tXCIsXHJcblx0XHRcdGNpcmNsZVB1cnBsZTogXCJDcENwQ3BDcFwiLFxyXG5cdFx0XHRzdGFyQ3lhbjogXCJTY1NjU2NTY1wiLFxyXG5cdFx0XHRmaXNoOiBcIkNnU2NTY0NnXCIsXHJcblx0XHRcdGJsdWVwcmludDogXCJDYkNiQ2JSYjpDd0N3Q3dDd1wiLFxyXG5cdFx0XHRyZWN0Q2lyY2xlOiBcIlJwUnBScFJwOkN3Q3dDd0N3XCIsXHJcblx0XHRcdHdhdGVybWVsb246IFwiLS1DZy0tLS06LS1Dci0tLS1cIixcclxuXHRcdFx0c3RhckNpcmNsZTogXCJTclNyU3JTcjpDeUN5Q3lDeVwiLFxyXG5cdFx0XHRzdGFyQ2lyY2xlU3RhcjogXCJTclNyU3JTcjpDeUN5Q3lDeTpTd1N3U3dTd1wiLFxyXG5cdFx0XHRmYW46IFwiQ2JSYlJiQ2I6Q3dDd0N3Q3c6V2JXYldiV2JcIixcclxuXHRcdFx0bW9uc3RlcjogXCJTZy0tLS1TZzpDZ0NnQ2dDZzotLUN5Q3ktLVwiLFxyXG5cdFx0XHRib3VxdWV0OiBcIkNwUnBDcC0tOlN3U3dTd1N3XCIsXHJcblx0XHRcdGxvZ286IFwiUnVDdy0tQ3c6LS0tLVJ1LS1cIixcclxuXHRcdFx0dGFyZ2V0OiBcIkNyQ3dDckN3OkN3Q3JDd0NyOkNyQ3dDckN3OkN3Q3JDd0NyXCIsXHJcblx0XHRcdHNwZWVkb21ldGVyOiBcIkNnLS0tLUNyOkN3LS0tLUN3OlN5LS0tLS0tOkN5LS0tLUN5XCIsXHJcblx0XHRcdC8vIHNwaWtlZEJhbGw6IFwiQ2NTeUNjU3k6U3lDY1N5Q2M6Q2NTeUNjU3k6U3lDY1N5Q2NcIixcclxuXHRcdFx0c3Bpa2VkQmFsbDogXCJDY1N5Q2NTeTpTeUNjU3lDYzpDY1N5Q2NTeVwiLFxyXG5cdFx0XHRjb21wYXNzOiBcIkNjUmNDY1JjOlJ3Q3dSd0N3OlNyLS1Tdy0tOkN5Q3lDeUN5XCIsXHJcblx0XHRcdHBsYW50OiBcIlJnLS1SZy0tOkN3UndDd1J3Oi0tUmctLVJnXCIsXHJcblx0XHRcdHJvY2tldDogXCJDYkN1Q2JDdTpTci0tLS0tLTotLUNyU3JDcjpDd0N3Q3dDd1wiLFxyXG5cclxuXHRcdFx0bWlsbDogXCJDd0N3Q3dDdzpXYldiV2JXYlwiLFxyXG5cdFx0XHRzdGFyOiBcIlN1U3VTdVN1XCIsXHJcblx0XHRcdGNpcmNsZVN0YXI6IFwiQ3dDckN3Q3I6U2dTZ1NnU2dcIixcclxuXHRcdFx0Y2xvd246IFwiV3JSZ1dyUmc6Q3dDckN3Q3I6U2dTZ1NnU2dcIixcclxuXHRcdFx0d2luZG1pbGxSZWQ6IFwiV3JXcldyV3JcIixcclxuXHRcdFx0ZmFuVHJpcGxlOiBcIldwV3BXcFdwOkN3Q3dDd0N3OldwV3BXcFdwXCIsXHJcblx0XHRcdGZhblF1YWRydXBsZTogXCJXcFdwV3BXcDpDd0N3Q3dDdzpXcFdwV3BXcDpDd0N3Q3dDd1wiLFxyXG5cclxuXHRcdFx0YmlyZDogXCJTci0tLS0tLTotLUNnLS1DZzpTYi0tU2ItLTotLUN3LS1Dd1wiLFxyXG5cdFx0XHRzY2lzc29yczogXCJTci0tLS0tLTotLUNnQ2dDZzotLVNiLS0tLTpDdy0tQ3dDd1wiLFxyXG5cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZXhwb3J0IGNvbnN0IG5hbWVkNiA9IHtcclxuXHRcdFx0Y2lyY2xlU3Bhd246ICc2Q3VDdUN1Q3VDdUN1JyxcclxuXHRcdFx0c3F1YXJlU3Bhd246ICc2UnVSdVJ1UnVSdVJ1JyxcclxuXHRcdFx0c3RhclNwYXduOiAnNlN1U3VTdVN1U3VTdScsXHJcblx0XHRcdHdpbmRtaWxsU3Bhd246ICc2V3VXdVd1V3VXdVd1JyxcclxuXHJcblx0XHRcdGNpcmNsZUJvdHRvbTogJzYtLS0tQ3VDdUN1LS0nLFxyXG5cclxuXHRcdFx0Y2lyY2xlOiBcIjZDdUN1Q3VDdUN1Q3VcIixcclxuXHRcdFx0Y2lyY2xlSGFsZjogXCI2LS0tLS0tQ3VDdUN1XCIsXHJcblx0XHRcdHJlY3Q6IFwiNlJ1UnVSdVJ1UnVSdVwiLFxyXG5cdFx0XHRyZWN0SGFsZjogXCI2UnVSdVJ1LS0tLS0tXCIsXHJcblx0XHRcdGNpcmNsZUhhbGZSb3RhdGVkOiBcIjZDdS0tLS0tLUN1Q3VcIixcclxuXHRcdFx0Y2lyY2xlUXVhZDogXCI2Q3VDdS0tLS0tLS0tXCIsXHJcblx0XHRcdGNpcmNsZVJlZDogXCI2Q3JDckNyQ3JDckNyXCIsXHJcblx0XHRcdHJlY3RIYWxmQmx1ZTogXCI2UmJSYlJiLS0tLS0tXCIsXHJcblx0XHRcdGNpcmNsZVB1cnBsZTogXCI2Q3BDcENwQ3BDcENwXCIsXHJcblx0XHRcdHN0YXJDeWFuOiBcIjZTY1NjU2NTY1NjU2NcIixcclxuXHRcdFx0ZmlzaDogXCI2Q2dDZ1NjU2NDZ0NnXCIsXHJcblx0XHRcdGJsdWVwcmludDogXCI2Q2JDYkNiQ2JDYlJiOjZDd0N3Q3dDd0N3Q3dcIixcclxuXHRcdFx0cmVjdENpcmNsZTogXCI2UnBScFJwUnBScFJwOjZDd0N3Q3dDd0N3Q3dcIixcclxuXHRcdFx0d2F0ZXJtZWxvbjogXCI2LS1DZ0NnLS0tLS0tOjYtLUNyQ3ItLS0tLS1cIixcclxuXHRcdFx0c3RhckNpcmNsZTogXCI2U3JTclNyU3JTclNyOjZDeUN5Q3lDeUN5Q3lcIixcclxuXHRcdFx0c3RhckNpcmNsZVN0YXI6IFwiNlNyU3JTclNyU3JTcjo2Q3lDeUN5Q3lDeUN5OjZTd1N3U3dTd1N3U3dcIixcclxuXHRcdFx0ZmFuOiBcIjZDYkNiUmJSYkNiQ2I6NkN3Q3dDd0N3Q3dDdzo2V2JXYldiV2JXYldiXCIsXHJcblx0XHRcdG1vbnN0ZXI6IFwiNlNnLS0tLS0tLS1TZzo2Q2dDZ0NnQ2dDZ0NnOjYtLUN5Q3lDeUN5LS1cIixcclxuXHRcdFx0Ym91cXVldDogXCI2Q3BDcFJwQ3BDcC0tOjZTd1N3U3dTd1N3U3dcIixcclxuXHRcdFx0bG9nbzogXCI2UndDdUN3LS1Dd0N1OjYtLS0tLS1SdS0tLS1cIixcclxuXHRcdFx0dGFyZ2V0OiBcIjZDckN3Q3JDd0NyQ3c6NkN3Q3JDd0NyQ3dDcjo2Q3JDd0NyQ3dDckN3OjZDd0NyQ3dDckN3Q3JcIixcclxuXHRcdFx0c3BlZWRvbWV0ZXI6IFwiNkNnQ2ItLS0tQ3JDeTo2Q3dDdy0tLS1Dd0N3OjZTYy0tLS0tLS0tLS06NkN5Q3ktLS0tQ3lDeVwiLFxyXG5cdFx0XHRzcGlrZWRCYWxsOiBcIjZDY1N5Q2NTeUNjU3k6NlN5Q2NTeUNjU3lDYzo2Q2NTeUNjU3lDY1N5OjZTeUNjU3lDY1N5Q2NcIixcclxuXHRcdFx0Y29tcGFzczogXCI2Q2NSY1JjQ2NSY1JjOjZSd0N3Q3dSd0N3Q3c6Ni0tLS1Tci0tLS1TYjo2Q3lDeUN5Q3lDeUN5XCIsXHJcblx0XHRcdHBsYW50OiBcIjZSZy0tUmctLVJnLS06NkN3UndDd1J3Q3dSdzo2LS1SZy0tUmctLVJnXCIsXHJcblx0XHRcdHJvY2tldDogXCI2Q2JDdUNiQ3VDYkN1OjZTci0tLS0tLS0tLS06Ni0tQ3JDclNyQ3JDcjo2Q3dDd0N3Q3dDd0N3XCIsXHJcblxyXG5cdFx0XHRtaWxsOiBcIjZDd0N3Q3dDd0N3Q3c6NldiV2JXYldiV2JXYlwiLFxyXG5cdFx0XHRzdGFyOiBcIjZTdVN1U3VTdVN1U3VcIixcclxuXHRcdFx0Y2lyY2xlU3RhcjogXCI2Q3dDckN3Q3JDd0NyOjZTZ1NnU2dTZ1NnU2dcIixcclxuXHRcdFx0Y2xvd246IFwiNldyUmdXclJnV3JSZzo2Q3dDckN3Q3JDd0NyOjZTZ1NnU2dTZ1NnU2dcIixcclxuXHRcdFx0d2luZG1pbGxSZWQ6IFwiNldyV3JXcldyV3JXclwiLFxyXG5cdFx0XHRmYW5UcmlwbGU6IFwiNldwV3BXcFdwV3BXcDo2Q3dDd0N3Q3dDd0N3OjZXcFdwV3BXcFdwV3BcIixcclxuXHRcdFx0ZmFuUXVhZHJ1cGxlOiBcIjZXcFdwV3BXcFdwV3A6NkN3Q3dDd0N3Q3dDdzo2V3BXcFdwV3BXcFdwOjZDd0N3Q3dDd0N3Q3dcIixcclxuXHJcblx0XHRcdGJpcmQ6IFwiNlNyLS0tLS0tLS0tLTo2LS1DZ0NnLS1DZ0NnOjZTYi0tLS1TYi0tLS06Ni0tQ3dDdy0tQ3dDd1wiLFxyXG5cdFx0XHRzY2lzc29yczogXCI2U3ItLS0tLS0tLS0tOjYtLUNnQ2dDZ0NnQ2c6Ni0tLS1TYi0tLS0tLTo2Q3dDdy0tQ3dDd0N3XCIsXHJcblxyXG5cclxuXHRcdH0gYXMgY29uc3Q7XHJcblxyXG5cdFx0ZXhwb3J0IGNvbnN0IG5hbWVkID0ge1xyXG5cdFx0XHRjaXJjbGVTcGF3bjogJ3N6IWwhenxxIUMtMG98YSFzdTBvfGMhJyxcclxuXHRcdFx0c3F1YXJlU3Bhd246ICdzeiFsIXp8cSFSLTBjLFItY298YSFzdTBvfGMhJyxcclxuXHRcdFx0c3RhclNwYXduOiAnc3ohbCF6fHEhUy00YyxTLWNrLFMta3N8YSFzdTBvfGMhJyxcclxuXHRcdFx0d2luZG1pbGxTcGF3bjogJ3N6IWwhenxxIVctMDYsVy02YyxXLWNpLFctaW98YSFzdTBvfGMhJyxcclxuXHJcblxyXG5cdFx0XHRjaXJjbGUxOiAnc3ohbCF6fHEhQy0wb3xhIXN1MG98YyEnLFxyXG5cdFx0XHRjaXJjbGVIYWxmTGVmdDogJ3N6IWwhenxxIUMtY298YSFzdTBvfGMhJyxcclxuXHRcdFx0c3F1YXJlMjogJ3N6IWwhenxxIVItMGMsUi1jb3xhIXN1MG98YyEnLFxyXG5cdFx0XHRzcXVhcmVIYWxmUmlnaHQ6ICdzeiFsIXp8cSFSLTBjfGEhc3Uwb3xjIScsXHJcblx0XHRcdHNxdWFyZUhhbGZUb3AyOiAnc3ohbCF6fHEhUi02YyxSLWNpfGEhc3U2aXxjIScsXHJcblx0XHRcdGNpcmNsZUhhbGZUb3AyOiAnc3ohbCF6fHEhQy0wNixDLWlvfGEhc3VpdXxjIScsXHJcblx0XHRcdGNpcmNsZVF1YWQxOiAnc3ohbCF6fHEhQy1vdXxhIXN1MG98YyEnLFxyXG5cdFx0XHRjaXJjbGVSZWQ6ICdzeiFsIXp8cSFDLTBvfGEhc3Iwb3xjIScsXHJcblxyXG5cdFx0XHQvLyBzcXVhcmVoYWxmTGVmdEJsdWU6ICdzeiFsIXp8cSFSLWNvfGEhc2Iwb3xjIScsXHJcblx0XHRcdC8vIGNpcmNsZVB1cnBsZTogJ3N6IWwhenxxIUMtMG98YSFzdjBvfGMhJyxcclxuXHJcblx0XHRcdHNxdWFyZTNUb3BCbHVlOiAnc3ohbCF6fHEhUi1rc3xhIXNia3N8YyEnLFxyXG5cclxuXHRcdFx0c3RhcjNDeWFuOiAnc3ohbCF6fHEhUy00YyxTLWNrLFMta3N8YSFzYzBvfGMhJyxcclxuXHRcdFx0c3F1aWQ6ICdzeiFsIXp8cSFTLTZjLFMtY2ksQy1pdXxhIXNjNmksc2dpdXxjIScsXHJcblxyXG5cdFx0XHRkaWFtb25kOiAnc3ohbCF6fHEhUi0wMyxSLWxvfGEhc2NscnxjIScsXHJcblxyXG5cdFx0XHRwYWxtOiAnc3ohbCF6fHEhUy0wMixTLTI0LFMtNDYsUy1payxTLWttLFMtbW98YSFzZ2l1fGMhOmwhenxxIVItYWV8YSFzb2FlfGMhOmwhenxxIUMtNml8YSFzcDZpfGMhJyxcclxuXHRcdFx0Y291bnRlcjogJ3N6IWwhenxxIUMtaXV8YSFzcjI2LHNnaW0sc3ltcXxjITpsIXp8cSFSLTI2LFItaW0sUi1tcXxhIXN3aXV8YyE6bCF6fHEhUy0wNHxhIXN1MDR8YyE6bCF6fHEhQy1pdXxhIXN1aXV8YyEnLFxyXG5cclxuXHRcdFx0d2luZG93OiAnc3ohbCF6fHEhUi0wNixSLTZjLFItY2ksUi1pb3xhIXNjMG98YyE6bCF6fHEhUi0yOCxSLThlLFItZWssUi1rcXxhIXNvMG98YyE6bCF6fHEhUi00YSxSLWFnLFItZ20sUi1tc3xhIXN5MG98YyE6bCF6fHEhUi0wNixSLTZjLFItY2ksUi1pb3xhIXN3MG98YyEnLFxyXG5cclxuXHRcdFx0c3BsaWtlYmFsbDQ4OiAnc3ohbCF6fHEhQy0wMixTLTI0LEMtNDYsUy02OCxDLThhLFMtYWMsQy1jZSxTLWVnLEMtZ2ksUy1payxDLWttLFMtbW98YSFzYzAyLHN5MjQsc2M0NixzeTY4LHNjOGEsc3lhYyxzY2NlLHN5ZWcsc2NnaSxzeWlrLHNja20sc3ltb3xjITpsIXp8cSFTLTAyLEMtMjQsUy00NixDLTY4LFMtOGEsQy1hYyxTLWNlLEMtZWcsUy1naSxDLWlrLFMta20sQy1tb3xhIXN5MDIsc2MyNCxzeTQ2LHNjNjgsc3k4YSxzY2FjLHN5Y2Usc2NlZyxzeWdpLHNjaWssc3lrbSxzY21vfGMhOmwhenxxIUMtMDIsUy0yNCxDLTQ2LFMtNjgsQy04YSxTLWFjLEMtY2UsUy1lZyxDLWdpLFMtaWssQy1rbSxTLW1vfGEhc2MwMixzeTI0LHNjNDYsc3k2OCxzYzhhLHN5YWMsc2NjZSxzeWVnLHNjZ2ksc3lpayxzY2ttLHN5bW98YyE6bCF6fHEhUy0wMixDLTI0LFMtNDYsQy02OCxTLThhLEMtYWMsUy1jZSxDLWVnLFMtZ2ksQy1payxTLWttLEMtbW98YSFzeTAyLHNjMjQsc3k0NixzYzY4LHN5OGEsc2NhYyxzeWNlLHNjZWcsc3lnaSxzY2lrLHN5a20sc2Ntb3xjIScsXHJcblx0XHR9IGFzIGNvbnN0O1xyXG5cclxuXHRcdGV4cG9ydCB0eXBlIG5hbWVkID0ga2V5b2YgdHlwZW9mIG5hbWVkO1xyXG5cclxuXHRcdGV4cG9ydCBjb25zdCBieU5hbWUgPSBPYmplY3QuZnJvbUVudHJpZXMobGlzdC5tYXAoZSA9PiBbZS5uYW1lLCBlXSkpO1xyXG5cdFx0ZXhwb3J0IGNvbnN0IGJ5Q2hhciA9IE9iamVjdC5mcm9tRW50cmllcyhsaXN0Lm1hcChlID0+IFtlLmNvZGUsIGVdKSk7XHJcblxyXG5cdFx0ZXhwb3J0IGZ1bmN0aW9uIGV4YW1wbGVMYXllcihzaGFwZTogcXVhZFNoYXBlKSB7XHJcblx0XHRcdGxldCBpID0gMDtcclxuXHRcdFx0cmV0dXJuIG5ldyBTekxheWVyKHtcclxuXHRcdFx0XHRxdWFkczogW1xyXG5cdFx0XHRcdFx0eyBzaGFwZSwgZnJvbTogaSwgdG86IGkgKz0gNiwgY29sb3I6ICdncmV5JyB9LFxyXG5cdFx0XHRcdFx0eyBzaGFwZSwgZnJvbTogaSwgdG86IGkgKz0gNiwgY29sb3I6ICdncmV5JyB9LFxyXG5cdFx0XHRcdFx0eyBzaGFwZSwgZnJvbTogaSwgdG86IGkgKz0gNiwgY29sb3I6ICdncmV5JyB9LFxyXG5cdFx0XHRcdFx0eyBzaGFwZSwgZnJvbTogaSwgdG86IGkgKz0gNiwgY29sb3I6ICdncmV5JyB9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YXJlYXM6IFtcclxuXHRcdFx0XHRcdHsgc2hhcGU6ICdzZWN0b3InLCBmcm9tOiAwLCB0bzogMjQsIGNvbG9yOiAnZ3JleScgfSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Ly8gT2JqZWN0LmVudHJpZXMoZXh0cmFTaGFwZXMpLm1hcCgoW2ssIHZdKSA9PiBsaXN0LnB1c2goeyBuYW1lOiBrIH0gYXMgYW55KSk7XHJcblxyXG5cdFx0ZXhwb3J0IGNvbnN0IHF1YWRMaXN0ID0gbGlzdC5tYXAoZSA9PiBlLm5hbWUpO1xyXG5cdH1cclxuXHRleHBvcnQgbmFtZXNwYWNlIGFyZWEge1xyXG5cdFx0ZXhwb3J0IHR5cGUgYXJlYUluZm8gPSB7IG5hbWU6IGFyZWFTaGFwZSwgY29kZTogY2hhciB9O1xyXG5cdFx0ZXhwb3J0IGNvbnN0IGxpc3Q6IGFyZWFJbmZvW10gPSBbXHJcblx0XHRcdHsgbmFtZTogJ3NlY3RvcicsIGNvZGU6ICdzJyB9LFxyXG5cdFx0XHR7IG5hbWU6ICd3aG9sZScsIGNvZGU6ICd3JyB9LFxyXG5cdFx0XTtcclxuXHRcdGV4cG9ydCBjb25zdCBieU5hbWU6IFJlY29yZDxhcmVhU2hhcGUsIGFyZWFJbmZvPiA9IE9iamVjdC5mcm9tRW50cmllcyhsaXN0Lm1hcChlID0+IFtlLm5hbWUsIGVdKSk7XHJcblx0XHRleHBvcnQgY29uc3QgYnlDaGFyOiBSZWNvcmQ8Y2hhciwgYXJlYUluZm8+ID0gT2JqZWN0LmZyb21FbnRyaWVzKGxpc3QubWFwKGUgPT4gW2UuY29kZSwgZV0pKTtcclxuXHJcblx0fVxyXG5cclxuXHRsZXQgcyA9IEFycmF5KDEwMCkuZmlsbCgwKS5tYXAoKGUsIGkpID0+IGkudG9TdHJpbmcoMzYpKS5qb2luKCcnKS5zbGljZSgwLCAzNik7XHJcblx0cyArPSBzLnNsaWNlKDEwKS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuXHRleHBvcnQgY29uc3QgblRvQ2hhcjogY2hhcltdID0gcy5zcGxpdCgnJyk7XHJcblx0ZXhwb3J0IGNvbnN0IGNoYXJUb046IFJlY29yZDxjaGFyLCBudW1iZXI+ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5Ub0NoYXIubWFwKChlLCBpKSA9PiBbZSwgaV0pKTtcclxuXHQvKiBvbGQ6IFxyXG5cclxuXHRcclxuZXhwb3J0IGNvbnN0IHNoYXBlNHN2ZyA9IHtcclxuXHRSOiBcIk0gMCAwIEwgMSAwIEwgMSAxIEwgMCAxIFpcIixcclxuXHRDOiBcIk0gMCAwIEwgMSAwIEEgMSAxIDAgMCAxIDAgMSBaXCIsXHJcblx0UzogXCJNIDAgMCBMIDAuNiAwIEwgMSAxIEwgMCAwLjYgWlwiLFxyXG5cdFc6IFwiTSAwIDAgTCAwLjYgMCBMIDEgMSBMIDAgMSBaXCIsXHJcblx0XCItXCI6IFwiTSAwIDBcIixcclxufVxyXG5mdW5jdGlvbiBkb3RQb3MobCwgYSkge1xyXG5cdHJldHVybiBgJHtsICogTWF0aC5jb3MoTWF0aC5QSSAvIGEpfSAke2wgKiBNYXRoLnNpbihNYXRoLlBJIC8gYSl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2luUGlCeShhKSB7XHJcblx0cmV0dXJuIE1hdGguc2luKE1hdGguUEkgLyBhKTtcclxufVxyXG5mdW5jdGlvbiBjb3NQaUJ5KGEpIHtcclxuXHRyZXR1cm4gTWF0aC5jb3MoTWF0aC5QSSAvIGEpO1xyXG59XHJcbmxldCBzaGFwZTZsb25nID0gMSAvIGNvc1BpQnkoNik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hhcGU2c3ZnID0ge1xyXG5cdFI6IGBNIDAgMCBMIDEgMCBMICR7ZG90UG9zKHNoYXBlNmxvbmcsIDYpfSBMICR7ZG90UG9zKDEsIDMpfSBaYCxcclxuXHRDOiBgTSAwIDAgTCAxIDAgQSAxIDEgMCAwIDEgJHtkb3RQb3MoMSwgMyl9IFpgLFxyXG5cdFM6IGBNIDAgMCBMIDAuNiAwIEwgJHtkb3RQb3Moc2hhcGU2bG9uZywgNil9IEwgJHtkb3RQb3MoMC42LCAzKX0gWmAsXHJcblx0VzogYE0gMCAwIEwgMC42IDAgTCAke2RvdFBvcyhzaGFwZTZsb25nLCA2KX0gTCAke2RvdFBvcygxLCAzKX0gWmAsXHJcblx0XCItXCI6IFwiTSAwIDBcIixcclxufVxyXG5cclxuXHJcblxyXG5yZWdpc3RlckN1c3RvbVNoYXBlKHtcclxuXHRpZDogXCJyaG9tYnVzXCIsXHJcblx0Y29kZTogXCJCXCIsXHJcblx0Li4uY3VzdG9tRGVmYXVsdHMsXHJcblx0ZHJhdyh7IGRpbXMsIGlubmVyRGltcywgbGF5ZXIsIHF1YWQsIGNvbnRleHQsIGNvbG9yLCBiZWdpbiB9KSB7XHJcblx0XHRiZWdpbih7IHNpemU6IDEuMiwgcGF0aDogdHJ1ZSwgemVybzogdHJ1ZSB9KTtcclxuXHRcdGNvbnN0IHJhZCA9IDAuMDAxO1xyXG5cdFx0Ly8gd2l0aCByb3VuZGVkIGJvcmRlcnNcclxuXHRcdGNvbnRleHQuYXJjVG8oMCwgMSwgMSwgMCwgcmFkKTtcclxuXHRcdGNvbnRleHQuYXJjVG8oMSwgMCwgMCwgMCwgcmFkKTtcclxuXHR9LFxyXG59KTtcclxuXHJcbnJlZ2lzdGVyQ3VzdG9tU2hhcGUoe1xyXG5cdGlkOiBcInBsdXNcIixcclxuXHRjb2RlOiBcIlBcIixcclxuXHQuLi5jdXN0b21EZWZhdWx0cyxcclxuXHRkcmF3OiBcIk0gMCAwIEwgMS4xIDAgMS4xIDAuNSAwLjUgMC41IDAuNSAxLjEgMCAxLjEgelwiLFxyXG5cdHRpZXI6IDMsXHJcbn0pO1xyXG5cclxucmVnaXN0ZXJDdXN0b21TaGFwZSh7XHJcblx0aWQ6IFwic2F3XCIsXHJcblx0Y29kZTogXCJaXCIsXHJcblx0Li4uY3VzdG9tRGVmYXVsdHMsXHJcblx0ZHJhdyh7IGRpbXMsIGlubmVyRGltcywgbGF5ZXIsIHF1YWQsIGNvbnRleHQsIGNvbG9yLCBiZWdpbiB9KSB7XHJcblx0XHRiZWdpbih7IHNpemU6IDEuMSwgcGF0aDogdHJ1ZSwgemVybzogdHJ1ZSB9KTtcclxuXHRcdGNvbnN0IGlubmVyID0gMC41O1xyXG5cdFx0Y29udGV4dC5saW5lVG8oaW5uZXIsIDApO1xyXG5cdFx0Y29udGV4dC5iZXppZXJDdXJ2ZVRvKGlubmVyLCAwLjMsIDEsIDAuMywgMSwgMCk7XHJcblx0XHRjb250ZXh0LmJlemllckN1cnZlVG8oXHJcblx0XHRcdDEsXHJcblx0XHRcdGlubmVyLFxyXG5cdFx0XHRpbm5lciAqIE1hdGguU1FSVDIgKiAwLjksXHJcblx0XHRcdGlubmVyICogTWF0aC5TUVJUMiAqIDAuOSxcclxuXHRcdFx0aW5uZXIgKiBNYXRoLlNRUlQxXzIsXHJcblx0XHRcdGlubmVyICogTWF0aC5TUVJUMV8yXHJcblx0XHQpO1xyXG5cdFx0Y29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIDQpO1xyXG5cdFx0Y29udGV4dC5iZXppZXJDdXJ2ZVRvKGlubmVyLCAwLjMsIDEsIDAuMywgMSwgMCk7XHJcblx0XHRjb250ZXh0LmJlemllckN1cnZlVG8oXHJcblx0XHRcdDEsXHJcblx0XHRcdGlubmVyLFxyXG5cdFx0XHRpbm5lciAqIE1hdGguU1FSVDIgKiAwLjksXHJcblx0XHRcdGlubmVyICogTWF0aC5TUVJUMiAqIDAuOSxcclxuXHRcdFx0aW5uZXIgKiBNYXRoLlNRUlQxXzIsXHJcblx0XHRcdGlubmVyICogTWF0aC5TUVJUMV8yXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0dGllcjogMyxcclxufSk7XHJcblxyXG5yZWdpc3RlckN1c3RvbVNoYXBlKHtcclxuXHRpZDogXCJzdW5cIixcclxuXHRjb2RlOiBcIlVcIixcclxuXHQuLi5jdXN0b21EZWZhdWx0cyxcclxuXHRzcGF3bkNvbG9yOiBcInllbGxvd1wiLFxyXG5cdGRyYXcoeyBkaW1zLCBpbm5lckRpbXMsIGxheWVyLCBxdWFkLCBjb250ZXh0LCBjb2xvciwgYmVnaW4gfSkge1xyXG5cdFx0YmVnaW4oeyBzaXplOiAxLjMsIHBhdGg6IHRydWUsIHplcm86IHRydWUgfSk7XHJcblx0XHRjb25zdCBQSSA9IE1hdGguUEk7XHJcblx0XHRjb25zdCBQSTMgPSAoKFBJICogMykgLyA4KSAqIDAuNzU7XHJcblx0XHRjb25zdCBjID0gMSAvIE1hdGguY29zKE1hdGguUEkgLyA4KTtcclxuXHRcdGNvbnN0IGIgPSBjICogTWF0aC5zaW4oTWF0aC5QSSAvIDgpO1xyXG5cclxuXHRcdGNvbnRleHQubW92ZVRvKDAsIDApO1xyXG5cdFx0Y29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIDIpO1xyXG5cdFx0Y29udGV4dC5hcmMoYywgMCwgYiwgLVBJLCAtUEkgKyBQSTMpO1xyXG5cdFx0Y29udGV4dC5yb3RhdGUoLU1hdGguUEkgLyA0KTtcclxuXHRcdGNvbnRleHQuYXJjKGMsIDAsIGIsIC1QSSAtIFBJMywgLVBJICsgUEkzKTtcclxuXHRcdGNvbnRleHQucm90YXRlKC1NYXRoLlBJIC8gNCk7XHJcblx0XHRjb250ZXh0LmFyYyhjLCAwLCBiLCBQSSAtIFBJMywgUEkpO1xyXG5cdH0sXHJcbn0pO1xyXG5cclxucmVnaXN0ZXJDdXN0b21TaGFwZSh7XHJcblx0aWQ6IFwibGVhZlwiLFxyXG5cdGNvZGU6IFwiRlwiLFxyXG5cdC4uLmN1c3RvbURlZmF1bHRzLFxyXG5cdGRyYXc6IFwiTSAwIDAgdiAwLjUgYSAwLjUgMC41IDAgMCAwIDAuNSAwLjUgaCAwLjUgdiAtMC41IGEgMC41IDAuNSAwIDAgMCAtMC41IC0wLjUgelwiLFxyXG59KTtcclxuXHJcbnJlZ2lzdGVyQ3VzdG9tU2hhcGUoe1xyXG5cdGlkOiBcImRpYW1vbmRcIixcclxuXHRjb2RlOiBcIkRcIixcclxuXHQuLi5jdXN0b21EZWZhdWx0cyxcclxuXHRkcmF3OiBcIk0gMCAwIGwgMCAwLjUgMC41IDAuNSAwLjUgMCAwIC0wLjUgLTAuNSAtMC41IHpcIixcclxufSk7XHJcblxyXG5yZWdpc3RlckN1c3RvbVNoYXBlKHtcclxuXHRpZDogXCJtaWxsXCIsXHJcblx0Y29kZTogXCJNXCIsXHJcblx0Li4uY3VzdG9tRGVmYXVsdHMsXHJcblx0ZHJhdzogXCJNIDAgMCBMIDAgMSAxIDEgWlwiLFxyXG59KTtcclxuXHJcbi8vIHJlZ2lzdGVyQ3VzdG9tU2hhcGUoe1xyXG4vLyAgICAgaWQ6IFwiaGFsZmxlYWZcIixcclxuLy8gICAgIGNvZGU6IFwiSFwiLFxyXG4vLyAgICAgLi4uY3VzdG9tRGVmYXVsdHMsXHJcbi8vICAgICBkcmF3OiBcIjEwMCBNIDAgMCBMIDAgMTAwIEEgNDUgNDUgMCAwIDAgMzAgMzAgQSA0NSA0NSAwIDAgMCAxMDAgMCBaXCIsXHJcbi8vIH0pXHJcblxyXG5yZWdpc3RlckN1c3RvbVNoYXBlKHtcclxuXHRpZDogXCJ5aW55YW5nXCIsXHJcblx0Y29kZTogXCJZXCIsXHJcblx0Li4uY3VzdG9tRGVmYXVsdHMsXHJcblx0Ly8gZHJhdyh7IGRpbXMsIGlubmVyRGltcywgbGF5ZXIsIHF1YWQsIGNvbnRleHQsIGNvbG9yLCBiZWdpbiB9KSB7XHJcblx0Ly8gICAgIGJlZ2luKHsgc2l6ZTogMS8oMC41K01hdGguU1FSVDFfMiksIHBhdGg6IHRydWUgfSk7XHJcblxyXG5cdC8vICAgICAvKiogQHR5cGV7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSAqIC9cclxuXHQvLyAgICAgbGV0IGN0eCA9IGNvbnRleHQ7XHJcblxyXG5cdC8vICAgICB3aXRoIChjdHgpIHsgd2l0aCAoTWF0aCkge1xyXG5cdC8vICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyAgICAgLy8gZHJhdyBtb3N0bHkgaW4gWzAsMV14WzAsMV0gc3F1YXJlXHJcblx0Ly8gICAgIC8vIGRyYXc6IFwiMTAwIE0gMCA1MCBBIDUwIDUwIDAgMSAxIDg1IDg1IEEgMTIxIDEyMSAwIDAgMSAtODUgODUgQSA1MCA1MCAwIDAgMCAwIDUwXCIsXHJcblx0Ly8gICAgIG1vdmVUbygwLCAwLjUpO1xyXG5cdC8vICAgICBhcmMoMC41LCAwLjUsIDAuNSwgUEksIFBJLzQpXHJcblx0Ly8gICAgIGFyYygwLCAwLCAwLjUrU1FSVDFfMiwgUEkvNCwgUEkvNCtQSS8yLCAwKVxyXG5cdC8vICAgICBhcmMoLTAuNSwgMC41LCAwLjUsIDMqUEkvNCwgMCwgMSlcclxuXHJcblx0Ly8gICAgIG1vdmVUbygwLjYsIDAuNSlcclxuXHQvLyAgICAgYXJjKDAuNSwgMC41LCAwLjEsIDAsIDIqUEkpXHJcblx0Ly8gICAgIH19XHJcblxyXG5cdC8vIH0sXHJcblx0ZHJhdzpcclxuXHRcdFwiMTIwLjcxIE0gMCA1MCBBIDUwIDUwIDAgMSAxIDg1LjM1NSA4NS4zNTUgQSAxMjAuNzEgMTIwLjcxIDAgMCAxIC04NS4zNTUgODUuMzU1IEEgNTAgNTAgMCAwIDAgMCA1MCBaIE0gNDAgNTAgQSAxMCAxMCAwIDEgMCA0MCA0OS45OSBaXCIsXHJcblx0dGllcjogNCxcclxufSk7XHJcblxyXG5yZWdpc3RlckN1c3RvbVNoYXBlKHtcclxuXHRpZDogXCJvY3RhZ29uXCIsXHJcblx0Y29kZTogXCJPXCIsXHJcblx0Li4uY3VzdG9tRGVmYXVsdHMsXHJcblx0ZHJhdzogXCJNIDAgMCBMIDAgMSAwLjQxNDIgMSAxIDAuNDE0MiAxIDAgWlwiLFxyXG59KTtcclxuXHJcblx0XHJcblx0Ki9cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTekxheWVyIHtcclxuXHRjdXRzOiAoe1xyXG5cdFx0c2hhcGU6IGN1dFNoYXBlLFxyXG5cdFx0ZnJvbTogcm90YXRpb24yNCwgdG86IHJvdGF0aW9uMjQsXHJcblx0XHRjb2xvcjogY29sb3IsXHJcblx0fSlbXTtcclxuXHRxdWFkczogKHtcclxuXHRcdHNoYXBlOiBxdWFkU2hhcGUsXHJcblx0XHRmcm9tOiByb3RhdGlvbjI0LCB0bzogcm90YXRpb24yNCxcclxuXHRcdGNvbG9yOiBjb2xvcixcclxuXHR9KVtdO1xyXG5cdGFyZWFzOiAoe1xyXG5cdFx0c2hhcGU6IGFyZWFTaGFwZSxcclxuXHRcdGNvbG9yOiBjb2xvcixcclxuXHRcdGZyb206IHJvdGF0aW9uMjQsIHRvOiByb3RhdGlvbjI0LFxyXG5cdH0pW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3pMYXllckN1dCB7XHJcblx0c2hhcGU6IGN1dFNoYXBlID0gJ2xpbmUnO1xyXG5cdGNvbG9yOiBjb2xvciA9ICdibGFjayc7XHJcblxyXG5cdGZyb206IHJvdGF0aW9uMjQgPSAwOyB0bzogcm90YXRpb24yNCA9IDA7XHJcblx0Y29uc3RydWN0b3Ioc291cmNlOiBQaWNrVmFsdWVzPFN6TGF5ZXJDdXQ+KSB7XHJcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHNvdXJjZSk7XHJcblx0fVxyXG5cdGNsb25lKCkgeyByZXR1cm4gbmV3IFN6TGF5ZXJDdXQodGhpcyk7IH1cclxuXHRnZXQgc21hbGxSYWRpdXMoKSB7XHJcblx0XHRyZXR1cm4gMC4wMDAxO1xyXG5cdH1cclxuXHRwYXRoSW5zaWRlKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdHN3aXRjaCAodGhpcy5zaGFwZSkge1xyXG5cdFx0XHRjYXNlICdsaW5lJzoge1xyXG5cdFx0XHRcdGN0eC5saW5lVG9SKDAuNSwgdGhpcy5mcm9tKTtcclxuXHRcdFx0XHRjdHgubGluZVRvUih0aGlzLnNtYWxsUmFkaXVzLCB0aGlzLmZyb20pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdFx0dGhyb3cgdGhpcztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwYXRoT3V0c2l6ZShjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuc2hhcGUpIHtcclxuXHRcdFx0Y2FzZSAnbGluZSc6IHtcclxuXHRcdFx0XHRjdHgubGluZVRvUih0aGlzLnNtYWxsUmFkaXVzLCB0aGlzLmZyb20pO1xyXG5cdFx0XHRcdGN0eC5saW5lVG9SKDAuNSwgdGhpcy5mcm9tKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdHRocm93IHRoaXM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0SGFzaCgpOiBzdHJpbmcge1xyXG5cdFx0Ly8gZml4bWVcclxuXHRcdHJldHVybiBgYDtcclxuXHR9XHJcblx0c3RhdGljIGZyb21TaG9ydEtleShlOiBzdHJpbmcpOiBTekxheWVyQ3V0IHtcclxuXHRcdC8vIGZpeG1lXHJcblx0XHRyZXR1cm4gbmV3IFN6TGF5ZXJDdXQoe30pO1xyXG5cdH1cclxufVxyXG5cclxudHlwZSBQaWNrVmFsdWVzPFQ+ID0ge1xyXG5cdFtrIGluIGtleW9mIFQgYXMgVFtrXSBleHRlbmRzICgoLi4uYXJnczogYW55KSA9PiBhbnkpID8gbmV2ZXIgOiBrXT86IFRba11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN6TGF5ZXJRdWFkIHtcclxuXHRzaGFwZTogcXVhZFNoYXBlID0gJ2NpcmNsZSc7XHJcblx0Y29sb3I6IGNvbG9yID0gJ25vbmUnO1xyXG5cdGZyb206IHJvdGF0aW9uMjQgPSAwOyB0bzogcm90YXRpb24yNCA9IDA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogUGlja1ZhbHVlczxTekxheWVyUXVhZD4pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc291cmNlKTtcclxuXHRcdGlmIChjb25maWcuZGlzYWJsZVF1YWRDb2xvcnMpIHtcclxuXHRcdFx0dGhpcy5jb2xvciA9ICdub25lJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsb25lKCkgeyByZXR1cm4gbmV3IFN6TGF5ZXJRdWFkKHRoaXMpOyB9XHJcblx0b3V0ZXJQYXRoKGN0eDogU3pDb250ZXh0MkQsIGxheWVyOiBTekxheWVyKSB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuc2hhcGUpIHtcclxuXHRcdFx0Y2FzZSAnY2lyY2xlJzoge1xyXG5cdFx0XHRcdGN0eC5hcmMoMCwgMCwgMSwgdGhpcy5mcm9tLCB0aGlzLnRvKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSAnc3F1YXJlJzoge1xyXG5cdFx0XHRcdGN0eC5saW5lVG9SKDEsIHRoaXMuZnJvbSk7XHJcblx0XHRcdFx0Ly8gNiAtPiBNYXRoLlNRUlQyLCAxMiAtPiAxXHJcblx0XHRcdFx0bGV0IGEgPSB0aGlzLnRvIC0gdGhpcy5mcm9tO1xyXG5cdFx0XHRcdGxldCBhciA9IGEgKiAoTWF0aC5QSSAvIDI0KTtcclxuXHRcdFx0XHRsZXQgUiA9IGEgPD0gNiA/IDEgLyBNYXRoLmNvcyhhcikgOiAxO1xyXG5cdFx0XHRcdGN0eC5saW5lVG9SKFIsICh0aGlzLmZyb20gKyB0aGlzLnRvKSAvIDIpO1xyXG5cdFx0XHRcdGN0eC5saW5lVG9SKDEsIHRoaXMudG8pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICdzdGFyJzoge1xyXG5cdFx0XHRcdGN0eC5saW5lVG9SKDAuNiwgdGhpcy5mcm9tKTtcclxuXHRcdFx0XHRjdHgubGluZVRvUihNYXRoLlNRUlQyLCAodGhpcy5mcm9tICsgdGhpcy50bykgLyAyKTtcclxuXHRcdFx0XHRjdHgubGluZVRvUigwLjYsIHRoaXMudG8pO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICd3aW5kbWlsbCc6IHtcclxuXHRcdFx0XHRjdHgubGluZVRvUigxLCB0aGlzLmZyb20pO1xyXG5cclxuXHRcdFx0XHRsZXQgYSA9IHRoaXMudG8gLSB0aGlzLmZyb207XHJcblx0XHRcdFx0bGV0IGFyID0gYSAqIChNYXRoLlBJIC8gMjQpO1xyXG5cdFx0XHRcdGxldCBSID0gYSA8PSA2ID8gMSAvIE1hdGguY29zKGFyKSA6IDE7XHJcblx0XHRcdFx0Y3R4LmxpbmVUb1IoUiwgKHRoaXMuZnJvbSArIHRoaXMudG8pIC8gMik7XHJcblxyXG5cdFx0XHRcdGN0eC5saW5lVG9SKDAuNiwgdGhpcy50byk7XHJcblxyXG5cclxuXHRcdFx0XHQvLyBsZXQgb3JpZ2luWCA9IC1xdWFkcmFudEhhbGZTaXplO1xyXG5cdFx0XHRcdC8vIGxldCBvcmlnaW5ZID0gcXVhZHJhbnRIYWxmU2l6ZSAtIGRpbXM7XHJcblx0XHRcdFx0Ly8gY29uc3QgbW92ZUlud2FyZHMgPSBkaW1zICogMC40O1xyXG5cdFx0XHRcdC8vIGNvbnRleHQubW92ZVRvKG9yaWdpblgsIG9yaWdpblkgKyBtb3ZlSW53YXJkcyk7XHJcblx0XHRcdFx0Ly8gY29udGV4dC5saW5lVG8ob3JpZ2luWCArIGRpbXMsIG9yaWdpblkpO1xyXG5cdFx0XHRcdC8vIGNvbnRleHQubGluZVRvKG9yaWdpblggKyBkaW1zLCBvcmlnaW5ZICsgZGltcyk7XHJcblx0XHRcdFx0Ly8gY29udGV4dC5saW5lVG8ob3JpZ2luWCwgb3JpZ2luWSArIGRpbXMpO1xyXG5cdFx0XHRcdC8vIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblx0XHRcdFx0Ly8gY29udGV4dC5maWxsKCk7XHJcblx0XHRcdFx0Ly8gY29udGV4dC5zdHJva2UoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdFx0Y3R4LnNhdmVkKGN0eCA9PiB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zaGFwZSA9PSAnY292ZXInKSB7XHJcblx0XHRcdFx0XHRcdGN0eC5zY2FsZSgxIC8gbGF5ZXIubGF5ZXJTY2FsZSgpKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0U3pJbmZvLnF1YWQuYnlOYW1lW3RoaXMuc2hhcGVdLnBhdGghKGN0eCwgdGhpcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldEhhc2goKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBgJHtTekluZm8ucXVhZC5ieU5hbWVbdGhpcy5zaGFwZV0uY29kZVxyXG5cdFx0XHR9JHtTekluZm8uY29sb3IuYnlOYW1lW3RoaXMuY29sb3JdLmNvZGVcclxuXHRcdFx0fSR7U3pJbmZvLm5Ub0NoYXJbdGhpcy5mcm9tXVxyXG5cdFx0XHR9JHtTekluZm8ublRvQ2hhclt0aGlzLnRvXVxyXG5cdFx0XHR9YFxyXG5cdH1cclxuXHRzdGF0aWMgZnJvbVNob3J0S2V5KGU6IHN0cmluZyk6IFN6TGF5ZXJRdWFkIHtcclxuXHRcdHJldHVybiBuZXcgU3pMYXllclF1YWQoe1xyXG5cdFx0XHRzaGFwZTogU3pJbmZvLnF1YWQuYnlDaGFyW2VbMF1dLm5hbWUsXHJcblx0XHRcdGNvbG9yOiBTekluZm8uY29sb3IuYnlDaGFyW2VbMV1dLm5hbWUsXHJcblx0XHRcdGZyb206IFN6SW5mby5jaGFyVG9OW2VbMl1dLFxyXG5cdFx0XHR0bzogU3pJbmZvLmNoYXJUb05bZVszXV0sXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3pMYXllckFyZWEge1xyXG5cdHNoYXBlOiBhcmVhU2hhcGUgPSAnc2VjdG9yJztcclxuXHRjb2xvcjogY29sb3IgPSAnYmxhY2snO1xyXG5cclxuXHRmcm9tOiByb3RhdGlvbjI0ID0gMDsgdG86IHJvdGF0aW9uMjQgPSAwO1xyXG5cdGNvbnN0cnVjdG9yKHNvdXJjZTogUGlja1ZhbHVlczxTekxheWVyQXJlYT4pIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgc291cmNlKTtcclxuXHR9XHJcblx0Y2xvbmUoKSB7IHJldHVybiBuZXcgU3pMYXllckFyZWEodGhpcyk7IH1cclxuXHRvdXRlclBhdGgoY3R4OiBTekNvbnRleHQyRCkge1xyXG5cdFx0c3dpdGNoICh0aGlzLnNoYXBlKSB7XHJcblx0XHRcdGNhc2UgJ3dob2xlJzoge1xyXG5cdFx0XHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRjdHguYXJjKDAsIDAsIDUsIDAsIDI0KTtcclxuXHRcdFx0XHRjdHguY2xvc2VQYXRoKCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgJ3NlY3Rvcic6IHtcclxuXHRcdFx0XHRpZiAodGhpcy5mcm9tID09IDAgJiYgdGhpcy50byA9PSAyNCkge1xyXG5cdFx0XHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRcdFx0Y3R4LmFyYygwLCAwLCA1LCAwLCAyNCk7XHJcblx0XHRcdFx0XHRjdHguY2xvc2VQYXRoKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRcdFx0Y3R4Lm1vdmVUbygwLCAwKTtcclxuXHRcdFx0XHRjdHguYXJjKDAsIDAsIDUsIHRoaXMuZnJvbSwgdGhpcy50byk7XHJcblx0XHRcdFx0Y3R4LmNsb3NlUGF0aCgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdFx0dGhyb3cgdGhpcztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjbGlwKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdHRoaXMub3V0ZXJQYXRoKGN0eCk7XHJcblx0XHRjdHguY2xpcCgpO1xyXG5cdH1cclxuXHRmaWxsKGN0eDogU3pDb250ZXh0MkQpIHtcclxuXHRcdHRoaXMub3V0ZXJQYXRoKGN0eCk7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gU3pJbmZvLmNvbG9yLmJ5TmFtZVt0aGlzLmNvbG9yXS5zdHlsZTtcclxuXHRcdGN0eC5maWxsKCk7XHJcblx0fVxyXG5cdGdldEhhc2goKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBgJHtTekluZm8uYXJlYS5ieU5hbWVbdGhpcy5zaGFwZV0uY29kZVxyXG5cdFx0XHR9JHtTekluZm8uY29sb3IuYnlOYW1lW3RoaXMuY29sb3JdLmNvZGVcclxuXHRcdFx0fSR7U3pJbmZvLm5Ub0NoYXJbdGhpcy5mcm9tXVxyXG5cdFx0XHR9JHtTekluZm8ublRvQ2hhclt0aGlzLnRvXVxyXG5cdFx0XHR9YFxyXG5cdH1cclxuXHRzdGF0aWMgZnJvbVNob3J0S2V5KGU6IHN0cmluZyk6IFN6TGF5ZXJBcmVhIHtcclxuXHRcdHJldHVybiBuZXcgU3pMYXllckFyZWEoe1xyXG5cdFx0XHRzaGFwZTogU3pJbmZvLmFyZWEuYnlDaGFyW2VbMF1dLm5hbWUsXHJcblx0XHRcdGNvbG9yOiBTekluZm8uY29sb3IuYnlDaGFyW2VbMV1dLm5hbWUsXHJcblx0XHRcdGZyb206IFN6SW5mby5jaGFyVG9OW2VbMl1dLFxyXG5cdFx0XHR0bzogU3pJbmZvLmNoYXJUb05bZVszXV0sXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdGVzdFRlbXBsYXRlOiBJU3pMYXllciA9IHtcclxuXHRjdXRzOiBbXHJcblx0XHR7IGZyb206IDEwLCB0bzogMTAsIHNoYXBlOiAnbGluZScsIGNvbG9yOiAnYmx1ZScgfSxcclxuXHRcdHsgZnJvbTogMTQsIHRvOiAxNCwgc2hhcGU6ICdsaW5lJywgY29sb3I6ICdibHVlJyB9LFxyXG5cdF0sXHJcblx0cXVhZHM6IFtcclxuXHRcdHsgc2hhcGU6ICdzcXVhcmUnLCBjb2xvcjogJ2dyZWVuJywgZnJvbTogMiwgdG86IDQgfSxcclxuXHRcdHsgc2hhcGU6ICdjaXJjbGUnLCBjb2xvcjogJ3BpbmsnLCBmcm9tOiA1LCB0bzogMTkgfSxcclxuXHRcdHsgc2hhcGU6ICdzcXVhcmUnLCBjb2xvcjogJ2dyZWVuJywgZnJvbTogMjAsIHRvOiAyMiB9LFxyXG5cdF0sXHJcblx0YXJlYXM6IFtcclxuXHRcdHsgc2hhcGU6ICdzZWN0b3InLCBjb2xvcjogJ3JlZCcsIGZyb206IDExLCB0bzogMTMgfSxcclxuXHRdLFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTekxheWVyIGltcGxlbWVudHMgSVN6TGF5ZXIge1xyXG5cdGxheWVySW5kZXggPSAwO1xyXG5cdGN1dHM6IFN6TGF5ZXJDdXRbXSA9IFtdO1xyXG5cdHF1YWRzOiBTekxheWVyUXVhZFtdID0gW107XHJcblx0YXJlYXM6IFN6TGF5ZXJBcmVhW10gPSBbXTtcclxuXHJcblxyXG5cdHN0YXRpYyBjcmVhdGVUZXN0KCkge1xyXG5cdFx0bGV0IGwgPSBuZXcgU3pMYXllcih0ZXN0VGVtcGxhdGUpO1xyXG5cdFx0bC5hcmVhcy5tYXAoZSA9PiB7XHJcblx0XHRcdGxldCByID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogODtcclxuXHRcdFx0ZS5mcm9tICs9IHI7XHJcblx0XHRcdGUudG8gKz0gcjtcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5lcnJvcigndGVzdCBsYXllcicsIGwpO1xyXG5cdFx0cmV0dXJuIGw7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihzb3VyY2U/OiBQaWNrVmFsdWVzPElTekxheWVyPiwgbGF5ZXJJbmRleD86IG51bWJlcikge1xyXG5cdFx0aWYgKHNvdXJjZSkge1xyXG5cdFx0XHR0aGlzLmN1dHMgPSAoc291cmNlLmN1dHMgPz8gW10pLm1hcChlID0+IG5ldyBTekxheWVyQ3V0KGUpKTtcclxuXHRcdFx0dGhpcy5xdWFkcyA9IChzb3VyY2UucXVhZHMgPz8gW10pLm1hcChlID0+IG5ldyBTekxheWVyUXVhZChlKSk7XHJcblx0XHRcdHRoaXMuYXJlYXMgPSAoc291cmNlLmFyZWFzID8/IFtdKS5tYXAoZSA9PiBuZXcgU3pMYXllckFyZWEoZSkpO1xyXG5cdFx0XHRpZiAoKHNvdXJjZSBhcyBTekxheWVyKS5sYXllckluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5sYXllckluZGV4ID0gKHNvdXJjZSBhcyBTekxheWVyKS5sYXllckluZGV4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAobGF5ZXJJbmRleCAhPSBudWxsKSB7XHJcblx0XHRcdHRoaXMubGF5ZXJJbmRleCA9IGxheWVySW5kZXg7XHJcblx0XHR9XHJcblx0XHRpZiAoY29uZmlnLmRpc2FibGVDdXRzKSB0aGlzLmN1dHMgPSBbXTtcclxuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0bGF5ZXJTY2FsZShsYXllckluZGV4PzogbnVtYmVyKSB7XHJcblx0XHRsYXllckluZGV4ID8/PSB0aGlzLmxheWVySW5kZXg7XHJcblx0XHRyZXR1cm4gMC45IC0gMC4yMiAqIGxheWVySW5kZXg7XHJcblx0fVxyXG5cdGRyYXdDZW50ZXJlZExheWVyU2NhbGVkKGN0eDogU3pDb250ZXh0MkQsIGxheWVySW5kZXg/OiBudW1iZXIpIHtcclxuXHRcdGN0eC5zYXZlZChjdHggPT4ge1xyXG5cdFx0XHRjdHguc2NhbGUodGhpcy5sYXllclNjYWxlKGxheWVySW5kZXgpKTtcclxuXHRcdFx0dGhpcy5kcmF3Q2VudGVyZWROb3JtYWxpemVkKGN0eCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRyYXdDZW50ZXJlZE5vcm1hbGl6ZWQoY3R4OiBTekNvbnRleHQyRCkge1xyXG5cdFx0Y3R4LnNhdmVkKGN0eCA9PiB7XHJcblx0XHRcdHRoaXMuY2xpcFNoYXBlcyhjdHgpO1xyXG5cdFx0XHQvLyB0aGlzLnF1YWRzLmZvckVhY2gocSA9PiBjdHguc2F2ZWQoY3R4ID0+IHRoaXMuZmlsbFF1YWQocSwgY3R4KSkpO1xyXG5cclxuXHRcdFx0dGhpcy5jdXRzLmZvckVhY2goYyA9PiBjdHguc2F2ZWQoY3R4ID0+IHRoaXMuc3Ryb2tlQ3V0KGMsIGN0eCkpKTtcclxuXHJcblx0XHRcdHRoaXMuYXJlYXMuZm9yRWFjaChhID0+IGN0eC5zYXZlZChjdHggPT4gdGhpcy5maWxsQXJlYShhLCBjdHgpKSk7XHJcblx0XHR9KTtcclxuXHRcdGN0eC5zYXZlZChjdHggPT4gdGhpcy5kcmF3UXVhZE91dGxpbmUoY3R4LCB0cnVlKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHRzdHJva2VDdXQoY3V0OiBTekxheWVyQ3V0LCBjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRjdHgubGluZVdpZHRoID0gMC4wNTtcclxuXHRcdGN0eC5zdHJva2VTdHlsZSA9IGN1dC5jb2xvcjtcclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHJcblx0XHRpZiAoY3V0LnNoYXBlID09ICdsaW5lJykge1xyXG5cdFx0XHRjdHgucm90YXRlKGN1dC5mcm9tKTtcclxuXHRcdFx0Y3R4Lm1vdmVUbygwLCAwKTtcclxuXHRcdFx0Y3R4LmxpbmVUbygwLCAxKTtcclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgdGhpcztcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdGZpbGxRdWFkKHF1YWQ6IFN6TGF5ZXJRdWFkLCBjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRjdHguZmlsbFN0eWxlID0gU3pJbmZvLmNvbG9yLmJ5TmFtZVtxdWFkLmNvbG9yXS5zdHlsZTtcclxuXHRcdGlmIChxdWFkLmNvbG9yID09ICdjb3ZlcicpIFtcclxuXHRcdFx0Ly8gY3R4LmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0J1xyXG5cdFx0XVxyXG5cclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdGN0eC5tb3ZlVG8oMCwgMCk7XHJcblx0XHRxdWFkLm91dGVyUGF0aChjdHgsIHRoaXMpO1xyXG5cdFx0Y3R4LmZpbGwoKTtcclxuXHR9XHJcblxyXG5cdGZpbGxBcmVhKGFyZWE6IFN6TGF5ZXJBcmVhLCBjdHg6IFN6Q29udGV4dDJEKSB7XHJcblx0XHRjdHgubGluZVdpZHRoID0gMC4wNTtcclxuXHRcdGN0eC5zdHJva2VTdHlsZSA9IGN0eC5maWxsU3R5bGUgPSBTekluZm8uY29sb3IuYnlOYW1lW2FyZWEuY29sb3JdLnN0eWxlO1xyXG5cclxuXHRcdGFyZWEuY2xpcChjdHgpO1xyXG5cdFx0Y3R4LmZpbGwoKTtcclxuXHR9XHJcblxyXG5cdGZ1bGxRdWFkUGF0aChjdHg6IFN6Q29udGV4dDJELCB3aXRoQ3V0cz86IGJvb2xlYW4pIHtcclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWFkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgcHJldiA9IGkgPiAwID8gdGhpcy5xdWFkc1tpIC0gMV0gOiB0aGlzLnF1YWRzLnNsaWNlKC0xKVswXTtcclxuXHRcdFx0bGV0IHF1YWQgPSB0aGlzLnF1YWRzW2ldO1xyXG5cdFx0XHRpZiAod2l0aEN1dHMgfHwgcXVhZC5mcm9tICE9IHByZXYudG8gJSAyNCkgY3R4LmxpbmVUbygwLCAwKTtcclxuXHRcdFx0cXVhZC5vdXRlclBhdGgoY3R4LCB0aGlzKTtcclxuXHRcdH1cclxuXHRcdGN0eC5jbG9zZVBhdGgoKTtcclxuXHR9XHJcblxyXG5cdGRyYXdRdWFkT3V0bGluZShjdHg6IFN6Q29udGV4dDJELCB3aXRoQ3V0cz86IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuZnVsbFF1YWRQYXRoKGN0eCwgd2l0aEN1dHMpO1xyXG5cdFx0Y3R4LmxpbmVXaWR0aCA9IDAuMDU7XHJcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJztcclxuXHRcdGN0eC5zdHJva2UoKTtcclxuXHR9XHJcblxyXG5cdGNsaXBTaGFwZXMoY3R4OiBTekNvbnRleHQyRCkge1xyXG5cdFx0dGhpcy5mdWxsUXVhZFBhdGgoY3R4KTtcclxuXHRcdGN0eC5jbGlwKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHRjbG9uZSgpIHtcclxuXHRcdHJldHVybiBuZXcgU3pMYXllcih0aGlzKTtcclxuXHR9XHJcblx0aXNOb3JtYWxpemVkKCk6IGJvb2xlYW4ge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1YWRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBuZXh0ID0gdGhpcy5xdWFkc1tpXTtcclxuXHRcdFx0bGV0IHByZXYgPSB0aGlzLnF1YWRzW2kgLSAxXSB8fCB0aGlzLnF1YWRzW3RoaXMucXVhZHMubGVuZ3RoIC0gMV07XHJcblx0XHRcdGlmIChuZXh0LmZyb20gPCAwIHx8IG5leHQuZnJvbSA+PSAyNCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRpZiAobmV4dC5mcm9tID49IG5leHQudG8pIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKGkgPT0gMCkge1xyXG5cdFx0XHRcdGlmIChwcmV2LnRvID4gMjQgJiYgcHJldi50byAlIDI0ID4gbmV4dC5mcm9tKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHByZXYudG8gPiBuZXh0LmZyb20pIHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyZWFzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBuZXh0ID0gdGhpcy5hcmVhc1tpXTtcclxuXHRcdFx0bGV0IHByZXYgPSB0aGlzLmFyZWFzW2kgLSAxXSB8fCB0aGlzLmFyZWFzW3RoaXMuYXJlYXMubGVuZ3RoIC0gMV07XHJcblx0XHRcdGlmIChuZXh0LmZyb20gPCAwIHx8IG5leHQuZnJvbSA+PSAyNCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRpZiAobmV4dC5mcm9tID49IG5leHQudG8pIHJldHVybiBmYWxzZTtcclxuXHRcdFx0aWYgKGkgPT0gMCkge1xyXG5cdFx0XHRcdGlmIChwcmV2LnRvID4gMjQgJiYgcHJldi50byAlIDI0ID4gbmV4dC5mcm9tKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHByZXYudG8gPiBuZXh0LmZyb20pIHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocHJldi50byAlIDI0ID09IG5leHQuZnJvbSAmJiBwcmV2LmNvbG9yID09IG5leHQuY29sb3IpIHtcclxuXHRcdFx0XHRpZiAocHJldiAhPSBuZXh0KSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0aWYgKG5leHQuZnJvbSAhPSAwKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGxldCBwbGFjZXMgPSBBcnJheTxxdWFkU2hhcGUgfCAnJz4oMjQpLmZpbGwoJycpO1xyXG5cdFx0bGV0IHBhaW50cyA9IEFycmF5PGNvbG9yIHwgJyc+KDI0KS5maWxsKCcnKTtcclxuXHRcdGZvciAobGV0IHEgb2YgdGhpcy5xdWFkcykge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gcS5mcm9tOyBpIDwgcS50bzsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHBsYWNlc1tpICUgMjRdKSByZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0cGxhY2VzW2kgJSAyNF0gPSBxLnNoYXBlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBhIG9mIHRoaXMuYXJlYXMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IGEuZnJvbTsgaSA8IGEudG87IGkrKykge1xyXG5cdFx0XHRcdGlmICghcGxhY2VzW2kgJSAyNF0pIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRpZiAocGFpbnRzW2kgJSAyNF0pIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRwYWludHNbaSAlIDI0XSA9IGEuY29sb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIGZpeG1lOiBjdXRzIGNoZWNrO1xyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRub3JtYWxpemUoKTogdGhpcyB7XHJcblx0XHRpZiAodGhpcy5pc05vcm1hbGl6ZWQoKSkgcmV0dXJuIHRoaXM7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVhZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHEgPSB0aGlzLnF1YWRzW2ldO1xyXG5cdFx0XHRpZiAocS5mcm9tID4gcS50bykgeyB0aGlzLnF1YWRzLnNwbGljZShpLCAxKTsgaS0tOyBjb250aW51ZTsgfVxyXG5cdFx0XHRpZiAocS5mcm9tID49IDI0KSB7IHEuZnJvbSAtPSAyNDsgcS50byAtPSAyNDsgfVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5xdWFkcy5zb3J0KChhLCBiKSA9PiBhLmZyb20gLSBiLmZyb20pO1xyXG5cclxuXHJcblx0XHRsZXQgcGxhY2VzID0gQXJyYXk8cXVhZFNoYXBlIHwgJyc+KDI0KS5maWxsKCcnKTtcclxuXHRcdGxldCBwYWludHMgPSBBcnJheTxjb2xvciB8ICcnPigyNCkuZmlsbCgnJyk7XHJcblx0XHRmb3IgKGxldCBxIG9mIHRoaXMucXVhZHMpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IHEuZnJvbTsgaSA8IHEudG87IGkrKykge1xyXG5cdFx0XHRcdHBsYWNlc1tpICUgMjRdID0gcS5zaGFwZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgYSBvZiB0aGlzLmFyZWFzKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSBhLmZyb207IGkgPCBhLnRvOyBpKyspIHtcclxuXHRcdFx0XHRwYWludHNbaSAlIDI0XSA9IGEuY29sb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykgaWYgKCFwbGFjZXNbaV0pIHBhaW50c1tpXSA9ICcnO1xyXG5cclxuXHJcblx0XHR0aGlzLmFyZWFzID0gW107XHJcblx0XHRsZXQgbGFzdDogU3pMYXllckFyZWEgfCB1bmRlZmluZWQ7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuXHRcdFx0aWYgKCFwYWludHNbaV0pIGNvbnRpbnVlO1xyXG5cdFx0XHRpZiAobGFzdCAmJiBsYXN0LmNvbG9yID09IHBhaW50c1tpXSAmJiBsYXN0LnRvID09IGkpIHtcclxuXHRcdFx0XHRsYXN0LnRvKys7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5hcmVhcy5wdXNoKGxhc3QgPSBuZXcgU3pMYXllckFyZWEoe1xyXG5cdFx0XHRcdFx0Y29sb3I6IHBhaW50c1tpXSBhcyBjb2xvciwgZnJvbTogaSwgdG86IGkgKyAxLCBzaGFwZTogJ3NlY3RvcicsXHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5hcmVhcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdGxldCBsYXN0ID0gdGhpcy5hcmVhc1t0aGlzLmFyZWFzLmxlbmd0aCAtIDFdXHJcblx0XHRcdGlmIChsYXN0LmNvbG9yID09IHRoaXMuYXJlYXNbMF0uY29sb3IgJiYgbGFzdC50byAlIDI0ID09IHRoaXMuYXJlYXNbMF0uZnJvbSkge1xyXG5cdFx0XHRcdHRoaXMuYXJlYXNbdGhpcy5hcmVhcy5sZW5ndGggLSAxXS50byArPSB0aGlzLmFyZWFzWzBdLnRvO1xyXG5cdFx0XHRcdHRoaXMuYXJlYXMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyBmaXhtZTogY3V0c1xyXG5cdFx0aWYgKCF0aGlzLmlzTm9ybWFsaXplZCgpKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywgeyBsYXllcjogdGhpcyB9KTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignTGF5ZXIgZmFpbGVkIHRvIG5vcm1hbGl6ZSBwcm9wZXJseSEnLCB0aGlzKTtcclxuXHRcdFx0aWYgKGNvbmZpZy5kZWJ1Z0JhZExheWVycykgZGVidWdnZXI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGlzRW1wdHkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWFkcy5sZW5ndGggPT0gMDtcclxuXHR9XHJcblxyXG5cdGdldFF1YWRBdFNlY3RvcihzOiBudW1iZXIpIHtcclxuXHRcdGxldCBzMSA9IChzICsgMC41KSAlIDI0LCBzMiA9IHMxICsgMjQ7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWFkcy5maW5kKHEgPT5cclxuXHRcdFx0KHEuZnJvbSA8IHMxICYmIHEudG8gPiBzMSkgfHwgKHEuZnJvbSA8IHMyICYmIHEudG8gPiBzMilcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjYW5TdGFja1dpdGgodXBwZXI6IFN6TGF5ZXIgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcclxuXHRcdGlmICghdXBwZXIpIHJldHVybiB0cnVlO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcblx0XHRcdGxldCBxMSA9IHRoaXMuZ2V0UXVhZEF0U2VjdG9yKGkpO1xyXG5cdFx0XHRsZXQgcTIgPSB1cHBlci5nZXRRdWFkQXRTZWN0b3IoaSk7XHJcblx0XHRcdGlmIChxMSAmJiBxMikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHN0YWNrV2l0aCh1cHBlcjogU3pMYXllciB8IHVuZGVmaW5lZCk6IFN6TGF5ZXIge1xyXG5cdFx0aWYgKCF1cHBlcikgcmV0dXJuIHRoaXMuY2xvbmUoKTtcclxuXHRcdHJldHVybiBuZXcgU3pMYXllcih7XHJcblx0XHRcdGFyZWFzOiB0aGlzLmFyZWFzLmNvbmNhdCh1cHBlci5hcmVhcyksXHJcblx0XHRcdHF1YWRzOiB0aGlzLnF1YWRzLmNvbmNhdCh1cHBlci5xdWFkcyksXHJcblx0XHRcdGN1dHM6IHRoaXMuY3V0cy5jb25jYXQodXBwZXIuY3V0cyksXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJvdGF0ZShyb3Q6IHJvdGF0aW9uMjQpIHtcclxuXHRcdHRoaXMuYXJlYXMubWFwKGUgPT4geyBlLmZyb20gKz0gcm90OyBlLnRvICs9IHJvdDsgfSk7XHJcblx0XHR0aGlzLmN1dHMubWFwKGUgPT4geyBlLmZyb20gKz0gcm90OyB9KTtcclxuXHRcdHRoaXMucXVhZHMubWFwKGUgPT4geyBlLmZyb20gKz0gcm90OyBlLnRvICs9IHJvdDsgfSk7XHJcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcclxuXHR9XHJcblxyXG5cclxuXHRjbG9uZUZpbHRlcmVkQnlRdWFkcmFudHMoaW5jbHVkZVF1YWRyYW50czogbnVtYmVyW10pIHtcclxuXHRcdGNvbnN0IGdvb2QgPSAobjogbnVtYmVyKSA9PiBpbmNsdWRlUXVhZHJhbnRzLmluY2x1ZGVzKCh+fihuIC8gNikpICUgNCk7XHJcblxyXG5cdFx0bGV0IGFsbG93ZWQgPSBBcnJheSg0OCkuZmlsbCgwKS5tYXAoKGUsIGkpID0+IGdvb2QoaSArIDAuNSkpO1xyXG5cdFx0ZnVuY3Rpb24gY29udmVydDxUIGV4dGVuZHMgU3pMYXllckFyZWEgfCBTekxheWVyQ3V0IHwgU3pMYXllclF1YWQ+KG9sZDogVCk6IFRbXSB7XHJcblx0XHRcdGxldCBmaWxsZWQgPSBBcnJheSg0OCkuZmlsbCgwKS5tYXAoKGUsIGkpID0+IG9sZC5mcm9tIDwgaSArIDAuNSAmJiBpICsgMC41IDwgb2xkLnRvKTtcclxuXHJcblx0XHRcdGxldCBsYXN0OiBUID0gb2xkLmNsb25lKCkgYXMgVDsgbGFzdC50byA9IC05OTk7XHJcblx0XHRcdGxldCBsaXN0OiBUW10gPSBbXTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDg7IGkrKykge1xyXG5cdFx0XHRcdGlmICghZmlsbGVkW2ldKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAoIWFsbG93ZWRbaV0pIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmIChsYXN0LnRvICE9IGkpIHtcclxuXHRcdFx0XHRcdGxhc3QgPSBvbGQuY2xvbmUoKSBhcyBUO1xyXG5cdFx0XHRcdFx0bGFzdC5mcm9tID0gaTtcclxuXHRcdFx0XHRcdGxhc3QudG8gPSBpICsgMTtcclxuXHRcdFx0XHRcdGxpc3QucHVzaChsYXN0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGFzdC50bysrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbGlzdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBuZXcgU3pMYXllcih7XHJcblx0XHRcdGFyZWFzOiB0aGlzLmFyZWFzLmZsYXRNYXAoY29udmVydCksXHJcblx0XHRcdHF1YWRzOiB0aGlzLnF1YWRzLmZsYXRNYXAoY29udmVydCksXHJcblx0XHRcdGN1dHM6IHRoaXMuY3V0cy5mbGF0TWFwKGNvbnZlcnQpLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjbG9uZUFzQ292ZXIoKSB7XHJcblx0XHRmdW5jdGlvbiBjb252ZXJ0KHF1YWQ6IFN6TGF5ZXJRdWFkKSB7XHJcblx0XHRcdHJldHVybiBuZXcgU3pMYXllclF1YWQoe1xyXG5cdFx0XHRcdGNvbG9yOiAnY292ZXInLFxyXG5cdFx0XHRcdHNoYXBlOiAnY292ZXInLFxyXG5cdFx0XHRcdGZyb206IHF1YWQuZnJvbSwgdG86IHF1YWQudG8sXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBTekxheWVyKHtcclxuXHRcdFx0cXVhZHM6IHRoaXMucXVhZHMuZmxhdE1hcChjb252ZXJ0KSxcclxuXHRcdH0pLnBhaW50KCdjb3ZlcicpLm5vcm1hbGl6ZSgpO1xyXG5cdH1cclxuXHRyZW1vdmVDb3ZlcigpIHtcclxuXHRcdHRoaXMucXVhZHMgPSB0aGlzLnF1YWRzLmZpbHRlcihlID0+IGUuc2hhcGUgIT0gJ2NvdmVyJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0ZmlsdGVyUGFpbnQocGFpbnQ6IChjb2xvciB8IG51bGwpW10pOiAoY29sb3IgfCBudWxsKVtdIHtcclxuXHRcdHJldHVybiBwYWludC5tYXAoKGUsIGkpID0+IHtcclxuXHRcdFx0bGV0IHF1YWQgPSB0aGlzLmdldFF1YWRBdFNlY3RvcihpKTtcclxuXHRcdFx0cmV0dXJuIHF1YWQgJiYgcXVhZC5zaGFwZSA9PSAnY292ZXInID8gbnVsbCA6IGU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cGFpbnQocGFpbnQ6IChjb2xvciB8IG51bGwpW10gfCBjb2xvcikge1xyXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHBhaW50KSkgcGFpbnQgPSBBcnJheTxjb2xvciB8IG51bGw+KDI0KS5maWxsKHBhaW50KTtcclxuXHRcdHBhaW50Lm1hcCgoY29sb3IsIGkpID0+IHtcclxuXHRcdFx0aWYgKGNvbG9yKSB7XHJcblx0XHRcdFx0dGhpcy5hcmVhcy5wdXNoKG5ldyBTekxheWVyQXJlYSh7XHJcblx0XHRcdFx0XHRjb2xvcixcclxuXHRcdFx0XHRcdGZyb206IGksIHRvOiBpICsgMSxcclxuXHRcdFx0XHRcdHNoYXBlOiAnc2VjdG9yJyxcclxuXHRcdFx0XHR9KSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKTs7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZnJvbVNoYXBlekhhc2goaGFzaDogc3RyaW5nKTogU3pMYXllcjtcclxuXHRzdGF0aWMgZnJvbVNoYXBlekhhc2goaGFzaDogc3RyaW5nLCBlcnI6IGJvb2xlYW4pOiBTekxheWVyIHwgbnVsbDtcclxuXHRzdGF0aWMgZnJvbVNoYXBlekhhc2goaGFzaDogc3RyaW5nLCBlcnIgPSB0cnVlKTogU3pMYXllciB8IG51bGwge1xyXG5cdFx0aWYgKGhhc2hbMF0gPT0gJzYnKSBoYXNoID0gaGFzaC5zbGljZSgxKTtcclxuXHRcdGlmIChoYXNoLmxlbmd0aCAhPSA4ICYmIGhhc2gubGVuZ3RoICE9IDEyKSB7XHJcblx0XHRcdGlmICghZXJyKSByZXR1cm4gbnVsbDtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNoYXBlIGhhc2g6ICR7aGFzaH1gKTtcclxuXHRcdH1cclxuXHRcdGxldCBhbmdsZSA9IDI0IC8gKGhhc2gubGVuZ3RoIC8gMik7XHJcblx0XHRyZXR1cm4gbmV3IFN6TGF5ZXIoe1xyXG5cdFx0XHRhcmVhczogaGFzaC5tYXRjaCgvLi4vZykhLm1hcCgocywgaSkgPT4ge1xyXG5cdFx0XHRcdGlmIChzWzBdID09ICctJykgcmV0dXJuIG51bGwgYXMgYW55IGFzIFN6TGF5ZXJBcmVhO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgU3pMYXllckFyZWEoe1xyXG5cdFx0XHRcdFx0c2hhcGU6ICdzZWN0b3InLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFN6SW5mby5jb2xvci5ieUNoYXJbc1sxXV0ubmFtZSxcclxuXHRcdFx0XHRcdGZyb206IGkgKiBhbmdsZSxcclxuXHRcdFx0XHRcdHRvOiAoaSArIDEpICogYW5nbGUsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pLmZpbHRlcihlID0+IGUpLFxyXG5cdFx0XHRxdWFkczogaGFzaC5tYXRjaCgvLi4vZykhLm1hcCgocywgaSkgPT4ge1xyXG5cdFx0XHRcdGlmIChzWzBdID09ICctJykgcmV0dXJuIG51bGwgYXMgYW55IGFzIFN6TGF5ZXJRdWFkO1xyXG5cdFx0XHRcdHJldHVybiBuZXcgU3pMYXllclF1YWQoe1xyXG5cdFx0XHRcdFx0c2hhcGU6IFN6SW5mby5xdWFkLmJ5Q2hhcltzWzBdXS5uYW1lLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFN6SW5mby5jb2xvci5ieUNoYXJbc1sxXV0ubmFtZSxcclxuXHRcdFx0XHRcdGZyb206IGkgKiBhbmdsZSxcclxuXHRcdFx0XHRcdHRvOiAoaSArIDEpICogYW5nbGUsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pLmZpbHRlcihlID0+IGUpLFxyXG5cdFx0XHRjdXRzOiBbXSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdGdldEhhc2goKTogc3RyaW5nIHtcclxuXHRcdGZvciAobGV0IHFuIG9mIFs0LCA2XSkge1xyXG5cdFx0XHRsZXQgcXcgPSAyNCAvIHFuO1xyXG5cdFx0XHRpZiAoIXRoaXMucXVhZHMuZXZlcnkoZSA9PiBlLmZyb20gJSBxdyA9PSAwICYmIGUudG8gLSBlLmZyb20gPT0gcXcpKSBjb250aW51ZTtcclxuXHRcdFx0aWYgKCF0aGlzLmFyZWFzLmV2ZXJ5KGUgPT4gZS5mcm9tICUgcXcgPT0gMCAmJiBlLnRvICUgcXcgPT0gMCkpIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IGRhdGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBxbiB9LCAoXywgaSkgPT4gKHsgc2hhcGU6ICctJywgY29sb3I6ICctJyB9KSk7XHJcblx0XHRcdGZvciAobGV0IHEgb2YgdGhpcy5xdWFkcykge1xyXG5cdFx0XHRcdGRhdGFbcS5mcm9tIC8gcXddLnNoYXBlID0gU3pJbmZvLnF1YWQuYnlOYW1lW3Euc2hhcGVdLmNvZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChsZXQgYSBvZiB0aGlzLmFyZWFzKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IGEuZnJvbSAvIHF3OyBpIDwgYS50byAvIHF3OyBpKyspIHtcclxuXHRcdFx0XHRcdGRhdGFbaSAlIHFuXS5jb2xvciA9IFN6SW5mby5jb2xvci5ieU5hbWVbYS5jb2xvcl0uY29kZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRhdGEubWFwKCh7IHNoYXBlLCBjb2xvciB9KSA9PiBzaGFwZSA9PSAnLScgPyAnLS0nIDogc2hhcGUgKyBjb2xvcikuam9pbignJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGBsIXp8cSEke3RoaXMucXVhZHMubWFwKGUgPT4gZS5nZXRIYXNoKCkpLmpvaW4oJywnKVxyXG5cdFx0XHR9fGEhJHt0aGlzLmFyZWFzLm1hcChlID0+IGUuZ2V0SGFzaCgpKS5qb2luKCcsJylcclxuXHRcdFx0fXxjISR7dGhpcy5jdXRzLm1hcChlID0+IGUuZ2V0SGFzaCgpKS5qb2luKCcsJylcclxuXHRcdFx0fWA7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZnJvbVNob3J0S2V5KGtleTogc3RyaW5nKTogYW55IHtcclxuXHRcdGlmIChrZXkuc3RhcnRzV2l0aCgnc3ohJykpIHsga2V5ID0ga2V5LnNsaWNlKDMpOyB9XHJcblx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoJ2whenwnKSkge1xyXG5cdFx0XHRsZXQgbGF5ZXIgPSBuZXcgU3pMYXllcigpO1xyXG5cdFx0XHRmb3IgKGxldCBwYXJ0IG9mIGtleS5zcGxpdCgnfCcpKSB7XHJcblx0XHRcdFx0aWYgKHBhcnQuc3RhcnRzV2l0aCgncSEnKSkge1xyXG5cdFx0XHRcdFx0bGV0IHN0cnMgPSBwYXJ0LnNsaWNlKCdxIScubGVuZ3RoKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRcdFx0bGF5ZXIucXVhZHMgPSBzdHJzLm1hcChlID0+IFN6TGF5ZXJRdWFkLmZyb21TaG9ydEtleShlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChwYXJ0LnN0YXJ0c1dpdGgoJ2EhJykpIHtcclxuXHRcdFx0XHRcdGxldCBzdHJzID0gcGFydC5zbGljZSgnYSEnLmxlbmd0aCkuc3BsaXQoJywnKTtcclxuXHRcdFx0XHRcdGxheWVyLmFyZWFzID0gc3Rycy5tYXAoZSA9PiBTekxheWVyQXJlYS5mcm9tU2hvcnRLZXkoZSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocGFydC5zdGFydHNXaXRoKCdjIScpKSB7XHJcblx0XHRcdFx0XHRsZXQgc3RycyA9IHBhcnQuc2xpY2UoJ2MhJy5sZW5ndGgpLnNwbGl0KCcsJyk7XHJcblx0XHRcdFx0XHRsYXllci5jdXRzID0gc3Rycy5tYXAoZSA9PiBTekxheWVyQ3V0LmZyb21TaG9ydEtleShlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBsYXllcjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBTekxheWVyLmZyb21TaGFwZXpIYXNoKGtleSk7XHJcblx0fVxyXG59XHJcbiJdfQ==