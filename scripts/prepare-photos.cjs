const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");
const assets = require("../docs/photo-sources.json");

async function main() {
  for (const asset of assets) {
    const destination = path.join(__dirname, "../public/images", asset.name + ".webp");
    if (await fs.access(destination).then(() => true, () => false)) continue;
    const response = await fetch(asset.download);
    if (!response.ok) throw new Error(asset.name + ": HTTP " + response.status);
    const buffer = Buffer.from(await response.arrayBuffer());
    await sharp(buffer).rotate().resize({width: asset.name === "architecture" ? 1920 : asset.name.startsWith("warehouse-") ? 1600 : 1100, withoutEnlargement: true}).webp({quality: 84}).toFile(destination);
    console.log("Saved " + asset.name);
  }
}
main().catch(error => {console.error(error.message); process.exitCode = 1;});
