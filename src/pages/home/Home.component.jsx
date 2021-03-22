import React from 'react';
import MainLayout from '../../layout/mainLayout/MainLayout.component'
import { TabListStyled, TabsStyled, TabPanelStyled, TabStyled } from '../../components/tab/Tab.styled';
import Filter from '../../components/filter/Filter.component';
import StatePurchasesTable from '../../components/statePurchasesTable/StatePurchasesTable.component';

const Home = () => {
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
          <StatePurchasesTable />
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

export default Home;