import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field'
import DateTime from '@bit/totalsoft_oss.react-mui.date-time'
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete'

const MyConferenceInfo=props=>{
    const {types, categories} = props
    const {t} = useTranslation()

    return <Grid container spacing={3}>
        <Grid item container lg={9} spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
                <CustomTextField label={t('Conference.Name')} fullWidth />
            </Grid>
        </Grid>
        <Grid item lg={12} container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
                <DateTime label={t('Conference.StartDate')} showTime={true} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <DateTime label={t('Conference.EndDate')} showTime={true} />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Autocomplete label={t('Conference.Type')} fullWidth isClearable options={types}
                />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Autocomplete
                    label={t('Conference.Category')} fullWidth isClearable options={categories}
                />
            </Grid>
        </Grid>
    </Grid >
}


MyConferenceInfo.propTypes={
    types:PropTypes.array,
    categories:PropTypes.array
}

export default MyConferenceInfo