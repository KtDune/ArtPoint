import { useState } from "react";

export const useUploadImage = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleUploadImageOpen = () => {
        setOpen(true)
    }

    const handleUploadImageClose = () => {
        setOpen(false)
    }

    return {open, handleUploadImageOpen, handleUploadImageClose}

}