import { observer } from "mobx-react-lite";
import * as S from './styles'
import clockStore from '../Clock/store'
import { IoAdd } from 'react-icons/io5'
import { newsApiInstanceMediaStack, type NewsApiResponse } from "services/newsApi";
import { useEffect, useState } from "react";

export const WidgetsApp = observer(() => {
  const [CurrentNews, setCurrentNews] = useState<NewsApiResponse['data']>([])
  
  useEffect(() => {
    async function news() {
      const { data } = await newsApiInstanceMediaStack.get<NewsApiResponse>('')
      console.log(data.data)
      setCurrentNews(data.data)
    }

    news()
  }, [])

  return (
    <S.Container>
      <S.Header>
        <div></div>
        <h2>{clockStore.Hours}</h2>
        <S.HeaderButtonContainer>
          <S.HeaderButton>
            <IoAdd size={30} color="#8c8d8f" />
          </S.HeaderButton>
          <S.HeaderButton>
            <S.HeaderImage src="https://avatars.githubusercontent.com/u/50988834?v=4" />
          </S.HeaderButton>
        </S.HeaderButtonContainer>
      </S.Header>
      <S.WidgetsContainer>
        {CurrentNews.map((news) => (
          <S.ChildWidget key={news.url}>
            {news.image && <img src={news.image} alt="noticia" width="100%" />}
          </S.ChildWidget>
        ))}
      </S.WidgetsContainer>
    </S.Container>
  )
})