import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PlaygroundComponent } from '../playground/playground.component';
import { AddplaygroundComponent } from '../addplayground/addplayground.component';
import { HomeComponent } from '../home/home.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserpageComponent } from '../../app/userpage/userpage.component'
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
    {path: '',component: LoginComponent,},
    { path: 'home', component: HomeComponent },
    { path: 'playground', component: PlaygroundComponent },
    { path: 'addplayground', component: AddplaygroundComponent },
    { path: 'favorites', component:FavoritesComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'userpage', component: UserpageComponent},
    { path: 'contact', component: ContactComponent}
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
export class AppRoutingModule {
    
 }