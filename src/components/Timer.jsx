import React from 'react'


const Timer = ({gameStartTime,stop}) => {

    const [time, setTime] = React.useState(0)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop)
                setTime(time + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);


  return (
    <div>
        <p>Time : {time+gameStartTime}</p><br />
    </div>
  )
}

export default Timer