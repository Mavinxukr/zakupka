import React from 'react';
import {
  LoginInput,
  LoginTypography,
  LoginForm
} from './Login.styled';
import MainLayout from '../../layout/mainLayout/MainLayout.component';
import ContainerAuth from '../../components/containers/containerAuth/ContainerAuth.component';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { fetchUser, userFailureDelete } from '../../toolkitRedux/reducers/userReducer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { alertError } from '../../utils/errorProcessing/toastError';
import Button from '../../components/button/Button.component';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const userError = useSelector(({ user }) => user.userError);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchUser({ history, data }));
  }

  if (userError) {
    alertError(userError)
    dispatch(userFailureDelete());
  }

  return (
    <MainLayout>
      <ContainerAuth>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginTypography variant='headline-1' mb="30px">
            Вхід у систему
          </LoginTypography>

          <LoginInput
            mb="30px"
            fullWidth
            name="email"
            type="email"
            label="Email"
            placeholder="Введите адрес эл. почты"
            ref={register()}
          />

          <LoginInput
            mb="30px"
            fullWidth
            name="password"
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            ref={register()}
          />

          <Button fullWidth variant="contained">
            Увійти
          </Button>
        </LoginForm>
      </ContainerAuth>
    </MainLayout>
  )
}

export default Login;