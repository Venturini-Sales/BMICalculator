  import { useState } from 'react'
  import './App.css'
  import SVG from './assets/workout.svg'



  function App() {

  const[height, setHeight] = useState('');
  const[weight, setWeight] = useState('');
  const[result, setResult] = useState(0);
  const[resultColor, setResultColor] = useState('white');

  const calculateBMI = () => {
    
    if (height <= 0) {
      alert("Enter your height");
      return;
    }

    if (weight <= 0) {
      alert("Enter your weight");
      return;
    }

    const bmi = weight / (height * height);
    const formattedBMI = bmi.toFixed(2);
    setResult(+formattedBMI)

    if (bmi < 18.5) {
      setResultColor('orange')
    }

    else if (bmi >= 18.5 && bmi < 25) {
      setResultColor('green');
    }

    else if (bmi >= 25 && bmi < 30) {
      setResultColor('lightcoral');
    }

    else {
      setResultColor('crimson');
    }

  }

    const clear = () => {
      setHeight('')
      setWeight('')
      setResult(0)
      setResultColor('white')
    }


    return (
      
      <main className='container'>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100;400;800&display=swap" rel="stylesheet"/>

          <div className='bmiCalculator'>
            <div>
              <h1 className='calculatorTitle'>Calculator - BMI</h1>
            </div>

            <form className='inputArea'>
              
            <div className='heightInput'>

            <label>Your Height:</label>
            <div className='inputStyle'>
              <input type='number'
              inputMode='numeric'
              step="any"
              value={height}
              onChange={(e) => setHeight(+e.target.value)}
              >
            
              </input>
              <spam>m</spam>
            </div>

            </div>

            <div className='weightInput'>

            <label>Your Weight</label>
            <div className='inputStyle'>
              <input type='number'
              inputMode='numeric'
              step="any"
              value={weight}
              onChange={(e) => setWeight(+e.target.value)}>
            
              </input>
              <spam>kg</spam>
            </div>

            </div>
            </form>

            <div className='buttons'>
            <button className='calculateButton button' onClick={calculateBMI}>Calculate</button>
            <button className='clearButton button' onClick={clear}>Clear</button>
            </div>
          
            <div className='resultArea'>

              <div className='result'>
                    <p className='yourBMI'>Your BMI is:</p>

                    <h1 style={{ color: resultColor}}>
                      {result}
                    </h1>

              </div>

              <div className='bmiScales'>

                  <div className='bmiScale scaleUnder'>
                    <h4>Underweight</h4>
                    <p>&lt; 18.5</p>
                  </div>

                  <div className='bmiScale scaleNormal'>
                  <h4>Normal</h4>
                    <p>18.5 — 25</p>
                  </div>

                  <div className='bmiScale scaleOver'>
                  <h4>Overweight</h4>
                    <p>25 — 30</p>
                  </div>

                  <div className='bmiScale scaleObese'>
                  <h4>Obese</h4>
                    <p>≥ 30</p>
                  </div>

              </div>
              
            </div>
          </div>

          <div id='workOutSvg'>
            <img src={SVG}/>
          </div>

    </main>
    )
  }

  export default App
