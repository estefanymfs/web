import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: User ={
    
    name: '',
    lastName: '',
    dni:0,
    date: 0,
    phone:0,
    diretion:'',
    user:'',
    password:'',
  };

  constructor(private userService: UserService,
    private router:Router,
    private activateRouter: ActivatedRoute) { }

    ngOnInit() {
      const params = this.activateRouter.snapshot.params;
      if(params){
        this.userService.getUsers()
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
            // this.edit= true;
          }
        )
      }
    }

  btnClick=function(){
    this.router.navigate(['/login']);
  }

  submitUser(){
    this.userService.createUser(this.user)
      .subscribe(
        res => {console.log(res);
        this.router.navigate(['home']);
        },
        err => console.log(err)
      )
  }

}
