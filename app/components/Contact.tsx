"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MailIcon } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to a server
    // For demonstration, we'll simulate an API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Log the form data (in a real scenario, you'd send this to your server)
      console.log("Form submitted:", { name, email, message })

      // Show success message (you might want to add a toast notification here)
      alert("Message sent successfully!")

      // Reset form fields
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      alert("There was a problem sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block p-3 bg-blue-600 rounded-full mb-4">
            <MailIcon className="w-8 h-8 text-white" />
          </span>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300">Get in touch for opportunities or collaborations</p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

