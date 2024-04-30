import { getClient } from "@/services/client";
import { getLocations } from "@/services/queries";
import { CardLocation, Map } from "~/devlink";


export default async function MapSection({ params }) {
    const { data } = await getClient().query({ query: getLocations });

    return <>
        <Map slot={
            data.contentTypeLocationCollection.items.map((location, index) => {
                return <CardLocation key={index} title={location.name} />
            })

        } />
    </>;
}