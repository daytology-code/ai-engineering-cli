import { VALID_FRAMEWORKS, SKILL_FRAMEWORK_MAP } from "./config.js";

export function validateFramework(framework, skills) {
    if (!framework) {
        return; // Framework is optional
    }

    if (!VALID_FRAMEWORKS.includes(framework)) {
        console.error(`\n❌ Invalid framework: "${framework}"\n`);
        console.error(`Available frameworks: ${VALID_FRAMEWORKS.join(', ')}\n`);
        console.error(`Run 'ai-feature --list' to see all options.\n`);
        process.exit(1);
    }

    // 복합 skill 지원
    const skillArray = Array.isArray(skills) ? skills : [skills];

    // 각 skill에 대해 호환성 체크
    for (const skill of skillArray) {
        const compatibleFrameworks = SKILL_FRAMEWORK_MAP[skill];
        if (compatibleFrameworks && compatibleFrameworks.length > 0 && !compatibleFrameworks.includes(framework)) {
            console.warn(`\n⚠️  Warning: Framework "${framework}" is not typically used with skill "${skill}"`);
        }
    }
}
