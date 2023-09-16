import './App.css';
import React, {useState} from 'react';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [result, setResult] = useState('');


  function handleCalculation(e) {
    let opration = e.target.textContent;

    console.log(typeof opration);

    if (num1 === '') {
      setError('Enter num 1')
      setSuccess('');
      return;
    }
    if (num2 === '') {
      setError('Enter num 2')
      setSuccess('');
      return;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError('Enter numarical values');
      setSuccess('');
      return;
    }

    setNum1(Number(num1));
    setNum2(Number(num2));

    setError('');
    setSuccess("Success");

    switch (opration) {
      case '+':
        setResult(Number(num1 + num2));
        break;
    
      case '-':
        setResult(Number(num1 - num2));
        break;
    
      case '*':
        setResult(Number(num1 * num2));
        break;
        
      case '/':
        setResult(Number(num1 / num2));
        break;
    
      default:
        setError("Not a valid operation");
        setSuccess('');
        break;
    }
    
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
         <div className="relative w-96 ">
              <div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-pink-600 via-pink-600 to-purple-600 opacity-75 blur-2xl"
              ></div>
              <div
                className="relative flex flex-col gap-6 h-auto w-96 items-center justify-start p-12 rounded-3xl bg-slate-100 text-slate-300"
              >
                <p className='text-black text-2xl font-bold'>React Calculator</p>
                <input
                onChange={(e) => setNum1(e.target.value)}
                type='text'
                required
                placeholder='Num 1'
                className="input1 rounded-md bg-transparent text-black px-5 py-3 text-xl outline-none w-full border-2 border-black"/>
                <input
                onChange={(e) => setNum2(e.target.value)}
                type='text'
                required
                placeholder='Num 2'
                className="input2 rounded-md bg-transparent text-black px-5 py-3 text-xl outline-none w-full border-2 border-black"/>

              <div className="oprations-row flex items-center justify-center gap-4">
                <div
                onClick={(e) => handleCalculation(e)}
                className="opration py-3 rounded-lg hover:bg-slate-900 active:transform active:translate-y-1 duration-300 cursor-pointer px-5 bg-slate-950">+</div>
                <div
                onClick={(e) => handleCalculation(e)}
                className="opration py-3 rounded-lg hover:bg-slate-900 active:transform active:translate-y-1 duration-300 cursor-pointer px-5 bg-slate-950">-</div>
                <div
                onClick={(e) => handleCalculation(e)}
                className="opration py-3 rounded-lg hover:bg-slate-900 active:transform active:translate-y-1 duration-300 cursor-pointer px-5 bg-slate-950">*</div>
                <div
                onClick={(e) => handleCalculation(e)}
                className="opration py-3 rounded-lg hover:bg-slate-900 active:transform active:translate-y-1 duration-300 cursor-pointer px-5 bg-slate-950">/</div>
              </div>
              <div className="result flex flex-col items-center justify-center">
               {
                  error && (
                    <p className='error text-red-800 font-medium'>{error}</p>
                  )        
              }
              {
                  success && (
                    <p className='text-blue-600 font-medium'>{success}</p>
                  )  
              }
              {
                  result !== '' && (
                    <p className=' text-slate-600 mt-2 font-semibold text-xl'>Result: <span className='text-slate-900 font-bold text-2xl'>{result % 1 === 0 ? result : result.toFixed(3)}</span> </p>
                  )  
              }
              </div>
              </div>

          </div>
    </div>
  );
}

export default App;
