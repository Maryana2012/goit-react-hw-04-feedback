import React from "react"
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
   return <div className={css.ButtonsContainer}>
      {options.map(option => 
         <button type="button"
            key={option} name={option}
            className={css.Buttons}
            onClick={onLeaveFeedback}>{option}</button>)}
     </div>
}
FeedbackOptions.propTypes = {
   onLeaveFeedback: PropTypes.func.isRequired
}