interface IInputProps {
  variant?: 'outline' | 'filled'
  label?: string
  placeholder: string
  onChange: (value: string) => void
}

const Input = ({
  variant = 'filled',
  label = '',
  placeholder,
  onChange,
}: IInputProps) => {
  const variantClass = {
    outline: `bg-transparent border-white-color`,
    filled: `bg-white-color border-dark-color`,
  }

  return (
    <div className="flex flex-col gap-1">
      {label && label.length > 0 ? (
        <label className="text-sm md:text-base">{label}</label>
      ) : (
        <></>
      )}
      <input
        className={`${variantClass[variant]} bg-transparent h-[68px] text-base md:text-lg px-5 md:px-8 py-4 md:py-4 rounded-xl border focus:border-green-color focus-visible:outline-none transition-colors duration-300 ease-in-out`}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  )
}

export default Input
