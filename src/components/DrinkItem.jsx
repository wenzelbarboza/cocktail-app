import React from 'react'

const DrinkItem = ({ drinkName, glass, type }) => {
    return (
        <div className=' p-4 bg-gray-100 flex flex-col h-72 w-60 border-black border-2 m-9'>
            <h3>{drinkName}</h3>
            <h5>{glass}</h5>
            <h6>{type}</h6>
        </div>
    )
}

export default DrinkItem