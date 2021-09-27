import SaveButton from '@bit/totalsoft_oss.react-mui.save-button'
import MyConferencesHeader from 'features/myConference/list/MyConferenceHeader'
import { useHeader } from 'providers/AreasProvider'
import React, { useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouteMatch } from 'react-router'
import { categories, cities, counties, countries, types } from 'utils/mocks/conferenceDictionary'
import { reducer, initialConference } from '../conferenceState'
import MyConferences from './MyConferences'
import {conference as mockConference} from 'utils/mocks/myConference'



const MyConferenceContainer = () => {
    const { t } = useTranslation()
    const [, setHeader] = useHeader()
    const [conference, dispatch] = useReducer(reducer, initialConference)
    const match = useRouteMatch()

    const conferenceId = match.params.id
    const isNew= conferenceId ==='new'

    useEffect(()=>{
        if(!isNew){
            dispatch({type:'resetConference', payload:mockConference})
        }
   
    },[] )// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => () => setHeader(null), []) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        setHeader(
            <MyConferencesHeader title={conference.name} actions={<SaveButton title={t("General.Buttons.Save")} />} />)
    }, [conference.name, setHeader, t])

    const { data, loading } = {
        loading: false,
        data: {
            typeList: types,
            categoryList: categories,
            countryList: countries,
            countyList: counties,
            cityList: cities
        }
    }

    return <MyConferences
        conference={conference}
        dispatch={dispatch}
        types={data?.typeList}
        categories={data?.categoryList}
        countries={data?.countryList}
        counties={data?.countyList}
        cities={data?.cityList}

    />
}


export default MyConferenceContainer