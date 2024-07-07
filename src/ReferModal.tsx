import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

interface ReferModalProps {
  open: boolean;
  onClose: () => void;
}

const ReferModal: React.FC<ReferModalProps> = ({ open, onClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
      setError('All fields are required.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/refer', {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      });
      setReferrerName('');
      setReferrerEmail('');
      setRefereeName('');
      setRefereeEmail('');
      setError('');
      onClose();
    } catch (error) {
      setError('Failed to submit referral.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Course</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Your Name"
            value={referrerName}
            onChange={(e) => setReferrerName(e.target.value)}
          />
          <TextField
            label="Your Email"
            type="email"
            value={referrerEmail}
            onChange={(e) => setReferrerEmail(e.target.value)}
          />
          <TextField
            label="Friend's Name"
            value={refereeName}
            onChange={(e) => setRefereeName(e.target.value)}
          />
          <TextField
            label="Friend's Email"
            type="email"
            value={refereeEmail}
            onChange={(e) => setRefereeEmail(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReferModal;
