import React from 'react'
import { FaStar } from 'react-icons/fa6'

/**
 * 
 * @param Count - Number of stars 
 * @description Displays stars
 * @returns 
 */

export default function StarCount({Count}:{Count:number}) {
  return (
    <section className='flex gap-2 text-Yellow'>
        {Array.from({length: Count}, (_, i) => i + 1).map(i => (
          <FaStar key={i} />
        ))}
    </section>
  )
}
