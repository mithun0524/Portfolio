import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -28 },
}

const transition = {
  duration: 0.45,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const primaryOverlay = {
  initial: { scaleY: 1, originY: 0 },
  animate: {
    scaleY: 0,
    originY: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    scaleY: 1,
    originY: 1,
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
  },
}

const accentOverlay = {
  initial: { scaleY: 1, originY: 0 },
  animate: {
    scaleY: 0,
    originY: 0,
    transition: { duration: 0.45, delay: 0.08, ease: [0.8, 0, 0.2, 1] },
  },
  exit: {
    scaleY: 1,
    originY: 1,
    transition: { duration: 0.45, delay: 0.08, ease: [0.8, 0, 0.2, 1] },
  },
}

export default function RouteTransition({ children }: PropsWithChildren) {
  return (
    <>
      {/* Layered wipe */}
      <motion.div
        className="route-overlay route-overlay--primary"
        variants={primaryOverlay}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.div
        className="route-overlay route-overlay--accent"
        variants={accentOverlay}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      
      {/* Page content */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {children}
      </motion.div>
    </>
  )
}
