export interface News {
  id: number
  title: string
  teaser: string
  image: Image
}

export interface NewsDetails {
  id: number
  datetime: number
  title: string
  teaser: string
  content: string
  image: Image
}

export interface Image {
  filename: string
}
