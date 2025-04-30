import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const caseStudyPoints = [
    "Acquiescent was established in 2010.",
    "2000+ students for trained with Acquiescent.",
    "Conducted Freshers off campus drives for Colleges in Andhra & Telangana.",
    "Conducted skill Development Programs in many Engineering Colleges in Andhra & Telangana.",
    "Academic projects for Final year B.Tech Graduates.",
    "1500+ Students got placed in MNC'S through Acquiescent training programs.",
    "Full time trainers for Java, Testing, Python end-end support for the students.",
    "Conducted many technical workshops for graduates to upskill their technology.",
    "Acquiescent is an outsourcing company derives both contract to hire, permanent hiring positions for its clients.",
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-4 top-[10%] max-w-2xl mx-auto bg-white rounded-xl shadow-2xl z-50 p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-primary">STUDENTS VIEW CASE</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-4">
              {caseStudyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
