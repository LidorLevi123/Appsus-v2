import { store } from '../store'
import { mailService } from "../../apps/mail/services/mail.service"
import { SET_MAILS } from '../reducers/mail.reducer'

export async function loadMails(filterBy) {
    try {
        const mails = await mailService.query(filterBy)
        store.dispatch({ type: SET_MAILS, mails })
    } catch (err) {
        console.log('Cannot load mails', err)
        throw err
    }
}