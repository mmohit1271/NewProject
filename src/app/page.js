import Home from '@/component/Home'
import React from 'react'

async function getAPIData(q, language, page) {
  let response = await fetch(`https://newsapi.org/v2/everything?q=${q ?? "All"}&language=${language ?? "hi"}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=2321c6bfd7f44540928faeb4299a1524`)
  response = await response.json()
  return response
}
export default async function page(req, res) {
  let { q, language, page } = await req.searchParams
  let response = await getAPIData(q ?? "All", language ?? "hi", page ?? 1)
  return (
    <Home q={q ?? "All"} language={language} articles={response.articles?.filter((x) => x.title !== "[Removed]")} page={page ?? 1} totalResults={response.totalResults} />
  )
}
