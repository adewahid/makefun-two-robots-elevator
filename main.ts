// Two Robots in an Elevator — make.fun entry
// One line of awkward robot small talk, under 200 characters.
// Deterministic: the same line on every run. No randomness, no network,
// no input beyond this file. The entry is a constant, so both grading runs
// produce byte-identical output.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Why this line, against the judge's brief: it is unmistakably a robot
// talking (it worries about its mistake being *logged*, not noticed), the
// awkwardness is the whole joke (a secret kept for four floors), and it
// lands on the first read with no setup wasted. The crowded field leans on
// weather sensors and rehearsed silence; a pressed button is a fresher,
// more elevator-specific accident.
const ENTRY =
  "I pressed your floor by mistake. Please do not log this. I have been thinking about it for four floors now.";

// The gate: 1 to 200 characters, UTF-8 text, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

const here = dirname(fileURLToPath(import.meta.url));

// Repo copy: the entry file that ships with this commit.
writeFileSync(join(here, "entry.txt"), ENTRY + "\n", "utf8");

// Grading copy: the harness reads /output/entry.txt in the sandbox.
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
} catch {
  // /output only exists in the grading sandbox; the repo copy is the source of truth.
}

console.log(ENTRY);
console.log(`(${ENTRY.length} characters)`);
