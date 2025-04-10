import { createBrowserRouter } from 'react-router'
import { RootLayout } from './layouts/RootLayout'
import { getCountries } from './services/loaders/getCountries'
import { getCities } from './services/loaders/getCities'
import { getHotels } from './services/loaders/getHotels'
import { getRooms } from './services/loaders/getRooms'
import { getRoomFacilities } from './services/loaders/getRoomFacilities'
import { DestinationLayout } from './layouts/DestinationLayout'
import { postLogin } from './services/actions/postLogin'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Login = lazy(() => import('./pages/Login').then((module) => ({ default: module.Login })))

const DestinationDetails = lazy(() =>
  import('./pages/DestinationDetails').then((module) => ({ default: module.DestinationDetails }))
)

const DestinationRooms = lazy(() =>
  import('./pages/DestinationRooms').then((module) => ({ default: module.DestinationRooms }))
)

const DestinationHotels = lazy(() =>
  import('./pages/DestinationHotels').then((module) => ({ default: module.DestinationHotels }))
)

const DestinationCities = lazy(() =>
  import('./pages/DestinationCities').then((module) => ({ default: module.DestinationCities }))
)

// New data router structure
// Allows for lazy loading and loaders that load data before page renders
// Goal: Try to set up loading skeleton UI, caching with React query, proper login with OAUTH and protected routes for admin panel
export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
        action: async ({ request }) => {
          await postLogin(request)
        },
      },
      {
        path: '/destinationer',
        Component: DestinationLayout,
        loader: async () => await getCountries(),
        children: [
          {
            path: ':country_slug',
            Component: DestinationCities,
            loader: async ({ params }) => await getCities(params),
          },
          {
            path: ':country_slug/:city_slug',
            Component: DestinationHotels,
            loader: async ({ params }) => await getHotels(params),
          },
          {
            path: `:country_slug/:city_slug/:hotel_slug`,
            Component: DestinationRooms,
            loader: async ({ params }) => await getRooms(params),
          },
          {
            path: `:country_slug/:city_slug/:hotel_slug/:room_slug`,
            Component: DestinationDetails,
            loader: async ({ params }) => await getRoomFacilities(params),
          },
        ],
      },
    ],
  },
])
