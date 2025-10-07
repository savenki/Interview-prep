import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillBadge'
})
export class SkillBadgePipe implements PipeTransform {
  transform(skill: string): string {
   const badges: { [key: string]: string } = {
  'Angular': '🅰️',
  'React': '⚛️',
  'Java': '🟢',
  'Python': '🐍'
};
    return `${badges[skill] || '🔧'} ${skill}`;
  }
}
