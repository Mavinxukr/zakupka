import React from 'react';
import {
  LoginInput,
  LoginTypography
} from './Login.styled';
import MainLayout from '../../layout/mainLayout/MainLayout.component';
import ContainerAuth from '../../components/containers/containerAuth/ContainerAuth.component';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../toolkitRedux/reducers/userReducer';
import Button from '../../components/button/Button.component';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const user = useSelector(({ user }) => user.user);
  const error = useSelector(({ user }) => user.error);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    dispatch(fetchUser(data));
  }

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <MainLayout>
      <ContainerAuth>

        <LoginTypography variant='headline-1' mb="30px">
          Вход в систему
        </LoginTypography>

        <LoginInput
          mb="30px"
          fullWidth
          name="email"
          type="email"
          label="Email"
          placeholder="Введите адрес эл. почты"
          ref={register()}
          error={!!error}
          errorMessage={"Пароль или email не верный"}
        />

        <LoginInput
          mb="30px"
          fullWidth
          name="password"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          ref={register()}
          error={!!error}
          errorMessage={"Пароль или email не верный"}
        />


        <Button fullWidth variant="contained" onClick={handleSubmit(onSubmit)}>
          Увійти
        </Button>

      </ContainerAuth>
    </MainLayout>
  )
}

export default Login;