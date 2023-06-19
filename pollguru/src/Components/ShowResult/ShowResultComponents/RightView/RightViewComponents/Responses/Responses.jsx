import { Box } from "@mui/material"
import { memo, useState } from "react"
import ShortAnswer from "./ResponsesComponents/ShortAnswer"
import BarChart from "./ResponsesComponents/BarChart"
import Rating from "./ResponsesComponents/RatingChart"




function Responses({ payload, pollNo }) {
    console.log(payload)
    if (payload.pollingQuizQuestions?.length > 0 && payload.pollingQuizQuestions[pollNo - 1]?.pollingQuizQuestionType['id'] == 1) {
        return (
            <ShortAnswer pollingQuizQuestionAnswers={payload.pollingQuizQuestions[pollNo - 1]?.pollingQuizQuestionAnswers} />)
    } else if (payload.pollingQuizQuestions?.length > 0 && payload.pollingQuizQuestions[pollNo - 1]?.pollingQuizQuestionType['id'] == 2) {
        return (
            <BarChart pollingQuizQuestionAnswers={payload.pollingQuizQuestions[pollNo - 1]?.pollingQuizQuestionAnswers} />
        )
    }
    else {
        return (
            <Box color={'red'}>Not Matched</Box>
        )
    }
}

export default memo(Responses)