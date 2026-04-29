import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UsuarioListComponent,
    UsuarioDetailComponent
  ]
})
export class UsuariosModule { }
