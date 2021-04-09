import React from 'react'
import {
  RegistrationInput,
  RegistrationButton,
  RegistrationForm,
  RegistrationTypography,
  RegistrationSelect
} from './Registration.styled';
import MainLayout from '../../layout/mainLayout/MainLayout.component';
import ContainerAuth from '../../components/containers/containerAuth/ContainerAuth.component';
import { useForm } from 'react-hook-form';
import { registrationRequest, registrationFailureDelete } from '../../toolkitRedux/reducers/registrationReducer'
import { useDispatch, useSelector } from 'react-redux';
import { schema } from '../../validation/registration.validate';
import { yupResolver } from '@hookform/resolvers/yup';
import { alertError } from '../../utils/errorProcessing/toastError'

const Registration = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ registration }) => registration.registrationError);

  const { register, handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    dispatch(registrationRequest({ ...data, role: data.role.value }));
  }

  if (error) {
    alertError(error)
    dispatch(registrationFailureDelete());
  }

  return (
    <MainLayout>
      <ContainerAuth>
        <RegistrationTypography
          variant="headline-1"
          mb="30px">
          Реєстрація
        </RegistrationTypography>
        <RegistrationForm onSubmit={handleSubmit(submit)}>
          <RegistrationInput
            mb="30px"
            name="name"
            type="text"
            label="Ім'я"
            placeholder="Ім'я"
            ref={register}
            error={!!errors.name}
            errorMessage={errors?.name?.message}
          />
          <RegistrationInput
            mb="30px"
            name="surname"
            type="text"
            label="Прізвище"
            placeholder="Прізвище"
            ref={register}
            error={!!errors.surname}
            errorMessage={errors?.surname?.message}
          />
          <RegistrationInput
            mb="30px"
            name="name_customer"
            type="text"
            label="Название заказчика"
            placeholder="Название заказчика"
            ref={register}
            error={!!errors.name_customer}
            errorMessage={errors?.name_customer?.message}
          />
          <RegistrationInput
            mb="30px"
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            ref={register}
            error={!!errors.email}
            errorMessage={errors?.email?.message}
          />
          <RegistrationInput
            mb="30px"
            name="phone"
            type="text"
            label="Ваш телефон"
            placeholder="Ваш телефон"
            ref={register}
            error={!!errors.phone}
            errorMessage={errors?.phone?.message}
          />

          <RegistrationSelect
            control={control}
            name="role"
            mb="30px"
            label="Оберіть роль"
            options={[
              { value: 1, label: 'поставщик' },
              { value: 2, label: 'заказчик' },
            ]}
            placeholder="Оберіть роль"
            error={!!errors.role}
            errorMessage={errors?.role?.message}
          />

          <RegistrationInput
            mb="30px"
            name="password"
            type="password"
            label="Пароль"
            placeholder="Пароль"
            ref={register}
            error={!!errors.password}
            errorMessage={errors?.password?.message}
          />

          <RegistrationInput
            mb="30px"
            name="password_confirmation"
            type="password"
            label="Підтвердіть пароль"
            placeholder="Підтвердіть пароль"
            ref={register}
            error={!!errors.password_confirmation}
            errorMessage={errors?.password_confirmation?.message}
          />

          <RegistrationButton
            fullWidth
            variant="contained"
          >
            Зареєструватись
          </RegistrationButton>

        </RegistrationForm>
      </ContainerAuth>
    </MainLayout>
  )
}

export default Registration
