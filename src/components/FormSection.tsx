import { useEffect, useState } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import RadioInput from '@components/RadioInput'
import Textarea from '@components/Textarea'
import Modal from '@components/Modal'

const FormSection = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<string>('Consulta')
  const [modalText, setModalText] = useState<string>('')
  const [isValid, setValid] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  async function sendEmail(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/mzzdnpnr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          type,
        }),
      })

      if (response.ok) {
        setModalText(
          'Mensaje enviado correctamente.\nPronto nos pondremos en contacto contigo.'
        )
      } else {
        setModalText('Error al enviar el correo. Inténtalo de nuevo.')
      }
    } catch (error) {
      setModalText('Error al enviar el correo. Inténtalo de nuevo.')
    } finally {
      setIsOpenModal(true)
      setLoading(false)
    }
  }

  function handleConfirm() {
    setIsOpenModal(false)
    window.location.replace('/')
  }

  useEffect(() => {
    if (name && email && message && type) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [name, email, message, type])

  return (
    <>
      <form className="flex flex-col items-center md:items-start gap-10">
        <div className="flex items-center gap-8">
          <RadioInput
            label="Consulta"
            name="opcion"
            value="Consulta"
            selected={type}
            onChange={setType}
          />
          <RadioInput
            label="Comentario"
            name="opcion"
            value="Comentario"
            selected={type}
            onChange={setType}
          />
        </div>
        <div className="w-full flex flex-col gap-6">
          <Input
            label="Nombre"
            placeholder="Nombre"
            onChange={value => setName(value)}
          />
          <Input
            label="Correo"
            placeholder="Correo"
            onChange={value => setEmail(value)}
          />
          <Textarea
            label="Mensaje"
            placeholder="Mensaje"
            onChange={value => setMessage(value)}
          />
        </div>
        <Button
          text="Enviar"
          hasFullWidth
          isLoading={isLoading}
          isDisabled={!isValid}
          onClick={sendEmail}
        />
      </form>

      <Modal
        isOpen={isOpenModal}
        onClose={handleConfirm}
        onConfirm={handleConfirm}
        title="¡Atención!"
      >
        <p className="text-center">{modalText}</p>
      </Modal>
    </>
  )
}

export default FormSection
