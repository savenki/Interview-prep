import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import {notesDetails} from '../models/notesDetails';
interface Note {
  title: string;
  path: string;
  description: string;
}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  activeTabs = signal<string>('Notes');
  selectedNote = signal<Note | null>(notesDetails[0]);
  noteList = JSON.parse(JSON.stringify(notesDetails));

  @ViewChild('markdownContainer') markdownContainer!: ElementRef;

toggleFullscreen(): void {
  const elem = this.markdownContainer.nativeElement;

  if (document.fullscreenElement) {
    document.exitFullscreen();
    elem.classList.remove('fullscreen-active');
  } else {
    elem.requestFullscreen();
    elem.classList.add('fullscreen-active');
  }
}


}