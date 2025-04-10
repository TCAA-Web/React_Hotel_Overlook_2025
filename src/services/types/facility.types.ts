export interface Country {
  country_id: number
  slug: string
  name: string
  description: string
  CountryImage: CountryImage
  cities: City[]
}

export interface CountryImage {
  country_image_filename: string
  country_image_title: string
}

export interface City {
  city_id: number
  slug: string
  name: string
  description: string
  CityImage: CityImage
  hotels: Hotel[]
}

export interface CityImage {
  city_image_filename: string
  city_image_title: string
}

export interface Hotel {
  hotel_id: number
  slug: string
  title: string
  description: string
  HotelImage: HotelImage
  hotel_facilities: HotelFacility[]
  rooms: Room[]
}

export interface HotelImage {
  hotel_image_filename: string
  hotel_image_title: string
}

export interface HotelFacility {
  title: string
  hotel_facility_rel: HotelFacilityRel
}

export interface HotelFacilityRel {
  id: number
  hotel_id: number
  hotel_facility_id: number
  hotelId: number
  hotelFacilityId: number
}

export interface Room {
  room_id: number
  title: string
  description: string
  num_persons: number
  area: string
  day_price_normal: number
  day_price_flex: number
  room_facilities: RoomFacility[]
  hotel_room_rel: HotelRoomRel
}

export interface HotelRoomRel {
  id: number
  hotel_id: number
  room_id: number
  num_rooms: number
  hotelId: number
  roomId: number
}

export interface RoomFacility {
  id: number
  title: string
  room_facility_category_id: number
  createdAt: Date
  updatedAt: Date
  room_facility_rel: RoomFacilityRel
}

export interface RoomFacilityRel {
  id: number
  room_id: number
  room_facility_id: number
  roomId: number
  roomFacilityId: number
}
