
export interface Album {
  id: string;
  clientName: string;
  coverImage: string;
  description?: string;
  images: string[];
}

export interface Story {
  id: string;
  clientName: string;
  description: string;
  image: string;
}

export interface FilmItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  type: 'youtube' | 'drive';
}
