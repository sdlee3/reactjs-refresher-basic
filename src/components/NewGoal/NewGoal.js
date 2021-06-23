import React, { useState } from 'react';
import './NewGoal.css'

const NewGoal = props => {
	const [enteredText, setEnteredText] = useState('');

	const addNewGoalHandler = event => {
		//prevent the browser default sending a request to some backend
		//(which it shouldn't do here because we're not handling this on the
		//server side here, our server side here only serves that single index.html file,
		//it does not have any logic handle submissions)
		event.preventDefault();

		const newGoal = {
			id: Math.random().toString(),
			text: enteredText
		}

		setEnteredText('');
		props.onAddGoal(newGoal)

		
	}

	const textChangeHandler = event => {
		setEnteredText(event.target.value);
	}

	return <form className='new-goal' onSubmit={addNewGoalHandler}>
		<input type='text' value={enteredText} onChange={textChangeHandler} />
		<button type='submit'>Add Goal</button>
	</form>
}

export default NewGoal;