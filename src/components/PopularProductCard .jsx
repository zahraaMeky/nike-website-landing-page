import { star } from "../assets/icons"

const PopularProductCard   = ({imgURL,name,price}) => {
      return (
        <div className="flex flex-1 w-full max-sm:w-full flex-col">
          <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
          <div className="mt-8 flex file:justify-start gap-2.5">
            <img src={star} width={24} height={24} alt="rating"/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 className="font-palanquin font-semibold mt-2 leading-normal text-2xl">{name}</h3>
          <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal">{price}</p>
        </div>
      )
    }
    
export default PopularProductCard  
    