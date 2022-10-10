import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
   entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
   entries: [
      {
         _id: uuidv4(),
         description: 'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius itaque accusamus quidem. Nostrum maxime corporis, quia aliquam, magni veniam soluta incidunt quibusdam asperiores cupiditate, in hic accusantium culpa ipsam.',
         status: 'pending',
         createdAt: Date.now()
      },
      {
         _id: uuidv4(),
         description: 'In-Progress: In sit cupidatat tempor duis proident reprehenderit ad.',
         status: 'in-progress',
         createdAt: Date.now() - 1000000
      },
      {
         _id: uuidv4(),
         description: 'Completed: Commodo eiusmod voluptate commodo velit non esse velit exercitation laborum elit nostrud non.',
         status: 'finished',
         createdAt: Date.now() - 100000
      },

   ],
}


type Props = {
   children?: React.ReactNode
};

export const EntriesProvider: FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

   return (
      <EntriesContext.Provider value={{
         ...state,
      }}>
         {children}
      </EntriesContext.Provider>
   )
}