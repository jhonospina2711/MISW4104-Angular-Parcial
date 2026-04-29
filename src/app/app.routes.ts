import { Routes } from '@angular/router';
import { RepositorioDetailComponent } from './repositorios/repositorio-detail/repositorio-detail.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';

export const routes: Routes = [
 { path: '', redirectTo: '', pathMatch: 'full' },
 { path: 'repositorios/:id', component: RepositorioDetailComponent }
];
