import React from 'react'

const ThemeAndContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  registerName: () => {},
  updateError: () => {},
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  showError: false,
})

export default ThemeAndContext
