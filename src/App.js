import './App.css';
import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

//Modern react - function based component
function App() {

  //[initial state snapshot, function to update state snapashot] 
  const [courseGoals, setCourseGoal] = useState([
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other student in the course Q&A' }
  ]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoal(courseGoals.concat(newGoal));

    //prevCourseGoals(bulletproof will always work)
    // - functions which receive the latest state,
    // React scheduele all these function call and guarantee executed 
    //in the right order, so even that the state update was deffered, 
    //by the time the update thereafter executes, 
    //it guarantee you the first one executed as well
    setCourseGoal(prevCourseGoals => prevCourseGoals.concat(newGoal)); 
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>

      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />

    </div>
  );
}

//react class component 
// class App extends React.Component {
//   render() {
//      {/* {React.createElement('h1', { title: 'This works!' }, 'Hi, this is react element!')} */}
//     return <h1 title="This works too!">Hi, this is react JSX!</h1>
//   }
// }

export default App;
