import React, { useEffect, useState } from 'react'
import { useCocktail } from '../Hooks/UseCocktail'
import DrinkItem from './DrinkItem'
import { atom, useAtom } from 'jotai'

export const apiData = atom([])

const List = () => {

    const [result, setResult] = useAtom(apiData)
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
            setResult(await useCocktail(url))
        }
        fetchData()
    }, [])

    return (
        <>
            {
                result.status == 200 ?
                    result.data.drinks != null ?
                        <section className='w-[90%] m-auto'>
                            <div className='flex flex-wrap justify-evenly'>
                                {
                                    result.data.drinks.map((item, index) => {
                                        return <DrinkItem drinkName={item.strDrink} glass={item.strGlass} type={item.strAlcoholic} image={item.strDrinkThumb} key={index} id={index} />
                                    })
                                }
                            </div>
                        </section> :
                        <p>no match found for the search query</p>
                    :
                    <p>data not found</p>
            }
        </>
    )
}

export default List