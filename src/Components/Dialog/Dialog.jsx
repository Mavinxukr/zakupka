import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function MyDialog(props) {
  const theme = useTheme();

  const handleClose = () => {
    props.opening(false);
  };

  return (
    <div>
      <Dialog
        maxWidth={'auto'}
        open={props.status}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {props.title || ''}
        </DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={props.success} variant="contained" color="primary">
            Підтвердити
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Відхилити
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyDialog;
