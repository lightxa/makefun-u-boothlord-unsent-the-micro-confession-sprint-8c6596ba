// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba entry (Node 22,
// standard library only): it writes one fixed, original micro-confession to
// /output/entry.txt. The confession is two parts: a To: line naming who the
// unsent message was meant for, and the message itself, one line written
// exactly as it was typed, with no explanation after it.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The addressee. A role, not a real person: the message below only makes
// sense sent to him, because it quotes his own words back to him.
const TO_LINE = 'To: Dad';

// The unsent message itself, one line, exactly as typed: lowercase, no
// polish, no second sentence explaining it. It stayed in drafts because it
// is too late — the voicemail is from last March, the call was never
// returned, and saying so now would only tell him what he already knows
// about the silence. Swapping the addressee breaks it: only Dad says
// "call me back, son".
const MESSAGE =
  'i still keep the voicemail from last March where you say call me back, son, no rush, and i never did';

const ENTRY = TO_LINE + '\n' + MESSAGE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
