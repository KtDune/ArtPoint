import {useState} from 'react'

export const useAnchorElNav = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return {anchorElNav, handleOpenNavMenu, handleCloseNavMenu}

}

export const useAnchorElUser = () => {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
        null
    );
    
    
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    
    
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return {anchorElUser, handleOpenUserMenu, handleCloseUserMenu}

}





