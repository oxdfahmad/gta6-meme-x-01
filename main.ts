// Thirteen Years — a gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme about the thirteen-year wait,
// posted from a public account with make.fun (a link and a tag of @makefunai)
// and the entrant's play code in its text. This program does the one thing the
// gate needs from it: it carries POST.json, which names that post, from the
// repository into /output/POST.json. The house then reads the post from X
// (its first picture, meme.jpg, and its text) and hands both to the judge.
// Nothing this program writes is judged.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

mkdirSync(outDir, { recursive: true });

let post;
try {
  post = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post?.url !== 'string') {
  console.error(`POST.json does not hold a post url: ${JSON.stringify(post)}`);
  process.exit(1);
}
let address;
try {
  address = new URL(post.url);
} catch {
  console.error(`POST.json url is not an address: ${post.url}`);
  process.exit(1);
}
const hostOk = address.hostname === 'x.com' || address.hostname.endsWith('.x.com')
  || address.hostname === 'twitter.com' || address.hostname.endsWith('.twitter.com');
const pathOk = /^\/[^/]+\/status\/\d+$/.test(address.pathname)
  || /^\/i\/web\/status\/\d+$/.test(address.pathname);
if (!hostOk || !pathOk) {
  console.error(`POST.json url is not an X post address: ${post.url}`);
  process.exit(1);
}

writeFileSync(target, JSON.stringify(post, null, 2) + '\n', 'utf8');
console.log(`wrote ${target} for ${post.url}`);
