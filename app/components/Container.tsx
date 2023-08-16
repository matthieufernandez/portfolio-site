import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode,
  classes: string,
}

export default function Container(props: Props) {
  return (
      <motion.div className={`${props.classes === "alt" ? "bg-[url('../public/images/drawing.png')]" : "bg-slate-100"} bg-slate-100 p-4 border-4 border-black shadow-[6px_6px_0_black]"`}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      initial={{
          opacity: 0,
          x: 150,
      }}
      viewport={{ amount: 0.7 }}>
          {props.children}
      </motion.div>

  )
}
