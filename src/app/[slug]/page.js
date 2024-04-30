import { getClient } from "@/services/client";
import { getPage, getPageSEO } from "@/services/queries";
import { HeroHome, Partners } from "~/devlink";
import SectionsCollection from "@/components/sectionsCollection";
import MapSection from "@/components/map";
import { notFound } from 'next/navigation'

export async function generateMetadata({ params, searchParams }, parent) {

    const { data } = await getClient().query({ query: getPageSEO, variables: { slug: params.slug } });
    const page = data.pageCollection.items[0];
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: page.title,
        openGraph: {
            images: ['@/ogimage.png', ...previousImages],
            type: "website",
            locale: "locale",
            url: "",
            title: "",
            description: "",
            width: "",
            height: "",
            alt: "",
        },
        description: "This is a description of the page",
        canonical: "https://www.example.com/canonical",
        nofollow: "false",
        noindex: ""

    }

}


export default async function Page({ params }) {
    const { data } = await getClient().query({ query: getPage, variables: { slug: params.slug } });
    const page = data.pageCollection.items[0];

    if (!page) {
        return notFound()
    }

    return <>
        <HeroHome />
        <SectionsCollection items={page.sectionsCollection.items} />
        <MapSection />
        <Partners />
    </>;
}