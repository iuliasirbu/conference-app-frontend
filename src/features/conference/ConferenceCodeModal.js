import React from "react"
import { useTranslation } from "react-i18next"
import PropTypes from 'prop-types'
import { Grid, Typography } from "@material-ui/core"
import qrCode from "assets/img/qrCode.png";

const ConferenceCodeModal = ({code}) => {
    const {t} = useTranslation()
    return(
        <Grid container>
            <Grid item lg={12}>
                <img src = {qrCode}/>
            </Grid>
            <Grid item lg={12}>
            <Typography>{t("Conferences.QRCodeMessage", { code })}</Typography>
        </Grid>
        </Grid>
    )
}

ConferenceCodeModal.propTypes = {
    code: PropTypes.string
}

export default ConferenceCodeModal