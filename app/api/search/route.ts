import axios from "axios"

export async function POST(requset: Request) {
    const { query, page } = await requset.json()
    const res = await axios.get(`https://animeapi.skin/search?q=${query}&page=${page}`).then((data) => {
        return data.data
    })
    return Response.json({ animes: res }, { status: 200 })
}