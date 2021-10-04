import SaveButton from '@bit/totalsoft_oss.react-mui.save-button'
import MyConferencesHeader from 'features/myConference/list/MyConferenceHeader'
import { useHeader } from 'providers/AreasProvider'
import React, { useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouteMatch } from 'react-router'
import { reducer, initialConference } from '../conferenceState'
import MyConferences from './MyConferences'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { CONFERENCE_QUERY } from 'features/myConference/edit/gql/queries/conferenceQuery'
import { DICTIONARY_QUERY } from 'features/conference/gql/queries/DictionaryQuery'
import LoadingFakeText from '@bit/totalsoft_oss.react-mui.fake-text/dist/LoadingFakeText'

const MyConferenceContainer = () => {
    const { t } = useTranslation()
    const [, setHeader] = useHeader()
    const [conference, dispatch] = useReducer(reducer, initialConference)
    const match = useRouteMatch()

    const conferenceId = match.params.id
    const isNew = conferenceId === 'new'

    const { loading: loadingConference } = useQueryWithErrorHandling(CONFERENCE_QUERY, {
        variables: { id: conferenceId, isNew },
        onCompleted: result => result?.conference && dispatch({ type: 'resetConference', payload: result.conference })
    })

    useEffect(() => () => setHeader(null), []) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        setHeader(
            <MyConferencesHeader title={conference.name} actions={<SaveButton title={t("General.Buttons.Save")} />} />)
    }, [conference.name, setHeader, t])

    const { data, loading } = useQueryWithErrorHandling(DICTIONARY_QUERY)

    if (loading || loadingConference) return <LoadingFakeText lines={10} />

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