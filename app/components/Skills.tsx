"use client"

import { motion } from "framer-motion"
import { CodeIcon } from "lucide-react"

const skills = [
  "Python",
  "R",
  "SQL",
  "Excel",
  "Tableau",
  "Machine Learning",
  "Statistical Analysis",
  "Financial Modeling",
  "Data Visualization",
  "Time Series Analysis",
  "Risk Management",
  "Big Data Technologies",
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block p-3 bg-blue-600 rounded-full mb-4">
            <CodeIcon className="w-8 h-8 text-white" />
          </span>
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-gray-300">Technical proficiencies and domain knowledge</p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

