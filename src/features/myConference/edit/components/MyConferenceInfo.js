import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field'
import Autocomplete from '@bit/totalsoft_oss.react-mui.autocomplete'
import DateTime from '@bit/totalsoft_oss.react-mui.date-time'
import { onTextBoxChange } from 'utils/propertyChangeAdapters'


const MyConferenceInfo = (props) => {
    const { types, categories, conference, dispatch } = props
    const { t } = useTranslation()
    const { name, startDate, endDate, type, category } = conference
    const handleChange = type => value => dispatch({ type: type, payload: value })


    return (
        <Grid container spacing={3}>
            <Grid item container lg={9} spacing={3}>
                <Grid item xs={12} sm={6} lg={4} >
                    <CustomTextField label={t('Conference.Name')} value={name} onChange={onTextBoxChange(handleChange('name'))} />
                </Grid>
            </Grid>


            <Grid item container lg={12} spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                    <DateTime
                        label={t('Conference.StartDate')}
                        value={startDate}
                        onChange={handleChange('startDate')}
                        showTime={true}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <DateTime
                        label={t('Conference.EndDate')}
                        value={endDate}
                        onChange={handleChange('endDate')}
                        showTime={true}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        label={t('Conference.Type')}
                        createdLabel='Conference.Type'
                        value={type}
                        onChange={handleChange('type')}
                        fullWidth
                        isClearable
                        options={types}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Autocomplete
                        label={t('Conference.Category')}
                        createdLabel='Conference.Category'
                        value={category}
                        onChange={handleChange('category')}
                        fullWidth
                        isClearable
                        options={categories}
                    />
                </Grid>
            </Grid>
        </Grid>
    )


}

MyConferenceInfo.propTypes = {
    types: PropTypes.array,
    categories: PropTypes.array,
    conference: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default MyConferenceInfo