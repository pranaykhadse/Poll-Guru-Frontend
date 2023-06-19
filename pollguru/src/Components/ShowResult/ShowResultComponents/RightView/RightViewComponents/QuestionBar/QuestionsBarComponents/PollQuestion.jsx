import { Box } from "@mui/material"


function PollQuestion({payload,pollNo}) {
    return (
        <Box sx={{ fontSize: { xl: '23px', lg: '23px', md: '23px', sm: '23px', xs: '15px' } }}>
            {
                payload.pollingQuizQuestions?.[pollNo - 1]['question']
            }
        </Box>
    )
}

export default PollQuestion