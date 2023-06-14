import classNames from './utils/classNames'
import { useState } from 'react'

type Operation = 'AND' | 'OR' | 'XOR'
const App = () => {
  const [ binary, setBinary ] = useState<number[][]>(
    [
      [ 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0 ]
    ]
  ),
        [ operation, setOperation ] = useState<Operation>('AND')
  return <div className='h-full bg-black text-white select-none cursor-default'>
    <div className='h-full p-16 flex items-center'>
      <div className='flex flex-col gap-16 grow'>
        <div className='flex gap-16 p-8 rounded-2xl shadow-lg shadow-gray-500/60 border-t border-t-white'>
          <h1>binary operations</h1>
          <h1 className='ml-auto text-gray-500'>binary-ops</h1>
        </div>
        <div className='w-2/3 mx-auto p-8 rounded-2xl shadow-lg shadow-gray-500/60 border-t border-t-white grow flex flex-col gap-2'>
          {
            binary.map(
              (number, numberIndex) => <span
                key={numberIndex}
                className='flex items-center'
              >
                <span className={classNames(
                  'mr-8 whitespace-pre aspect-square grid place-content-center w-12 h-12',
                  numberIndex === 0
                    ? 'opacity-0'
                    : 'cursor-pointer rounded-full transition hover:bg-white hover:text-black'
                )} onClick={numberIndex === 0
                  // eslint-disable-next-line no-undefined
                  ? undefined
                  : () => setOperation(
                      operation === 'AND'
                        ? 'OR'
                        : operation === 'OR'
                          ? 'XOR'
                          : 'AND'
                    )}>
                  {operation}
                </span>
                <div className='flex items-center gap-8 grow'>
                  <div className='flex text-xl rounded-2xl shadow-lg shadow-gray-500/20 grow'>
                    {
                      number.map((digit, digitIndex) => <span
                        key={digitIndex}
                        className='flex justify-center items-center hover:bg-white hover:text-black w-full aspect-square first:rounded-l-2xl last:rounded-r-2xl transition cursor-pointer'
                        onClick={() => {
                          const newBinary = [...binary]
                          newBinary[numberIndex][digitIndex] = newBinary[numberIndex][digitIndex] === 0
                            ? 1
                            : 0
                          setBinary(newBinary)
                        }}
                      >
                        {digit}
                      </span>)
                    }
                  </div>
                  <span className='text-gray-500 basis-24'>
                    [
                    {
                      Array.from(parseInt(number.join(''), 2).toString()
                        .padStart(3, 'l'))
                        .map(
                          (digit, digitIndex) => <span
                            className={digit === 'l'
                              ? ''
                              : 'text-white'}
                            key={digitIndex}
                          >
                            {digit === 'l'
                              ? '0'
                              : digit}
                          </span>
                        )
                    }
                    <span className='align-sub text-xs'>10</span>
                    ]
                  </span>
                </div>
              </span>
            )
          }
          <div className='border border-gray-500'></div>
          <span className='flex items-center'>
            <span className='mr-8 whitespace-pre hover:bg-white hover:text-black transition rounded-full aspect-square grid place-content-center w-12 h-12 opacity-0'>
            </span>
            <div className='flex items-center gap-8 grow'>
              <div className='flex text-xl rounded-2xl shadow-lg shadow-gray-500/20 grow'>
                {
                  Array.from(
                    binary
                      .map(number => parseInt(number.join(''), 2))
                      .reduce(
                        (previous, current) => operation === 'AND'
                          ? previous & current
                          : operation === 'OR'
                            ? previous | current
                            : previous ^ current
                      )
                      .toString(2)
                      .padStart(8, '0')
                  )
                    .map((digit, digitIndex) => <span
                      key={digitIndex}
                      className='flex justify-center items-center w-full aspect-square first:rounded-l-2xl last:rounded-r-2xl transition'
                    >
                      {digit}
                    </span>)
                }
              </div>
              <span className='text-gray-500 basis-24'>
                [
                {
                  Array.from(binary
                    .map(number => parseInt(number.join(''), 2))
                    .reduce(
                      (previous, current) => operation === 'AND'
                        ? previous & current
                        : operation === 'OR'
                          ? previous | current
                          : previous ^ current
                    )
                    .toString()
                    .padStart(3, 'l'))
                    .map(
                      (digit, digitIndex) => <span
                        className={digit === 'l'
                          ? ''
                          : 'text-white'}
                        key={digitIndex}
                      >
                        {digit === 'l'
                          ? '0'
                          : digit}
                      </span>
                    )
                }
                <span className='align-sub text-xs'>10</span>
                ]
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
}


export default App
