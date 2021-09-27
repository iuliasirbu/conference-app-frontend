import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import { useTranslation } from 'react-i18next'
import { Speaker } from '@material-ui/icons'
import MyConferenceSpeakerData from './MyConferenceSpeakerData'

const MyConferenceSpeakers = (props) => {
    const useStyles = makeStyles()
    const { t } = useTranslation()
    const { speakers, dispatch } = props
    const classes = useStyles()

    return (
        <Grid container className={classes.enableScrollX}>
            <Table className={classes.table}>
                <Thead>
                    <Tr>
                        <Th className={classes.tableHeader}>{t('Speaker.Name')}</Th>
                        <Th className={classes.tableHeader}>{t('Speaker.Nationality')}</Th>
                        <Th className={classes.tableHeader}>{t('Speaker.Rating')}</Th>
                        <Th className={classes.tableHeader}>{t('Speaker.MainSpeaker')}</Th>
                        <Th className={classes.tableHeader}></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {speakers?.map((speaker) => (
                        <MyConferenceSpeakerData key={speaker?.id} speaker={speaker}  dispatch={dispatch} />
                    ))}
                </Tbody>
            </Table>
        </Grid>
    )
}

MyConferenceSpeakers.propTypes = {
    speakers: PropTypes.array,
    dispatch: PropTypes.func
}
MyConferenceSpeakers.defaultProps = {
    speakers: [{}]
}

export default MyConferenceSpeakers