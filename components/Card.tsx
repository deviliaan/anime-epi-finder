import React from 'react'

function Card({ anime }: any) {
    const handleClick = () => {
        alert(anime.embed_url)
    }
    return (
        <button onClick={handleClick} className='border-b-[5px] border-yellow-400 outline w-full overflow-hidden aspect-[3/4] group'>
            <div>
                <img src={anime.thumbnail_url} className='transform-all duration-300 ease-in-out group-hover:-translate-y-[120px] w-full aspect-[3/4] object-cover' alt="" />
            </div>
            <div className='transform-all duration-300 ease-in-out group-hover:-translate-y-[120px] px-2 truncate flex flex-col'>
                <div className='truncate'>{anime.title}</div>
                <div>Episodes: {anime.episode}</div>
                <div>Status: {anime.status}</div>
                <div>Type: {anime.sub != null ? anime.sub : anime.dub != null ? anime.dub : "Both"}</div>
            </div>
        </button>
    )
}

export default Card