interface IButtonProps {
  text: string
  variant?: 'outline' | 'filled'
  color?: ColorType
  hasFullWidth?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  onClick?: ((event: React.FormEvent) => Promise<void>) | (() => void)
}

const Button = ({
  text,
  variant = 'filled',
  color = 'dark',
  hasFullWidth = false,
  isLoading = false,
  isDisabled = false,
  onClick = () => {},
}: IButtonProps) => {
  function buttonStyleColor() {
    const filledStyle = {
      green: `bg-green-color text-dark-color border-green-color hover:bg-white-color hover:border-white-color`,
      white: `bg-white-color text-dark-color border-white-color hover:bg-green-color hover:border-green-color`,
      gray: `bg-gray-color text-dark-color border-gray-color hover:bg-white-color hover:border-white-color`,
      dark: `bg-dark-color text-white-color border-dark-color hover:bg-green-color hover:border-dark-color hover:text-dark-color`,
    }

    const outlineStyle = {
      green: `bg-transparent text-green-color border-green-color`,
      white: `bg-transparent text-white-color border-white-color`,
      gray: `bg-transparent text-gray-color border-gray-color`,
      dark: `bg-transparent text-dark-color border-dark-color hover:bg-dark-color hover:text-white-color`,
    }

    if (variant === 'filled') {
      return filledStyle[color]
    }

    if (variant === 'outline') {
      return outlineStyle[color]
    }

    return ''
  }

  function buttonOpacity() {
    if (isLoading || isDisabled) {
      return 'opacity-50 pointer-events-none'
    } else {
      return 'opacity-100 pointer-events-auto'
    }
  }

  return (
    <button
      className={`${hasFullWidth ? 'w-full' : 'w-fit'} ${buttonStyleColor()} ${buttonOpacity()} h-[68px] text-xl px-8 py-5 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out`}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
