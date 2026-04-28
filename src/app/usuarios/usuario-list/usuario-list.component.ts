import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  standalone: false,
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.scss'
})
export class UsuarioListComponent {
  usuarios: Array<Usuario> = [];

  @Output() userSelected = new EventEmitter<Usuario>();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  onSelect(u: Usuario) {
    this.userSelected.emit(u);
  }

}
