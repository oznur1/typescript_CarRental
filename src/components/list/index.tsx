import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/service';
import type { ICar, IFetchCarsReturn } from '../types';
import Card from '../hero/card';



import Warning from '../warning';
const List = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total,setTotal]=useState<number| null>(null);
  
  
  useEffect(() => {
    setIsLoading(true);
    fetchCars() 
      .then((data) => {
    setCars(data.results);
    setTotal(data.total_count);
      })
      .catch((err)=>{
        setError(err.message);
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }, []);
 
  console.log(isLoading,cars,total)

  //1) isLoading true ise > API'dan veriler yükleniyor
  if(isLoading)return <Warning>Yükleniyor</Warning>

  //2) error dolu ise > API'dan hatalı cevap gelmiştir
  if(error)return <Warning>{error}</Warning>

  //3) cars boş dizi ise > Aranılan kriterde veri yoktur
  if(!cars || cars.length < 1)return <Warning>Veri Bulunamadı</Warning>
  
  
  return (
    <div>
   <section className='home-cars-wrapper'>
    {cars.map((car)=>( 
      <Card key={car.type_variante_version_tvv} car={car}/>
    ))}
   </section>
    </div>
  )
}

export default List
