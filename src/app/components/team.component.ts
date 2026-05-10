import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  title: string;
  image: string;
  socials: { linkedin?: string; twitter?: string };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="team" id="team">
      <div class="section-container">
        <div class="section-header center">
          <h2 class="section-title">Meet the Visionaries</h2>
          <p class="section-sub">
            A multidisciplinary team of data scientists, clinicians, and engineers dedicated
            to transforming global health.
          </p>
        </div>

        <div class="team-grid">
          <div class="member-card" *ngFor="let m of team">
            <div class="member-photo">
              <img [src]="m.image" [alt]="m.name" />
            </div>
            <div class="member-info">
              <h3 class="member-name">{{ m.name }}</h3>
              <span class="member-title">{{ m.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team {
      padding: 40px 20px;
      background: white;
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 40px;

      &.center {
        text-align: center;

        .section-title::after {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    .section-title {
      font-size: clamp(28px, 3.5vw, 40px);
      font-weight: 800;
      color: var(--text-dark);
      margin-bottom: 12px;

      &::after {
        content: '';
        display: block;
        width: 48px;
        height: 4px;
        background: var(--primary);
        border-radius: 2px;
        margin-top: 12px;
      }
    }

    .section-sub {
      font-size: 16px;
      line-height: 1.7;
      color: var(--text-mid);
      max-width: 520px;
      margin: 0 auto;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 2fr);
      gap: 20px;
    }

    .member-card {
      text-align: center;
      transition: var(--transition);

         .member-photo {
        box-shadow: var(--shadow-lg);
        &::before { opacity: 1; }
        } 
         &:hover {
        transform: translateY(-12px);
      }  
    }

    .member-photo {
      position: relative;
      width: 125px; height: 125px;
      margin: 14px auto;
      border-radius: 50%;
      overflow: hidden;
    
      transition: var(--transition);
     
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0,96,209,0.2), rgba(0,196,180,0.2));
        opacity: 0;
        transition: var(--transition);
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .member-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .member-name {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-dark);
    }

    .member-title {
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--primary);
    }

    @media (max-width: 900px) {
      .team-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 480px) {
      .team-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
      .member-photo { width: 120px; height: 120px; }
    }
  `]
})
export class TeamComponent {
  team: TeamMember[] = [
      {
      name: 'Dr. Thomas Kitavi',
      role: 'DE',
      title: 'DOMAIN EXPERT',
      image: 'assets/images/tom.jpg',
      socials: {}
    },
    {
      name: 'John William Muga',
      role: 'CEO',
      title: 'CHIEF EXECUTIVE OFFICER',
      image: 'assets/images/william.jpg',
      socials: {}
    },
    {
      name: 'Yusupha Ceesay',
      role: 'CTO',
      title: 'CHIEF TECHNOLOGY OFFICER',
      image: 'assets/images/yusupha.jpeg',
      socials: {}
    },
    {
      name: 'Edna Mugo',
      role: 'LSE',
      title: 'LEAD SOFTWARE ENGINEER',
      image: 'assets/images/edna-img.png',
      socials: {}
    },
    {
      name: 'Khanyisile Tapiwa',
      role: 'LAE',
      title: 'LEAD AI ENGINEER',
      image: 'assets/images/khanyi.jpeg',
      socials: {}
    },
    {
      name: 'Lorraine Chepkemoi',
      role: 'PM',
      title: 'PROJECT MANAGER',
      image: 'assets/images/lorraine-img.jpg',
      socials: {}
    },
    {
      name: 'Simeon Krah',
      role: 'RL',
      title: 'RESEARCH SCIENTIST',
      image: 'assets/images/simeon.jpeg',
      socials: {}
    }
    
    
  ];
}
