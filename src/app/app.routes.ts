import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Home',
      description: 'John Smith - Full-Stack Developer specializing in Angular, .NET, and modern web technologies. Explore my portfolio, experience, and projects.',
      keywords: 'John Smith, Full-Stack Developer, Angular Developer, .NET Developer, Portfolio, Web Development'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about John Smith, a passionate Full-Stack Developer with expertise in Angular, .NET, and modern web technologies.',
      keywords: 'About John Smith, Full-Stack Developer Background, Angular Developer Profile, .NET Developer Experience'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Experience',
      description: 'Explore John Smith\'s professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements.',
      keywords: 'John Smith Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Explore John Smith\'s portfolio of innovative web applications and software projects. View detailed case studies of Angular, .NET, and full-stack development work.',
      keywords: 'John Smith Projects, Full-Stack Developer Portfolio, Angular Projects, .NET Applications, Web Development Portfolio'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Contact',
      description: 'Get in touch with John Smith for collaboration opportunities, project inquiries, or professional discussions.',
      keywords: 'Contact John Smith, Hire Full-Stack Developer, Angular Developer Contact, .NET Developer Hire, Web Development Services'
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view John Smith\'s professional resume. Comprehensive overview of skills, experience, and achievements as a Full-Stack Developer.',
      keywords: 'John Smith Resume, Full-Stack Developer CV, Angular Developer Resume, .NET Developer CV, Web Developer Resume Download'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];
