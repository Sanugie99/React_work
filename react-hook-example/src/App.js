import './App.css';
import { ShowHide } from './hook/Exam';
import Sol1 from './hook/Exam2'
import { useState } from "react"
import TimerFunction, {Cleanup, Count, UserList } from './hook/UseEffectEx';
import { Counter_ref, InputFocus, InputSample, PreviousValue } from './hook/UseRefEx';

function App() {
  return (
    <div className="App">
      <PreviousValue value = {10}/>
    </div>
  );
}

export default App;
