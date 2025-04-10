import { useLoaderData } from 'react-router'
import { RoomFacility } from '../services/types/facility.types'
import { Typography } from '../components/Shared/Typography'

export const DestinationDetails = () => {
  const data = useLoaderData()

  return (
    <div>
      <h1>Room facilities </h1>
      <ul>
        {data?.cities[0]?.hotels[0]?.rooms[0]?.room_facilities?.map((facility: RoomFacility) => (
          <Typography key={facility.id} variant='p'>
            {facility.title}
          </Typography>
        ))}
      </ul>
    </div>
  )
}
