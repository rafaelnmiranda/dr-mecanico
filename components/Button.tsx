import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  target?: string
  rel?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block text-center'
  const variants = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500',
    secondary: 'bg-red-600 text-white hover:bg-red-700',
    outline:
      'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

