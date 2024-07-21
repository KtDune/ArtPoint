import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useUploadImage } from './floatActionBtnHook';
import { UploadImageDialog } from '../uploadDialog/uploadDialog';

export default function FloatingActionButtons() {

    const {open, handleUploadImageOpen, handleUploadImageClose} = useUploadImage()

    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add" onClick={handleUploadImageOpen}>
                <AddIcon />
            </Fab>
            <UploadImageDialog 
            id="uploadImg" 
            open={open} 
            onClose={handleUploadImageClose} 
            keepMounted
            />
        </Box>
    );
}
