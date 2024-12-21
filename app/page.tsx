'use client'
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState('')
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios.post('/api/search', {
      query: query,
      page: 1
    }).then((result) => {
      // console.log(result);
      if (result.status == 200) {
        setAnimes(result.data.animes)
      }
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      setError('Server Error Check Api Server.')
    })
  }
  return (
    <div className="w-full h-screen flex-col flex items-center mt-8">
      <div>
        <h2 className="text-xl font-bold">Wellcome to Episode Links Finder V1</h2>
        <div className="flex-1 mt-6">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="w-full bg-slate-400 rounded h-8 text-white px-2 border-none " />
            <button className="bg-slate-400 text-white rounded px-2 py-1" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className="flex-1 mt-4 px-4 grid grid-flow-col grid-rows-3 xl:grid-rows-2 gap-2">
        {
          loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : ''
        }
        {
          error && (
            <span>{error}</span>
          )
        }

        {
          animes && animes.map((anime, index) => {
            return (
              <Card anime={anime} key={index} />
            )
          })
        }
      </div>
    </div>
  );
}
