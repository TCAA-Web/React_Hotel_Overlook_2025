import { Params } from 'react-router'

export const getHotels = async (params: Params) => {
  return fetch(
    `${import.meta.env.VITE_PUBLIC_API_URL}/destinations/${params.country_slug}/${params.city_slug}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err))
}
