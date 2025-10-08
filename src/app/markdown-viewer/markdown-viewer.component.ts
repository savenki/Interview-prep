import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';
import hljs from 'highlight.js';

@Component({
  selector: 'app-markdown-viewer',
  standalone: true,
  imports: [],
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss'] // ✅ corrected from styleUrl to styleUrls
})
export class MarkdownViewerComponent implements OnInit {
  markdownContent: string | Promise<string> = '';

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

    this.http.get('assets/interview-prep-notes.md', { responseType: 'text' })
      .subscribe(data => {
        this.markdownContent = marked.parse(data);
      });
  }
}