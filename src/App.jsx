  import { useEffect, useState } from 'react'
  import './App.css'
  import SVG from './assets/workout.svg'
  import CountUp from 'react-countup';


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

    const parsedHeight = parseFloat(height.replace(',', '.'));
    const bmi = weight / (parsedHeight * parsedHeight);
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

    const handleHeightChange = (e) => {
      let value = e.target.value;
      value = value.replace(/\D/g, '');
      if (value.length > 1) {
        value = `${value[0]},${value.slice(1)}`;
      }
      setHeight(value);
    };

    return (
      
      <main className='container'>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100;400;800&display=swap" rel="stylesheet"/>

          <div className='bmiCalculator'>
            <div>
              <h1 className='calculatorTitle'>Calculator - BMI</h1>
            </div>

            <form className='inputArea'>
              
            <div className='heightInput'>

            <label>Your Height:</label>
            <div className='inputStyle'>
              <input type='text'
              value={height}
              onChange={handleHeightChange}
              >
              </input>
              <span>m</span>
            </div>

            </div>

            <div className='weightInput'>

            <label>Your Weight</label>
            <div className='inputStyle'>
              <input type='number'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}>
            
              </input>
              <span>kg</span>
            </div>

            </div>
            </form>

            <div className='buttons'>
            <button className='calculateButton button' onClick={()=>{
              calculateBMI();
            }}>Calculate</button>
            <button className='clearButton button' onClick={clear}>Clear</button>
            </div>
          
            <div className='resultArea'>

              <div className='result'>
                    <p className='yourBMI'>Your BMI is:</p>

                    <h1>
                    <CountUp style={{ color: resultColor}} start={0} end={result} duration={2} decimal="." decimals={2} />
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
