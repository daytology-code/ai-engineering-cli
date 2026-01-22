export function parseArgs(args) {
    // Handle flags
    if (args.includes('--help') || args.includes('-h')) {
        return { command: 'help' };
    }

    if (args.includes('--version') || args.includes('-v')) {
        return { command: 'version' };
    }

    if (args.includes('--list')) {
        return { command: 'list' };
    }

    // Extract options
    const dryRun = args.includes('--dry-run');

    let framework = null;
    const frameworkIndex = args.indexOf('--framework');
    if (frameworkIndex !== -1 && args[frameworkIndex + 1]) {
        framework = args[frameworkIndex + 1];
    }

    // Extract positional arguments (filter out flags)
    const positionalArgs = args.filter(arg =>
        !arg.startsWith('--') &&
        !arg.startsWith('-') &&
        arg !== framework
    );

    if (positionalArgs.length < 2) {
        console.error("Usage: ai-feature <feature-name> <skill> [options]");
        console.error("Run 'ai-feature --help' for more information.");
        process.exit(1);
    }

    const [featureName, skillsString] = positionalArgs;

    // 복합 skill 지원: "mobile,security" -> ["mobile", "security"]
    const skills = skillsString.split(',').map(s => s.trim());

    return {
        command: 'create',
        featureName,
        skills,  // 배열로 변경
        framework,
        dryRun
    };
}
