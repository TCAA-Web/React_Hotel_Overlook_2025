export const getCountries = async () => {
  return fetch(`${import.meta.env.VITE_PUBLIC_API_URL}/destinations`)
    .then((res) => res.json())
    .catch((err) => console.error(err))
}
