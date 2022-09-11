import { observer } from "mobx-react-lite";
import * as S from './styles'
import clockStore from '../Clock/store'
import { IoAdd } from 'react-icons/io5'
import { newsApiInstance } from "services/newsApi";
import { useEffect } from "react";


export const WidgetsApp = observer(() => {
  
  useEffect(() => {
    async function news() {
      console.log(await newsApiInstance.get(''))
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
        <S.ChildWidget>
          testando widget
        </S.ChildWidget>
      </S.WidgetsContainer>
    </S.Container>
  )
})