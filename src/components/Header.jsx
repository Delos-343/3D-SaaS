import React from 'react'

const Header = () => {
  return (
    <>
        <div className="bg-transparent">
            <nav className="navHeader">
                <div className="headerProfile">
                    <img src="./src/assets/viteTest.svg" className="myImage headerImage" alt="myImage" />
                    <div className="headerImage">
                        <h1 className="poppins-bold-black-21px">Team Fedex</h1>
                        <h2 className="myName poppins-normal-black-21px"><a href="./profile">About Us</a></h2>
                    </div>
                </div>
                <ul className="navLinks">
                    <li><a href="./">Home</a></li>
                    <li><a href="./profile">Profile</a></li>
                    <li><a href="./profile">Contact</a></li>
                </ul>
                <button className="hamburger">
                    <div className="bar"></div>
                </button>
            </nav>    
        </div>
    </>

  )
}

export default Header