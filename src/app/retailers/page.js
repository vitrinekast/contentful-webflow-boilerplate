import { SectionMap, SectionPartners } from "~/devlink";
import { Cta } from "~/devlink/Cta";

import { getClient } from "@/services/client";

import { gql } from "@apollo/client";

const query = gql`{
    Page( slug: "retailers" ) {
      _id,
      _slug
      title
    }
  }
`;


export default async function Page() {
  const { data } = await getClient().query({ query });


  return <>
    {/* <SliceZone slices={page.data.slices} components={components} /> */}
    <SectionMap />
    <SectionPartners />
    <Cta />
  </>;
}