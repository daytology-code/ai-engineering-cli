import { describe, it, expect } from 'vitest';
import { parseArgs } from '../../lib/parseArgs.js';

describe('parseArgs', () => {
    it('should parse basic arguments', () => {
        const result = parseArgs(['login-flow', 'backend']);
        expect(result.command).toBe('create');
        expect(result.featureName).toBe('login-flow');
        expect(result.skills).toEqual(['backend']);
        expect(result.framework).toBe(null);
        expect(result.dryRun).toBe(false);
    });

    it('should parse multiple skills', () => {
        const result = parseArgs(['auth', 'mobile,security']);
        expect(result.command).toBe('create');
        expect(result.skills).toEqual(['mobile', 'security']);
    });

    it('should parse skills with spaces after comma', () => {
        const result = parseArgs(['test', 'backend, security, mobile']);
        expect(result.skills).toEqual(['backend', 'security', 'mobile']);
    });

    it('should parse framework option', () => {
        const result = parseArgs(['dashboard', 'frontend', '--framework', 'nextjs']);
        expect(result.framework).toBe('nextjs');
    });

    it('should parse dry-run flag', () => {
        const result = parseArgs(['test', 'backend', '--dry-run']);
        expect(result.dryRun).toBe(true);
    });

    it('should parse combined options', () => {
        const result = parseArgs(['feature', 'mobile,security', '--framework', 'swiftui', '--dry-run']);
        expect(result.featureName).toBe('feature');
        expect(result.skills).toEqual(['mobile', 'security']);
        expect(result.framework).toBe('swiftui');
        expect(result.dryRun).toBe(true);
    });

    it('should handle help command', () => {
        const result = parseArgs(['--help']);
        expect(result.command).toBe('help');
    });

    it('should handle -h shorthand', () => {
        const result = parseArgs(['-h']);
        expect(result.command).toBe('help');
    });

    it('should handle version command', () => {
        const result = parseArgs(['--version']);
        expect(result.command).toBe('version');
    });

    it('should handle -v shorthand', () => {
        const result = parseArgs(['-v']);
        expect(result.command).toBe('version');
    });

    it('should handle list command', () => {
        const result = parseArgs(['--list']);
        expect(result.command).toBe('list');
    });
});
