import { useEffect } from 'react'
import '../styles/modal.css'
import Button from './Button'

interface ModalProps {
  title?: string
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      {/* Cerrar al hacer clic fuera */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white max-w-lg w-[90%] p-12 rounded-[45px] shadow-xl animate-fade-in">
        <button
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-color transition-all ease-in-out duration-300"
          onClick={onClose}
        >
          <img
            src="/icons/close.svg"
            width={28}
            height={28}
            alt="Cerrar el modal"
          />
        </button>
        {/* Header */}
        <div className="flex justify-between items-center my-6">
          {title && (
            <h2 className="w-full text-2xl text-center font-semibold">
              {title}
            </h2>
          )}
        </div>

        {/* Contenido */}
        <div>{children}</div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">
          <Button text="Continuar" hasFullWidth onClick={onConfirm} />
        </div>
      </div>
    </div>
  )
}

export default Modal
