import React, { useCallback, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import MyConferenceFilters from './MyConferenceFilters';
import conferences from 'utils/mocks/attendeeList';
import LoadingFakeText from '@bit/totalsoft_oss.react-mui.fake-text';
import MyConferenceList from './MyConferenceList';
import { generateDefaultFilters } from 'utils/functions';
import { useHeader } from 'providers/AreasProvider';
import MyConferencesHeader from './MyConferenceHeader';
import { useTranslation } from 'react-i18next';
import AddButton from '@bit/totalsoft_oss.react-mui.add-button';
import { useHistory } from 'react-router';


function MyConferenceListContainer() {
    const {t} =useTranslation()

    const { data, loading } = { data: conferences, loading: false }
    const [filters, setFilters] = useState(generateDefaultFilters)
    const [, setHeader] = useHeader()
    const history = useHistory()

const handleAddClick = useCallback(() => {
   history.push('myConferences/new')

}, [history])

    useEffect(() => {
        //did mount
        return () => {
            //will unmount
            setHeader(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        setHeader(
        <MyConferencesHeader    
            title={t('NavBar.MyConferences')}
            actions={<AddButton title={t('General.Buttons.AddConference')} onClick={handleAddClick}/> }
            />)
        
        return()=>{

        }
    },[])

    const handleApplyFilters = useCallback((value) => {
        setFilters(value)
    }, [])

    if (loading) return <LoadingFakeText lines={10} />

    return (
        <Grid container>
            <Grid item xs={12}>
                <MyConferenceFilters filters={filters} onApplyFilters={handleApplyFilters}></MyConferenceFilters>
            </Grid>
            <Grid>
                <MyConferenceList conferences={data}>
                </MyConferenceList>
            </Grid>
        </Grid>
    
    )
}

export default MyConferenceListContainer