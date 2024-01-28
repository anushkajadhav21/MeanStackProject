import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class employeeComponent implements OnInit{
  employee: any = [];
  isLoading = false;

  newEmployee = {
    firstname: '',
    lastname: ''
  }

  ngOnInit(): void {
    this.getEmployee();
  }
  //task = ['Study','Play','Sleep'];
  //quiz = [ { {'Ques'},{'opt a','opt b','opt c','opt d'},{'correct option'} } ];
  
  constructor(private http: HttpClient , private router: Router) {
  }

  getEmployee() {
    this.isLoading = true;
    this.http.get('http://localhost:3000/employee').subscribe({
      next: (res: any) => {
        console.log(res);
        this.employee = res.employee;
        //this.isLoading =false;
      },
      error: (err) => {
        console.log(err);
       // this.isLoading = false;
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

    this.http.post('http://localhost:3000/employees',this.newEmployee).subscribe({
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
  this.router.navigate(['/edit-user/'+id]);
  }

}
