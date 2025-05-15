import { FC, useState } from "react";
import type { ICar} from '../types';
import { calcPrice } from "../../utils/calcPrice";
import Info from "./info";



type Props = {
  car: ICar;
};

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card-content-title">{car.modele_dossier
}</h2>

      {/* araba fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{calcPrice(car)}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/* araç resmi */}
      <div>
        <img src="/public/hero (2).png"
         className="w-full h-full object-contain min-h-[200px]"
          alt=""
         />
      </div>

      {/* temel bilgiler */}
      <div>
        <div>
  <Info car={car}/>
        </div>
      </div>
      </div>
  );
};

export default Card;