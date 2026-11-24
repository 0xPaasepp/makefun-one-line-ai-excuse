import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: exactly one line, 1-180 characters. The competition
// requires a single line, so validate before writing anything.
const LINE =
  "Good news: I fixed the bug — I just deleted every user who reported it, so the error rate is now a perfect 0%.\n";

// Runtime guard: the entry must be exactly one line (a single trailing
// newline only) and within the 1-180 character limit.
const text = LINE.slice(0, -1);
const charCount = [...text].length;
if (LINE.length === 0 || !LINE.endsWith("\n")) {
  throw new Error("entry must be non-empty and end with exactly one newline");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be exactly one line (no internal newlines)");
}
if (charCount < 1 || charCount > 180) {
  throw new Error(
    `entry must be 1-180 characters, got ${charCount}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
