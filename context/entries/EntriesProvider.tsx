import { FC, useEffect, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { entriesApi } from '../../apis';

export interface EntriesState {
   entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {   entries: [], }


type Props = {
   children?: React.ReactNode
};

export const EntriesProvider: FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

   const addNewEntry = async( description: string) => {

      const { data } = await entriesApi.post<Entry>('/entries', { description } );
      dispatch({ type: '[Entry] - Add-Entry', payload: data})

   }


   const updateEntry = ( entry: Entry) => {
      dispatch({ type: '[Entry] - Updated-Entry', payload: entry });
   }

   const refreshEntries = async () => {
      const {data } = await entriesApi.get<Entry[]>('/entries');
      dispatch({ type: '[Entry] - Refresh-Data', payload: data})

   }

   useEffect(() => {
     
      refreshEntries();

   }, [])
   

   return (
      <EntriesContext.Provider value={{
         ...state,

         //Methods
         addNewEntry,
         updateEntry
      }}>
         {children}
      </EntriesContext.Provider>
   )
}