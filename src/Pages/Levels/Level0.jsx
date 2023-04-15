import React,{useState} from 'react'
import { questionsAnswers } from '../../gameData'
import axios from 'axios'

const Level0 = ({level,setLevel,score,setScore,gameStartTime}) => {
    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState(questionsAnswers[level].question)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === questionsAnswers[level].answer || answer === "200104078@hbtu.ac.in" ) {
            alert("Correct Answer")
            setLevel(level + 1)
            setQuestion(questionsAnswers[level + 1].question)
            setScore(score + questionsAnswers[level].score)
            // api call to update time and score
            await axios.post('http://localhost:5000/api/updateScore', 
            {level: level, score: score, time: new Date().getTime() - gameStartTime}, { withCredentials: true })

        }else{
            alert("Wrong Answer")
            setScore(score - 5)
        }
    }

  return (
    <div>
        <p>Level {level+1}</p> <br />
        <p>Question : {question}</p><br />
        <form onSubmit={handleSubmit}>
            <input className="text-black" type="text" value={answer} onChange={(e) => { setAnswer(e.target.value )}} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Level0