import React,{useState} from 'react'
import { questionsAnswers } from '../../gameData'
import axios from 'axios'
import { TimeContext } from '../../TimeContext'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import Button from '../../components/Button'
import nick from '../../assets/nick.png'
import { API_URL, adminEmail } from '../../constants'

const Level0 = ({level,setLevel,score,setScore,gameStartTime}) => {
    const [answer, setAnswer] = useState("")
    // const [question, setQuestion] = useState(questionsAnswers[level].question)
    const {time} = useContext(TimeContext)
    const {setUser} = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === questionsAnswers[level].answer || answer === adminEmail ) {
            // api call to update time and score
            const updatedUser = await axios.post(`${API_URL}/api/update`, 
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
            setScore(score - 5*level)
        }
    }

  return (
    // <div>
    //     <p>Level {level+1}</p> <br />
    //     <p>Question : {questionsAnswers[level].question}</p><br />
        // <form onSubmit={handleSubmit}>
        //     <input 
        //     className='bg-[#FFFFFF] text-black font-black px-4 min-w-[280px] min-h-[62px] text-[25px]'
        //     type="text" value={answer} onChange={(e) => { setAnswer(e.target.value )}} />
        //     <Button text={"SUBMIT"}/>
        // </form>
    // </div>
    <div className='flex flex-col items-center justify-center'>
        <p className='text-[25px] font-black w-full text-center sm:min-w-[200px]'>Level {level+1}</p>
          <div className="relative border question-box sm:pl-20 sm:pt-8 p-3 mb-12">
            <p className='text-[20px] sm:text-[25px] font-bold -ml-3 p-2 sm:p-0'>
                {questionsAnswers[level].question.map((q) => {
                    return <p>{q}<br/><br/></p>
                    })}
                {
                    questionsAnswers[level].link &&
                    <a href={questionsAnswers[level].link} target="_blank" rel="noreferrer" className='text-[15px] sm:text-[25px] font-bold text-blue-600'>Visit Here</a>
                }
            </p>

            <img src={nick} alt="nick" className="absolute -bottom-12 -left-12 sm:-bottom-20 sm:-left-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"/>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center'>
            <input 
            className='bg-[#FFFFFF] text-black font-black min-w-[280px] min-h-[62px] text-[25px] sm:px-4'
            type="text" value={answer} onChange={(e) => { setAnswer(e.target.value )}} />
            <Button text={"SUBMIT"}/>
        </form>
    </div>
  )
}

export default Level0