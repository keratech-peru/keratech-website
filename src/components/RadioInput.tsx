interface IRadioInputProps {
  label: string
  name: string
  value: string
  selected: string | null
  onChange: (value: string) => void
}

const RadioInput = ({
  label,
  name,
  value,
  selected,
  onChange,
}: IRadioInputProps) => {
  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <span className="bg-white-color w-7 h-7 flex items-center justify-center border border-dark-color rounded-full cursor-pointer">
        <span
          className={`${selected === value ? 'bg-green-color' : 'bg-white-color'} w-4 h-4 rounded-full transition-colors duration-300 ease-in-out`}
        ></span>
      </span>
      <label className="text-lg">{label}</label>
    </div>
  )
}

export default RadioInput
