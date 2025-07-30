interface IServiceCardProps {
  index: string
  title: string
  description: string
  isSelected?: boolean
  onClick: (index: string) => void
}

const ServiceCard = ({
  index,
  title,
  description,
  isSelected = false,
  onClick,
}: IServiceCardProps) => {
  return (
    <div
      className={`${isSelected ? 'bg-green-color' : 'bg-gray-color'} p-8 md:p-12 border border-dark-color rounded-[45px] cursor-pointer shadow-card transition-colors duration-300 ease-in-out hover:bg-green-color`}
      onClick={() => onClick(index)}
    >
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <span className="text-3xl md:text-6xl font-medium">{index}</span>
            <h3 className="text-lg md:text-3xl font-medium">{title}</h3>
          </div>
          <div className="bg-gray-color w-[30px] md:w-[58px] h-[30px] md:h-[58px] min-w-[30px] md:min-w-[58px] min-h-[30px] md:min-h-[58px] flex items-center justify-center border border-dark-color rounded-full">
            <img
              src={isSelected ? '/icons/minus.svg' : '/icons/plus.svg'}
              className="w-3 h-3 md:w-6 md:h-6"
              alt={description}
            />
          </div>
        </div>
        <div
          className={`${
            isSelected
              ? 'max-h-[500px] flex mt-8 opacity-100 scale-100'
              : 'max-h-0 opacity-0 scale-95'
          } flex-col gap-8 overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="bg-dark-color w-full h-px"></div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
