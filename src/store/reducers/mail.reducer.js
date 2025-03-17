export const SET_MAILS = 'SET_MAILS'
export const SET_MAIL = 'SET_MAIL'
export const REMOVE_MAIL = 'REMOVE_MAIL'
export const ADD_MAIL = 'ADD_MAIL'
export const UPDATE_MAIL = 'UPDATE_MAIL'
export const ADD_MAIL_MSG = 'ADD_MAIL_MSG'

const initialState = {
    mails: [],
}

export function mailReducer(state = initialState, action) {
    var newState = state
    var mails
    switch (action.type) {
        case SET_MAILS:
            newState = { ...state, mails: action.mails }
            break
        default:
    }
    return newState
}

// export function mailReducer2(state = initialState, action) {
//     var newState = state
//     var notes
//     switch (action.type) {
//         case SET_NOTES:
//             newState = { ...state, notes: action.notes }
//             break
//         case SET_NOTE:
//             newState = { ...state, note: action.note }
//             break
//         case REMOVE_NOTE:
//             const lastRemovedNote = state.notes.find(note => note._id === action.noteId)
//             notes = state.notes.filter(note => note._id !== action.noteId)
//             newState = { ...state, notes, lastRemovedNote }
//             break
//         case ADD_NOTE:
//             newState = { ...state, notes: [...state.notes, action.note] }
//             break
//         case UPDATE_NOTE:
//             notes = state.notes.map(note => (note._id === action.note._id) ? action.note : note)
//             newState = { ...state, notes }
//             break
//         case ADD_NOTE_MSG:
//             newState = { ...state, note: { ...state.note, msgs: [...state.note.msgs || [], action.msg] } }
//             break
//         default:
//     }
//     return newState
// }

// unitTestReducer()

// function unitTestReducer() {
//     var state = initialState
//     const note1 = { _id: 'b101', vendor: 'Note ' + parseInt(Math.random() * 10), msgs: [] }
//     const note2 = { _id: 'b102', vendor: 'Note ' + parseInt(Math.random() * 10), msgs: [] }

//     state = noteReducer(state, { type: SET_NOTES, notes: [note1] })
//     console.log('After SET_NOTES:', state)

//     state = noteReducer(state, { type: ADD_NOTE, note: note2 })
//     console.log('After ADD_NOTE:', state)

//     state = noteReducer(state, { type: UPDATE_NOTE, note: { ...note2, vendor: 'Good' } })
//     console.log('After UPDATE_NOTE:', state)

//     state = noteReducer(state, { type: REMOVE_NOTE, noteId: note2._id })
//     console.log('After REMOVE_NOTE:', state)

//     const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
//     state = noteReducer(state, { type: ADD_NOTE_MSG, noteId: note1._id, msg })
//     console.log('After ADD_NOTE_MSG:', state)

//     state = noteReducer(state, { type: REMOVE_NOTE, noteId: note1._id })
//     console.log('After REMOVE_NOTE:', state)
// }

