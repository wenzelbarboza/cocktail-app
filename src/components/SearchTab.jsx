import React, { useState } from 'react'

const SearchTab = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearch = (event) => {
        console.log(event.target.value)
    }
    console.log(searchQuery)
    return (
        <section className='w-full flex justify-center my-10'>
            <form>
                <input type="text" placeholder='search' className=' bg-gray-200 text-2xl w-72 rounded-md' onChange={handleSearch} />
                <button>search</button>
            </form>
        </section>
    )
}

export default SearchTab