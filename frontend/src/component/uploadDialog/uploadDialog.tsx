import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

interface UploadImageDialogProps {
  id: string;
  keepMounted: boolean;
  open: boolean;
  onClose: (file?: File) => void;  
}

export function UploadImageDialog(props: UploadImageDialogProps) {
  const { onClose, open, ...other } = props;
  const [file, setFile] = React.useState<File | null>(null);
  const [fileName, setFileName] = React.useState<string>('');

  React.useEffect(() => {
    if (!open) {
      setFile(null);
      setFileName('');
    }
  }, [open]);

  const handleCancel = () => {
    onClose(); 
  };

  const handleOk = () => {
    onClose(file || undefined); 
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFile(null);
      setFileName('');
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files ? event.dataTransfer.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle>Upload Image</DialogTitle>
      <DialogContent dividers>
        <Box
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          sx={{
            border: '2px dashed #ccc',
            padding: '16px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            id="upload-input"
          />
          <label htmlFor="upload-input">
            <Box>
              Click to select a file or drag it here
            </Box>
          </label>
          {file && <p>{fileName}</p>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk} disabled={!file}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
