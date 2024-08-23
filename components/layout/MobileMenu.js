'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(1)
    console.log(activeItem)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <>
            <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                    <Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="has-dropdown active menu-thumb">
                                <Link href="/">
                                    Home
                                    <i className="fas fa-angle-down" />
                                </Link>
                                
                                <a className={`mean-expand ${activeItem === 1 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(1)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    Services
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 2 ? "block" : "none"}` }}>
                                    
                                    <li><Link href="/service">Cable TV</Link></li>
                                    <li><Link href="/service-details">Internet</Link></li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 2 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(2)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            
                           
                            <li className="mean-last">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
