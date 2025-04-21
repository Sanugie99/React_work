import './App.css';
import { ShowHide } from './hook/Exam';
import Sol1 from './hook/Exam2'
import { useState } from "react"
import TimerFunction, {Count, UserList } from './hook/UseEffectEx';
import { Counter_ref, InputFocus, InputSample } from './hook/UseRefEx';

function App() {
  return (
    <div className="App">
      <InputSample />
    </div>
  );
}

export default App;
