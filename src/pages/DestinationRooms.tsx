import { useLoaderData } from 'react-router'
import { Room } from '../services/types/rooms.types'
import { Link } from '../components/Shared/Link'

export const DestinationRooms = () => {
  const data = useLoaderData()

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {data?.cities[0]?.hotels[0]?.rooms?.map((room: Room) => (
          <Link key={room.room_id} to={room.slug}>
            {room.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
