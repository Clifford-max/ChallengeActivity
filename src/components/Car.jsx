import { Paper, Typography, Box } from '@mui/material';

function Car() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">
          This is a Car Component
        </Typography>
      </Paper>
    </Box>
  );
}

export default Car;