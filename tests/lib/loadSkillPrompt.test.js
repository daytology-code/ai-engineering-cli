import { describe, it, expect } from 'vitest';
import { loadSkillPrompt } from '../../lib/loadSkillPrompt.js';

describe('loadSkillPrompt', () => {
    it('should load single skill prompt', () => {
        const prompt = loadSkillPrompt(['backend']);
        expect(prompt).toContain('backend');
        expect(prompt).toContain('engineer');
    });

    it('should load multiple skill prompts and merge them', () => {
        const prompt = loadSkillPrompt(['mobile', 'security']);
        expect(prompt).toContain('Skill 1: mobile');
        expect(prompt).toContain('Skill 2: security');
        expect(prompt).toContain('---'); // Separator
    });

    it('should handle backward compatibility with string input', () => {
        const prompt = loadSkillPrompt('frontend');
        expect(prompt).toContain('frontend');
    });

    it('should throw error for non-existent skill', () => {
        expect(() => loadSkillPrompt(['non-existent-skill'])).toThrow('Skill prompt not found');
    });

    it('should load all valid skills', () => {
        const skills = ['backend', 'frontend', 'mobile', 'security', 'ai-engineer'];
        skills.forEach(skill => {
            expect(() => loadSkillPrompt([skill])).not.toThrow();
        });
    });

    it('should merge three skills correctly', () => {
        const prompt = loadSkillPrompt(['backend', 'frontend', 'security']);
        expect(prompt).toContain('Skill 1: backend');
        expect(prompt).toContain('Skill 2: frontend');
        expect(prompt).toContain('Skill 3: security');
    });
});
