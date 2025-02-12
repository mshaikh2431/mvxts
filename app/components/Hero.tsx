"use client"

import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center relative">
      <motion.h1
        className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        John Doe
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Aspiring Data Scientist / Quant Researcher in Finance
      </motion.p>
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-600 hover:scale-105"
        >
          View Projects
        </a>
      </motion.div>
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ArrowDownIcon className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  )
}

