import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {  employeeComponent } from "./Employee/employee.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AddemployeeComponent } from "./add-employee/add-employee.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditUserComponent } from "./edit-user/edit-user.component";




@NgModule({
    declarations: [
        AppComponent,
        employeeComponent,
        AddemployeeComponent,
        RegisterComponent,
        LoginComponent,
        DashboardComponent,
        EditUserComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}