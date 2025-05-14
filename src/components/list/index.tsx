import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/service'; // service.ts dosyasından import ediliyor
import { ICar } from '../../types'; // types/index.ts dosyasından ICar tipi import ediliyor

const List = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);

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
