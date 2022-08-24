import React from 'react'
import { navLinks } from '../../data.ts'
import Link from "next/link"

export default function Header(): JSX.Element {
  return (
    <header>
        <div>
            Safeer Ahmed
        </div>
        <nav>
            { navLinks.map((link, index) => {
                return (
                <ul>
                    <Link href={link.path}>
                        <li key={index}> {link.name}</li>
                    </Link>
                </ul>
                )
                
            })}
        </nav>
    </header>
  )
}
