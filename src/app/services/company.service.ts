import { Injectable } from "@angular/core";
import { Company } from '../model/company';

@Injectable()
export class CompanyService{
    companyList : Company[] = [{
        name : "Apple",
        contact : 9876544322
    },{
        name : "Microsoft",
        contact : 123456789
    }]

    getCompanies(){
        return this.companyList;
    }
}