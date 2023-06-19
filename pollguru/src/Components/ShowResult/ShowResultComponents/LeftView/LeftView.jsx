import { Box } from "@mui/material"
import ClearExportButton from "./LeftViewComponents/Clear&ExportButton"
import QRCode from "./LeftViewComponents/QR-Code"
import TimerIcons from "./LeftViewComponents/TimerIcons"
import TotalPolls from "./LeftViewComponents/TotalPolls"
import Pin from "./LeftViewComponents/Pin"


function LeftView({payload,pollNo,windowWidth,windowHeight,handlePollNo,handleTenSecTimer,handleThirtySecTimer,handleSixtySecTimer,handleHide}) {
    return (

        <Box sx={{ backgroundColor: '#2A416E', boxSizing: 'border-box', padding: { xl: '28px', lg: '20px', md: '15px', sm: '10px', xs: '10px' }, position: 'fixed', top: '0px', left: '0px', width: { xl: '14vw', lg: '14vw', md: '14vw', sm: '100vw', xs: '100vw' }, height: { xl: '100vh', lg: '100vh', md: '100vh', sm: '25vh', xs: '25vh' }, display: 'flex', flexDirection: { xl: 'column', lg: 'column', md: 'column', sm: 'row', xs: 'row' }, justifyContent: 'space-between', gap: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '10px' } }}>
            <Box sx={{ textAlign: 'left', display: { xl: 'block', lg: 'block', md: 'block', sm: 'flex', xs: 'flex' }, width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '60vw', xs: '80vw' }, justifyContent: { xl: 'space-between', lg: 'space-between', md: 'space-between', sm: 'space-between', xs: 'space-evenly' }, gap: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '10px' } }}>
                <Box>
                    <Pin payload={payload} />
                    <ClearExportButton />
                </Box>
                <TotalPolls payload={payload} pollNo={pollNo} windowWidth={windowWidth} windowHeight={windowHeight} handlePollNo={handlePollNo} />
            </Box>
            <Box>
                <Box sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'flex', xs: 'flex' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <QRCode />
                    <TimerIcons handleTenSecTimer={handleTenSecTimer} handleThirtySecTimer={handleThirtySecTimer} handleSixtySecTimer={handleSixtySecTimer} handleHide={handleHide} />
                </Box>
            </Box>
        </Box>
    )
}

export default LeftView