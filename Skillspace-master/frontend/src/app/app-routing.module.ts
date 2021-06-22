import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ModifierComponent } from "./components/modifier/modifier.component";
import { ChangpasswordComponent } from "./components/changpassword/changpassword.component";
import { NotifApprenantComponent } from "./components/notif-apprenant/notif-apprenant.component";
import { PanierComponent } from "./components/panier/panier.component"
import { FormationComponent } from "./components/formation/formation.component";
import { PaiementComponent } from "./components/paiement/paiement.component";
import { ChatComponent } from "./components/chat/chat.component";
import { VideoplaylisteComponent } from "./components/videoplayliste/videoplayliste.component";
import { from } from "rxjs";





const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "modifier", component: ModifierComponent  },
  { path: "changerpassword", component :ChangpasswordComponent},
  { path: "notifapp" , component :NotifApprenantComponent},
  { path: "panier" , component :PanierComponent},
  { path: "formation" , component :FormationComponent},
  { path: "paiement" , component : PaiementComponent},
  { path: "chat" , component : ChatComponent},
  { path: "pred/:id" , component : VideoplaylisteComponent},
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
