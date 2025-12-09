import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LoginForm() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 4,
        mt: 4,
      }}
    >
      {/* LOGIN CARD */}
      <Card sx={{ width: 350 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
          />

          <Button
            variant="contained"
            sx={{ mt: 2 }}
          >
            LOGIN
          </Button>
        </CardContent>
      </Card>

      {/* SIGN UP CARD */}
      <Card sx={{ width: 350 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Sign Up
          </Typography>

          <TextField
            fullWidth
            type="email"
            label="Email"
            margin="normal"
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            REGISTER
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;