import React from 'react';
import MainLayout from '../../layout/mainLayout/MainLayout.component'
import { TabListStyled, TabsStyled, TabPanelStyled, TabStyled } from '../../components/tab/Tab.styled';
import Filter from '../../components/filter/Filter.component';
import StatePurchasesTable from '../../components/statePurchasesTable/StatePurchasesTable.component';
import {
  FaRegHandPaperIcon,
  RiTodoLineIcon,
  TiShoppingBagIcon
} from './Home.styled';
import Typography from '../../components/typography/Typography.component';

const Home = () => {
  return (
    <MainLayout>
      <TabsStyled>
        <TabListStyled>
          <TabStyled>
            <FaRegHandPaperIcon
              fontSize="1.2rem"
            />
            <Typography variant='subtitle-2'>
              Всі закупівлі
            </Typography>
          </TabStyled>
          <TabStyled>
            <RiTodoLineIcon
              fontSize="1.2rem"
            />
            <Typography variant='subtitle-2'>
              Плани закупівель
            </Typography>
          </TabStyled>
          <TabStyled>
            <TiShoppingBagIcon
              fontSize="1.2rem"
            />
            <Typography variant='subtitle-2'>
              Підписані контракти
            </Typography>
          </TabStyled>
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
      </TabsStyled>
    </MainLayout>
  )
}

export default Home;