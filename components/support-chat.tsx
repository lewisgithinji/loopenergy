'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, X, Send, Fuel, Wrench, Building, HelpCircle, MapPin } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const quickActions = [
  { label: 'Buy Fuel', icon: Fuel, action: 'fuel' },
  { label: 'Hire Equipment', icon: Wrench, action: 'equipment' },
  { label: 'Talk to Projects', icon: Building, action: 'projects' },
  { label: 'HSE Questions', icon: HelpCircle, action: 'hse' },
  { label: 'Contact & Location', icon: MapPin, action: 'contact' }
]

const scriptedResponses = {
  fuel: "I can help you with fuel orders! Our petroleum products include Diesel (AGO), Petrol (PMS), HFO, LPG, Jet Fuel, and Bitumen. What type and quantity are you looking for?",
  equipment: "We have a modern fleet available for hire including excavators, dozers, graders, cranes, and more. What type of equipment do you need and for how long?",
  projects: "Our infrastructure team handles civil engineering, building construction, power infrastructure up to 400kV, and project management. What kind of project are you planning?",
  hse: "Safety is our top priority. We maintain comprehensive HSE protocols, zero-accident workplace culture, and are committed to environmental sustainability. What specific HSE information do you need?",
  contact: "You can reach us at: Kindaruma Courts, Kindaruma Road, Nairobi. Phone: +254 722 517923 / +254 731 624225. Email: loopenergy01@gmail.com. Would you like directions or office hours?"
}

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleQuickAction = (action: string) => {
    const actionLabel = quickActions.find(qa => qa.action === action)?.label || action
    addMessage(actionLabel, true)
    
    setTimeout(() => {
      const response = scriptedResponses[action as keyof typeof scriptedResponses] || 
        "Thank you for your message. Our team will get back to you shortly. You can also call us at +254 722 517923 for immediate assistance."
      addMessage(response, false)
    }, 500)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue('')
    addMessage(userMessage, true)
    
    setTimeout(() => {
      const fallbackResponse = "Thank you for your message! For immediate assistance, please call us at +254 722 517923 or email loopenergy01@gmail.com. Our team is available Monday-Friday, 8AM-6PM EAT."
      addMessage(fallbackResponse, false)
    }, 1000)
  }

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg"
          aria-label="Open chat support"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl">
            <CardHeader className="bg-teal-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Loop Energy Support</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-teal-100 text-sm">
                How can we help you today?
              </p>
            </CardHeader>

            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 text-sm">
                    <p>Welcome! Choose a quick action below or type your question.</p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isUser
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              {messages.length === 0 && (
                <div className="p-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action.action}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAction(action.action)}
                        className="flex items-center space-x-1 text-xs"
                      >
                        <action.icon className="h-3 w-3" />
                        <span>{action.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-teal-600 hover:bg-teal-700"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  For urgent matters, call +254 722 517923
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}