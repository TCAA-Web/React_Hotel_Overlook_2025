import { useLoaderData } from 'react-router'
import { Hotel } from '../services/types/rooms.types'
import { Link } from '../components/Shared/Link'

export const DestinationHotels = () => {
  const data = useLoaderData()

  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {data?.cities[0]?.hotels?.map((hotel: Hotel) => (
          <Link key={hotel.hotel_id} to={hotel.slug}>
            {hotel.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
