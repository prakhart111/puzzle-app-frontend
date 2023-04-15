import React from 'react'
import { useContext } from 'react'
import { TimeContext } from '../TimeContext'


const Timer = ({gameStartTime,stop}) => {

    const [timeL, setTimeL] = React.useState(0)


    React.useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop)
                setTimeL(timeL + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeL]);


  return (
    <div>
        <p>Time : {timeL+gameStartTime}</p><br />
    </div>
  )
}

export default Timer