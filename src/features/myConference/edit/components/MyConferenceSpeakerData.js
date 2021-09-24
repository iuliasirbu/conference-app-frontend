import React from 'react'
import PropTypes from 'prop-types'
import { Tr, Td } from 'react-super-responsive-table'
import { useTranslation } from 'react-i18next';
import { Checkbox, makeStyles } from '@material-ui/core';
import tableStyles from 'assets/jss/components/tableStyle';
import CustomTextField from '@bit/totalsoft_oss.react-mui.custom-text-field';
import DeleteButton from '@bit/totalsoft_oss.react-mui.delete-button';

const useStyles = makeStyles(tableStyles);

const MyConferenceSpeakerData = (props) => {
    const { speaker, dispatch, index } = props
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Tr>
            <Td className = {classes.tableContent}>
                <CustomTextField fullWidth />
            </Td>
            <Td className = {classes.tableContent}>
                <CustomTextField fullWidth />
            </Td>
            <Td className = {classes.tableContent}>
                <CustomTextField fullWidth />
            </Td>
            <Td className = {classes.tableContent}>
                <Checkbox color='secondary'/>
            </Td>
            <Td className = {classes.tableContent}>
                <DeleteButton title = {t('General.Buttons.DeleteSpeaker')} size='small' />
            </Td>

        </Tr>
    )
};

MyConferenceSpeakerData.propTypes = {
    speaker: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default MyConferenceSpeakerData;