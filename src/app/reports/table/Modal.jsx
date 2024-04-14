
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function MiModal(props) {
 return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>
          Título del Modal
        </DialogTitle>
        <DialogContent>
          Contenido del modal.
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
 );
}

export default MiModal;