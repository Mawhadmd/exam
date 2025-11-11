
import { Link } from 'react-router';
import { cars } from '../cars';
import { useState } from 'react';
export default function CarList() {
  const [carList, setCarList] = useState(cars);
  function deleteCar(id) {
    const index = carList.findIndex(car => car.id === id);
    if (index !== -1) {
      const newCarList = [...carList];
      newCarList.splice(index, 1);
      setCarList(newCarList);
    }
  }
  return (
    <div className='w-[80%] min-w-[200px] flex flex-wrap gap-6 justify-center mt-10'>
      {carList.length > 0 ? carList.map(car => (
        <div key={car.id} className='hover:scale-105 transition-all ease-in cursor-pointer   flex items-center relative border w-[200px] h-[300px] border-border flex-col overflow-hidden rounded-lg shadow-[0_0_5px] hover:shadow-accent backdrop-blur-md text-text'>
          <img src={car.image} alt={car.name} className='w-full h-[180px] object-cover ' />
          <div>
            <h3 className='text-xl p-2 font-semibold'>{car.name}</h3>
          </div>
          <Link to={`/car/${car.id}`} className='absolute bottom-2 bg-accent text-white px-4 py-2 rounded hover:bg-white hover:text-accent transition-all' >View Details</Link>
          <button onClick={() => deleteCar(car.id)} className='absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500 transition-all'>Delete</button>
        </div>
      )) : <div className='z-10 flex flex-col justify-center items-center'>
      <p>No cars available.</p>
      <button className='bg-accent rounded p-2 text-black cursor-pointer ' onClick={() => setCarList(cars)}>Refresh</button>
      </div>}
    </div>
  )
}
