import { Box } from "@mui/material"
import Timer from "./QuestionsBarComponents/Timer"
import PollQuestion from "./QuestionsBarComponents/PollQuestion"
import UserCount from "./QuestionsBarComponents/UserCount"



function QuestionBar({pollData,pollNo,timer}) {
    return (
        <Box sx={{ height: '80px', backgroundColor: 'teal', boxSizing: 'border-box', marginTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <Timer timer={timer}/>
            <PollQuestion pollData={pollData} pollNo={pollNo}/>
            <UserCount/>
        </Box>
    )
}

export default QuestionBar