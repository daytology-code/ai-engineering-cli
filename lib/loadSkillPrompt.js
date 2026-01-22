import fs from "fs";
import path from "path";

export function loadSkillPrompt(skill) {
    const basePath = path.resolve(
        new URL(".", import.meta.url).pathname,
        "../templates/skills"
    );

    const filePath = path.join(basePath, `${skill}.md.tpl`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Skill prompt not found: ${skill}`);
    }

    return fs.readFileSync(filePath, "utf-8");
}
