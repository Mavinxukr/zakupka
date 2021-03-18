import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SignupSchema } from '../../../../validation/formCreatPlan';
import styles from './FormCreatPlan.scss';
import TypeOfProcedure from '../../../TypeOfProcedure/TypeOfProcedure';
import ClassificationsBlock from '../ClassificationsBlock/ClassificationsBlock';
import { CreatPlanContext } from '../../../../context/CreatPlanContext';

const FormCreatPlan = () => {
  const planContext = React.useContext(CreatPlanContext);
  return (
    <>
      <Formik
        initialValues={{
          classification_description: '',
          classification_id: '',
          budget_amountNet: '',
          budget_description: '',
          budget_period_startDate: '',
          budget_period_endDate: '',
          project_name: '',
          project_id: '',
          currency: '',
          amount: '',
          budget_id: '',
          tender_procurementMethodType: planContext.tenderType,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(true);
            console.log(values);
            // dispatch(values);
          }, 111);
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form className={styles.form} onSubmit={handleSubmit}>
              <TextField
                error={
                  errors.classification_description &&
                  touched.classification_description
                }
                label="Класифікаційний опис"
                name="classification_description"
                value={values.classification_description}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.classification_description &&
                  touched.classification_description &&
                  errors.classification_description
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.classification_id && touched.classification_id}
                label="Код касифікації"
                name="classification_id"
                value={values.classification_id}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.classification_id &&
                  touched.classification_id &&
                  errors.classification_id
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.budget_amountNet && touched.budget_amountNet}
                label="Бюджет плана с НДС"
                name="budget_amountNet"
                value={values.budget_amountNet}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.budget_amountNet &&
                  touched.budget_amountNet &&
                  errors.budget_amountNet
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.budget_description && touched.budget_description}
                label="Описание к бюджету"
                name="budget_description"
                value={values.budget_description}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.budget_description &&
                  touched.budget_description &&
                  errors.budget_description
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={
                  errors.budget_period_startDate &&
                  touched.budget_period_startDate
                }
                label="Старт"
                name="budget_period_startDate"
                value={values.budget_period_startDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.budget_period_startDate &&
                  touched.budget_period_startDate &&
                  errors.budget_period_startDate
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={
                  errors.budget_period_endDate && touched.budget_period_endDate
                }
                label="Конец"
                name="budget_period_endDate"
                value={values.budget_period_endDate}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.budget_period_endDate &&
                  touched.budget_period_endDate &&
                  errors.budget_period_endDate
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.project_name && touched.project_name}
                label="Название плана"
                name="project_name"
                value={values.project_name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.project_name &&
                  touched.project_name &&
                  errors.project_name
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.project_id && touched.project_id}
                label="Код плана"
                name="project_id"
                value={values.project_id}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.project_id && touched.project_id && errors.project_id
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.currency && touched.currency}
                label="Валюта"
                name="currency"
                value={values.currency}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.currency && touched.currency && errors.currency
                }
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.amount && touched.amount}
                label="Бюджет плана"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.amount && touched.amount && errors.amount}
                margin="normal"
                variant="outlined"
              />
              <TextField
                error={errors.budget_id && touched.budget_id}
                label="Код бюджета"
                name="budget_id"
                value={values.budget_id}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.budget_id && touched.budget_id && errors.budget_id
                }
                margin="normal"
                variant="outlined"
              />
              <TypeOfProcedure
                event={planContext.selectTenderType}
                value={planContext.tenderType}
              />
              <ClassificationsBlock />
              <div className={styles.buttonBlock}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                >
                  Submits
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormCreatPlan;
