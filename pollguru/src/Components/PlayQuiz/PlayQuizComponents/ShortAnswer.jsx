import { Box } from "@mui/material"
import { useState } from "react"



function ShortAnswer(){
    let [ansData,setAnsData] = useState(['Pranay','Akshay','Akash','Lokesh','Madhur'])
    return(
        <Box sx={{width:'70vw',margin:'auto'}}>
            <Box component={'h2'} sx={{textAlign:'center'}}>Responses</Box>
            <Box>

            </Box>
        </Box>
    )
}

export default ShortAnswer