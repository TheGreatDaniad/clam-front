import { gql } from "@apollo/client";
import { PodcastsQueryData, PodcastsQueryVars } from "./types";

export const GET_PODCASTS = gql`
  query GetPodcasts(
    $search: String
    $title: String
    $categoryName: String
    $page: Int
    $limit: Int
  ) {
    podcasts(
      search: $search
      title: $title
      categoryName: $categoryName
      page: $page
      limit: $limit
    ) {
      categoryId
      categoryName
      description
      hasFreeEpisodes
      id
      images {
        default
        featured
        thumbnail
        wide
      }
      isExclusive
      mediaType
      playSequence
      publisherId
      publisherName
      title
    }
  }
`;
export const GET_PODCASTS_QUERY = gql`
  query GetPodcasts(
    $search: String
    $title: String
    $categoryName: String
    $page: Int
    $limit: Int
  ) {
    podcasts(
      search: $search
      title: $title
      categoryName: $categoryName
      page: $page
      limit: $limit
    ) {
      id
      title
      categoryId
      categoryName
      description
      hasFreeEpisodes
      images {
        default
        featured
        thumbnail
        wide
      }
    }
  }
`;
export type { PodcastsQueryData, PodcastsQueryVars };
