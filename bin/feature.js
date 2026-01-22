#!/usr/bin/env node

import { createFeature } from "../lib/createFeature.js";
import { validateName } from "../lib/validateName.js";

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage: ai-feature <feature-name> <skill>");
  process.exit(1);
}

const [featureName, skill] = args;

validateName(featureName);

createFeature({
  featureName,
  skill,
});
