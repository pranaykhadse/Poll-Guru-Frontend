import { Box, Button } from "@mui/material"


function PrevContinueButtons({pollData,pollNo,isContinue,handlePrevious,handleContinue}) {
    return (
        <Box sx={{ position: 'fixed', bottom: { xl: '30px', lg: '30px', md: '30px', sm: '10px', xs: '10px' }, display: 'flex', justifyContent: 'space-between', width: { xl: '84vw', lg: '84vw', md: '84vw', sm: '100vw', xs: '100vw' }, padding: { xl: '0px', lg: '0px', md: '0px', sm: '10px', xs: '10px' }, boxSizing: 'border-box' }}>
            {
                pollNo == 1 ? <Button></Button> :
                    <Button sx={{ color: 'white', backgroundColor: isContinue ? '#0080FF' : '#003366', ":hover": { backgroundColor: '#0080FF' }, padding: { xl: '10px 25px', lg: '10px 25px', md: '10px 25px', sm: '7px 15px', xs: '4px 10px' } }} onClick={() => handlePrevious()}>Previous</Button>
            }{
                pollNo == pollData[0]?.questions?.length ? <Button></Button> :
                    <Button sx={{ color: 'white', backgroundColor: isContinue ? '#003366' : '#0080FF', ":hover": { backgroundColor: '#0080FF' }, padding: { xl: '10px 25px', lg: '10px 25px', md: '10px 25px', sm: '7px 15px', xs: '4px 10px' } }} onClick={() => handleContinue()}>Continue</Button>
            }
        </Box>
    )
}

export default PrevContinueButtons