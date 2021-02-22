import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PlaygroundComponent } from '../playground/playground.component';
import { AddplaygroundComponent } from '../addplayground/addplayground.component';

const routes: Routes = [
    {path: '',component: LoginComponent,},
    { path: 'playground', component: PlaygroundComponent },
    { path: 'addplayground', component: AddplaygroundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }