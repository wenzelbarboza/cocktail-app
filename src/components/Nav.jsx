import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <nav className=' w-full bg-gray-200 flex justify-center'>
            <h1 onClick={handleBack} className="climateFont text-3xl my-3 hover:cursor-pointer">cocktail</h1>
        </nav>
    )
}

export default Nav