import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { validateSkill } from '../../lib/validateSkill.js';

describe('validateSkill', () => {
    let exitSpy;
    let consoleErrorSpy;

    beforeEach(() => {
        exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => { });
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        exitSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    it('should accept valid single skill', () => {
        expect(() => validateSkill(['backend'])).not.toThrow();
        expect(() => validateSkill(['frontend'])).not.toThrow();
        expect(() => validateSkill(['mobile'])).not.toThrow();
        expect(() => validateSkill(['security'])).not.toThrow();
        expect(() => validateSkill(['ai-engineer'])).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should accept valid multiple skills', () => {
        expect(() => validateSkill(['mobile', 'security'])).not.toThrow();
        expect(() => validateSkill(['backend', 'security'])).not.toThrow();
        expect(() => validateSkill(['frontend', 'security'])).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should handle backward compatibility with string input', () => {
        expect(() => validateSkill('backend')).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should reject invalid skill', () => {
        validateSkill(['invalid-skill']);
        expect(exitSpy).toHaveBeenCalledWith(1);
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should reject duplicate skills', () => {
        validateSkill(['mobile', 'mobile']);
        expect(exitSpy).toHaveBeenCalledWith(1);
    });

    it('should reject empty array', () => {
        validateSkill([]);
        expect(exitSpy).toHaveBeenCalledWith(1);
    });

    it('should reject if one skill in array is invalid', () => {
        validateSkill(['backend', 'invalid']);
        expect(exitSpy).toHaveBeenCalledWith(1);
    });
});
