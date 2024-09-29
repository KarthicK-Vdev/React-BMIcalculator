import { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight]=useState("")
  const [weight, setWeight]=useState("")
  const [bmi, setBmi]= useState(null)
  const [bmiStatus, setBmiStatus]=useState("")
  const [errorMsg, setErrorMsg]=useState("")

  const calculateBmi=()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight)
    if(isValidHeight && isValidWeight)
    {
      const heightInMeters = height/100;
      const bmiValue=weight/(heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2))
      if(bmiValue<18.5)
      {
        setBmiStatus("UnderWeight")
      }
      else if(bmiValue >=18.5 && bmiValue <24.9)
      {
        setBmiStatus("Normal Weight")
      }
      else if(bmiValue >=25 && bmiValue < 29.9)
      {
        setBmiStatus("Overweight")
      }
      else
      {
        setBmiStatus("Obese")
      }
      setErrorMsg("")
    }
    else
    {
      setBmi(null)
      setBmiStatus("")
      setErrorMsg(" Please enter valid numeric values for height and weight")
    }
  }

  const clearAll=()=>{
    setHeight("")
    setWeight("")
  }
  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>BMI Calculator</h1>
          {errorMsg && (<p className='error'>Please enter valid numeric values for height and weight</p>)}
          <div className='input-container'>
            <label htmlFor='height'>Height (cm):</label>
            <input type='text' id="height" value={height}
            onChange={(e)=>setHeight(e.target.value)}
            ></input>
          </div>
          <div className='input-container'>
            <label htmlFor='weight' value={weight}>Weight (cm):</label>
            <input type='text' id="weight"
             onChange={(e)=>setWeight(e.target.value)}
            ></input>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear all</button>
          {bmi!==null && (
            <div className='result'>
            <p>Your BMI value is :{bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
