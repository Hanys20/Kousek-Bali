import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

// Pojistka nasazení: žádná nová ani původní stránka e-shopu nesmí uniknout
// do veřejného buildu. SITE_MODE=full je vědomé spuštění celého webu.
if (process.env.SITE_MODE === "full") {
  console.log("SITE_MODE=full: sestavuje se celý web, veřejná ochrana je vypnutá.");
  process.exit(0);
}

const manifest = JSON.parse(await readFile(".next/server/app-paths-manifest.json", "utf8"));
const allowedRoutes = new Set(["/page", "/_not-found/page", "/_global-error/page", "/icon.svg/route"]);
assert(manifest["/page"], "Veřejnému buildu chybí úvodní stránka.");
for (const route of Object.keys(manifest)) {
  assert(allowedRoutes.has(route), `Veřejný build obsahuje nepovolenou stránku: ${route}`);
}

const allowedHtml = new Set(["index.html", "404.html", "_not-found.html", "_not-found/index.html"]);
const files = await readdir("out", { recursive: true, withFileTypes: true });
for (const file of files) {
  if (!file.isFile() || !file.name.endsWith(".html")) continue;
  const relative = path.relative(path.resolve("out"), path.resolve(file.parentPath, file.name)).replaceAll("\\", "/");
  assert(allowedHtml.has(relative), `Export obsahuje skrytou stránku: ${relative}`);
}

for (const name of ["index.html", "404.html"]) {
  const html = await readFile(`out/${name}`, "utf8");
  assert(html.includes("šťavnatý"), `${name}: chybí oznámení připravovaného webu.`);
  assert(html.includes("70 °C"), `${name}: chybí teplota podle dodaného návodu.`);
  assert(!html.includes("supabase.co"), `${name}: veřejná stránka načítá rozpracovaný e-shop.`);
  for (const icon of ["odvaz", "zahrej", "mleko", "vyslehej", "dochut"]) {
    assert(html.includes(`/icons/priprava-${icon}.svg`), `${name}: chybí ikonka ${icon}.`);
  }
}

console.log("Ověřeno: veřejný export obsahuje jen oznámení, návod a bezpečnou 404. E-shop není publikován.");
