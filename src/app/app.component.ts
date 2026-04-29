import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    UsuariosModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MISW4104-Angular-Parcial';

  selectedUser: Usuario | undefined;
  constructor(private router: Router) { }

  onSelect(user: Usuario): void {
    this.selectedUser = user;
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.router.navigate(['/']);
  }
}
