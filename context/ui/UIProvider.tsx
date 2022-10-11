import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
   sidemenuOpen: boolean;
   isAddingEntry: boolean;

}

const UI_INITIAL_STATE: UIState = {
   sidemenuOpen: false,
   isAddingEntry: false
}


type Props = {
   children?: React.ReactNode
};

export const UIProvider: FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

   const closeSideMenu     = () => (dispatch({ type: '[UI] - CloseSidebar' }))
   const openSideMenu      = () => (dispatch({ type: '[UI] - OpenSidebar' }))
   const setIsAddingEntry  = ( isAdding: boolean ) => {
      dispatch({ type:'[UI] - setIsAddingEntry', payload: isAdding})
   }
    

   return (
      <UIContext.Provider value={{
         ...state,
         openSideMenu,
         closeSideMenu,
         setIsAddingEntry
      }}>
         {children}
      </UIContext.Provider>
   )
}