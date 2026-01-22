import fs from "fs";
import path from "path";

export function loadSkillPrompt(skills) {
    const basePath = path.resolve(
        new URL(".", import.meta.url).pathname,
        "../templates/skills"
    );

    // skills가 배열이 아니면 배열로 변환 (하위 호환성)
    const skillArray = Array.isArray(skills) ? skills : [skills];

    if (skillArray.length === 1) {
        // 단일 skill: 기존 방식
        const filePath = path.join(basePath, `${skillArray[0]}.md.tpl`);
        if (!fs.existsSync(filePath)) {
            throw new Error(`Skill prompt not found: ${skillArray[0]}`);
        }
        return fs.readFileSync(filePath, "utf-8");
    }

    // 복합 skill: 병합
    const prompts = skillArray.map((skill, index) => {
        const filePath = path.join(basePath, `${skill}.md.tpl`);
        if (!fs.existsSync(filePath)) {
            throw new Error(`Skill prompt not found: ${skill}`);
        }
        const content = fs.readFileSync(filePath, "utf-8");

        // 각 skill을 명확히 구분
        return `### Skill ${index + 1}: ${skill}\n\n${content}`;
    });

    return prompts.join("\n\n---\n\n");
}
