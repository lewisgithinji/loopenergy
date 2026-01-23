'use client'

import { useState } from 'react'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

export default function NewsletterForm() {
    const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmissionState('submitting')
        setMessage('')

        try {
            const formData = new FormData(e.currentTarget)
            formData.append('access_key', 'b5335568-9214-4ee4-8587-0e5544ebf933')
            formData.append('subject', 'New Newsletter Subscription - Loop Energy')
            formData.append('from_name', 'Loop Energy Newsletter')

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData,
            })

            const result = await response.json()

            if (!result.success) {
                throw new Error(result.message || 'Failed to subscribe')
            }

            setSubmissionState('success')
            setMessage('Thank you for subscribing!')
            e.currentTarget.reset()

            setTimeout(() => setSubmissionState('idle'), 5000)
        } catch (error) {
            setSubmissionState('error')
            setMessage(error instanceof Error ? error.message : 'An error occurred')
        }
    }

    return (
        <div className="space-y-4">
            <form onSubmit={onSubmit} className="space-y-3">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="flex space-x-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        required
                    />
                    <button
                        type="submit"
                        disabled={submissionState === 'submitting'}
                        className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 h-[38px] flex items-center justify-center min-w-[100px]"
                    >
                        {submissionState === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
                    </button>
                </div>
            </form>

            {submissionState === 'success' && (
                <p className="text-xs text-green-400 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    {message}
                </p>
            )}

            {submissionState === 'error' && (
                <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {message}
                </p>
            )}

            <p className="text-[10px] text-gray-500 italic">
                Stay updated on our global trading and logistics operations.
            </p>
        </div>
    )
}
