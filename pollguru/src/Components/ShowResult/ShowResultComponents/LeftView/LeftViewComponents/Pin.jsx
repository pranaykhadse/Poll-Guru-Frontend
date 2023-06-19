import { Box } from "@mui/material"



function Pin({payload}) {
    return (

        <Box sx={{ textAlign: 'left' }}>
            Pin: {payload['id']}
        </Box>
    )
}

export default Pin