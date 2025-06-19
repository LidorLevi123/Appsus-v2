import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/AppHeader'
import { UserMsg } from './cmps/UserMsg.jsx'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage.jsx'

import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'
import { MailIndex } from './apps/mail/pages/MailIndex.jsx'

export function RootCmp() {
    return (
        <div className="app-layout">
            {/* <AppHeader /> */}
            <main>
                <Routes>
                    {/* <Route path="" element={<HomePage />} /> */}
                    <Route path="" element={<MailIndex />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="note" element={<NoteIndex />} />
                    <Route path="mail" element={<MailIndex />} />
                    <Route path="mail/:folder" element={<MailIndex />} />
                </Routes>
            </main>

            <UserMsg />
        </div>
    )
}