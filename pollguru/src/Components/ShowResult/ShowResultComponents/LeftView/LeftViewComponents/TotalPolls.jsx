import { Box } from "@mui/material"


function TotalPolls({pollData,pollNo,windowWidth,windowHeight,handlePollNo,}) {
    return (
        <Box sx={{ textAlign: 'center', marginTop: { xl: '10px', lg: '10px', md: '10px', sm: '0px', xs: '0px' }, display: windowHeight > 656 && windowWidth > 900 ? 'block' : 'grid', gridTemplateColumns: { xl: 'repeat(3,1fr)', lg: 'repeat(3,1fr)', md: 'repeat(3,1fr)', sm: 'repeat(3,1fr)', xs: 'repeat(3,1fr)' }, justifyContent: 'space-between', columnGap: { xl: '20px', lg: '20px', md: '20px', sm: '20px', xs: '10px' } }}>
            {
                pollData.length == 1 && pollData[0].questions.map((el, i) => {
                    return (
                        <Box sx={{ width: windowHeight > 656 && windowWidth > 900 ? pollNo == i + 1 ? '46px' : '23px' : '23px', height: windowHeight > 656 && windowWidth > 900 ? pollNo == i + 1 ? '46px' : '23px' : '23px', margin: 'auto', fontSize: windowHeight > 656 && windowWidth > 900 ? pollNo == i + 1 ? '30px' : '14px' : '14px', borderRadius: '50%', boxSizing: 'border-box', paddingTop: '2px', color: pollNo == i + 1 ? windowHeight > 656 && windowWidth > 900 ? 'black' : 'white' : 'black', backgroundColor: pollNo == i + 1 ? windowHeight > 656 && windowWidth > 900 ? '#CED1D1' : 'brown' : '#CED1D1', margin: '8px auto', cursor: 'pointer' }} onClick={() => handlePollNo(i)}>{i + 1}</Box>
                    )
                })
            }
        </Box>
    )
}

export default TotalPolls