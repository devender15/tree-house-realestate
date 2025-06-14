"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, X, User, Send, Copy, Minimize2, Maximize2, Check, Bot } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
  id: string
}

const realEstateQuickReplies = [
  "Tell me more about Tree House Real Estate",
  "Show me all properties in Gurgaon",
  "Show me residential properties in Gurgaon",
  "How can I contact Tree House Real Estate?",
]

export default function TreeHouseRealEstateChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
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
            : "I'm sorry, I don't have that information right now. For further assistance, please contact our team at **+91 9811098193** or **Treehousefarmland@gmail.com**",
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
    <div
      className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Floating Chat Button */}
      <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <motion.button
          className="relative p-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            boxShadow: isOpen ? "0 0 0 4px rgba(251, 146, 60, 0.3)" : "0 20px 40px -12px rgba(251, 146, 60, 0.4)",
          }}
          aria-label="Open Tree House Real Estate chat"
          style={{ touchAction: "manipulation", minHeight: "56px", minWidth: "56px" }}
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
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
            ) : (
              <Bot className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
            )}
          </motion.div>

          {/* Notification badge */}
          {!isOpen && messages.length > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
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
            className="fixed bottom-16 sm:bottom-20 right-0 sm:right-4 w-full max-w-[100vw] sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/95 backdrop-blur-xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-orange-200/50 flex flex-col overflow-hidden px-1 sm:px-0"
            style={{
              height: isMinimized ? "60px" : "min(85vh, 600px)",
              maxHeight: isMinimized ? "60px" : "min(85vh, 600px)",
              boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(255,255,255,0.5)",
            }}
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden flex-nowrap"
              style={{ minHeight: 56 }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
              </div>

              <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>
                <div>
                  <span className="text-base sm:text-lg font-bold text-white tracking-wide whitespace-nowrap">
                    Tree House Real Estate
                  </span>
                  <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm whitespace-nowrap">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 relative z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 transition-colors h-8 w-8 sm:h-9 sm:w-9"
                  onClick={() => setIsMinimized(!isMinimized)}
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? (
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 transition-colors h-8 w-8 sm:h-9 sm:w-9"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </motion.div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div
                  className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-br from-orange-50/30 to-white/80"
                  style={{ overscrollBehavior: "contain" }}
                >
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
                        className={`flex items-end gap-1.5 sm:gap-3 max-w-[90%] sm:max-w-[85%] group ${
                          message.role === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.role === "user"
                              ? "bg-gradient-to-br from-gray-600 to-gray-700"
                              : "bg-gradient-to-br from-orange-500 to-orange-600"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          ) : (
                            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          )}
                        </motion.div>

                        <div className="flex flex-col gap-1">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-sm leading-relaxed shadow-lg relative ${
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
                            {message.role === "assistant" ? (
                              <div
                                className="prose prose-sm max-w-none 
  prose-headings:font-semibold 
  prose-headings:text-orange-700 
  prose-headings:my-1 sm:prose-headings:my-2
  prose-h1:text-sm sm:prose-h1:text-lg
  prose-h2:text-xs sm:prose-h2:text-base
  prose-p:text-gray-700 prose-p:text-sm prose-p:leading-relaxed
  prose-ul:text-gray-700 prose-ul:text-sm
  prose-ol:text-gray-700 prose-ol:text-sm
  prose-li:my-0.5
  prose-strong:text-orange-600
  prose-strong:font-semibold
  prose-em:text-gray-600
  [&>p]:my-1 sm:[&>p]:my-2
  [&>ul]:my-1 sm:[&>ul]:my-2
  [&>ol]:my-1 sm:[&>ol]:my-2
  [&>h1]:mb-1.5 sm:[&>h1]:mb-3
  [&>h2]:mb-1 sm:[&>h2]:mb-2
  [&>h3]:mb-0.5 sm:[&>h3]:mb-1.5
  [&>ol>li]:ml-2 sm:[&>ol>li]:ml-3
  [&>ul>li]:ml-2 sm:[&>ul>li]:ml-3
  [&>ol>li]:marker:text-orange-500
  [&>ul>li]:marker:text-orange-500
  [&>ol>li]:marker:font-semibold
  [&>ul>li]:marker:font-semibold
"
                              >
                                <ReactMarkdown>{message.content}</ReactMarkdown>
                              </div>
                            ) : (
                              message.content
                            )}

                            {/* Copy button for assistant messages */}
                            {message.role === "assistant" && (
                              <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white shadow-md hover:bg-orange-50 border border-orange-200"
                                  onClick={() => copyMessage(message.content, message.id)}
                                >
                                  {copiedMessageId === message.id ? (
                                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-600" />
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

                  {/* Loading indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600">
                          <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="bg-gradient-to-br from-white to-orange-50/50 border border-orange-200/50 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2">
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <span
                                key={i}
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full inline-block animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {showQuickReplies && messages.length <= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-2 sm:px-4 pb-2"
                  >
                    <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-1.5 sm:gap-2">
                      {realEstateQuickReplies.map((reply, index) => (
                        <motion.button
                          key={reply}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-2.5 text-xs sm:text-sm bg-gradient-to-r from-orange-100 to-orange-50 hover:from-orange-200 hover:to-orange-100 text-orange-700 rounded-xl border border-orange-200 transition-all duration-200 text-left min-h-[44px] flex items-center justify-center"
                          style={{ touchAction: "manipulation" }}
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
                  className="p-2 sm:p-4 border-t border-orange-200/50 bg-white/95 backdrop-blur-sm"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom, 0px))" }}
                >
                  <div className="flex gap-2 sm:gap-3 items-end">
                    <div className="flex-1 relative">
                      <Input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about properties..."
                        className="pr-10 sm:pr-12 text-base border-orange-300 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-200 h-12 sm:h-12"
                        disabled={isLoading}
                        aria-label="Type your real estate question"
                        style={{ fontSize: "16px", touchAction: "manipulation" }}
                      />
                      {input && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-400 hover:text-gray-600"
                          onClick={() => setInput("")}
                          style={{ touchAction: "manipulation" }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 h-12 min-w-[48px] flex items-center justify-center"
                        disabled={isLoading || !input.trim()}
                        aria-label="Send message"
                        style={{ touchAction: "manipulation" }}
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
