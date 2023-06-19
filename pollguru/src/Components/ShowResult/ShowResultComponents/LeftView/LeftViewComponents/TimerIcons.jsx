import { Box } from "@mui/material"
import TenSecTimer from '../../../../../Images/10_Second_Timer.png'
import ThirtySecTimer from '../../../../../Images/30_Second_Timer.png'
import SixtySecTimer from '../../../../../Images/60_Second_Timer.png'
import Hide from '../../../../../Images/Hide.png'


function TimerIcons({handleTenSecTimer,handleThirtySecTimer,handleSixtySecTimer,handleHide}) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: { xl: '0px', lg: '0px', md: '0px', sm: '10px', xs: '6px' }, marginTop: { xl: '10px', lg: '10px', md: '10px', sm: '5px', xs: '5px' } }}>
            <Box component={'img'} src={TenSecTimer} sx={{ width: { xl: '25px', lg: '25px', md: '23px', sm: '15px', xs: '15px' }, cursor: 'pointer' }} onClick={() => handleTenSecTimer()}></Box>
            <Box component={'img'} src={ThirtySecTimer} sx={{ width: { xl: '25px', lg: '25px', md: '23px', sm: '15px', xs: '15px' }, cursor: 'pointer' }} onClick={() => handleThirtySecTimer()}></Box>
            <Box component={'img'} src={SixtySecTimer} sx={{ width: { xl: '25px', lg: '25px', md: '23px', sm: '15px', xs: '15px' }, cursor: 'pointer' }} onClick={() => handleSixtySecTimer()}></Box>
            <Box component={'img'} src={Hide} sx={{ width: { xl: '25px', lg: '25px', md: '23px', sm: '15px', xs: '15px' }, cursor: 'pointer' }} onClick={() => handleHide()}></Box>
        </Box>
    )
}

export default TimerIcons