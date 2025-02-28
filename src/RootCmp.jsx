import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmps/AppHeader'
import { UserMsg } from './cmps/UserMsg.jsx'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage.jsx'

import { NoteIndex } from './apps/note/pages/NoteIndex.jsx'

export function RootCmp() {
    return (
        <div className="main-layout">
            <AppHeader />
            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="note" element={<NoteIndex />} />
                    {/* <Route path="mail" element={<MailIndex />} /> */}
                </Routes>
            </main>

            <UserMsg />
        </div>
    )
}