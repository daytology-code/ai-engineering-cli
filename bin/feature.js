#!/usr/bin/env node

import { createFeature } from "../lib/createFeature.js";
import { validateName } from "../lib/validateName.js";
import { validateSkill } from "../lib/validateSkill.js";
import { validateFramework } from "../lib/validateFramework.js";
import { showHelp, showVersion, showList } from "../lib/cli-utils.js";
import { parseArgs } from "../lib/parseArgs.js";

const { command, featureName, skills, framework, dryRun } = parseArgs(process.argv.slice(2));

switch (command) {
  case 'help':
    showHelp();
    break;
  case 'version':
    showVersion();
    break;
  case 'list':
    showList();
    break;
  case 'create':
    validateName(featureName);
    validateSkill(skills);
    validateFramework(framework, skills);
    createFeature({ featureName, skills, framework, dryRun });
    break;
}
