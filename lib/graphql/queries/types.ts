

export interface Images {
  default: string;
  featured: string;
  thumbnail: string;
  wide: string;
}

export interface Podcast {
  categoryId: string;
  categoryName: string;
  description: string;
  hasFreeEpisodes: boolean;
  id: string;
  images: Images;
  isExclusive: boolean;
  mediaType: string;
  playSequence: string;
  publisherId: string;
  publisherName: string;
  title: string;
}

export interface PodcastsQueryData {
  podcasts: Podcast[];
}

export interface PodcastsQueryVars {
  search?: string;
  title?: string;
  categoryName?: string;
  page?: number;
  limit?: number;
}
