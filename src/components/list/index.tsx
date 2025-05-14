import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/service';
import type { ICar, IFetchCarsReturn } from '../types';
const List = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total,setTotal]=useState<number| null>(null);
  
  
  useEffect(() => {
    setIsLoading(true);
    fetchCars() 
      .then((data) => {
    console.log(data)
      })
      
  }, []);

  return (
    <div>
   
    </div>
  )
}

export default List
