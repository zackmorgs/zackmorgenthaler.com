import React, { Component, StrictMode } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navigation() {
    const [navClosed, setNav] = React.useState(true);
    const router = useRouter();

    function handleBurgerClick() {
        setNav(!navClosed);
        console.log("test")
    }
    function ensureNavClosed() {
        setNav(true);
    }
    return (
        <nav id="nav-main" className={navClosed ? 'is-closed' : 'is-open'}>
            <div id="nav-container">
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
                        <Link href="/about" className={router.pathname == "/about" ? "active" : ""} onClick={handleBurgerClick}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""} onClick={handleBurgerClick}>Contact</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={router.pathname == "/porfolio" ? "active" : ""} onClick={handleBurgerClick}>Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/blog" className={router.pathname == "/blog" ? "active" : ""} onClick={handleBurgerClick}>Blog</Link>
                    </li>
                    <li>
                        <Link href="/music" className={router.pathname == "/music" ? "active" : ""} onClick={handleBurgerClick}>Music</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}