import { Country } from '../../../services/types/country.types'
import { Link } from '../../Shared/Link'
import { CountrySelectContainer } from './CountrySelectContainer'

interface CountrySelectInterface {
  countryArray: Array<Country>
}

export const CountrySelect = ({ countryArray }: CountrySelectInterface) => {
  return (
    <CountrySelectContainer>
      {countryArray.map((country) => (
        <Link key={country.id} to={`${country.slug}`}>
          {country.name}
        </Link>
      ))}
    </CountrySelectContainer>
  )
}
