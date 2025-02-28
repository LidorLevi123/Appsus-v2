import React from 'react'
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage.jsx'

import { AppHeader } from './cmps/AppHeader'
import { UserMsg } from './cmps/UserMsg.jsx'

export function RootCmp() {
    return (
        <div className="main-layout">
            <AppHeader />
            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    {/* <Route path="mail" element={<MailIndex />} /> */}
                    {/* <Route path="note" element={<NoteIndex />} /> */}
                </Routes>
            </main>

            <UserMsg />
        </div>
    )
}