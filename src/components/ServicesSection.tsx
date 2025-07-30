import { useState } from 'react'
import ServicesList from '../constants/services'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string>('00')

  function handleServiceSelected(index: string) {
    if (index === selectedService) {
      setSelectedService('00')
    } else {
      setSelectedService(index)
    }
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:gap-8">
      {ServicesList.map((service: ServiceType) => (
        <li key={service.index}>
          <ServiceCard
            index={service.index}
            title={service.title}
            description={service.description}
            isSelected={selectedService === service.index}
            onClick={handleServiceSelected}
          />
        </li>
      ))}
    </ul>
  )
}

export default ServicesSection
