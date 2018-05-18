import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from './model/app-state';
import * as companyActions from './actions/company.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  companies$ : Observable<any>;
  data : any;

  constructor(private store : Store<any>){
    this.companies$ = this.store.select(state=>state.companies);
    console.log(this.companies$);
    this.companies$.subscribe(data=>{
      this.data = data;
      console.log(data)});
    // this.company$.subscribe(data=>{
    //   this.data=data;
    //   console.log(data);
    // });
  }
  ngOnInit(){
    this.loadingCompany();
    //this.company$.subscribe(data=>this.data=data);
  }
  loadingCompany(){
    this.store.dispatch(new companyActions.LoadCompanyAction());
   
  }
}
