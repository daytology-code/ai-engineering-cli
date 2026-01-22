import fs from "fs";
import path from "path";
import { loadSkillPrompt } from "./loadSkillPrompt.js";

export function createFeature({ featureName, skill }) {
    const skillPrompt = loadSkillPrompt(skill);

    const featureDir = path.join(process.cwd(), featureName);

    if (fs.existsSync(featureDir)) {
        throw new Error(`Directory already exists: ${featureName}`);
    }

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

    // 프레임워크 전용 규칙이 있으면 추가 생성 (예: rules-nextjs.md)
    const frameworkRulePath = path.resolve(
        new URL(".", import.meta.url).pathname,
        `../templates/rules/rules-${skill}.md.tpl`
    );

    if (fs.existsSync(frameworkRulePath)) {
        const frameworkRuleContent = fs.readFileSync(frameworkRulePath, "utf-8");
        fs.writeFileSync(
            path.join(featureDir, `rules-${skill}.md`),
            frameworkRuleContent
        );
        console.log(`- Created: ${featureName}/rules-${skill}.md (Framework Rules)`);
    }

    console.log(`\n🚀 Feature scaffold created: ${featureName}`);
    console.log(`- Created: ${featureName}/Implementation.md (AI Contract)`);
    console.log(`- Created: ${featureName}/todo.md (Execution Queue)`);
    console.log(`- Created: ${featureName}/rules-global.md (AI Constitution)`);
}
