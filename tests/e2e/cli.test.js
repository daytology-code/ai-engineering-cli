import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';

describe('CLI E2E', () => {
    it('should show help', () => {
        const output = execSync('node bin/feature.js --help', { encoding: 'utf-8' });
        expect(output).toContain('USAGE:');
        expect(output).toContain('ai-feature');
        expect(output).toContain('EXAMPLES:');
    });

    it('should show version', () => {
        const output = execSync('node bin/feature.js --version', { encoding: 'utf-8' });
        expect(output).toMatch(/v\d+\.\d+\.\d+/);
    });

    it('should show list', () => {
        const output = execSync('node bin/feature.js --list', { encoding: 'utf-8' });
        expect(output).toContain('Available Skills');
        expect(output).toContain('backend');
        expect(output).toContain('frontend');
        expect(output).toContain('mobile');
        expect(output).toContain('Available Frameworks');
        expect(output).toContain('nextjs');
    });

    it('should handle invalid feature name', () => {
        try {
            execSync('node bin/feature.js InvalidName backend', { encoding: 'utf-8' });
            expect.fail('Should have thrown an error');
        } catch (error) {
            expect(error.stdout).toContain('Invalid feature name');
            expect(error.stdout).toContain('kebab-case');
        }
    });

    it('should handle invalid skill', () => {
        try {
            execSync('node bin/feature.js test-feature invalid-skill', { encoding: 'utf-8' });
            expect.fail('Should have thrown an error');
        } catch (error) {
            expect(error.stdout).toContain('Invalid skill');
            expect(error.stdout).toContain('Available skills');
        }
    });

    it('should handle duplicate skills', () => {
        try {
            execSync('node bin/feature.js test mobile,mobile', { encoding: 'utf-8' });
            expect.fail('Should have thrown an error');
        } catch (error) {
            expect(error.stdout).toContain('Duplicate skills');
        }
    });
});
