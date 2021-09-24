/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'

import HelloWorld from 'features/helloWorld/HelloWorld'
import Welcome from 'features/welcome/Welcome'
import Settings from 'features/settings/Settings'
import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import { useEmail } from 'hooks/useEmail'
import ConferenceListContainer from 'features/conference/ConferenceListContainer'
import MyConferenceListContainer from 'features/myConference/list/MyConferenceListContainer'


export default function AppRoutes() {
  const [email] = useEmail()
  if(!email) {
    return (
    <Switch>
     <CustomRoute isPrivate={false} exact path='/welcome' component={Welcome} />
     <Redirect exact from='/' to='/welcome' />
   </Switch>
    )
    }
    return (
      <Switch>
        <CustomRoute isPrivate={false}exact path="/helloWorld" component={HelloWorld} />
        <CustomRoute isPrivate={false} exact path='/welcome' component={Welcome} />
        <CustomRoute isPrivate={false} exact path='/conference' component={ConferenceListContainer} />
        <CustomRoute isPrivate={false} exact path='/myConference' component={MyConferenceListContainer} />
        <CustomRoute exact path='/settings' component={Settings} />
        <Redirect exact from='/' to='/welcome' />
        <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
        <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
      </Switch>
    )
  } 

