import s from './App.module.css'
import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem('feedback'))
    if(savedData) {
      return savedData
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  })

  const { good, neutral, bad } = feedback
  const totalFeedback = good + neutral + bad
  const positive = Math.round((good / totalFeedback) * 100)

  const updateFeedback = (feedbackType) => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] +1
    }))
   }

   const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  return (
    <div className={s.container}>

    <Description />
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} handleReset={handleReset}/>
    <Feedback feedback={feedback} totalFeedback={totalFeedback} positive={positive}/>

    </div>
  )
}

export default App
