import React from 'react'
import Link from 'next/link'
import {  Box } from '../../node_modules/@mui/material/index'

import { navLinks } from '../../data.ts'



export default function Header(): JSX.Element {
  return (
    <header>  
        <Box
        sx={{
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
          }}
        >
            { navLinks.map((link, index) => {
                return (
                    <Link href={link.path} key={index}>
                        {link.name}
                    </Link>
                )      
            })}
        </Box>
    </header>
  )
}
