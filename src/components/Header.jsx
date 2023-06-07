// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
  return (
    <>
        <div className="bg-transparent">
            <nav className="navHeader pl-24 pr-24 pt-3">
                <div className="headerProfile">
                    <img src="./src/assets/viteTest.svg" className="myImage headerImage" alt="myImage" />
                    <div className="headerImage">
                        <h1 className="font-['Mars'] text-2xl">Team Fedex</h1>
                        <h2 className="myName poppins-normal-black-21px"><a href="./profile">About Us</a></h2>
                    </div>
                </div>
                <ul className="navLinks">
                    <li><a href="./">Home</a></li>
                    <li><a href="./profile">Profile</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact</a></li>
                </ul>
            </nav>    
        </div>
    </>

  )
}

export default Header