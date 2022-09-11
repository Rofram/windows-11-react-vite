import axios from 'axios'

export const newsApiInstance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${import.meta.env.VITE_API_NEWS_KEY}`,
})