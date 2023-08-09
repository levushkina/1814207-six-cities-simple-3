export type HotelLocation = {
  latitude: number,
  longitude:number,
  zoom: number,
}

export type HotelHost = {
  id: number,
  name: string,
  avatarPath: string,
  isPro: boolean,
}

export type Hotel = {
  bedrooms: number,
  city: {
    name: string,
    location: HotelLocation,
  },
  description: string,
  goods: string[],
  user: HotelHost,
  id: 1,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: HotelLocation,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  type: string,
  title: string,
}

export type Reviews = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: HotelHost,
}

export type User = {
  token: string,
  email: string,
  name: string,
  avatarPath: string,
  isPro: boolean
}

export type UserState = {
  authorizationStatus: string,
  user: User | null
}

