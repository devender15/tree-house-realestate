"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Loader2,
  X,
  User,
  Send,
  Copy,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2,
  Check,
  Bot, // <-- Use Bot icon instead of TreePine
} from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
  id: string
}

const realEstateQuickReplies = [
  'Tell me more about Tree House Real Estate',
  "Show me all properties in Gurgaon",
  "Show me all residential properties in Gurgaon",
  "How can I contact Tree House Real Estate?",
]

export default function TreeHouseRealEstateChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && !hasGreeted && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            role: "assistant",
            content: `Welcome to Tree House Real Estate! 🏡 I'm your dedicated real estate assistant. Whether you're buying, selling, or just exploring the market, I'm here to help you find your perfect home. How can I assist you today?`,
            timestamp: new Date(),
            id: Date.now().toString(),
          },
        ])
        setHasGreeted(true)
      }, 500)
    }
    if (!isOpen && hasGreeted) {
      setHasGreeted(false)
    }
  }, [isOpen, hasGreeted])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
      id: Date.now().toString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setShowQuickReplies(false)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details || data.error || `HTTP error! status: ${response.status}`)
      }

      if (data.error) {
        throw new Error(data.details || data.error)
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
        id: (Date.now() + 1).toString(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        role: "assistant",
        content:
          error instanceof Error
            ? error.message
            : "I apologize for the technical difficulty. Please try again or contact our office directly at (555) 123-4567.",
        timestamp: new Date(),
        id: (Date.now() + 1).toString(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickReply = (reply: string) => {
    setInput(reply)
    setShowQuickReplies(false)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const copyMessage = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedMessageId(messageId)
      setTimeout(() => setCopiedMessageId(null), 2000)
    } catch (err) {
      console.error("Failed to copy message:", err)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <motion.button
          className="relative p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            boxShadow: isOpen ? "0 0 0 4px rgba(251, 146, 60, 0.3)" : "0 20px 40px -12px rgba(251, 146, 60, 0.4)",
          }}
          aria-label="Open Tree House Real Estate chat"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
          />

          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 0.3 },
              scale: { repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" },
            }}
          >
            {isOpen ? <X className="w-7 h-7 relative z-10" /> : <Bot className="w-7 h-7 relative z-10" />}
          </motion.div>

          {/* Notification badge */}
          {!isOpen && messages.length > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {messages.filter((m) => m.role === "assistant").length}
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 60 : "auto",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-0 w-full max-w-md sm:max-w-lg md:max-w-xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-200/50 flex flex-col overflow-hidden"
            style={{
              height: isMinimized ? "60px" : "70vh",
              maxHeight: isMinimized ? "60px" : "700px",
              boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(255,255,255,0.5)",
            }}
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
              </div>

              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Bot className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <span className="text-lg font-bold text-white tracking-wide">Tree House Real Estate</span>
                  <div className="flex items-center gap-1 text-white/90 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 relative z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 transition-colors"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 transition-colors"
                  onClick={() => setIsMinimized(!isMinimized)}
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-orange-50/30 to-white/80">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-end gap-3 max-w-[85%] group ${
                          message.role === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-gray-600 to-gray-700"
                              : "bg-gradient-to-br from-orange-500 to-orange-600"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </motion.div>

                        <div className="flex flex-col gap-1">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-2xl px-4 py-3 text-sm shadow-lg relative ${
                              message.role === "user"
                                ? "bg-gradient-to-br from-gray-600 to-gray-700 text-white"
                                : message.content.toLowerCase().includes("error") ||
                                    message.content.toLowerCase().includes("difficulty")
                                  ? "bg-gradient-to-br from-red-100 to-red-50 text-red-700 border border-red-200"
                                  : "bg-gradient-to-br from-white to-orange-50/50 text-gray-800 border border-orange-200/50"
                            }`}
                            style={{
                              borderTopLeftRadius: message.role === "user" ? 16 : 4,
                              borderTopRightRadius: message.role === "user" ? 4 : 16,
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                            }}
                          >
                            {message.content}

                            {/* Copy button for assistant messages */}
                            {message.role === "assistant" && (
                              <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="w-8 h-8 bg-white shadow-md hover:bg-orange-50 border border-orange-200"
                                  onClick={() => copyMessage(message.content, message.id)}
                                >
                                  {copiedMessageId === message.id ? (
                                    <Check className="w-4 h-4 text-green-600" />
                                  ) : (
                                    <Copy className="w-4 h-4 text-orange-600" />
                                  )}
                                </Button>
                              </div>
                            )}
                          </motion.div>

                          <span
                            className={`text-xs text-gray-500 ${message.role === "user" ? "text-right" : "text-left"}`}
                          >
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Animated "Generating reply..." while loading */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-br from-white to-orange-50/50 border border-orange-200/50 rounded-2xl px-4 py-3 flex items-center gap-2">
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <span
                                key={i}
                                className="w-2 h-2 bg-orange-400 rounded-full inline-block animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-orange-700 font-medium animate-pulse">Generating reply…</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {showQuickReplies && messages.length <= 1 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                      {realEstateQuickReplies.map((reply, index) => (
                        <motion.button
                          key={reply}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-2 text-sm bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 text-orange-700 rounded-full border border-orange-200 transition-all duration-200"
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Input */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="p-4 border-t border-orange-200/50 bg-white/90 backdrop-blur-sm"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-3 items-end">
                    <div className="flex-1 relative">
                      <Input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about properties, pricing, or schedule a viewing..."
                        className="pr-12 border-orange-300 focus:border-orange-500 focus:ring-orange-500/20 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-200"
                        disabled={isLoading}
                        aria-label="Type your real estate question"
                      />
                      {input && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-400 hover:text-gray-600"
                          onClick={() => setInput("")}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg text-white rounded-2xl px-4 py-2 font-semibold transition-all duration-200 disabled:opacity-50"
                        disabled={isLoading || !input.trim()}
                        aria-label="Send message"
                      >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      </Button>
                    </motion.div>
                  </div>
                </motion.form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
