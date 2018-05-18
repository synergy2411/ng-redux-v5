import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { CompanyService } from '../services/company.service';
import * as companyActions from '../actions/company.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyEffects{
    constructor(private action$: Actions, 
                private companyService : CompanyService ){}

    @Effect() loadingCompanies = 
        this.action$.ofType(companyActions.LOAD_COMPANY)
            .switchMap(()=>this.companyService.getCompanies())
            .map(company=>{
                console.log("Company Effects : ", company);
                return (new companyActions.LoadCompanySuccessAction(company));
            })
}