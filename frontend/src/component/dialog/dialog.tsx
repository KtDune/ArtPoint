import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { selectedValueProp } from '../masonry/masonryHook';

interface SimpleDialogProps {
  open: boolean;
  selectedValue: selectedValueProp;
  onClose: (value: string) => void;
}

function ImageDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  return (
    <Dialog onClose={() => onClose(selectedValue.userName || '')} open={open}>
      <Box sx={{ display: 'flex', height: '100%' }}>
        {/* Left side image */}
        <Box sx={{ width: '50%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {selectedValue.imageLink && (
            <img
              src={selectedValue.imageLink}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </Box>
        {/* Right side content */}
        <Box sx={{ width: '50%', padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {selectedValue.userAvatar && (
            <Avatar
              src={selectedValue.userAvatar}
              alt={selectedValue.userName || ''}
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
          )}
          {selectedValue.userName && (
            <Typography variant="h6" textAlign="center">
              {selectedValue.userName}
            </Typography>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}

export default ImageDialog;
