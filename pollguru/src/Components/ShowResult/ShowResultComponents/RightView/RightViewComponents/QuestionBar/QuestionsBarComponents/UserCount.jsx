import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';


function UserCount() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AccountCircleIcon sx={{ fontSize: { xl: '40px', lg: '40px', md: '40px', sm: '40px', xs: '30px' } }} />
            <Box sx={{ fontSize: { xl: '28px', lg: '28px', md: '28px', sm: '28px', xs: '20px' } }}>0</Box>
        </Box>
    )
}

export default UserCount