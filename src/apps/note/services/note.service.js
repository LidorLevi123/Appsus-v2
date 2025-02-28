
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import { loadFromStorage, saveToStorage } from '../../../services/util.service'

const STORAGE_KEY = 'note'

export const noteService = {
    query,
    getById,
    save,
    remove,
}

_createNotes()

async function query(filterBy = { txt: '' }) {
    var notes = await storageService.query(STORAGE_KEY)
    // const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    // if (txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     notes = notes.filter(note => regex.test(note.vendor) || regex.test(note.description))
    // }
    // if (minSpeed) {
    //     notes = notes.filter(note => note.speed >= minSpeed)
    // }
    // if (sortField === 'vendor' || sortField === 'owner') {
    //     notes.sort((note1, note2) =>
    //         note1[sortField].localeCompare(note2[sortField]) * +sortDir)
    // }
    // if (sortField === 'price' || sortField === 'speed') {
    //     notes.sort((note1, note2) =>
    //         (note1[sortField] - note2[sortField]) * +sortDir)
    // }

    return notes
}

async function getById(noteId) {
    return await storageService.get(STORAGE_KEY, noteId)
}

async function remove(noteId) {
    await storageService.remove(STORAGE_KEY, noteId)
}

async function save(note) {
    var savedNote
    if (note._id) {
        const noteToSave = {
            _id: note._id,
            price: note.price,
            speed: note.speed,
        }
        savedNote = await storageService.put(STORAGE_KEY, noteToSave)
    } else {
        const noteToSave = {
            vendor: note.vendor,
            price: note.price,
            speed: note.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedNote = await storageService.post(STORAGE_KEY, noteToSave)
    }
    return savedNote
}

function _createNotes() {
    let notes = loadFromStorage(STORAGE_KEY)
    if (notes && notes.length) return

    notes = [
        {
            id: 'n101',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: {
                backgroundColor: '#00d'
            },
            info: {
                txt: 'Fullstack Me Baby!'
            }
        },
        {
            id: 'n102',
            createdAt: 1112223,
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'http://some-img/me',
                title: 'Bobi and Me'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: 'n103',
            createdAt: 1112224,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: 'Coding power', doneAt: 187111111 }
                ]
            }
        }
    ]

    saveToStorage(STORAGE_KEY, notes)
}