import * as Styled from './styles'
import startMenuStore from '../../store'
import { observer } from 'mobx-react-lite'

export const StartMenu = observer(() =>{
  return (
    <Styled.Container>
      <Styled.Media>
        <Styled.SearchBar>
          <input type="text" placeholder='Type here to search' />
        </Styled.SearchBar>
        <Styled.HeaderApps>
          <span>Pinned</span>
          <Styled.Button onClick={() => startMenuStore.toggleAllApps()}>
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
        {startMenuStore.isAllAppsOpened 
          ? (
            <Styled.ListApps>
              {startMenuStore.apps.map((app) => (
                <Styled.App key={app.icon}>
                  <img src={app.icon} alt={app.alt} />
                  <Styled.AppName>{app.alt}</Styled.AppName>
                </Styled.App>
              ))}
            </Styled.ListApps>
          )
          : (
            <Styled.GridApps>
              {startMenuStore.apps.map((app) => (
                <Styled.App key={app.icon}>
                  <img src={app.icon} alt={app.alt} />
                  <Styled.AppName>{app.alt}</Styled.AppName>
                </Styled.App>
              ))}
            </Styled.GridApps>
          )
        }
        {!startMenuStore.isAllAppsOpened && (
          <>
            <Styled.RecommendedHeader>
              <h2>Recommended</h2>
              <Styled.Button>
                <span>More</span>
                <span>&#62;</span>
              </Styled.Button>
            </Styled.RecommendedHeader>
            <Styled.Recommended>
              {startMenuStore.recommendedApps.map((app) => (
                <Styled.RecommendedApp>
                  <img src={app.icon} alt={app.title} />
                  <div>
                    <span>{app.title}</span>
                    <p>{app.description}</p>
                  </div>
                </Styled.RecommendedApp>
              ))}
            </Styled.Recommended>
          </>
        )}
      </Styled.Media>
      {!startMenuStore.isAllAppsOpened && (
        <Styled.Footer>
          <Styled.User>
            <img src={startMenuStore.user.img} alt="" />
            <span>{startMenuStore.user.name}</span>
          </Styled.User>
        </Styled.Footer>
      )}
    </Styled.Container>
  )
})