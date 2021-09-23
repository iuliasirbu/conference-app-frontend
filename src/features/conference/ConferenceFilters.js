import React, { useCallback, useEffect, useState } from 'react'
import { IconCard, DateTime, Button } from '@bit/totalsoft_oss.react-mui.kit.core';
import { Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types'
import { generateDefaultFilters } from 'utils/functions';

function ConferenceFilters (props){
    const {filters, onApplyFilters} = props

    const [startDate, setStartDate] = useState(filters.startDate)
    const [endDate, setEndDate] = useState(filters.endDate)
    
    useEffect(()=>{
        setStartDate(filters.startDate)
        setEndDate(filters.endDate)
    }, [filters])

    const handleApplyButton = useCallback(() => onApplyFilters({ startDate, endDate }), [onApplyFilters, endDate, startDate])
    const handleResetButton = useCallback(() => onApplyFilters(generateDefaultFilters()), [onApplyFilters])
    const handleKeyPressed = useCallback(({ keyCode }) => (keyCode === 13 && handleApplyButton()), [handleApplyButton])

    const {t} = useTranslation()
    return(
    <>
        <IconCard 
            icon={SearchIcon} 
            iconColor='theme'
            content = {
                <Grid container spacing={5}>
                    <Grid item> 
                        <DateTime
                            label={t("Conference.Filters.StartDate")}
                            clearable value={startDate} onChange={setStartDate}
                        /> 
                    </Grid>
                    <Grid item> 
                        <DateTime
                            label={t("Conference.Filters.EndDate")}
                            clearable value={endDate} onChange={setEndDate}
                        /> 
                    </Grid>
                </Grid>
            }
        />
        <Button size = {"sm"} color = {"primary"} right={true} onClick={handleResetButton}>
            {t("General.Buttons.ResetFilters")}
        </Button>
        <Button size = {"sm"} color = {"primary"} right={true} onClick={handleApplyButton}>
            {t("General.Buttons.ApplyFilters")}
        </Button>
    </>
    )
}

ConferenceFilters.propTypes = {
    filters: PropTypes.object,
    onApplyFilters: PropTypes.func
}

export default ConferenceFilters