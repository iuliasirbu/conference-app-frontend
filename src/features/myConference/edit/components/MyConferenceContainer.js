import SaveButton from '@bit/totalsoft_oss.react-mui.save-button'
import { Grid } from '@material-ui/core'
import MyConferenceHeader from 'features/myConference/list/MyConferenceHeader'
import { useHeader } from 'providers/AreasProvider'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {categories, cities, counties, countries, types} from 'utils/mocks/conferenceDictionary'
import MyConferences from './MyConferences'

const MyConferenceContainer =()=>{
    const {t} = useTranslation()
    const [, setHeader] =useHeader()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>()=>setHeader (null), [])
    useEffect(()=>{setHeader(<MyConferenceHeader actions={<SaveButton title={t('General.Buttons.Save')}/>}/>)}, [setHeader, t])

    const {data, loading} = {loading:false, data: {
        typeList: types,
        categoryList:categories,
        countryList:countries,
        countyList:counties,
        cityList:cities
    }}

    return <MyConferences
        types={data?.typeList}
        categories={data?.categoryList}
        countries={data?.countryList}
        counties={data?.countyList}
        cities={data?.cityList}/>
}

export default MyConferenceContainer