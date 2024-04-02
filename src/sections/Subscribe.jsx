import Button from "../components/Button"

function Subscribe() {
  return (
    <section id="contact-us" className="max-container flex  justify-between items-center gap-10 max-lg:flex-col">
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">
        Sign Up Form
        <span className="text-coral-red">Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex item-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input  className="input" type="text" placeholder="Subscribe@nike.com"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
