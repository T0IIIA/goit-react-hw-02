import s from './Options.module.css'

const Options = ({updateFeedback, handleReset, totalFeedback}) => {

  const handleButtonClose = () => {
    return false
  }

  return (
    <div className={s.container}>

      <button onClick={() => updateFeedback('good') }> Good </button>
      <button onClick={() => updateFeedback('neutral') }> Neutral </button>
      <button onClick={() => updateFeedback('bad') }> Bad </button>
      {totalFeedback>0 && <button onClick={() => {handleReset(); handleButtonClose() }}> Reset </button>}
    </div>
  )
}

export default Options