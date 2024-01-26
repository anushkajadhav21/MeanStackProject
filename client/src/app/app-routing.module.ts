import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddemployeeComponent } from './add-employee/add-employee.component';
import { employeeComponent } from './Employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';


export const routes: Routes = [

    {path: '', redirectTo: 'user', pathMatch: "full"},
    {path: 'user', component:employeeComponent},
    {path: 'add-user', component: AddemployeeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'edit-user/:id', component: EditUserComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }