'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-navy-900 text-white px-4">
            <div className="text-center max-w-xl mx-auto">
                <h1 className="text-9xl font-bold text-loop-orange-500 mb-4 opacity-50">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
                <p className="text-xl text-gray-300 mb-12">
                    The page you are looking for might have been moved, deleted, or never existed.
                    Let&apos;s get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700 w-full sm:w-auto" asChild>
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 w-full sm:w-auto" onClick={() => window.history.back()}>
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    )
}
