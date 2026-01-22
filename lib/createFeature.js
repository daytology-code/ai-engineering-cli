import fs from "fs";
import path from "path";
import { loadSkillPrompt } from "./loadSkillPrompt.js";

export function createFeature({ featureName, skills, framework, dryRun }) {
    const skillPrompt = loadSkillPrompt(skills);

    const featureDir = path.join(process.cwd(), featureName);

    if (fs.existsSync(featureDir)) {
        console.error(`\n❌ Directory already exists: ${featureName}\n`);
        process.exit(1);
    }

    // 복합 skill 표시용
    const skillsLabel = Array.isArray(skills) ? skills.join(', ') : skills;

    // Dry-run mode: show what would be created
    if (dryRun) {
        console.log(`\n🔍 Dry-run mode: Preview of files to be created in "${featureName}/"\n`);
        console.log(`  🎯 Skills: ${skillsLabel}`);
        console.log(`  📄 ${featureName}/Implementation.md (AI Contract)`);
        console.log(`  📄 ${featureName}/todo.md (Execution Queue)`);
        console.log(`  📄 ${featureName}/rules-global.md (AI Constitution)`);

        if (framework) {
            const frameworkRulePath = path.resolve(
                new URL(".", import.meta.url).pathname,
                `../templates/rules/rules-${framework}.md.tpl`
            );
            if (fs.existsSync(frameworkRulePath)) {
                console.log(`  📄 ${featureName}/rules-${framework}.md (Framework Rules)`);
            }
        }

        console.log(`\n💡 Run without --dry-run to create these files.\n`);
        return;
    }

    // Create directory
    fs.mkdirSync(featureDir);

    const implementationTemplate = fs.readFileSync(
        path.resolve(
            new URL(".", import.meta.url).pathname,
            "../templates/Implementation.md.tpl"
        ),
        "utf-8"
    );

    const todoTemplate = fs.readFileSync(
        path.resolve(
            new URL(".", import.meta.url).pathname,
            "../templates/todo.md.tpl"
        ),
        "utf-8"
    );

    const globalRulesTemplate = fs.readFileSync(
        path.resolve(
            new URL(".", import.meta.url).pathname,
            "../templates/rules/rules-global.md.tpl"
        ),
        "utf-8"
    );

    fs.writeFileSync(
        path.join(featureDir, "Implementation.md"),
        implementationTemplate.replace("{{SKILL_PROMPT}}", skillPrompt)
    );

    fs.writeFileSync(
        path.join(featureDir, "todo.md"),
        todoTemplate
    );

    fs.writeFileSync(
        path.join(featureDir, "rules-global.md"),
        globalRulesTemplate
    );

    console.log(`\n🚀 Feature scaffold created: ${featureName}/`);
    console.log(`  🎯 Skills: ${skillsLabel}`);
    console.log(`  ✓ Implementation.md (AI Contract)`);
    console.log(`  ✓ todo.md (Execution Queue)`);
    console.log(`  ✓ rules-global.md (AI Constitution)`);

    // Create framework-specific rules if framework is specified
    if (framework) {
        const frameworkRulePath = path.resolve(
            new URL(".", import.meta.url).pathname,
            `../templates/rules/rules-${framework}.md.tpl`
        );

        if (fs.existsSync(frameworkRulePath)) {
            const frameworkRuleContent = fs.readFileSync(frameworkRulePath, "utf-8");
            fs.writeFileSync(
                path.join(featureDir, `rules-${framework}.md`),
                frameworkRuleContent
            );
            console.log(`  ✓ rules-${framework}.md (Framework Rules)`);
        }
    }

    console.log();
}
