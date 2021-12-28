import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { PostsComponent } from './posts/posts.component'

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'posts', component: PostsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
