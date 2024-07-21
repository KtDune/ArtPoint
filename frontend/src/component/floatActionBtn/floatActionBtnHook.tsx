import { useState } from "react";

export const useUploadImage = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleUploadImageOpen = () => {
        setOpen(true)
    }

    const handleUploadImageClose = (file?: File) => {
        setOpen(false)

        if (File) {
            
        }
    }

    return {open, handleUploadImageOpen, handleUploadImageClose}

}