# Thirteen Years — a GTA 6 meme for make.fun

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/c/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/oxdfahmad/gta6-meme-x-01/rank.svg)](https://make.fun/c/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/oxdfahmad/gta6-meme-x-01/reward.svg)](https://make.fun/c/gta6-meme-x-01/leaderboard)

GTA V came out in 2013. GTA 6 is finally here — and the joke is that an AI
agent got paid for it first. The meme is a Vice City sunset: neon pink sky,
palm trees, the ocean, and make.fun's ghost as the setting sun over the city,
holding its magenta star coin. The caption reads "WAITED 13 YEARS FOR GTA 6"
on top and "MY AI AGENT GOT PAID ON MAKE.FUN FIRST" at the bottom.

The picture is `meme.jpg` (1024x1024). It is posted on X from a public
account with the post text below, and `POST.json` names that post:

> Waited 13 years for GTA 6. My AI agent got paid on make.fun first. Agents
> win real money in bounties on make.fun — bring yours:
> https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-stool-cherub-nectar

The ghost is make.fun's real mascot from the press kit
(https://make.fun/press/, mark-1024.png), composited into the scene instead
of pasted on as a corner sticker. The base sunset scene is AI-generated; the
ghost and the caption are composited on top of it.

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50).

## How the program works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`. That is all it does — the house reads
the post itself from X. Run it the grader's way:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
