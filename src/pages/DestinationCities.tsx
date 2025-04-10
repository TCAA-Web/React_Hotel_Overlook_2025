import { useLoaderData } from 'react-router'
import { City } from '../services/types/rooms.types'
import { Link } from '../components/Shared/Link'

export const DestinationCities = () => {
  const data = useLoaderData()

  return (
    <div>
      <h1>Cities </h1>
      <ul>
        {data?.cities?.map((city: City) => (
          <Link key={city.city_id} to={city.slug}>
            {city.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}
