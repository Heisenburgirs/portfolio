"use client"

import Image from 'next/image'
import key2 from "../public/images/key2.png"
import key from "../public/images/key.png"
import triangle from '../public/images/triangle.png'
import { useState } from 'react';

export default function Home() {
  const [isKeySelected, setIsKeySelected] = useState(false);

  // Menu
  const [selectedGear, setSelectedGear] = useState("P");
  const [selectorMargin, setSelectorMargin] = useState("0");
  const gears = ["P", "R", "N", "D", "2", "1"];
  const pointerPositions = ["0px", "40px", "80px", "120px", "160px", "200px"]

  const selectedCamaro = () => {
    setIsKeySelected(true)
  }

  const selectedMustang = () => {
    setIsKeySelected(true)
    
  }

  const test = () => {
    setIsKeySelected(false)
  }
  //mt-[${selectorMargin}px]
  return (
    <main className="flex bg-radial-gradient min-h-screen justify-center items-center">

      <nav className="fixed right-20 py-4 top-50 flex justify-center items-center z-50">
        <div className="flex flex-col gap-4">
          {gears.map((gear, index) => (
            <a 
              key={index}
              onClick={() => {setSelectedGear(gear); setSelectorMargin(pointerPositions[index])}}
              href={`#section${index + 1}`}
              className={`pl-3 pr-3 text-white hover:text-gray-400 cursor-pointer ${selectedGear === gear ? "text-speedometer-red" : ""} transition`}
            >
              {gear}
            </a>
          ))}
        </div>

        <div
          className={`flex flex-col gap-[26px] transition ease-in-out transform-gpu duration-300`}
          style={{ transform: `translateY(${selectorMargin})` }}
          >
            {gears.map((gear, index) => (
              <div
                key={index}
                className={`pr-3 ${index === 0 ? "opacity-100" : "opacity-0"}`}
              >
                <Image src={triangle} width={12} alt="selector" />
              </div>
            ))}
        </div>
        
      </nav>

      <div className="flex w-full h-full justify-center items-center">
        
        {/* This is the parent div that encompasses the two sections */}
        <div className="flex flex-col w-full h-screen flex justify-center items-center">
          
          {/* First section */}
          <div className="flex flex-col w-full h-full justify-center items-center text-white text-4xl font-librebodoni font-bold tracking-wider">
            <span>HI, I'M LUKA </span>
            <span>SENIOR FRONT-END ENGINEER</span>
          </div>

          {/* Second section */}
          <div className="flex w-full h-full justify-center items-center">
            <div className={`flex w-full ${isKeySelected ? "justify-center" : "justify-evenly"} items-center`}>
              {isKeySelected ?
              (
                <Image src={key} width={128} height={128} alt="Camaro" onClick={test} />
              )
              :
              (
                <>
                  <div onClick={selectedCamaro}>
                    <Image src={key2} width={128} height={128} alt="Camaro" />
                  </div>
                  <div onClick={selectedMustang}>
                    <Image src={key2} width={128} height={128} alt="Camaro" />
                  </div>
                </>
              )}
              
            </div>
          </div>

        </div>
        
      </div>
    </main>
  )
}