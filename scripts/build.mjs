import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "dist");

const rootFiles = ["index.html", "styles.css"];
const optionalDirs = ["public", "assets", "images"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const name of rootFiles) {
  const src = path.join(root, name);
  if (!fs.existsSync(src)) {
    throw new Error(`Build: missing required file ${name}`);
  }
  fs.copyFileSync(src, path.join(outDir, name));
}

for (const dir of optionalDirs) {
  const src = path.join(root, dir);
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    fs.cpSync(src, path.join(outDir, dir), { recursive: true });
  }
}

console.log(`Build complete: ${outDir}`);
console.log("Deliver the contents of dist/ to the client (zip or upload as static hosting).");
