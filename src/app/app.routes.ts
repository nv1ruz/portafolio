import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    PortafolioComponent,
    ProductoComponent,
    AboutComponent
} from './components/index.paginas';


const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash:true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}


