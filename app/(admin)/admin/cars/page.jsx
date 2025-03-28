import React from 'react'
import CarList from './_components/car-list'

export const metadata = {
    title:"Cars | Vehiql Admin",
    description:"Add new car to the  marketplace",
}

const CarsPage = () => {
  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6 '>Cars Management</h1>
        <CarList />
    </div>
  )
}

export default CarsPage