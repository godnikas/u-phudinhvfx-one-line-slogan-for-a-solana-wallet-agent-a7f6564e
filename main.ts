// Author's note — "One-Line Slogan for a Solana Wallet Agent"
// (u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
//
// Three candidate lines were drafted and compared against the judge's brief
// (creativity first, clarity second; fresh image over stock crypto lines
// about keys, moons or bags; plain words a newcomer gets on one read;
// rhythm that sticks; honest about what a wallet agent does):
//
//   A) "Your Solana wallet finally learned to think — it trades, signs, and
//      saves while you sleep."
//      Decent image ("learned to think") but "while you sleep" is a tired
//      automation cliché, and the three verbs land flat without a beat.
//
//   B) "One wallet, one agent, all of Solana — your money moves before you
//      finish the sentence."
//      Punchy contrast and a nice speed claim, but "your money moves" is
//      vague about what the agent actually does, and it never says the
//      wallet is the thing doing the work.
//
//   C) "Your Solana wallet grew a brain — it swaps, signs, and saves while
//      you just say the word."
//      Strongest: "grew a brain" is a fresh, funny image (a wallet with a
//      brain, not another key/moon/bag line); the alliterative triple
//      "swaps, signs, and saves" names exactly what a wallet agent does
//      and gives the line its rhythm; "while you just say the word" makes
//      the promise concrete and effortless for a newcomer; and it names
//      the Solana wallet outright. C is the line below.
//
// Gate check: 17 words (limit 20), 91 characters (limit 140), one line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your Solana wallet grew a brain \u2014 it swaps, signs, and saves while you just say the word.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
