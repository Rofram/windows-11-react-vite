import * as Styled from './styles'
import taskManager from '../../core/taskManager'
import startMenuStore from './store'
import { Observer } from 'mobx-react-lite'
import { Droppable, Draggable, DragDropContext, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'

const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined) => ({
  userSelect: "none",
  
  ...(isDragging && {
    left: '150%',
    bottom: '70px',
  }),
  
  ...draggableStyle,
} as React.CSSProperties);

export function StartMenu() {
  return (
    <Observer>
      {() => (
        <Styled.Container requestToClose={taskManager.startMenu.requestToClose}>
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
                <DragDropContext onDragEnd={startMenuStore.onDragEnd}>
                  <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                      <Styled.ListApps 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {startMenuStore.apps.map((app, index) => (
                          <Draggable draggableId={app.alt} key={app.alt} index={index}>
                            {(provided, snapshot) => (
                              <Styled.App 
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                key={app.icon}
                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                              >
                                <img src={app.icon} alt={app.alt} />
                                <Styled.AppName>{app.alt}</Styled.AppName>
                              </Styled.App>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Styled.ListApps>
                    )}
                  </Droppable>
                </DragDropContext>
              )
              : (
                <DragDropContext onDragEnd={startMenuStore.onDragEnd}>
                  <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                      <Styled.GridApps
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {startMenuStore.apps.map((app, index) => (
                          <Draggable draggableId={app.alt} key={app.alt} index={index}>
                            {(provided, snapshot) => (
                              <Styled.App 
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                key={app.icon}
                              >
                                <img src={app.icon} alt={app.alt} />
                                <Styled.AppName>{app.alt}</Styled.AppName>
                              </Styled.App>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Styled.GridApps>
                    )}
                  </Droppable>
                </DragDropContext>
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
                    <Styled.RecommendedApp key={app.title}>
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
      )}
    </Observer>
  )
}