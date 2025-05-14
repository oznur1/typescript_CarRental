import type { ICar, IFetchCarsReturn } from '../types';

export const fetchCars = async ():Promise<IFetchCarsReturn> => {
  const url = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/vehicules-commercialises/records?limit=20&refine=marque%3A%22BMW%22";
  
  const res = await fetch(url);
  const data = await res.json();
  
  return data; 
}