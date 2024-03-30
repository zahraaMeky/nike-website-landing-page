const Button = ({label,iconURL}) => {
  return (
    <button className="flex justify-between border-coral-red
    item-center gap-2 px-4 py-4 text-lg font-montserrat
    leading-none bg-coral-red rounded-full text-white
    ">
      {label}
      {iconURL &&<img className="ml-2 rounded-full bg-white w-5 h-5"src={iconURL} alt="icon right arrow"/>}
    </button>
  )
}

export default Button
