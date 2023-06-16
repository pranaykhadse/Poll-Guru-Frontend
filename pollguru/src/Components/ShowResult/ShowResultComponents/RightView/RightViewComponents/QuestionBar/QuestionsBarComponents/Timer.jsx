import { Box } from "@mui/material"



function Timer({timer}) {
    return (
        <Box sx={{ color: 'yellow', backgroundColor: timer != null ? 'black' : 'none', height: { xl: '40px', lg: '40px', md: '40px', sm: '40px', xs: '30px' }, width: { xl: '40px', lg: '40px', md: '40px', sm: '40px', xs: '30px' }, fontSize: { xl: '23px', lg: '23px', md: '23px', sm: '23px', xs: '15px' }, paddingTop: '5px', borderRadius: '50%', boxSizing: 'border-box' }}>{timer}</Box>
    )
}

export default Timer