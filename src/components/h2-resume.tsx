import React from 'react'

type H2ResumeProps = {
  children: React.ReactNode
}

export default function H2Resume({ children }: H2ResumeProps) {
  return (
    <h2 className="text-2xl font-bold leading-7 text-gray-900 uppercase">
      {children}
      <div className="my-2 h-0.5 !border-solid	!border-t-2 border-[#2451ff] rounded" />
    </h2>
  )
}
