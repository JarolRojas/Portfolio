import {  Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GithubService } from '../../../services/github/github.service';
import { marked } from 'marked';

@Component({
  selector: 'home-readme',
  templateUrl: './readme.component.html',
  standalone: true,
})
export class ReadmeComponent implements OnInit {
  readmeHtml: SafeHtml | null = null;
  rawMarkdown: string = '';
  htmlPreview: string = '';

  constructor(
    private github: GithubService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.github.getReadme().subscribe({
      next: (data: any) => {
        console.log('GitHub README response:', data);
        this.rawMarkdown = atob(data.content.replace(/\n/g, ''));
        this.htmlPreview = marked.parse(this.rawMarkdown) as string;
        this.readmeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlPreview);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al obtener el README:', err);
        this.readmeHtml = this.sanitizer.bypassSecurityTrustHtml('<p style="color:red">No se pudo cargar el README de GitHub.</p>');
        this.cdr.markForCheck();
      }
    });
  }
}
