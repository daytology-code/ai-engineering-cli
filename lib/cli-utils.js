import fs from "fs";
import path from "path";
import { VALID_SKILLS, VALID_FRAMEWORKS, SKILL_FRAMEWORK_MAP } from "./config.js";

export function showHelp() {
  console.log(`
AI Engineering CLI - Create deterministic AI-engineered feature scaffolds

USAGE:
  ai-feature <feature-name> <skill[,skill...]> [options]

ARGUMENTS:
  feature-name    Feature name in kebab-case (e.g., login-flow)
  skill           Role-based skill (comma-separated for multiple):
                  ${VALID_SKILLS.join(', ')}

OPTIONS:
  --framework <name>    Framework-specific rules: ${VALID_FRAMEWORKS.join(', ')}
  --dry-run             Preview files without creating them
  --list                Show available skills and frameworks
  --help, -h            Show this help message
  --version, -v         Show version information

EXAMPLES:
  # Single skill
  ai-feature login-flow backend

  # Multiple skills
  ai-feature user-auth mobile,security --framework swiftui

  # With framework
  ai-feature dashboard frontend --framework nextjs

  # Preview mode
  ai-feature payment mobile,security --framework flutter --dry-run
`);
}

export function showVersion() {
  const packageJsonPath = path.resolve(
    new URL(".", import.meta.url).pathname,
    "../package.json"
  );
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  console.log(`ai-engineering-cli v${packageJson.version}`);
}

export function showList() {
  console.log("\n📋 Available Skills:");
  VALID_SKILLS.forEach(skill => {
    const frameworks = SKILL_FRAMEWORK_MAP[skill];
    if (frameworks && frameworks.length > 0) {
      console.log(`  • ${skill} (frameworks: ${frameworks.join(', ')})`);
    } else {
      console.log(`  • ${skill}`);
    }
  });

  console.log("\n🛠️  Available Frameworks:");
  VALID_FRAMEWORKS.forEach(framework => {
    console.log(`  • ${framework}`);
  });
  console.log();
}
