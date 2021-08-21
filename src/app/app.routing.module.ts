import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { UserGuard } from "./core/guards/user.guard";

const routes:Routes =[
    {
        path:'',
        canActivate:[UserGuard],
        loadChildren: ()=>
            import('./modules/home/home.module').then(m=>m.HomeModule)
    },
    {
        path:'clientes',
        canActivate:[UserGuard],
        loadChildren: ()=>
            import('./modules/clientes/clientes.module').then(m=>m.ClientesModule)
    },
    {
        path:'productos',
        canActivate:[UserGuard],
        loadChildren: ()=>
            import('./modules/productos/productos.module').then(m=>m.ProductosModule)
    },
    {
        path:'ventas',
        canActivate:[UserGuard],
        loadChildren: ()=>
            import('./modules/ventas/ventas.module').then(m=>m.VentasModule)
    },
    {
        path:'login',
        loadChildren: ()=>
        import('./core/components/login/login.module').then(m=>m.LoginModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}