export interface Country {
  id: number
  slug: string
  name: string
  description: string
  CountryImage: CountryImage
}

export interface CountryImage {
  country_image_filename: string
  country_image_title: string
}
