import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { RegisterComponent } from "./register/register.component";
import { UpdateUserComponent } from "./update-user/update-user.component";

const routes: Routes = [
  { path: "", redirectTo: "details", pathMatch: "full" },
  { path: "details", component: DetailsComponent },
  { path: "register", component: RegisterComponent },
  { path: "updateUser", component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
