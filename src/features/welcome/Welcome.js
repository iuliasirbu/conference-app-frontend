import React, { useState, useCallback } from 'react'
import { Typography, Grid, InputAdornment } from '@material-ui/core'
// import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { useTranslation } from 'react-i18next'
import { CustomTextField } from '@bit/totalsoft_oss.react-mui.kit.core';
import { IconButton } from '@bit/totalsoft_oss.react-mui.kit.core';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { validateEmail } from 'utils/functions';
import { useEmail } from 'hooks/useEmail'
import { emptyString } from 'utils/constants';

function Welcome() {
  //const addToast = useToast()
  //addToast('This is my toast', 'success')
  const { t } = useTranslation()
  const [eValid, setEValid] = useState(true)
  const [emailSalvat, setEmailLaNivelDeAplicatie] = useEmail()
  const [email, setEmail] = useState(emailSalvat)
  const changeState = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    []
  );

  const nuStiu = useCallback(
    () => {
      if (validateEmail(email)) {
        setEmailLaNivelDeAplicatie(email)
      }
      else setEmailLaNivelDeAplicatie(emptyString)
      setEValid(validateEmail(email))
    },
    [email, setEmailLaNivelDeAplicatie]
  );

  const intermediarPentruFiltratEnter=useCallback(
    (eveniment)=>{
        if (eveniment.keyCode===13){
          nuStiu()
        }
    }
  )

  return (
    <Grid container direction="column" alignItems="center" spacing={10}>
      <Grid item>
        <Typography variant="h5">{t("LandingPage.Title")} </Typography>
      </Grid>
      <Grid container item direction='column' alignItems='center'>
        <Grid item>
          <Typography variant="caption">{t("LandingPage.Subtitle")} </Typography>
        </Grid>
        <Grid item>
          <CustomTextField onChange={changeState} value={email} onKeyDown={intermediarPentruFiltratEnter}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton size='small' color='theme' aria-label='go' onClick={nuStiu}>
                  <KeyboardReturnIcon fontSize='small'> </KeyboardReturnIcon>
                </IconButton>
              </InputAdornment>
            }
            error={!eValid}
            helperText={!eValid&& t("LandingPage.BadEmail")}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Welcome
