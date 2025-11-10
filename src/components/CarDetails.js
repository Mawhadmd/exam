import { Link, useParams } from "react-router";
import { cars } from "../cars";
import { ArrowLeftSquare } from "lucide-react";

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-main text-text">
        <p className="text-xl">Car not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main text-text rounded-xl m-2 shadow-lg overflow-hidden">
      {/* large image at top */}
      <div className="w-full relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <Link to={`/`} className="bg-black group p-2 rounded-br-xl absolute top-0 left-0 z-10">
          <ArrowLeftSquare className="group-hover:text-accent  transition-all size-20 cursor-pointer mix-blend-difference"></ArrowLeftSquare>
        </Link>
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* details below the image */}
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2">{car.name}</h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="text-lg opacity-90">{car.model}</div>
          <div className="text-2xl font-semibold text-accent">
            ${car.price.toLocaleString()}
          </div>
        </div>

        <p className="text-base leading-relaxed">{car.description}</p>
      </div>
    </div>
  );
}
