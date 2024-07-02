import React from 'react';
import { Box, TextField, FormControlLabel, Switch, Typography } from '@mui/material';

interface UserFormProps {
  user: string;
  setUser: (user: string) => void;
  balance: number;
  setBalance: (balance: number) => void;
  isDemo: boolean;
  setIsDemo: (isDemo: boolean) => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, setUser, balance, setBalance, isDemo, setIsDemo }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
      <TextField
        label="Ім'я користувача"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        variant="outlined"
        sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />
      <TextField
        label="Баланс"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
        type="number"
        variant="outlined"
        sx={{ mb: 2, input: { color: 'white' }, label: { color: 'white' } }}
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />
      <FormControlLabel
        control={<Switch checked={isDemo} onChange={(e) => setIsDemo(e.target.checked)} />}
        label={<Typography style={{ color: 'white' }}>Демо баланс</Typography>}
      />
    </Box>
  );
};

export default UserForm;
