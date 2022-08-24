import React from 'react'
import  { useRouter } from 'next/router'
import propTypes from 'prop-types'

export default function navItem({ item }) {
    const router = useRouter();
    return (
        <> { router.pathname === "/" ? item : " " } </>
    )
}

navItem.propTypes = {
    item: propTypes.string,
};