export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV'

const initialState = {
  isLoading: false,
  isSidenavExpanded: false
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case TOGGLE_SIDENAV:
      return { ...state, isSidenavExpanded: action['isOpen'] === false ? action['isOpen'] : !state.isSidenavExpanded }
    default: return state
  }
}
