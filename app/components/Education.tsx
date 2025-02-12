"use client"

import { motion } from "framer-motion"
import { GraduationCapIcon } from "lucide-react"

export default function Education() {
  const educationItems = [
    {
      degree: "Master of Science in Business Analytics",
      institution: "XYZ University",
      year: "Expected Graduation: 2024",
      description:
        "Focusing on advanced data analytics, machine learning, and their applications in finance and business strategy.",
    },
    {
      degree: "Bachelor of Science in Mathematics and Economics",
      institution: "ABC University",
      year: "Graduated: 2022",
      description: "Double major with a focus on quantitative methods and financial economics.",
    },
  ]

  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block p-3 bg-blue-600 rounded-full mb-4">
            <GraduationCapIcon className="w-8 h-8 text-white" />
          </span>
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-300">Academic qualifications and ongoing studies</p>
        </motion.div>
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
              <p className="text-gray-300 mb-2">{item.institution}</p>
              <p className="text-gray-400 mb-4">{item.year}</p>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

