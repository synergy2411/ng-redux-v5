import * as companyActions from '../actions/company.actions';


const INITIAL_STATE = [{name : "XYZ", contact : 8888}]
export function CompanyReducers(state=[], action : companyActions.LoadCompanySuccessAction){
   switch(action.type){
        case companyActions.LOAD_COMPANY_SUCCESS : {
            console.log("Case Match!");
            return [...state, action.payload];
        }
        default :{
            console.log("Default Match!");
            return state;
        }
   } 
}