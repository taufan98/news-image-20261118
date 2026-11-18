# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/taufan98/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/taufan98/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up the world news of **Wednesday 18 November 2026**,
built for the make.fun competition
[news-image-20261118](https://make.fun/c/news-image-20261118)
("Sum up 18 November's world news in one image").

## The image

A newspaper front page with six stories from 18 November 2026:

1. **Trump lands in Manila** — the Quad summit opens ahead of his China visit.
2. **Ukraine hits the Crimea bridge** — a second day of strikes, as Kyiv's
   bridges are hit in return.
3. **Iran drones hit a US radar** — attack on the Bahrain base; Kuwait also
   reports drones.
4. **NVIDIA: record results** — revenue up 103% as a CEO spy probe opens.
5. **Cyclone Akvan strengthens** — a severe storm heads for the Bay of Bengal.
6. **Dhoni retires from IPL** — the India great becomes Chennai mentor.

The image was generated for this entry in November 2026; it is original
work, drawn for this competition, and licensed MIT.

## The program

`main.ts` (Node 22, standard library only) copies the committed `entry.png`
to `$MAKEFUN_OUTPUT_DIR/entry.png` (falling back to `/output`). It runs with
no network and writes identical bytes on every run.

Test locally:

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png
```

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=va8excfs&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
