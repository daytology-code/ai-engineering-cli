export function validateName(name) {
    if (!/^[a-z0-9\-]+$/.test(name)) {
        console.error(`\n❌ Invalid feature name: "${name}"\n`);
        console.error("Feature name must be kebab-case (lowercase, numbers, hyphens)\n");
        console.error("Valid examples:");
        console.error("  ✓ login-flow");
        console.error("  ✓ user-profile");
        console.error("  ✓ payment-gateway\n");
        process.exit(1);
    }
}
