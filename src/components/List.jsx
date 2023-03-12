import React, { useEffect, useState } from 'react'
import { useCocktail } from '../Hooks/UseCocktail'
import DrinkItem from './DrinkItem'

const List = () => {
    const [result, setResult] = useState('second')
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
                    <section className='w-[90%] m-auto flex'>
                        <div className='w-full flex flex-wrap justify-evenly'>
                            {
                                result.data.drinks.map((item) => {
                                    return <DrinkItem drinkName={item.strDrink} glass={item.strGlass} type={item.strAlcoholic} />
                                })
                            }
                            <DrinkItem drinkName='abc' glass='short' type='alcoholic' />
                        </div>
                    </section> :
                    <p>data not found</p>
            }
        </>
    )
}

export default List