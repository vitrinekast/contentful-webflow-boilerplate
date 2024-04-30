import { getClient } from "@/services/client";
import { getPage } from "@/services/queries";
import { HeroHome, Partners } from "~/devlink";
// import MapSection from "./components/map";
// import SectionsCollection from "@/components/sectionsCollection";

export default async function Home({ params }) {
  const { data } = await getClient().query({ query: getPage, variables: { slug: "home" } });
  const page = data.pageCollection.items[0];
  return <>
    <HeroHome />
    {/* <SectionsCollection items={page.sectionsCollection.items}  /> */}
    {/* <MapSection /> */}
    <Partners />
  </>;
}