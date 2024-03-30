import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import  Button  from "../components/Button"
function SpecialOffers() {
  return (
    <section className="flex justify-between gap-10 items-center max-container max-xl:flex-col-reverse">
      <div className="flex-1">
        <img src={offer} width={773} height={687} alt="offer" className="object-contain w-full"/>
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-4">
         Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      </div>
      <div className="flex flex-wrap mt-11 gap-4">
        <Button label="shop now" iconURL={arrowRight}/>
        <Button label="Learn more" backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'/>
      </div>
    </section>
  )
}

export default SpecialOffers
