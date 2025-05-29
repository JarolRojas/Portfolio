import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AccountGithubService } from '../../../Services/github/account-github.service';
import { Account } from '../../../interfaces/project/account';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'project-card-account',
  imports: [NgIf],
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
        name: data.name, //
        username: data.login, //
        profileUrl: data.html_url, //
        imgUrl: data.avatar_url, //
        bio: data.bio, //
        location: data.location, //
        followers: data.followers, //
        following: data.following, //
        portfolioUrl: "https://jarolrojas.dev", //
        twitterUrl: data.twitter_username ? `https://twitter.com/${data.twitter_username}` : '',
        linkedinUrl: 'https://www.linkedin.com/in/jarolrojas',
        instagramUrl: 'https://www.instagram.com/jarolrojasr/',
        redditUrl: 'https://www.reddit.com/user/JarolRojasR/',
        email: 'jr.rojas0327@gmail.com'
      };
      this.cdr.detectChanges();
    });
  }
}
