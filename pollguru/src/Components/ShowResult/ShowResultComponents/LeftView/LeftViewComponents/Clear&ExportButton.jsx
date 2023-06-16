import { Box, Button } from "@mui/material";


function ClearExportButton() {
    return (

        <Box sx={{ textAlign: 'center', display: { xl: 'block', lg: 'block', md: 'block', sm: 'flex', xs: 'flex' }, flexDirection: 'column' }}>
            <Button sx={{ fontSize: '10px', margin: { xl: '10px', lg: '10px', md: '10px', sm: '10px 0px 0px 0px', xs: '10px 0px 0px 0px' }, cursor: 'pointer', color: 'white', backgroundColor: 'red', ":hover": { color: '#00FFFF' }, padding: { xl: '6px 8px', lg: '6px 8px', md: '6px 8px', sm: '6px 8px', xs: '4px 4px' }, ":hover": { backgroundColor: '#CA0909' } }}>
                Clear Answers
            </Button>
            <Button sx={{ fontSize: '10px', margin: { xl: '0px', lg: '0px', md: '0px', sm: '10px 0px 0px 0px', xs: '10px 0px 0px 0px' }, cursor: 'pointer', color: 'white', backgroundColor: 'orange', ":hover": { color: '#00FFFF' }, padding: { xl: '6px 8px', lg: '6px 8px', md: '6px 8px', sm: '6px 8px', xs: '4px 4px' }, ":hover": { backgroundColor: '#D18502' } }}>
                Export Poll
            </Button>
        </Box>
    )
}

export default ClearExportButton