import { Component, Input, OnChanges } from '@angular/core';
import { Usuario } from '../usuario';
import { RepositorioService } from '../../repositorios/repositorio.service';

@Component({
  selector: 'app-usuario-detail',
  standalone: false,
  templateUrl: './usuario-detail.component.html',
  styleUrl: './usuario-detail.component.scss'
})
export class UsuarioDetailComponent implements OnChanges {
  @Input() usuario: any;
  repositoriosDelUsuario: any[] = [];
  repositorios: any[] = [];

  constructor(private repoService: RepositorioService) { }

  ngOnChanges() {
    if (this.usuario && this.usuario.repoIds) {
      this.repoService.getRepositorios().subscribe({
        next: (todosLosRepos) => {
          // Filtramos los que pertenecen al usuario
          this.repositorios = todosLosRepos.filter(r =>
            this.usuario.repoIds.includes(r.id)
          );
        },
        error: (err) => console.error('Error cargando repos', err)
      });
    }
  }
}
