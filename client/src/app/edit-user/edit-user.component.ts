import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit{

  id : String = "";

  updateEmp ={
  "firstname":'',
  "lastname":''
  }

  constructor(private http: HttpClient,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.id=params['id']
    })
    
  }

  updateEmployee(){
    this.http.put('http://localhost:3000/employee/'+this.id,this.updateEmp).subscribe({
      next:(res:any) => {

      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
