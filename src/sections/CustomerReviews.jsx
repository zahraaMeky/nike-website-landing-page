import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        What Our 
        <span className="text-coral-red"> Customer </span> Say ?
      </h3>
      <p className="info-text text-center mt-4 max-w-lg m-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review) => (
        <ReviewCard key={review.customerName} {...review}/>
    ))}
      </div>
    </section>
  )
}

export default CustomerReviews
