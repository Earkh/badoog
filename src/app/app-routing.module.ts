import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'main',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        canLoad: [UserGuard]
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
