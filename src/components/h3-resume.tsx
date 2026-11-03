import React from 'react'

type H3ResumeProps = {
  children: React.ReactNode
}

export default function H3Resume({ children }: H3ResumeProps) {
  return (
    <h3 className="text-lg text-left font-bold leading-7 text-gray-900 print:break-after-avoid">
      {children}
    </h3>
  )
}
