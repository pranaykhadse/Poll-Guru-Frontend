import { Box, Button } from '@mui/material'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import LeftView from './ShowResultComponents/LeftView/LeftView'
import RightView from './ShowResultComponents/RightView/RightView'

function ShowResult() {
    let intervalId = useRef(null)
    let [pollData, setPollData] = useState([])
    let [pollNo, setPollNo] = useState(1)
    let [timer, setTimer] = useState(null)
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [windowResize, setWindowResize] = useState(false)
    let [isContinue,setIsContinue] = useState(false)

    if (timer == -1) {
        clearInterval(intervalId.current)
        setTimer(null)
        alert('Timeout')
    }

    function handlePollNo(i) {
        setPollNo(i + 1)
        handleHide()
    }

    function handleTenSecTimer() {
        if (intervalId.current != null) {
            clearInterval(intervalId.current)
        }
        setTimer(10)
        intervalId.current = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
    }
    function handleThirtySecTimer() {
        if (intervalId.current != null) {
            clearInterval(intervalId.current)
        }
        setTimer(30)
        intervalId.current = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
    }
    function handleSixtySecTimer() {
        if (intervalId.current != null) {
            clearInterval(intervalId.current)
        }
        setTimer(60)
        intervalId.current = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
    }
    function handleHide() {
        clearInterval(intervalId.current)
        setTimer(null)
    }

    function handlePrevious() {
        setPollNo(prev => prev - 1)
        setIsContinue(true)
    }
    function handleContinue() {
        setPollNo(next => next + 1)
        setIsContinue(false)
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/poll?pin=123456`).then((res) => {
            setPollData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    // useEffect(()=>{
    //     setWindowHeight(window.innerHeight)
    //     setWindowWidth(window.innerWidth)
    // },[windowResize])

    // function handleWindowResize(){
    //     setWindowResize(!windowResize)
    // }

    // window.addEventListener('resize',handleWindowResize)


    return (
        <Box sx={{ color: 'white', fontSize: '24px', fontFamily: 'verdana', height: '100vh', overflow: 'scroll' }}>
            <LeftView pollData={pollData} pollNo={pollNo} windowWidth={windowWidth} windowHeight={windowHeight} handlePollNo={handlePollNo} handleTenSecTimer={handleTenSecTimer} handleThirtySecTimer={handleThirtySecTimer} handleSixtySecTimer={handleSixtySecTimer} handleHide={handleHide} />
            <RightView pollData={pollData} pollNo={pollNo} timer={timer} isContinue={isContinue} handlePrevious={handlePrevious} handleContinue={handleContinue} />
        </Box>
    )
}

export default ShowResult