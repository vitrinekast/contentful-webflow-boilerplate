import { getClient } from "@/services/client";
import { getPage } from "@/services/queries";
import { HeroHome } from "~/devlink";
import SectionsCollection from "@/app/components/sectionsCollection";

export default async function Page({ params }) {
  const { data } = await getClient().query({ query: getPage, variables: { slug: "about-us" } });
  const page = data.pageCollection.items[0];
  
  return <>
    <HeroHome />
    <SectionsCollection items={page.sectionsCollection.items}  />
  </>;
}