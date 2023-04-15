import React,{useState} from 'react'
import { questionsAnswers } from '../../gameData'
import axios from 'axios'
import { TimeContext } from '../../TimeContext'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import Button from '../../components/Button'



const Level0 = ({level,setLevel,score,setScore,gameStartTime}) => {
    const [answer, setAnswer] = useState("")
    // const [question, setQuestion] = useState(questionsAnswers[level].question)
    const {time} = useContext(TimeContext)
    const {setUser} = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === questionsAnswers[level].answer || answer === "200104078@hbtu.ac.in" ) {
            // api call to update time and score
            const updatedUser = await axios.post('http://localhost:5000/api/update', 
            {   level: level+1,
                score : score + questionsAnswers[level].score,
                time,
            }, { withCredentials: true })
            
            setLevel(level + 1)
            // setQuestion(questionsAnswers[level + 1].question)
            setScore(score + questionsAnswers[level].score)

            setUser(updatedUser.data)

            console.log(updatedUser.data);
            alert("Correct Answer")
        }else{
            alert("Wrong Answer")
            setScore(score - 5)
        }
    }

  return (
    <div>
        <p>Level {level+1}</p> <br />
        <p>Question : {questionsAnswers[level].question}</p><br />
        <form onSubmit={handleSubmit}>
            <input 
            className='bg-[#FFFFFF] text-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]'
            type="text" value={answer} onChange={(e) => { setAnswer(e.target.value )}} />
            <Button text={"SUBMIT"}/>
        </form>
    </div>
  )
}

export default Level0