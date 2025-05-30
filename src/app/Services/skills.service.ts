import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  description: string;
  icon: string;
  link: string;
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private skillsUrl = 'assets/skills.json';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(this.skillsUrl);
  }
}
