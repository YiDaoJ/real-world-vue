export interface iEvent {
  id: string
  category: CategoryType
  title: string
  description: string
  location: string
  date?: string
  time?: string
  petsAllowed: boolean
  organizer: string
  extras: {
    catering: boolean
    music: boolean
  }
}

export type CategoryType = string | number

export type RadioOptionType = {
  label: string
  value: string | number | boolean
}
