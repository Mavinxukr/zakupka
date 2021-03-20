import React from 'react';
import MainLayout from '../../layout/mainLayout/MainLayout.component'
import { TabListStyled, TabsStyled, TabPanelStyled, TabStyled } from '../tab/Tab.styled';
import Filter from '../filter/Filter.component';

const App = () => {
  return (
    <MainLayout>
      <TabsStyled>
        <TabListStyled>
          <TabStyled>Title 1</TabStyled>
          <TabStyled>Title 2</TabStyled>
          <TabStyled>Title 1</TabStyled>
          <TabStyled>Title 2</TabStyled>
        </TabListStyled>
        <TabPanelStyled>
          <Filter />
        </TabPanelStyled>
        <TabPanelStyled>
          <h2>Any content 2</h2>
        </TabPanelStyled>
        <TabPanelStyled>
          <h2>Any content 1</h2>
        </TabPanelStyled>
        <TabPanelStyled>
          <h2>Any content 2</h2>
        </TabPanelStyled>
      </TabsStyled>
    </MainLayout>
  )
}

export default App;