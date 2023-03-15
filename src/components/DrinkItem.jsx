import React from 'react'

const DrinkItem = ({ drinkName, glass, type, image }) => {
    return (
        <div className='cardShadow bg-gray-100 flex flex-col h-[24rem] w-60 rounded m-9 justify-around' >
            <img src={image} alt="drink image" className=' rounded-t' />
            <h3 className='ml-2'>{drinkName}</h3>
            <h5 className='ml-2'>{glass}</h5>
            <h6 className='ml-2'>{type}</h6>
            <div>
                <button className=' bg-blue-600 ml-2 px-4 py-1 rounded border-none text-white '>details</button>
            </div>
        </div>
    )
}

export default DrinkItem