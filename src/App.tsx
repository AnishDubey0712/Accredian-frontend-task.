import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ReferModal from './ReferModal';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box textAlign="center" my={5}>
        <Typography variant="h2" gutterBottom>
          Refer & Earn
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </Box>
      <ReferModal open={open} onClose={handleClose} />
    </Container>
  );
};

export default App;
