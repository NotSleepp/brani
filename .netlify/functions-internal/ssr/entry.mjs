import { renderers } from './renderers.mjs';
import { manifest } from './manifest_27dr6ebO.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_wyf4vmSk.mjs');
const _page1 = () => import('./chunks/index_huBQUuSA.mjs');
const _page2 = () => import('./chunks/historia_MMgKcUa2.mjs');
const _page3 = () => import('./chunks/inicio_qcSEtZAA.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1],
    ["src/pages/historia.astro", _page2],
    ["src/pages/inicio.astro", _page3]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "342521a4-9dcb-4312-9ef6-ae867d2420c7"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
