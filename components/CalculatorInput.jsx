import React from "react"

const CalculatorInput = () => {
  return (
    <div id='CalculatorInput'>
      {/* custom-img */}
      <div className='flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-center bg-cover  textcolor-white'>
        <div className='max-w rounded overflow-hidden p-40 shadow-2xl	'>
          <div class='px-6 py-4'>
            <ul className='flex-col space-y-4'>
              <h1 className='text-3xl'> Carbon Calculator </h1>
              <p>Car-brand</p>
              <input placeholder='ex Volvo'></input>
              <p>Model</p>
              <input placeholder='ex XC40'></input>
              <p>Engine</p>
              <input placeholder='ex T2'></input>
              <p>Year</p>
              <input placeholder='ex 2020'></input>
              <p>Distance</p>
              <input placeholder='ex 20'></input>
            </ul>
            <div className='m-2 items-center justify-center'>
              <button className='bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 '>
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorInput
