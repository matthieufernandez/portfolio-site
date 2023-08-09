import { motion } from "framer-motion"

export default function Container({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
      <motion.div className="bg-slate-100 p-4 border-4 border-black shadow-[6px_6px_0_black]" 
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      initial={{
          opacity: 0,
          x: 150,
      }}
      viewport={{ amount: 0.6 }}>
          {children}
      </motion.div>

  )
}
