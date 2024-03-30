import Button from "../components/Button/Button"
import {arrowRight} from '../assets/icons'
import {statistics,shoes} from "../constants"
import {bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
function Hero() {
  return (
    <section id="home0" className="w-full min-h-screen flex flex-col 
    xl:flex-row max-container justify-center gap-10">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-lg font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className="mt-8 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-palanquin font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br/>
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray leading-8 mt-6 text-lg mb-14 font-montserrat sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Button label="Shop Now" iconURL = {arrowRight}/>
          <div className="flex justify-start items-start gap-16 w-full flex-wrap mt-8">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin  font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}

          </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center 
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center
      ">
        <img src={bigShoe1} width={610} height={500} className="object-contain relative z-10"/>
        <div>
          {shoes.map((shoe, index) => (
            <div key={index}>
            <ShoeCard imgURL ={shoe}
            changeBigShoeImage={()=>{}}
            bigShoeImg=""
            />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Hero
