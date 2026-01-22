import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { validateName } from '../../lib/validateName.js';

describe('validateName', () => {
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

    it('should accept valid kebab-case names', () => {
        expect(() => validateName('login-flow')).not.toThrow();
        expect(() => validateName('user-profile')).not.toThrow();
        expect(() => validateName('payment-123')).not.toThrow();
        expect(() => validateName('api-gateway-v2')).not.toThrow();
        expect(exitSpy).not.toHaveBeenCalled();
    });

    it('should reject names with uppercase letters', () => {
        validateName('LoginFlow');
        expect(exitSpy).toHaveBeenCalledWith(1);
        expect(consoleErrorSpy).toHaveBeenCalled();
    });

    it('should reject names with spaces', () => {
        validateName('login flow');
        expect(exitSpy).toHaveBeenCalledWith(1);
    });

    it('should reject names with underscores', () => {
        validateName('login_flow');
        expect(exitSpy).toHaveBeenCalledWith(1);
    });

    it('should reject names with special characters', () => {
        validateName('login@flow');
        expect(exitSpy).toHaveBeenCalledWith(1);
    });

    it('should reject camelCase names', () => {
        validateName('loginFlow');
        expect(exitSpy).toHaveBeenCalledWith(1);
    });
});
