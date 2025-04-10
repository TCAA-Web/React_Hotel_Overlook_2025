import { Params } from 'react-router'

export const getCities = async (params: Params) => {
  return fetch(`${import.meta.env.VITE_PUBLIC_API_URL}/destinations/${params.country_slug}`)
    .then((res) => res.json())
    .catch((err) => console.error(err))
}
