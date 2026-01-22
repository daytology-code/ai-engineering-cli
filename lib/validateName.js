export function validateName(name) {
    if (!/^[a-z0-9\-]+$/.test(name)) {
        throw new Error(
            "Feature name must be kebab-case (lowercase, numbers, hyphens)"
        );
    }
}
