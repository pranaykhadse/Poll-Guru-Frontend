import { Box } from "@mui/material"
import QR_Code from '../../../../../Images/poll_guru_qr-code.png'


function QRCode(){
    return( 
        <Box component={'img'} src={QR_Code} sx={{ width: { xl: '150px', lg: '130px', md: '100px', sm: '90px', xs: '70px' },marginTop:'10px' }}></Box>
    )
}

export default QRCode