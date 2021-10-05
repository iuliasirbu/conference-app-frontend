import {gql} from '@apollo/client'
import CommonFragments from 'features/common/fragments'
import Fragments from 'features/conference/gql/queries/fragments'


export const UPDATE_CONFERENCE = gql`
mutation saveConference($input: ConferenceInput!) {
    saveConference(input: $input){
        ...conference
        type {
            ...type
        }
        category {
            ...category
        }
        location {
            #id
            #address
            ...location
            city {
                ...city
            }
            county{
                ...county
            }
            country{
                ...country
            }
        }
        speakers {
            ...speaker
        }
    }
},
${Fragments.location}
${Fragments.conference}
${Fragments.speaker}
${CommonFragments.country}
${CommonFragments.city}
${CommonFragments.county}
${CommonFragments.category}
${CommonFragments.type}
`