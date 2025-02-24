import React from 'react'

const Footer = () => {
  return (
    <div className="h-auto w-screen">
        <div className=" bg-[rgb(22,22,22)] flex justify-evenly flex-wrap pt-10 pb-20">
            <div>
            <ul className="list-none  text-white opacity-75 space-y-7">
                <li>Questions? Call 000-800-919-1743 (Toll-Free)</li>
                <li>FAQ</li>
                <li>Cookie Preferences</li>
                <li>Language</li>

            </ul>
            </div>
        <div>
          <ul className="list-none pt-5 text-white opacity-75 space-y-7">
            <li></li>
            <li>Help Centre</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul className="list-none pt-5 text-white opacity-75 space-y-7">
            <li></li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer