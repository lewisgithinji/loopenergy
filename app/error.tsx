'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-navy-900 text-white px-4">
            <div className="text-center max-w-xl mx-auto">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 mb-8">
                    <RefreshCw className="h-10 w-10 text-red-500 animate-spin-slow" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Something went wrong</h1>
                <p className="text-xl text-gray-300 mb-12">
                    An unexpected error occurred. We&apos;ve been notified and are working on a fix.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-loop-orange-600 hover:bg-loop-orange-700 w-full sm:w-auto" onClick={() => reset()}>
                        <RefreshCw className="mr-2 h-5 w-5" />
                        Try Again
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 w-full sm:w-auto" asChild>
                        <Link href="/">
                            <Home className="mr-2 h-5 w-5" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
