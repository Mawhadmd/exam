
import { Link } from 'react-router';
import { cars } from '../cars';
export default function CarList() {


  return (
    <div className='w-[80%] min-w-[200px] flex flex-wrap gap-6 justify-center mt-10'>
      {cars.map(car => (
        <div key={car.id} className='hover:scale-105 transition-all ease-in cursor-pointer   flex items-center relative border w-[200px] h-[300px] border-border flex-col overflow-hidden rounded-lg shadow-[0_0_5px] hover:shadow-accent backdrop-blur-md text-text'>
          <img src={car.image} alt={car.name} className='w-full h-[180px] object-cover ' />
          <div>
            <h3 className='text-xl p-2 font-semibold'>{car.name}</h3>
          </div>
          <Link to={`/car/${car.id}`} className='absolute bottom-2 bg-accent text-white px-4 py-2 rounded hover:bg-white hover:text-accent transition-all' >View Details</Link>
        </div>
      ))}
    </div>
  )
}
