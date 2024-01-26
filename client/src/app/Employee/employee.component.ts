import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class employeeComponent {
  employee: any = [];

  newEmployee = {
    firstname: '',
    lastname: ''
  }
  //task = ['Study','Play','Sleep'];
  //quiz = [ { {'Ques'},{'opt a','opt b','opt c','opt d'},{'correct option'} } ];
  
  constructor(private http: HttpClient , private router: Router) {
  }

  getEmployee() {
    this.http.get('http://localhost:3000/employee').subscribe({
      next: (res: any) => {
        console.log(res);
        this.employee = res.employee;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  goToAdd() {
    this.router.navigate(['/add-user']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

 createEmployee(){
  //this.http.post('http://localhost:3000/users',{firstname:"Khushi",lastname:"jadhav"}).subscribe({

    this.http.post('http://localhost:3000/employee',this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        // this.newUser:firstname = '';
        this.getEmployee();

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteEmployee(id: any){
    this.http.delete('http://localhost:3000/employee/'+id).subscribe({
      next: (res: any) => {
        this.employee = res.employee;
        this.getEmployee();
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  goToUpdate(id :any){
  this.router.navigate(['edit-user/'+id]);
  }

}
