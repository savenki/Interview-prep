import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { notesDetails } from '../models/notesDetails';

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
  activeTabs = signal<string>('Home');
  selectedNote = signal<Note | null>(notesDetails[0]);
  noteList = JSON.parse(JSON.stringify(notesDetails));
  isFullScreen: boolean = false;

  @ViewChild('markdownContainer') markdownContainer!: ElementRef;

toggleFullscreen(): void {
  if (!this.markdownContainer) {
    console.warn('markdownContainer is not available');
    return;
  }

  const elem = this.markdownContainer.nativeElement;

  if (document.fullscreenElement) {
    document.exitFullscreen();
    elem.classList.remove('fullscreen-active');
    this.isFullScreen = false;
  } else {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().then(() => {
        elem.classList.add('fullscreen-active');
        this.isFullScreen = true;
      }).catch(() => {
        // Fallback for mobile: simulate fullscreen
        elem.classList.add('fullscreen-active');
        this.isFullScreen = true;
      });
    }
  }
}
}