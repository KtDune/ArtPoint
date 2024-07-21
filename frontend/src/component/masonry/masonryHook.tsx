import { useState } from "react";

export interface selectedValueProp {
    imageLink: string | null;
    userName: string | null;
    userAvatar: string | null
}

export const useDialogOpen = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<selectedValueProp>(
        {
            imageLink: null,
            userName: null,
            userAvatar: null
        }
    );
  
    const handleClickOpen = (value: selectedValueProp) => {
      setOpen(true);
      setSelectedValue(value)
    };

    const handleClickClose = () => {

        setOpen(false);
        setSelectedValue({
            imageLink: null,
            userName: null,
            userAvatar: null
        })
    }

    return {open, handleClickOpen, selectedValue, handleClickClose}


}