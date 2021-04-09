import { toast } from 'react-toastify';

export const alertError = (error) => {
  switch (error.status) {
    case 401: {
      toast.error('Не вірний email або пароль');
      return;
    }
    default: {
      toast.error(error.data.message);
    }
  }
}