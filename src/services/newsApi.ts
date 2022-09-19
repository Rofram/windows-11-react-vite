import axios from 'axios'

export const newsApiInstance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${import.meta.env.VITE_API_NEWS_KEY_NEWSAPI}`,
})

export type NewsApiResponse = {
  data: {
    author?: string
    description: string
    published_at: string
    title: string
    url: string
    image?: string
  }[]
}

export const newsApiInstanceMediaStack = axios.create({
  baseURL: `http://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_API_NEWS_KEY_MEDIASTACK}&countries=br`,
})