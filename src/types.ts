type ColorType = 'green' | 'white' | 'gray' | 'dark'

type ServiceType = {
  index: string
  title: string
  description: string
}

type ServicesType = ServiceType[]

type ProductType = {
  index: string
  title: string
  description: string
  color: string
  image: ImageMetadata
  url: string
}

type ProductsType = ProductType[]

type MemberType = {
  index: string
  title: string
  description: string
  role: string
  image: ImageMetadata
  url: string
}

type MembersType = MemberType[]
