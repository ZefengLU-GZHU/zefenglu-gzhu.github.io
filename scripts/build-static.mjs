import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const html = await readFile(resolve(root, "index.html"), "utf8");
const css = await readFile(resolve(root, "styles.css"), "utf8");
const photo = (await readFile(resolve(root, "public", "zefeng-lu.png"))).toString("base64");
const favicon = await readFile(resolve(root, "public", "favicon.svg"), "utf8");

const worker = `const HTML=${JSON.stringify(html)};
const CSS=${JSON.stringify(css)};
const PHOTO=${JSON.stringify(photo)};
const FAVICON=${JSON.stringify(favicon)};
const headers={"x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"};
function binaryFromBase64(value){
  const bytes=Uint8Array.from(atob(value),c=>c.charCodeAt(0));
  return bytes.buffer;
}
export default {
  async fetch(request) {
    const url=new URL(request.url);
    if(url.pathname==="/"||url.pathname==="/index.html"){
      return new Response(HTML,{headers:{...headers,"content-type":"text/html; charset=utf-8","cache-control":"no-store, no-cache, must-revalidate","pragma":"no-cache","expires":"0"}});
    }
    if(url.pathname==="/styles.css"){
      return new Response(CSS,{headers:{...headers,"content-type":"text/css; charset=utf-8","cache-control":"public, max-age=3600"}});
    }
    if(url.pathname==="/public/zefeng-lu.png"){
      return new Response(binaryFromBase64(PHOTO),{headers:{...headers,"content-type":"image/png","cache-control":"public, max-age=604800"}});
    }
    if(url.pathname==="/public/favicon.svg"){
      return new Response(FAVICON,{headers:{...headers,"content-type":"image/svg+xml","cache-control":"public, max-age=604800"}});
    }
    return new Response("Not found",{status:404,headers:{...headers,"content-type":"text/plain; charset=utf-8"}});
  }
};
`;

const outDir = resolve(root, "dist", "server");
await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "index.js"), worker);
console.log(`Built static worker (${worker.length.toLocaleString()} bytes)`);
