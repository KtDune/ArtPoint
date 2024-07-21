import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import QuiltedImageList from '../../component/quiltedImageList/quiltedImageList';

const ProfileSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#2E3B4E', 
  color: '#fff',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 11.16vh)'
}));

export default function Dashboard() {
  return (
    <Box height='calc(100vh - 11.18vh)'>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ProfileSection>
            <Avatar 
              alt="Profile Picture" 
              src="profile-pic-url.jpg" 
              sx={{ width: 100, height: 100, mb: 2 }} 
            />
            <Typography variant="h6">John Doe</Typography>
            <Typography variant="body2">San Francisco, CA</Typography>
          </ProfileSection>
        </Grid>
        <Grid item xs={8}>
            <QuiltedImageList />
        </Grid>
      </Grid>
    </Box>

    </Box>
  );
}
