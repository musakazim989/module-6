import React, { Children } from "react"

function Header({ title }) {
  return (
    <div className=" py-8 bg-blue-900">
      <h1 className=" text-white font-bold text-center text-[50px]">{title}</h1>
    </div>
  )
}

export default Header
