import { getClient } from "@/services/client";
import { getPage, getPageSEO } from "@/services/queries";
import { HeroHome, Partners } from "~/devlink";
import SectionsCollection from "@/components/sectionsCollection";
import MapSection from "@/components/map";
import { notFound } from 'next/navigation'

export async function generateMetadata({ params, searchParams }, parent) {
    const { data } = await getClient().query({ query: getPageSEO, variables: { slug: params.slug } });
    const page = data.pageCollection.items[0];
    if (!page) {
        return {}
    }

    const previousImages = (await parent).openGraph?.images || []

    return {
        robots: {
            index: page?.noIndex ? true : false,
            follow: page?.nofollow ? true : false,
            googleBot: {
                index: page?.noIndex ? true : false,
                follow: page?.nofollow ? true : false,
            },
        },
        openGraph: {
            images: ['@/ogimage.png', ...previousImages],
            type: "website",
            locale: "TODO",
            url: "TODO",
            title: page?.SEOTitle,
            description: page.SEODescription,
        },
        title: page.SEOTitle,
        description: page.SEODescription,
        canonical: page.canonical
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