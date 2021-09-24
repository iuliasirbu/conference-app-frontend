import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Grid, Typography } from '@material-ui/core'
import { PermIdentity } from '@material-ui/icons'
import RoomIcon from '@material-ui/icons/Room';


const MyConferenceSubtitle = (props) => {
    const {speaker, location} = props
    const {t} = useTranslation();

    return (
        <Grid container item lg={12}>
            <Grid item lg={1}>
                <PermIdentity />
            </Grid>
            <Grid item lg={11}>
                <Typography>{t('Conferences.Speaker')}</Typography>
                <Typography>{speaker?.name}</Typography>

            </Grid>
            <Grid item lg={1}>
                <RoomIcon />
            </Grid>
            <Grid item lg={11}>
                {`${location?.city?.name}, ${location?.county?.name}, ${location?.country?.name}`}
            </Grid>
        </Grid>
    )
}

MyConferenceSubtitle.propTypes={
    speaker:PropTypes.object,
    location: PropTypes.object.isRequired
}

export default MyConferenceSubtitle