import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { RepositorioService } from '../repositorio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositorio-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './repositorio-detail.component.html',
  styleUrl: './repositorio-detail.component.scss'
})
export class RepositorioDetailComponent implements OnInit {
  repo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repoService: RepositorioService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.repoService.getRepositorios().subscribe(repos => {
        this.repo = repos.find(r => r.id === id);
      });
    });
  }

  cerrar() {
    this.repo = null;
    this.router.navigate(['/']);
  }

}
