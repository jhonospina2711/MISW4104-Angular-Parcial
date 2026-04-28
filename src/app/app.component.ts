import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UsuariosModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MISW4104-Angular-Parcial';

  selectedUser: Usuario | undefined;

  onSelect(user: Usuario): void {
    this.selectedUser = user;
    // console.log('Usuario seleccionado:', user.name); // Para que verifiques en consola
  }
}
