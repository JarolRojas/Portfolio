import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AccountGithubService } from '../../../Services/github/account-github.service';
import { Account } from '../../../interfaces/project/account';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'project-card-account',
  imports: [NgIf, TranslateModule],
  templateUrl: './card-account.component.html',
})
export class CardAccountComponent implements OnInit {
  account: Account | null = null;

  constructor(
    private accountService: AccountGithubService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAccount();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadAccount();
      });
  }

  async loadAccount(): Promise<void> {
    this.accountService.getAccount().subscribe(async (data: any) => {
      const originalImgUrl = "https://avatars.githubusercontent.com/u/123003098?v=4";
      const webpImgUrl = await this.convertImageToWebP(originalImgUrl);
      this.account = {
        imgUrl: webpImgUrl,
        name: data.name,
        username: data.login,
        bio: data.bio || 'account.noBio',
        githubUrl: data.html_url,
        email: "jr.rojas0327@gmail.com",
        location: data.location || 'account.noLocation',
        portfolioUrl: "https://jarolrojas.dev",
        twitterUrl: "https://x.com/JarolRojasR",
        linkedinUrl: "https://www.linkedin.com/in/jarolrojas",
        instagramUrl: "https://www.instagram.com/jarolrojasr/",
        redditUrl: "https://www.reddit.com/user/JarolRojasR/",
        followers: data.followers,
        following: data.following,
        updatedAt: data.updated_at,
      };
      this.cdr.detectChanges();
    });
  }

  // Convierte una imagen a WebP y retorna un dataURL
  private async convertImageToWebP(url: string): Promise<string> {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        const webpDataUrl = canvas.toDataURL('image/webp', 0.85);
        resolve(webpDataUrl);
      };
      img.onerror = function () {
        // Si falla, retorna la url original
        resolve(url);
      };
      img.src = url;
    });
  }

  // Devuelve la ubicación lista para Google Maps
  getLocationForMaps(location: string): string {
    if (!location) return '';
    let loc = location.replace(' 🇪🇸', '').replace(/,/g, '').replace(/\s+/g, '+');
    // Traducir España a Spain
    loc = loc.replace(/España|Spain/gi, 'Spain');
    return loc;
  }
}
