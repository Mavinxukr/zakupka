import React from 'react';
import {
  LoginInput,
  LoginTypography
} from './Login.styled';
import MainLayout from '../../layout/mainLayout/MainLayout.component'
import ContainerAuth from '../../components/containers/containerAuth/ContainerAuth.component';
import Select from '../../components/select/Select.component';
import Modal from '../../components/modal/modal.component';

const Login = () => {
  return (
    <MainLayout>
      <ContainerAuth>
        <LoginTypography variant='headline-1'
          mb="30px"
        >
          Вход в систему
        </LoginTypography>
        <LoginInput
          mb="20px"
          label="Введите почту"
        />
        <LoginInput
          label="Введите пароль"
          mb="20px"
          error
        />
        <Select 
          label="fwefwefwef"
          errorMessage="dfsdvsdv"
          error
          selectItems={[
            'чоловик',
            'жинка',
          ]}
          defaultValue="чоловик"
        />
        <Modal defaultOpened={true}>
          hepowefwevweovwevopweovopw
        </Modal>
      </ContainerAuth>
    </MainLayout>
  )
}

export default Login;