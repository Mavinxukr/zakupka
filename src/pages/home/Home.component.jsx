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
import Menu from '../../components/menu/Menu.component';
import Classifier from '../../components/Classifier/Classifier.component';

const Home = () => {
  return (
    <MainLayout>
      <Menu mt="30px" mb="30px"/>
      <TabsStyled>
        <TabListStyled>
          <TabStyled tabIndex="0">
            <FaRegHandPaperIcon
              fontSize="1.2rem"
            />
            <Typography variant='subtitle-2'>
              Всі закупівлі
            </Typography>
          </TabStyled>
          <TabStyled tabIndex="0">
            <RiTodoLineIcon
              fontSize="1.2rem"
            />
            <Typography variant='subtitle-2'>
              Плани закупівель
            </Typography>
          </TabStyled>
          <TabStyled tabIndex="0">
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


      <Classifier />


    </MainLayout>
  )
}

export default Home;