import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_VTOZsQXq.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"let e=document.getElementById(\"enlace\"),a=document.getElementById(\"enlace2\");e?.addEventListener(\"click\",function(t){t.preventDefault(),e?.classList.add(\"regaloArriba\"),a?.classList.add(\"mensaje\"),setTimeout(()=>location.href=\"http://localhost:4321/inicio\",1e4)});\n"}],"styles":[{"type":"external","src":"/_astro/historia.x9oqs68l.css"},{"type":"inline","content":"@font-face{font-family:\"Cedarville Cursive\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/cedarville-cursive-latin-400-normal.IsMcyX6B.woff2) format(\"woff2\"),url(/_astro/cedarville-cursive-latin-400-normal.OynRrDGB.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\nbody{background-color:beige}.msgOculto[data-astro-cid-j7pv25f6]{opacity:0}.regaloArribaDef[data-astro-cid-j7pv25f6]{width:30rem;position:absolute;z-index:999}.regaloArriba[data-astro-cid-j7pv25f6]{animation:regaloA 15s forwards}.regaloAbajo[data-astro-cid-j7pv25f6]{width:30rem}button[data-astro-cid-j7pv25f6]:active{background-color:red}@keyframes regaloA{0%{top:-2%;left:-0%}10%{top:-10%;left:-20%}to{top:-50%;left:-30%;transform:rotate(-60deg)}}.mensaje[data-astro-cid-j7pv25f6]{top:29%;opacity:0;font-size:4rem;left:24%;z-index:0;animation:mensajetop 8s forwards}@keyframes mensajetop{to{top:5%;opacity:1}}.mensaje[data-astro-cid-j7pv25f6] span[data-astro-cid-j7pv25f6]{opacity:0;animation:mensajeBot 3s forwards;animation-delay:3s}@keyframes mensajeBot{to{opacity:1}}.fuenteCursiva[data-astro-cid-j7pv25f6]{font-family:\"Cedarville Cursive\",cursive}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/historia.x9oqs68l.css"},{"type":"external","src":"/_astro/historia.mEO9PWTc.css"},{"type":"inline","content":".braniPalitos[data-astro-cid-ieqnrtdq]{width:50rem}.braniAmor[data-astro-cid-npklyn2k]{width:42rem}.emoji[data-astro-cid-ardtnlqz]{position:absolute;top:-4.2rem;right:1rem;width:15rem;z-index:49}.MediaNaranja[data-astro-cid-zkvfwrs4]{width:50rem}.fuenteCursiva[data-astro-cid-xev6as4f]{font-family:\"Cedarville Cursive\",cursive}.fotofondo[data-astro-cid-xev6as4f]{background-image:url(/_astro/fondo.h_Ac5JWD.jpg);background-repeat:no-repeat;background-attachment:fixed;background-size:cover}.monio[data-astro-cid-xev6as4f]{width:450px;height:auto;position:absolute;top:-4rem;right:25%;opacity:0;fill:none;stroke:#000;stroke-width:2;stroke-dasharray:1900;stroke-dashoffset:1900;animation:monio 3s ease-in forwards}@keyframes monio{to{opacity:1;stroke-dashoffset:0}}.fondoas[data-astro-cid-xev6as4f]{top:.5rem}.subTitulo[data-astro-cid-xev6as4f]{opacity:0;animation:subtitulo 5s linear forwards}@keyframes subtitulo{to{opacity:1}}\n@font-face{font-family:\"Cedarville Cursive\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/cedarville-cursive-latin-400-normal.IsMcyX6B.woff2) format(\"woff2\"),url(/_astro/cedarville-cursive-latin-400-normal.OynRrDGB.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/historia","isIndex":false,"type":"page","pattern":"^\\/historia\\/?$","segments":[[{"content":"historia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/historia.astro","pathname":"/historia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/historia.x9oqs68l.css"},{"type":"external","src":"/_astro/historia.mEO9PWTc.css"},{"type":"inline","content":".florDePie[data-astro-cid-or2akebi]{width:450px;height:auto;position:absolute;left:5rem}.florDePie[data-astro-cid-xt6mttkc]{width:450px;height:auto;position:absolute;right:5rem}#floresTitulo[data-astro-cid-wq5g56y3]{width:1000px;height:auto;position:absolute;top:10rem;left:28rem;animation:moverFlores 3s linear both}@keyframes moverFlores{to{top:18rem}}.BraniHoraDeAventura[data-astro-cid-4mlstoxq]{width:600px;height:auto;position:absolute;top:10rem;right:6rem;opacity:80%;transform:rotate(1deg);animation:delado 1s linear both}@keyframes delado{to{transform:rotate(25deg)}}.florEsquina[data-astro-cid-dxzsd6gg]{width:1000px;height:auto;position:absolute;top:4rem;animation:florEsq 3s linear both}@keyframes florEsq{to{top:-3rem}}\n"}],"routeData":{"route":"/inicio","isIndex":false,"type":"page","pattern":"^\\/inicio\\/?$","segments":[[{"content":"inicio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inicio.astro","pathname":"/inicio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/danie/Desktop/proyect año/brenax/src/pages/historia.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Desktop/proyect año/brenax/src/pages/inicio.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Desktop/proyect año/brenax/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_0RlvSDys.mjs","/src/pages/index.astro":"chunks/pages/index_pS8KWgEM.mjs","/src/pages/inicio.astro":"chunks/pages/inicio_pLKwTfg7.mjs","\u0000@astrojs-manifest":"manifest_27dr6ebO.mjs","C:/Users/danie/Desktop/proyect año/brenax/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_wyf4vmSk.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_huBQUuSA.mjs","\u0000@astro-page:src/pages/historia@_@astro":"chunks/historia_MMgKcUa2.mjs","\u0000@astro-page:src/pages/inicio@_@astro":"chunks/inicio_qcSEtZAA.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.h5b78u0D.js","@astrojs/react/client.js":"_astro/client.ZuanqE6Z.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/cedarville-cursive-latin-400-normal.IsMcyX6B.woff2","/_astro/fondo.h_Ac5JWD.jpg","/_astro/cedarville-cursive-latin-400-normal.OynRrDGB.woff","/_astro/onest-cyrillic-wght-normal.okE7jKFK.woff2","/_astro/onest-latin-ext-wght-normal.NATBPiDw.woff2","/_astro/onest-latin-wght-normal.ycwkluYs.woff2","/_astro/historia.x9oqs68l.css","/_astro/historia.mEO9PWTc.css","/favicon.svg","/images/imagen1.jpg","/images/imagen10.jpg","/images/imagen11.jpg","/images/imagen12.jpg","/images/imagen2.jpg","/images/imagen3.jpg","/images/imagen4.jpg","/images/imagen5.jpg","/images/imagen6.jpg","/images/imagen7.jpg","/images/imagen8.jpg","/images/imagen9.jpg","/_astro/client.ZuanqE6Z.js"],"buildFormat":"directory"});

export { manifest };
