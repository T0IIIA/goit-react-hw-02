import s from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positive }) => {
  const { good, neutral, bad } = feedback

  if(totalFeedback === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className={s.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

export default Feedback