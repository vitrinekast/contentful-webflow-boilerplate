import { gql } from '@apollo/client';
import { headlineFields, pageLinkFields, sliderFields } from './fragments';

export const getPage = gql`
  ${headlineFields}
  ${sliderFields}
  query getPage($slug: String) {
    pageCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        seoTitle
        heroTitle
        heroSubtitle
        heroDescription
        ctaTitle
        ctaImage {
          url(
          transform: {
              width: 100
              resizeStrategy: FILL
              resizeFocus: BOTTOM
              format: WEBP
            }
          )
        }
        ctaSubtitle
              ctaLink {
          slug
        }
        sectionsCollection(limit: 10) {
          items {
            __typename
            ... on SliderCollection {
              ... sliderFields
            }
            ... on Headline {
              ... headlineFields
            }
          }
        }
      }
    }
  }
`;

export const getPageSEO = gql`
  query getPage($slug: String) {
    pageCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        seoTitle
        heroTitle
        noIndex,
        noFollow
      }
    }
  }
`;

export const getLocations = gql`
query {
  contentTypeLocationCollection(order: name_ASC) {
    items {
      name
      location {
        lat
        lon
      }
      description {
        json
      }
    }
  }
}
`
export const getSettings = gql`
  ${pageLinkFields}
  query {
    # add your query
    navigationCollection(limit: 1) {
      items {
        address {
          json
        }
        getInTouchInfo {
          json
        }
        aboutText
        footerMenuCollection {
          items {
            ... on Page {
              ...pageLinkFields
            }
          }
        }
        mainNavigationCollection {
          items {
            ... on Page {
              ...pageLinkFields
            }
          }
        }
        footerLegalMenuCollection {
          items {
            ... on Page {
              ...pageLinkFields
            }
          }
        }
      }
    }
  }
`;


