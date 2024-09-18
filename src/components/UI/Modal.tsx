import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { ReactNode } from 'react';

type ModalProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, children, isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>
        <p className="text-2xl font-bold">{title}</p>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>;
    </Dialog>
  );
};

export default Modal;
