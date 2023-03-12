import axios from "axios"

export const useCocktail = async (url) => {
    try {
        // const res = await fetch(url)
        // const data = res.json()
        // console.log(data)

        const { data } = await axios.get(url)
        console.log(data)
        return {
            status: 200,
            data
        };
    } catch (error) {
        console.log("=========", error)
        return { status: 404 }
    }

}