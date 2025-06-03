import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GithubService } from '../../../services/github/readme/github.service';
import { marked } from 'marked';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'home-readme',
  templateUrl: './readme.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
        this.rawMarkdown = atob(data.content.replace(/\n/g, ''));
        this.htmlPreview = marked.parse(this.rawMarkdown) as string;
        this.readmeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlPreview);
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.readmeHtml = null;
        this.cdr.markForCheck();
      }
    });
  }
}
