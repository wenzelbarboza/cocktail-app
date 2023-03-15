import React, { useState, useEffect } from 'react'
import { json, useLocation, useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { apiData } from '../components/List'
import { IoIosArrowBack } from "react-icons/io";

const DrinkDetail = () => {
    const { state: { id } } = useLocation();

    const [index] = useState(id)

    const navigate = useNavigate();

    const data = useAtomValue(apiData);
    console.log('details page----', data.data.drinks)
    const drinkData = data.data.drinks[index];
    let ingredients = ""

    for (let i = 0; i < 16; i++) {
        if (drinkData["strIngredient" + i])
            ingredients += drinkData["strIngredient" + i]
        console.log(ingredients)
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='w-full h-screen'>
            <div>
                <button onClick={handleBack} className='h-10 px-2 bg-blue-600 text-white m-4 '><IoIosArrowBack className=' inline text-2xl' />BACK</button>
            </div>
            <div className='flex  flex-wrap'>
                <div className='flex justify-center items-center flex-1'>
                    <div className=' h-[20rem] w-80 rounded overflow-hidden'>
                        <img src={drinkData.strDrinkThumb} alt="drink image" />
                    </div>
                </div>
                <div className='flex-1 justify-center flex'>
                    <ul className=' list-none flex flex-col justify-evenly '>
                        <li className=' flex-shrink-0 my-4'><span className=' text-white bg-blue-600 px-2 py-1 rounded mr-2'>Name:</span><span>{drinkData.strDrink}</span></li>
                        <li className=' flex-shrink-0 my-4'><span className=' text-white bg-blue-600 px-2 py-1 rounded mr-2'>Category:</span><span>{drinkData.strCategory}</span></li>
                        <li className=' flex-shrink-0 my-4'><span className=' text-white bg-blue-600 px-2 py-1 rounded mr-2'>Info:</span><span>{drinkData.strAlcoholic}</span></li>
                        <li className=' flex-shrink-0 my-4'><span className=' text-white bg-blue-600 px-2 py-1 rounded mr-2'>Glass:</span><span>{drinkData.strGlass}</span></li>
                        <li className=' flex-shrink-0 my-4'><span className=' text-white bg-blue-600 px-2 py-1 rounded mr-2'>Instructions:</span><span>{drinkData.strInstructions}</span></li>
                        <li className=' flex-shrink-0 my-4'><span className=' text-white bg-blue-600 px-2 py-1 rounded mr-2'>Ingredients:</span><span>{ingredients}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DrinkDetail