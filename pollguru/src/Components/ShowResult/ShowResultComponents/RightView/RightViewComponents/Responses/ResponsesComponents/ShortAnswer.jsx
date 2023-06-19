import { Box } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"



function ShortAnswer({pollingQuizQuestionAnswers}) {
    return (
        <Box sx={{ margin: '20px auto', boxShadow:'2px 2px 10px grey', padding:'20px 50px', boxSizing:'border-box', height:'71vh' }}>
            <Box component={'h2'} sx={{ margin: '0px auto 50px', color: '#000033', textAlign: 'center' }}>Responses</Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', justifyContent: 'space-around', rowGap: '50px', columnGap: '50px', color: 'white' }}>
                {
                    pollingQuizQuestionAnswers && pollingQuizQuestionAnswers.map((el) => {
                        return <Box key={el.id} sx={{ textAlign: 'center', backgroundColor: `rgb(${Math.ceil(Math.random() * 255)} ${Math.ceil(Math.random() * 255)} ${Math.ceil(Math.random() * 255)})`, height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50px' }}>{el.answer}</Box>
                    })
                }
            </Box>
        </Box>
    )
}

export default ShortAnswer