import { Component, Input } from '@angular/core';
import { WritableSignal } from '@angular/core';

interface Note {
  title: string;
  path: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Input() noteList: Note[] = [];
  @Input() selectedNote!: WritableSignal<Note | null>;
  @Input() activeTabs!: WritableSignal<string>;

  selectNote(note: Note) {
    this.selectedNote.set(note);
    this.activeTabs.set('Notes');
  }
}