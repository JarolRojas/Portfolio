import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AccountGithubService } from '../../../Services/github/account-github.service';
import { Account } from '../../../interfaces/project/account';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, interval, Subscription } from 'rxjs';

@Component({
  selector: 'project-card-account',
  imports: [NgIf],
  templateUrl: './card-account.component.html',
})
export class CardAccountComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  private pollingSubscription: Subscription | null = null;

  constructor(
    private accountService: AccountGithubService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAccount();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadAccount();
      });
    // Polling cada 30 segundos
    this.pollingSubscription = interval(30000).subscribe(() => {
      this.loadAccount();
    });
  }

  ngOnDestroy(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  loadAccount(): void {
    this.accountService.getAccount().subscribe((data: any) => {
      this.account = {
        name: data.name,
        username: data.login,
        profileUrl: data.html_url,
        imgUrl: data.avatar_url,
        bio: data.bio,
        location: data.location,
        followers: data.followers,
        following: data.following,
        portfolioUrl: data.blog,
        twitterUrl: data.twitter_username ? `https://twitter.com/${data.twitter_username}` : '',
        linkedinUrl: '',
        instagramUrl: '',
        redditUrl: '',
        githubUrl: data.html_url
      };
      this.cdr.detectChanges();
    });
  }
}
