import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
   sidemenuOpen: boolean;

}

const UI_INITIAL_STATE: UIState = {
   sidemenuOpen: false,
}


type Props = {
   children?: React.ReactNode
};

export const UIProvider: FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

   const closeSideMenu   = () => (dispatch({ type: '[UI] - CloseSidebar' }))
   const openSideMenu    = () => (dispatch({ type: '[UI] - OpenSidebar' }))

   return (
      <UIContext.Provider value={{
         ...state,
         openSideMenu,
         closeSideMenu
      }}>
         {children}
      </UIContext.Provider>
   )
}