import { Injectable,Inject } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Subject } from 'rxjs';
import {Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw'; 

@Injectable()
export class userService{

    url:string;
   

    constructor(private http:Http,@Inject('BASE_URL') baseUrl: string){
        this.url=baseUrl;
    }

    GetUserMaster(){
      return this.http.get(this.url + 'api/Sample/GetMaster')
        .map((response:Response)=>response.json())
        .catch(this.errorHandler);
    }

    GetByUserMaster(id:number){
        return this.http.get(this.url + 'api/Sample/GetByMaster?userId='+id)
          .map((response:Response)=>response.json())
          .catch(this.errorHandler);
      }

    SaveUserMaster(user:any){
        return this.http.post(this.url + 'api/Sample/SaveUser',user)
        .map((response:Response)=>response.json())
        .catch(this.errorHandler);
    }

    UpdateUserMaster(user:any){
        return this.http.post(this.url + 'api/Sample/UpdateUser',user)
        .map((response:Response)=>response.json())
        .catch(this.errorHandler);
    }

    errorHandler(error: Response) {  
        console.log(error);  
        return Observable.throw(error);  
    }

}
