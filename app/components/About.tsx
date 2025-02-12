"use client"

import { motion } from "framer-motion"
import { UserIcon } from "lucide-react"

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="mb-6 inline-block p-3 bg-blue-600 rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <UserIcon className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm an aspiring data scientist and quant researcher with a strong foundation in business analytics. Currently
          pursuing a Master's in Business Analytics, I'm passionate about leveraging data to drive financial insights
          and strategies. My goal is to blend cutting-edge data science techniques with a deep understanding of
          financial markets to create innovative solutions in quantitative finance.
        </p>
      </div>
    </motion.section>
  )
}

