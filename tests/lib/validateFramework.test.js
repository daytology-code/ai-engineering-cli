import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { validateFramework } from '../../lib/validateFramework.js';

describe('validateFramework', () => {
    let exitSpy;
    let consoleErrorSpy;
    let consoleWarnSpy;

    beforeEach(() => {
        exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => { });
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
        consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
    });

    afterEach(() => {
        exitSpy.mockRestore();
        consoleErrorSpy.mockRestore();
        consoleWarnSpy.mockRestore();
    });

    it('should accept valid frameworks', () => {
        expect(() => validateFramework('nextjs', ['frontend'])).not.toThrow();
        expect(() => validateFramework('swiftui', ['mobile'])).not.toThrow();
        expect(() => validateFramework('flutter', ['mobile'])).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should allow null/undefined framework', () => {
        expect(() => validateFramework(null, ['backend'])).not.toThrow();
        expect(() => validateFramework(undefined, ['frontend'])).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should reject invalid framework', () => {
        validateFramework('invalid-framework', ['backend']);
        expect(exitSpy).toHaveBeenCalledWith(1);
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should warn about incompatible skill-framework combination', () => {
        validateFramework('nextjs', ['backend']);
        expect(consoleWarnSpy).toHaveBeenCalled();
        expect(exitSpy).not.toHaveBeenCalled(); // Should warn but not exit
    });

    it('should handle multiple skills', () => {
        expect(() => validateFramework('swiftui', ['mobile', 'security'])).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should handle backward compatibility with string skill', () => {
        expect(() => validateFramework('nextjs', 'frontend')).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });
});
