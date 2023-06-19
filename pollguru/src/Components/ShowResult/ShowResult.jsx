import { Box, Button } from '@mui/material'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import LeftView from './ShowResultComponents/LeftView/LeftView'
import RightView from './ShowResultComponents/RightView/RightView'

function ShowResult() {
    let intervalId = useRef(null)
    let [payload,setPayload] = useState([])
    let [pollNo, setPollNo] = useState(1)
    let [timer, setTimer] = useState(null)
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [windowResize, setWindowResize] = useState(false)
    let [isContinue,setIsContinue] = useState(false)

    console.log(payload)

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

    useEffect(()=>{
        fetch('https://staging.gamificationguru.com/api/web/poll-guru/index?id=2374&user_id=21',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            setPayload(res.payload)
        })
    },[])

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
            <LeftView payload={payload} pollNo={pollNo} windowWidth={windowWidth} windowHeight={windowHeight} handlePollNo={handlePollNo} handleTenSecTimer={handleTenSecTimer} handleThirtySecTimer={handleThirtySecTimer} handleSixtySecTimer={handleSixtySecTimer} handleHide={handleHide} />
            <RightView payload={payload} pollNo={pollNo} timer={timer} isContinue={isContinue} handlePrevious={handlePrevious} handleContinue={handleContinue} />
        </Box>
    )
}

export default ShowResult