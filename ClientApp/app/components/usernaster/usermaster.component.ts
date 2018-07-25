import { Component } from '@angular/core';
import {userService} from '../../services/user.service';
import {userModel} from '../../model/user';

@Component({
    selector:'user',
    templateUrl:'./usermaster.component.html'
})

export class UserMasterComponent{
    user :userModel[];
    constructor(private userservice:userService){

    }
    ngOnInit(){
        this.userservice.GetUserMaster().subscribe(result=>{
            this.user =result as userModel[]
        },
        error=>console.error(error));
    }
}