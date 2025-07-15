
import { storageService } from '../../../services/async-storage.service'
import { makeId, loadFromStorage, saveToStorage } from '../../../services/util.service'

const STORAGE_KEY = 'mail'

export const mailService = {
    query,
    getById,
    save,
    remove,
}

_createMails()

async function query(filterBy = { txt: '' }) {
    let mails = await storageService.query(STORAGE_KEY)
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

    return mails
}

async function getById(mailId) {
    return await storageService.get(STORAGE_KEY, mailId)
}

async function remove(mailId) {
    await storageService.remove(STORAGE_KEY, mailId)
}

async function save(mailToSave) {
    var savedMail
    if (note._id) {
        savedMail = await storageService.put(STORAGE_KEY, mailToSave)
    } else {
        savedMail = await storageService.post(STORAGE_KEY, mailToSave)
    }
    return savedMail
}

function _createMails() {
    let mails = loadFromStorage(STORAGE_KEY)
    if (mails && mails.length) return

    mails = [
        {
            id: makeId(),
            createdAt: new Date(),
            subject: 'Calender for next week',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: null,
            removedAt: null,
            from: 'DoreZ@gmail.com',
            SenderName: 'Dore Z',
            to: 'reutEdry@gmail.com'
        },
        {
            id: makeId(),
            createdAt: new Date(),
            subject: 'New job offers',
            body: 'new Full Stack job offers that you need to look at, new Full Stack job offers that you need to look at, new Full Stack job offers that you need to look at, new Full Stack job offers that you need to look at',
            isRead: false,
            sentAt: null,
            removedAt: null,
            from: 'Linkdin@gmail.com',
            SenderName: 'Linkdin',

            to: 'reutEdry@gmail.com'
        },
        {
            id: makeId(),
            createdAt: new Date(),
            subject: 'Monthly bill',
            body: 'Yout monthly bill for March',
            isRead: false,
            sentAt: null,
            removedAt: null,
            from: 'Moovit@gmail.com',
            SenderName: 'Moovit',
            to: 'reutEdry@gmail.com'
        },
    ]


    saveToStorage(STORAGE_KEY, mails)
}
