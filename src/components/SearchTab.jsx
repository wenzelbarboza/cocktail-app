import React, { useState, useCallback } from 'react'
import _ from "lodash"
import { atom, useAtom } from 'jotai'
import { apiData } from './List'
import { useCocktail } from '../Hooks/useCocktail'

const SearchTab = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [result, setResult] = useAtom(apiData)
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    const fetchData = async (search) => {
        console.log(`fetching data for ${search}`)
        console.log('this value', this)
        setResult(await useCocktail(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`))
    }

    // implement debouncing
    const debounceFn = useCallback(_.debounce(fetchData, 1000), [])

    const handleSearch = (event) => {
        console.log(searchQuery)
        setSearchQuery(event.target.value)
        debounceFn(event.target.value)
    }


    return (
        <section className='w-full flex justify-center my-10'>
            <form>
                <input type="text" placeholder='search' className=' bg-gray-200 text-2xl w-[22rem] h-10 rounded-md px-2' onChange={handleSearch} value={searchQuery} />
            </form>
        </section>
    )
}

export default SearchTab