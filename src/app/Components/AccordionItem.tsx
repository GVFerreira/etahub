'use client'

import { useState } from 'react'

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div onClick={handleToggleAccordion}>
      <button className="flex items-center justify-between w-full p-5 bg-hub-gray rounded-md">
        <h4 className="font-semibold">{question}</h4>
        <span className="text-gray-700 w-6 h-6" style={{position: 'relative', transform: 'translate(0%, 0%)'}} >
          <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: '0', left: '0',}} className={`w-6 h-6 transition-all duration-200 ease-in ${!isOpen ? 'transform rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: '0', left: '0'}} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
          </svg>
        </span>
      </button>

      <p
        className={`text-justify text-md text-gray-700 transition-all duration-200 ${
          isOpen ? 'opacity-100 h-auto pt-2 pb-8 px-4' : 'opacity-0 h-0 py-2'
        }`}
        aria-hidden={!isOpen}
      >
        {answer}
      </p> 
    </div>
  )
}
