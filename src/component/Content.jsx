import React, { useState } from "react"

function Content() {
  const [show, setShow] = useState("")
  const [data, setData] = useState()
  const [check, setCheck] = useState(false)

  let showText = () => {
    setData(show)
    setCheck(!check)
  }
  return (
    <div className=" bg-yellow-600 flex justify-center items-center py-6 ">
      <div className="w-1/2 flex flex-col px-8">
        <textarea
          onChange={(e) => setShow(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <button
          onClick={showText}
          className="px-4 py-2 bg-blue-500 text-white font-bold"
        >
          Show
        </button>
      </div>
      <div className="w-1/2 px-8">
        {!check && (
          <h1 className="font-bold text-[30px] text-white text-center">
            Click show to hide me............
          </h1>
        )}
        {check && <p className="text-white text-center font-bold">{data}</p>}
      </div>
    </div>
  )
}

export default Content
