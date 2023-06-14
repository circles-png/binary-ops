import { useState } from 'react'

const App = () => {
  const [binary] = useState<number[][]>([[ 0, 0, 0, 0, 0, 0, 0, 0 ]])
  return <div className='h-full bg-black text-white'>
    <div className='h-full grid place-content-center'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col p-8 rounded-2xl shadow-lg shadow-gray-400/60 border-t border-t-gray-400'>
          <h1>binary operations</h1>
          <h1 className='ml-auto text-gray-400'>binary-ops</h1>
        </div>
        {
          binary.map(
            (number, numberIndex) => <span
              key={numberIndex}
              className='flex justify-evenly text-2xl'
            >
              {
                number.map((digit, digitIndex) => <span
                  key={digitIndex}
                >
                  {digit}
                </span>)
              }
            </span>
          )
        }
      </div>
    </div>
  </div>
}


export default App
