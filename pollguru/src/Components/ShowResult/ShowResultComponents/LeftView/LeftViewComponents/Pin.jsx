import { Box } from "@mui/material"



function Pin({pollData}) {
    return (

        <Box sx={{ textAlign: 'left' }}>
            Pin: {pollData[0]?.pin}
        </Box>
    )
}

export default Pin