import { Box } from "@mui/material"


function PollQuestion({pollData,pollNo}) {
    return (
        <Box sx={{ fontSize: { xl: '23px', lg: '23px', md: '23px', sm: '23px', xs: '15px' } }}>
            {
                pollData[0]?.questions[pollNo - 1]['q']
            }
        </Box>
    )
}

export default PollQuestion