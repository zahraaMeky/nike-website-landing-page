const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} width={24} height={24} alt={label}/>
        </div>
        <h3 className="font-palanquin text-3xl mt-5 font-bold leading-normal">{label}</h3>
        <p className="font-montserrat mt-3 break-words leading-normal text-slate-gray text-lg">{subtext}</p>
    </div>
  )
}

export default ServiceCard
