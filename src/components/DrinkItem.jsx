import React from 'react'
import { useNavigate } from 'react-router-dom'

const DrinkItem = ({ drinkName, glass, type, image, id }) => {

    console.log('id is', id)

    const navigate = useNavigate()

    // handles navigation passes the index of array item
    const handleNavigate = (id) => {
        console.log('id inside-------', id)
        navigate('/detail', { state: { id: id } })
    }

    return (
        <div className='cardShadow bg-gray-100 flex flex-col h-[24rem] w-60 rounded m-9 justify-around' >
            <img src={image} alt="drink image" className=' rounded-t' />
            <h3 className='ml-2 text-3xl'>{drinkName}</h3>
            <h5 className='ml-2 '>{glass}</h5>
            <h6 className='ml-2 text-sm text-gray-600'>{type}</h6>
            <div>
                <button onClick={() => handleNavigate(id)} className=' bg-blue-600 ml-2 px-4 py-1 rounded border-none text-white '>details</button>
            </div>
        </div>
    )
}

export default DrinkItem