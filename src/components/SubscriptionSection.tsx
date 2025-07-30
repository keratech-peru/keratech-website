import Button from './Button'
import Input from './Input'

const SubscriptionSection = () => {
  return (
    <div className="bg-gray-secondary-color w-full md:w-2/3 flex-1 flex flex-col md:flex-row items-center justify-between gap-5 p-[30px] md:p-10 rounded-[14px]">
      <div className="w-full md:w-1/2">
        <Input variant="outline" placeholder="Correo" onChange={() => {}} />
      </div>
      <div className="w-full md:w-1/2">
        <Button text="Suscríbete" color="green" hasFullWidth />
      </div>
    </div>
  )
}

export default SubscriptionSection
