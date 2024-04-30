import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Content, DuoslideSlide, SlidePlant, SliderCollection, SliderDuo } from "~/devlink";

export default function SectionsCollection({ items }) {
    if (!items) {
        return false;
    }
    return <>
        {
            items.map((section, index) => {
                switch (section.__typename) {
                    case 'Headline':
                        return <Content 
                            key={index} 
                            title={section.title} 
                            subtitle={section.subtitle} 
                            description={documentToHtmlString(section.description.json)} />
                        break;
                    case 'SliderCollection':

                        switch (section.theme) {
                            
                            case "Duo":
                                return <SliderDuo
                                    key={index}
                                    title={section.title}
                                    subtitle={section.subtitle}
                                    description={documentToHtmlString(section.description.json)}
                                    slot={
                                        section.collection.plantsCollection.items.map((plant, index) => {
                                            return <DuoslideSlide key={index} title={plant.name} subtitle={section.collection.name} />
                                        })
                                } />
                            case "Dark":
                                return <SliderCollection key={index}
                                    title={section.title}
                                    subtitle={section.subtitle}
                                    description={documentToHtmlString(section.description.json)}
                                    slot={
                                        section.collection.plantsCollection.items.map((plant, index) => {
                                            return <SlidePlant key={index} title={plant.name} subtitle={section.collection.name} />
                                        })
                                    } />
                                break;
                            default:
                                return <h2 key={index}>unmapped slider for {section.theme}</h2>
                                break;
                        }

                    default:
                        return <h2 key={index}>Unmapped section for {section.__typename}</h2>
                }
            })
        }
    </>
}