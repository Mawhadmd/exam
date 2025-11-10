import { ArrowBigDown } from "lucide-react";
import CarList from "../components/CarList";

export default function Home() {
  return (
    <>
  
        <h1 className="text-text text-center text-5xl font-bold ">
          Welcome to Our Website
        </h1>

        {/* <ArrowBigDown className='animate-bounce  text-text size-10' /> */}
    
      <CarList />
    </>
  );
}
