import { VALID_SKILLS } from "./config.js";

export function validateSkill(skills) {
    // skills가 배열이 아니면 배열로 변환 (하위 호환성)
    const skillArray = Array.isArray(skills) ? skills : [skills];

    // 빈 배열 체크
    if (skillArray.length === 0) {
        console.error(`\n❌ No skills specified\n`);
        process.exit(1);
    }

    // 중복 체크
    const uniqueSkills = [...new Set(skillArray)];
    if (uniqueSkills.length !== skillArray.length) {
        console.error(`\n❌ Duplicate skills detected\n`);
        console.error(`Skills provided: ${skillArray.join(', ')}\n`);
        process.exit(1);
    }

    // 각 skill 유효성 검사
    for (const skill of skillArray) {
        if (!VALID_SKILLS.includes(skill)) {
            console.error(`\n❌ Invalid skill: "${skill}"\n`);
            console.error(`Available skills: ${VALID_SKILLS.join(', ')}\n`);
            console.error(`Run 'ai-feature --list' to see all options.\n`);
            process.exit(1);
        }
    }
}
