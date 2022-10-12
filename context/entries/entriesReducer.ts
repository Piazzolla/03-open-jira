import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType =
   | { type: '[Entry] - Add-Entry', payload: Entry }
   | { type: '[Entry] - Updated-Entry', payload: Entry }
   | { type: '[Entry] - Refresh-Data', payload: Entry[] }


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

   switch (action.type) {
       case '[Entry] - Add-Entry':
          return {
               ...state,
               entries: [ ...state.entries, action.payload ]
           }
       case '[Entry] - Updated-Entry':
          return {
               ...state,
               entries: state.entries.map( entry => {
                  if(entry._id === action.payload._id)
                  {
                     entry.status = action.payload.status;
                     entry.description = action.payload.description;
                     /* puedo hacerlo asi tambien pero si pongo cada le elemento 
                     que cambia es mas controlado                  
                     return action.payload; */
                  }
                  return entry;
               })
           }

           case '[Entry] - Refresh-Data':
            return {
               ...state,
               entries: [...action.payload]
            }

        default:
           break;
   }

   return state;
}