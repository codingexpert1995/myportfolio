import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent as ResumeContentComponent } from '../../components/resume/resume.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Resume – John Smith',
      description: 'Download or view John Smith\'s professional resume. Comprehensive overview of skills, experience, and achievements as a Full-Stack Developer specializing in Angular and .NET.',
      url: 'https://darshanbhuva.vercel.app/resume',
      keywords: 'John Smith Resume, Full-Stack Developer CV, Angular Developer Resume, .NET Developer CV, Web Developer Resume Download'
    });
  }
}
