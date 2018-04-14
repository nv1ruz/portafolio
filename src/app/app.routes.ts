import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    PortafolioComponent,
    ProductoComponent,
    AboutComponent
} from './components/index.paginas';


const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductoComponent },
    { path: '**', pathMatch:'full', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash:true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}


