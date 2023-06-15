// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion'
import './styles/_header.scss'

const Header = () => {
    return (
        <>
            <motion.div
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
            }}
            // .header
            className="header font-['PlusJakarta']">
                {/* .header-inner */}
                <div className="header-inner pb-4">
                    {/* .logo */}
                    <div className="logo"> FedEx </div>
                    {/* .nav */}
                    <nav className="nav" style={{fontSize:24}}>
                        <li>
                            <a href='/'> Design </a>
                        </li>
                        <li>
                            <a href='/'> Strategy </a>
                        </li>
                        <li>
                            <a href='/'> Cases </a>
                        </li>
                        <li>
                            <a href='/'> Why work with us? </a>
                        </li>
                    </nav>
                    {/* .contact */}
                    <div className="contact hidden sm:block sm:text-2xl">
                        <a href='/contact'> Get Started </a>
                    </div>
                    {/* .hamburger-menu */}
                    <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </motion.div>
        </>
  
    )
}

export default Header
