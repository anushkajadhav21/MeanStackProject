import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddemployeeComponent {

  employees: any = [];

  newemployee = {
    firstname: '',
    lastname: ''
  }

  
  constructor(private http: HttpClient,  private router: Router
    ) {
   
  }

  createEmployee(){
    //this.http.post('http://localhost:3000/employees',{firstname:"Khushi",lastname:"jadhav"}).subscribe({
  
      this.http.post('http://localhost:3000/employees',this.newemployee).subscribe({
        next: (res: any) => {
          console.log(res);
          // this.newemployee:firstname = '';
          this.newemployee.firstname = '';
          this.newemployee.lastname = '';
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

    gotToAdd() {
      this.router.navigate(['/employee']);
    }
}

