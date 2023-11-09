import React, { Component, StrictMode } from 'react'
import Link from 'next/link'

export default function Navigation() {
    const [navClosed, setNav] = React.useState(true);
    function handleBurgerClick() {
        setNav(!navClosed);
        console.log("test")
    }
    function ensureNavClosed() {
        setNav(true);
    }
    return (
        <nav id="nav-main" className={navClosed ? 'is-closed' : 'is-open'}>
            <div id="nav-brand">
                <Link href="/" onClick={ensureNavClosed}>
                    Z
                </Link>
                <button id="navbar_burger" onClick={handleBurgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul id="nav-list">
                <li>
                    <Link href="/about" onClick={handleBurgerClick}>About</Link>
                </li>
                <li>
                    <Link href="/contact" onClick={handleBurgerClick}>Contact</Link>
                </li>
                <li>
                    <Link href="/blog" onClick={handleBurgerClick}>Blog</Link>
                </li>
                <li>
                    <Link href="/music" onClick={handleBurgerClick}>Music</Link>
                </li>
            </ul>
        </nav>
    );
}