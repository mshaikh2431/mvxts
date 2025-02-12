"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon, BriefcaseIcon } from "lucide-react"

const projects = [
  {
    title: "Stock Market Trend Analysis",
    description:
      "Used Tableau to visualize and analyze stock market trends, creating interactive dashboards for real-time market insights.",
    tools: ["Tableau", "Excel"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Credit Risk Prediction Model",
    description:
      "Developed a machine learning model in R to predict credit risk, improving accuracy by 15% over traditional methods.",
    tools: ["R", "Statistical Analysis"],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Customer Segmentation for Targeted Marketing",
    description:
      "Utilized SQL and Excel to segment customers based on purchasing behavior, leading to a 20% increase in marketing ROI.",
    tools: ["SQL", "Excel"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  },
  {
    title: "Algorithmic Trading Strategy Backtesting",
    description:
      "Implemented and backtested various trading strategies using Python, incorporating financial indicators and machine learning models.",
    tools: ["Python", "Pandas", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block p-3 bg-blue-600 rounded-full mb-4">
            <BriefcaseIcon className="w-8 h-8 text-white" />
          </span>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-gray-300">Explore my latest work</p>
        </motion.div>
        <motion.div ref={carousel} className="overflow-hidden cursor-grab" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} className={`min-w-full p-4 ${index === currentIndex ? "block" : "hidden"}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-600"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={prevProject} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextProject} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

