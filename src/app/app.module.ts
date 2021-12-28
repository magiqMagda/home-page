import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavigationComponent } from './navigation/navigation.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AboutComponent } from './about/about.component'
import { PostsComponent } from './posts/posts.component'
import { ContactComponent } from './contact/contact.component'
import { PostTileComponent } from './posts/post-tile/post-tile.component'
import { MatCardModule } from '@angular/material/card'

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        AboutComponent,
        PostsComponent,
        ContactComponent,
        PostTileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
