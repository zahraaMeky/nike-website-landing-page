import  Button  from "../components/Button";
import { shoe8 } from "../assets/images";
const SupperQuality = () => {
  return (
    <section id="about-us" className="flex max-lg:flex-col ju items-center w-full gap-10 max-container ">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
         Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">  Our dedication to detail and excellence ensures your satisfaction</p>
        <div>
        <Button label="View details" />

        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="product detail" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SupperQuality
