import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
   sidemenuOpen: boolean;
   isAddingEntry: boolean;
   isDragging: boolean;

}

const UI_INITIAL_STATE: UIState = {
   sidemenuOpen: false,
   isAddingEntry: false,
   isDragging: false
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

   const startDragging = () => {
      dispatch({type: '[UI] - Start Dragging'});
   }
   const endDragging = () => {
      dispatch({type: '[UI] - End Dragging'});
   }
    

   return (
      <UIContext.Provider value={{
         ...state,
         openSideMenu,
         closeSideMenu,
         setIsAddingEntry,
         startDragging,
         endDragging
      }}>
         {children}
      </UIContext.Provider>
   )
}