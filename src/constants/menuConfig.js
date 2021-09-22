import React from 'react'
// import Welcome from '@material-ui/icons/'
import Settings from '@material-ui/icons/Settings'
import HomeIcon from '@material-ui/icons/Home' 
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'

const menuItems = [
  { icon: <HomeIcon />, text: 'NavBar.MyFirstMenu', path: '/helloWorld', name: 'MyFirstMenu' },
  { icon: <AccessibilityNewIcon />, text: 'NavBar.Welcome', path: '/welcome', name: 'Welcome' },
  { icon: <Settings />, text: 'NavBar.Settings', path: '/settings', name: 'Settings' }
]

export default menuItems




