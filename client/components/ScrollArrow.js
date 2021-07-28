import React, { useState } from 'react'
import scrollArrowIcon from '../assets/images/scrollArrowIcon.svg'

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div>
      <button
        id="scroll button"
        type="button"
        className="fixed width-full flex items-center justify-center height-20px z-50 cursor-pointer animate-bounce w-6 h-6 transition duration-500 ease-in-out opacity-50"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      >
        <img src={scrollArrowIcon} className="h-6 w-6" alt="Scroll Arrow Icon" />
      </button>
    </div>
  )
}

export default ScrollArrow
