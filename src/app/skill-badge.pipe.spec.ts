import { SkillBadgePipe } from './skill-badge.pipe';

describe('SkillBadgePipe', () => {
  const pipe = new SkillBadgePipe();

  it('should transform known skills correctly', () => {
    expect(pipe.transform('Angular')).toBe('🅰️ Angular');
    expect(pipe.transform('React')).toBe('⚛️ React');
    expect(pipe.transform('Java')).toBe('🟢 Java');
  });

  it('should return default badge for unknown skills', () => {
    expect(pipe.transform('Unknown')).toBe('🔧 Unknown');
  });
});