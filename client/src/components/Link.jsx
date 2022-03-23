import React from 'react'

const Link = ({children, url}) => {
  return (
    <a href={url || ""} target="_blank" className={`text-[#4eb3ff] relative after:absolute after:w-full after:h-[1px] after:scale-x-0 after:bottom-0 after:left-0 after:bg-[#4eb3ff] after:origin-bottom-right after:transition after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left`}>
        {children}
    </a>
  )
}

export default Link