import EmailJson from '../Emails'
import _ from 'lodash';

const initialState = {
    users:EmailJson.users,
    mainEmails:EmailJson.emails,
    emails:EmailJson.emails,
  };
  
  export default function mailReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case "THREAD":
      let emails1 = state.mainEmails;
      let sortedEmails1 = emails1.sort((item1,item2)=>{
        return item2.ts - item1.ts;
      });
      let groupedEmails = _.groupBy(sortedEmails1,'thread_id');
      let tempArray = [];
      Object.keys(groupedEmails).map((key)=>{
        tempArray.push(groupedEmails[key]);
      })
      return {
        ...state,
        emails:tempArray
      };
      case "NONTHREAD":
        let emails2 = state.mainEmails;
        let sortedEmails = emails2.sort((item1,item2)=>{
          return item2.ts - item1.ts;
        });
        return {
          ...state,
          emails:sortedEmails
        };
      default:
        return state;
    }
  }
  