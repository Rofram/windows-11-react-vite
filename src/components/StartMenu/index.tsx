import * as Styled from './styles'
import taskManager from 'core/taskManager'
import startMenuStore from './store'
import { observer } from 'mobx-react-lite'
import { AppButton } from './AppButton'
import { VscSearch } from 'react-icons/vsc'
import { useMemo, useRef } from 'react'
import { toJS } from 'mobx'
import { useContextMenu } from 'hooks/useContextMenu'
import { useClickAway } from 'hooks/useClickAway'

export const StartMenu = observer(() => {
  let listOfCharsFormatted = [...new Set(startMenuStore.apps.map(app => app.alt[0]))].sort()
  const menuRef = useRef<HTMLDivElement>(null)
  
  const ListAllAppsFormatted = useMemo(() => {
    let apps = Array.from({ length: listOfCharsFormatted.length }, (_, index) => {
      const appsWithSameChar = toJS(startMenuStore.apps).filter(app => app.alt[0] === listOfCharsFormatted[index])
      return {
        [listOfCharsFormatted[index]]: appsWithSameChar
      }
    })
    
    return apps
  }, [startMenuStore.apps])

  const handlerListener = useContextMenu([
    { title: "testeando", icon: 'assets/apps/xbox.svg' }, 
    { title: "mucho texto", icon: 'assets/apps/xbox.svg' }, 
    { title: "qualquer coisa", icon: 'assets/apps/xbox.svg' }, 
    { title: "seila", icon: 'assets/apps/xbox.svg' }
  ])

  useClickAway(menuRef, taskManager.toggleStartMenuOpened)

  return (
    <Styled.Container ref={menuRef} requestToClose={taskManager.startMenu.requestToClose} onContextMenu={handlerListener}>
      <div style={{ marginTop: 30, marginLeft: 40, marginRight: 40 }}>
        <Styled.SearchBar>
          <VscSearch size={20} color="#fff" />
          <input type="text" placeholder='Type here to search' />
        </Styled.SearchBar>
      </div>
      <Styled.HeaderApps>
        <span>{startMenuStore.isAllAppsOpened ? "All Apps" : "Pinned"}</span>
        <Styled.Button onClick={startMenuStore.toggleAllApps}>
          {startMenuStore.isAllAppsOpened ? (
            <>
              <span>&#60;</span>
              <span>Back</span>
            </>
          ) : (
            <>
              <span>All apps</span>
              <span>&#62;</span>
            </>
          )}
        </Styled.Button>
      </Styled.HeaderApps>
      {!startMenuStore.isAllAppsOpened ? (
        <Styled.Media
          animate={{
            opacity: 1,
            x: 0 
          }}
          initial={{
            opacity: 0,
            x: '-5%'
          }}
          transition={{
            duration: .3
          }}
        >
        <Styled.GridApps>
          {startMenuStore.apps.map((app) => (
            <AppButton key={app.icon} icon={app.icon} alt={app.alt} />
          ))}
        </Styled.GridApps>

        <Styled.RecommendedHeader>
          <h2>Recommended</h2>
          <Styled.Button>
            <span>More</span>
            <span>&#62;</span>
          </Styled.Button>
        </Styled.RecommendedHeader>
        <Styled.Recommended>
          {startMenuStore.recommendedApps.map((app) => (
            <Styled.RecommendedApp key={app.title}>
              <img src={app.icon} alt={app.title} />
              <div>
                <span>{app.title}</span>
                <p>{app.description}</p>
              </div>
            </Styled.RecommendedApp>
          ))}
        </Styled.Recommended>
      </Styled.Media>
      ) : (
        <Styled.ListApps
          animate={{
            opacity: 1,
            x: 0 
          }}
          initial={{
            opacity: 0,
            x: '5%'
          }}
          transition={{
            duration: .3
          }}
        >
          {ListAllAppsFormatted.map((app, index) => (
            <>
              <Styled.ListName 
                key={listOfCharsFormatted[index]}
              >
                {listOfCharsFormatted[index].toUpperCase()}
              </Styled.ListName>
              {app[listOfCharsFormatted[index]].map(app => (
                <AppButton key={app.alt} icon={app.icon} alt={app.alt} />
              ))}
            </>
          ))}
        </Styled.ListApps>
      )}
      
      <Styled.Footer>
        <Styled.User>
          <img src={startMenuStore.user.img} alt="" />
          <span>{startMenuStore.user.name}</span>
        </Styled.User>
      </Styled.Footer>
    </Styled.Container>
  )
})