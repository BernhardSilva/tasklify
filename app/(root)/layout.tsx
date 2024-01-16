import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout