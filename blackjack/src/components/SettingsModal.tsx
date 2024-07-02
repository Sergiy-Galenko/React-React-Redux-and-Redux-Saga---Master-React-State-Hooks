import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Налаштування
        </Typography>
        <TextField
          fullWidth
          label="Максимальна ставка"
          type="number"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Мінімальна ставка"
          type="number"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Час очікування"
          type="number"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Button onClick={onClose} variant="contained" sx={{ mt: 2 }}>
          Закрити
        </Button>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
