import { useCallback, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

type ViewTransitionLike = {
  ready: Promise<void>
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => ViewTransitionLike
}

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const nextTheme = isDark ? "light" : "dark"

    const applyTheme = () => {
      flushSync(() => {
        setTheme(nextTheme)
      })
    }

    const doc = document as DocumentWithViewTransition

    const startViewTransition =
      typeof document !== "undefined" &&
      typeof doc.startViewTransition === "function"
        ? doc.startViewTransition.bind(document)
        : null

    let transition: ViewTransitionLike | null = null

    if (startViewTransition) {
      transition = startViewTransition(applyTheme)
    } else {
      applyTheme()
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    const animateReveal = () => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    }

    if (transition) {
      await transition.ready
      animateReveal()
    } else {
      animateReveal()
    }
  }, [duration, isDark, setTheme])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      aria-pressed={isDark}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only"></span>
    </button>
  )
}
