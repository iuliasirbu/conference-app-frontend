import React, {useEffect, useReducer} from "react"
import { useTranslation } from "react-i18next"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { useHeader } from 'providers/AreasProvider'
import ConferenceJoinHeader from "./ConferenceJoinHeader"
import { useHistory } from 'react-router'
import YoutubeVideo from './ConferenceJoinVideo'
import ConferenceJoinAttendees from './ConferenceJoinAttendees'
import CancelButton from "@bit/totalsoft_oss.react-mui.cancel-button";
import { initialConference, reducer } from "features/myConference/edit/conferenceState"
import { CONFERENCE_QUERY } from "features/myConference/edit/gql/queries/conferenceQuery"
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { useRouteMatch } from "react-router"

function ConferenceJoin() {
    const [conference, dispatch] = useReducer(reducer, initialConference)
    const { t } = useTranslation()
    const match = useRouteMatch()
    const [, setHeader] = useHeader(); 
    const history = useHistory()
    const {name} = conference
    const conferenceId = match.params.id;
    const isNew = conferenceId === 'new';
    const useStyles = makeStyles((theme) => ({ title: { ...theme.header.title, width: '100%' } }))
    const classes = useStyles()

    const { data, loading: loadingConference } = useQueryWithErrorHandling(CONFERENCE_QUERY, {
        variables: { id: conferenceId, isNew },
        onCompleted: result => result?.conference && dispatch({ type: 'resetConference', payload: result.conference })
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => () => setHeader(null), [])

    // useEffect(() => {
    //     setHeader(
    //         <ConferenceJoinHeader
    //             title={"Conference"}
    //             actions={<CancelButton onClick = {handleExitClick} key='exitButton' title={t("General.Buttons.Exit")}/>}
    //         />
    //     )
    // }, [handleExitClick, setHeader, t])

    useEffect(()=>{
        setHeader(<ConferenceJoinHeader title={name} actions={<CancelButton title={t('General.Buttons.Exit')} onClick={history.goBack} />} />)
    }, [history.goBack, t, setHeader, name])
    

    return <>
    <Grid
        container spacing={2} 
        columns={16}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
            <Grid item xs={8}>
                <YoutubeVideo></YoutubeVideo>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle1" className={classes.title}>{t("General.JoinedAttendees")}</Typography>
                <ConferenceJoinAttendees></ConferenceJoinAttendees>
            </Grid>
    </Grid>
            
   
    </>
}
export default ConferenceJoin