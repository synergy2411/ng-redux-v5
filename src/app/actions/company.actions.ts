import { Company } from "../model/company";

export const LOAD_COMPANY = "LOAD_COMPANY";
export const LOAD_COMPANY_SUCCESS = "LOAD_COMPANY_SUCCESS";

export class LoadCompanyAction{
    readonly type = LOAD_COMPANY;
    constructor(){
        console.log("LoadCompanyAction Called!");
    }
}

export class LoadCompanySuccessAction{
    readonly type = LOAD_COMPANY_SUCCESS;
    constructor(public payload : Company){
        console.log("LoadCompanySuccessAction Called!");
    }
}

export type Actions = LoadCompanyAction | LoadCompanySuccessAction;