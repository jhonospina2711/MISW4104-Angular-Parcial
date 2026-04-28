import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-detail',
  standalone: false,
  templateUrl: './usuario-detail.component.html',
  styleUrl: './usuario-detail.component.scss'
})
export class UsuarioDetailComponent {
  @Input() usuario: Usuario | undefined;

}
