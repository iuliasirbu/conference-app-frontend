import React, { useCallback, useEffect, useState } from 'react'
import MyConferenceFilters from './MyConferenceFilters'
import conferences from 'utils/mocks/attendeeList'
import MyConferenceList from './MyConferenceList'
import LoadingFakeText from '@bit/totalsoft_oss.react-mui.fake-text'
import { generateDefaultFilters } from 'utils/functions'
import { useHeader } from 'providers/AreasProvider'
import AddButton from '@bit/totalsoft_oss.react-mui.add-button'
import MyConferenceHeader from './MyConferenceHeader'
import { useTranslation } from 'react-i18next'

const MyConferenceListContainer = () => {
    const {data, loading} = {data:conferences, loading:false}
    const [filters, setFilters] = useState(generateDefaultFilters())
    const [, setHeader] = useHeader()
    const{t} = useTranslation()

    useEffect(()=>{
        //did mount
        return ()=>{
            //will unmount
            setHeader(null)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
        setHeader(
        <MyConferenceHeader 
            title={t('NavBar.MyConferences')}
            actions={<AddButton title={t('NavBar.MyConferences')}></AddButton> }
            />)
        
        return()=>{

        }
    },[])
    const handleFilterChange = useCallback(value => {

        setFilters(value)
    }, [])

    const handleApplyFilters = useCallback((value) => {
        setFilters(value)
    }, [])

    if (loading) {
        return <LoadingFakeText lines={10} />
    }
    return (
    <>
    <MyConferenceFilters filters={filters} onApplyFilters ={handleApplyFilters}/>
    <MyConferenceList conferences = {data} />
    </>
    )
}


export default MyConferenceListContainer;