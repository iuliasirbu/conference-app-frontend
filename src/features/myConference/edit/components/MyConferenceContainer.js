import SaveButton from '@bit/totalsoft_oss.react-mui.save-button'
import MyConferencesHeader from 'features/myConference/list/MyConferenceHeader'
import { useHeader } from 'providers/AreasProvider'
import React, { useCallback, useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useRouteMatch } from 'react-router'
import { reducer, initialConference } from '../conferenceState'
import MyConferences from './MyConferences'
import { useError, useQueryWithErrorHandling } from 'hooks/errorHandling'
import { CONFERENCE_QUERY } from 'features/myConference/edit/gql/queries/conferenceQuery'
import { DICTIONARY_QUERY } from 'features/conference/gql/queries/DictionaryQuery'
import LoadingFakeText from '@bit/totalsoft_oss.react-mui.fake-text/dist/LoadingFakeText'
import { useMutation } from '@apollo/client'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { UPDATE_CONFERENCE } from '../gql/mutations/UpdateConference'
import { useEmail } from 'hooks/useEmail'



const MyConferenceContainer = () => {
    const { t } = useTranslation()
    const [, setHeader] = useHeader()
    const addToast = useToast()
    const showError = useError()
    const [conference, dispatch] = useReducer(reducer, initialConference)
    const match = useRouteMatch()
    const [email] = useEmail()
    const history = useHistory()

    const conferenceId = match.params.id
    const isNew = conferenceId === 'new'

    const { loading: loadingConference } = useQueryWithErrorHandling(CONFERENCE_QUERY, {
        variables: { id: conferenceId, isNew },
        onCompleted: result => result?.conference && dispatch({ type: 'resetConference', payload: result.conference })
    })

    const [updateConference, { loading: saving }] = useMutation(UPDATE_CONFERENCE,
        {
            onCompleted: result => {
                addToast(t('MyConferences.SavingSucceeded'), 'success')

                if (isNew) {
                    history.push(`/myConferences/${result?.saveConference?.id}`);
                    return;
                }

                result?.saveConference && dispatch({ type: 'resetConference', payload: result?.saveConference })
            },
            onError: showError
        })

    const handleSave = useCallback(() => {
        const { id, name, startDate, endDate, type, category, location, speakers, deletedSpeakers } = conference;
        const { city, county, country, ...locationData } = location
        const input = {
            id, 
            name, 
            startDate, 
            endDate, 
            deletedSpeakers, 
            type, 
            category,
            speakers,
            organizerEmail : email,
            location: {
                ...locationData,
                cityId: city?.id,
                countyId: county?.id,
                countryId: country?.id
            }

        }
        updateConference({ variables: { input } })
    }, [conference, email, updateConference])

    useEffect(() => () => setHeader(null), [setHeader])
    useEffect(() => {
        setHeader(<MyConferencesHeader actions={<SaveButton title={t("General.Buttons.Save")} onClick={handleSave} />} />)

    }, [handleSave, setHeader, t])
    useEffect(() => {
        setHeader(<MyConferencesHeader title={conference.name} actions={<SaveButton title={t("General.Buttons.Save")} />} />)
    }, [conference.name, setHeader, t])


    const { data } = useQueryWithErrorHandling(DICTIONARY_QUERY)

    if (loadingConference || saving) return <LoadingFakeText lines={10} />

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