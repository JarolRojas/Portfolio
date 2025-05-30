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

  loadAccount(): void {
    this.accountService.getAccount().subscribe((data: any) => {
      this.account = {
        imgUrl: "assets/img/perfilphoto.webp",
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

  // Devuelve la ubicación lista para Google Maps
  getLocationForMaps(location: string): string {
    if (!location) return '';
    let loc = location.replace(' 🇪🇸', '').replace(/,/g, '').replace(/\s+/g, '+');
    // Traducir España a Spain
    loc = loc.replace(/España|Spain/gi, 'Spain');
    return loc;
  }
}
