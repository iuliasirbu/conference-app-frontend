import {gql} from '@apollo/client'

export const DICTIONARY_QUERY = gql`
    query getDictionaries {
    typeList {
        id
        name
    }
    categoryList{
        id
        name
    }
    countryList {
        id
        name
        code
    }
    countyList {
        id
        name
        code
    }
    cityList {
        id
        name
        code
    }
}
`