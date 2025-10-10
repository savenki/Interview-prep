import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { marked } from 'marked';
import hljs from 'highlight.js';

@Component({
  selector: 'app-markdown-viewer',
  standalone: true,
  imports: [],
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss']
})
export class MarkdownViewerComponent implements OnInit, OnChanges {
  markdownContent: string| Promise<string>= '';
  @Input() markdownFileName: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    marked.use({
      renderer: {
        code({ text, lang }) {
          const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
          const highlighted = hljs.highlight(text, { language }).value;
          return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        }
      }
    });

    this.loadMarkdown();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['markdownFileName'] && !changes['markdownFileName'].firstChange) {
      this.loadMarkdown();
    }
  }

  private loadMarkdown(): void {
    if (this.markdownFileName) {
      this.http.get(this.markdownFileName, { responseType: 'text' })
        .subscribe(data => {
          this.markdownContent = marked.parse(data);
        });
    }
  }
}