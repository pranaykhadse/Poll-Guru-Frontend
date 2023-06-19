import { Box } from "@mui/material"
import PrevContinueButtons from "./RightViewComponents/Prev&continueButtons"
import QuestionBar from "./RightViewComponents/QuestionBar/QuestionBar"
import Responses from "./RightViewComponents/Responses/Responses"



function RightView({payload,pollNo,timer,isContinue,handlePrevious,handleContinue}) {
    console.log(payload)
    return (
        <Box sx={{ marginLeft: { xl: '15vw', lg: '15vw', md: '15vw', sm: '0px', xs: '0px' }, marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '25vh', xs: '25vh' }, width: { xl: '84vw', lg: '84vw', md: '84vw', sm: '100vw', xs: '100vw' } }}>
            <QuestionBar payload={payload} pollNo={pollNo} timer={timer} />
            <Responses payload={payload} pollNo={pollNo}/>
            <PrevContinueButtons payload={payload} pollNo={pollNo} isContinue={isContinue} handlePrevious={handlePrevious} handleContinue={handleContinue} />
        </Box>
    )
}

export default RightView