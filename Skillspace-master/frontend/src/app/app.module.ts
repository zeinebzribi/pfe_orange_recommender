import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgForm, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";


import { NavigationComponent } from "./components/navigation/navigation.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NavComponent } from './components/nav/nav.component';
import { GridComponent } from './components/grid/grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridlistnoirComponent } from './components/grid/gridlistnoir/gridlistnoir.component';
import { GridblancComponent } from './components/grid/gridblanc/gridblanc.component';
import { GridgrisComponent } from './components/grid/gridgris/gridgris.component';
import { ApprenantComponent } from './components/profils/apprenant/apprenant.component';
import { FormateurComponent } from './components/profils/formateur/formateur.component';
import { CoursApprenantComponent } from './components/cours-apprenant/cours-apprenant.component';
import { NotifApprenantComponent } from './components/notif-apprenant/notif-apprenant.component';
import { PanierComponent } from './components/panier/panier.component';
import { ModifierComponent } from './components/modifier/modifier.component';
import { ModifierinfoComponent } from './components/modifierinfo/modifierinfo.component';
import { ChangpasswordComponent } from './components/changpassword/changpassword.component';
import { FormationComponent } from './components/formation/formation.component';
import { ChatComponent } from './components/chat/chat.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { VideoplaylisteComponent } from './components/videoplayliste/videoplayliste.component';

import { NgxPaginationModule } from 'ngx-pagination';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent,
    CreatePostComponent,
    CarouselComponent,
    NavComponent,
    GridComponent,
    FooterComponent,
    GridlistnoirComponent,
    GridblancComponent,
    GridgrisComponent,
    ApprenantComponent,
    FormateurComponent,
    CoursApprenantComponent,
    NotifApprenantComponent,
    PanierComponent,
    ModifierComponent,
    ModifierinfoComponent,
    ChangpasswordComponent,
    FormationComponent,
    ChatComponent,
    PaiementComponent,
    VideoplaylisteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatGridListModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    
    NgxPaginationModule

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
