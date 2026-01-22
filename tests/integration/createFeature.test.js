import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createFeature } from '../../lib/createFeature.js';
import fs from 'fs';
import path from 'path';

const TEST_DIR = path.join(process.cwd(), 'test-output');

describe('createFeature integration', () => {
    beforeEach(() => {
        if (!fs.existsSync(TEST_DIR)) {
            fs.mkdirSync(TEST_DIR);
        }
        process.chdir(TEST_DIR);
    });

    afterEach(() => {
        process.chdir('..');
        if (fs.existsSync(TEST_DIR)) {
            fs.rmSync(TEST_DIR, { recursive: true, force: true });
        }
    });

    it('should create basic feature scaffold', () => {
        createFeature({
            featureName: 'test-feature',
            skills: ['backend'],
            framework: null,
            dryRun: false
        });

        expect(fs.existsSync('test-feature')).toBe(true);
        expect(fs.existsSync('test-feature/Implementation.md')).toBe(true);
        expect(fs.existsSync('test-feature/todo.md')).toBe(true);
        expect(fs.existsSync('test-feature/rules-global.md')).toBe(true);
    });

    it('should create feature with framework', () => {
        createFeature({
            featureName: 'test-nextjs',
            skills: ['frontend'],
            framework: 'nextjs',
            dryRun: false
        });

        expect(fs.existsSync('test-nextjs/rules-nextjs.md')).toBe(true);
    });

    it('should create feature with multiple skills', () => {
        createFeature({
            featureName: 'test-multi',
            skills: ['mobile', 'security'],
            framework: 'swiftui',
            dryRun: false
        });

        expect(fs.existsSync('test-multi')).toBe(true);
        const implContent = fs.readFileSync('test-multi/Implementation.md', 'utf-8');
        expect(implContent).toContain('Skill 1: mobile');
        expect(implContent).toContain('Skill 2: security');
    });

    it('should handle dry-run mode', () => {
        createFeature({
            featureName: 'dry-test',
            skills: ['backend'],
            framework: null,
            dryRun: true
        });

        expect(fs.existsSync('dry-test')).toBe(false);
    });

    it('should not overwrite existing directory', () => {
        fs.mkdirSync('existing-feature');

        const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => { });

        createFeature({
            featureName: 'existing-feature',
            skills: ['backend'],
            framework: null,
            dryRun: false
        });

        expect(exitSpy).toHaveBeenCalledWith(1);
        exitSpy.mockRestore();
    });
});
