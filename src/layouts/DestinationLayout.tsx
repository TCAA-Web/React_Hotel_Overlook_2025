import { Outlet, useLoaderData } from 'react-router'
import { Header } from '../components/App/Header/Header'
import { Wrapper } from '../components/Shared/Wrapper'
import { CountrySelect } from '../components/App/CountrySelect/CountrySelect'
import DestinationImage from '../assets/images/city-houses-reykjavik.jpg'

export const DestinationLayout = () => {
  const data = useLoaderData()

  return (
    <>
      <Header title={`Hoteller og Destinationer`} imageUrl={DestinationImage} />
      <CountrySelect countryArray={data} />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  )
}
