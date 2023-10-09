// Import necessary modules and components at the top of the file
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// Import the components you're routing to
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent, data: { routeName: 'Home' } },
  { path: 'about', component: AboutComponent, data: { routeName: 'About' } },
  { path: 'projects', component: ProjectsComponent, data: { routeName: 'Projects' } },
  { path: 'contact', component: ContactComponent, data: { routeName: 'Contact' } }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
