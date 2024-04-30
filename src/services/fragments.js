import { gql } from '@apollo/client';

export const pageLinkFields = gql`
    fragment pageLinkFields on Page {
        title
        slug
    }
`
export const headlineFields = gql`
    fragment headlineFields on Headline {
        title
        subtitle
        description {
            json
        }
    }
`

export const sliderFields = gql`
    fragment sliderFields on SliderCollection {
        title
        theme
        subtitle
        description {
            json
        }
        collection {
            name
            plantsCollection {
                items {
                    name
                }
            }
        }
        slidesCollection {
            items {
                title
                year
                description {
                    json
                }
                image {
                    url
                }
            }
        }
    }
`;