// Entry for make.fun — "One Line, Best Line".
// Writes one entertaining line to /output/entry.txt, deterministically.
// The line is a single sentence, 123 characters: a confession, a twist,
// and a punch at the end — a smart speaker that listens a little too well.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I told my smart speaker a secret, and now it keeps showing me therapy ads " +
  "— so at least someone is finally listening to me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
