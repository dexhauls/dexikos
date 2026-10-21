// Složí index.html ze src.html: doplní ikony značek (Simple Icons) a šipku.
import { readFileSync, writeFileSync } from "node:fs";
const dir = new URL(".", import.meta.url);
const icons = JSON.parse(readFileSync(new URL("icons.json", dir), "utf8"));
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const html = readFileSync(new URL("src.html", dir), "utf8")
  .replaceAll("%%ARROW%%", arrow)
  .replaceAll("%%DISCORD%%", icons.discord)
  .replaceAll("%%TIKTOK%%", icons.tiktok)
  .replaceAll("%%INSTAGRAM%%", icons.instagram);
writeFileSync(new URL("index.html", dir), html);
console.log("index.html", html.length);
