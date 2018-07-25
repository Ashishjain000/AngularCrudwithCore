import { Component,OnInit } from '@angular/core';
import { NgForm,FormBuilder,FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { Router,CanActivate,ActivatedRoute } from '@angular/router';
import {userService} from '../../services/user.service';

@Component({
    selector:'AddUser',
    templateUrl:'./addUser.component.html'
})

export class AddUserComponent implements OnInit{
    userform:FormGroup;
    userid: number;  
    errorMessage: any;  

    constructor(private _fb:FormBuilder,private _userservice:userService,private _router: Router,private _activeroute:ActivatedRoute){
       debugger;
        if(this._activeroute.snapshot.params["id"]){
            this.userid=this._activeroute.snapshot.params["id"];
        }
        this.userform=this._fb.group({
            userid:0,
            firstName:['',[Validators.required]],
            lastName:['',[Validators.required]]
        });
    }

    ngOnInit(){
        debugger;
        if(this.userid>0){
            this._userservice.GetByUserMaster(this.userid).subscribe(result=>this.userform.setValue(result),
            error=>this.errorMessage=error)
        }
        this.userform
    };

    saveuser(){
        debugger;
        if(!this.userform.valid){
            return;
        }
        if(this.userid==0){
            this._userservice.SaveUserMaster(this.userform.value).subscribe((data)=>{
                this._router.navigate(['/usermaster']);
            },error=>this.errorMessage =error)
        }
        else{
            this._userservice.UpdateUserMaster(this.userform.value).subscribe((data)=>{
                this._router.navigate(['/usermaster']);
            },error=>this.errorMessage =error)
        }
    }

    cancel(){
        this._router.navigate(['/usermaster']);
    }

    get firstName() { return this.userform.get('firstName'); }
    get lastName() { return this.userform.get('lastName'); }

}