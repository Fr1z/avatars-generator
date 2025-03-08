import './assets/index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configureUrlQuery } from 'react-url-query'

import App from './components/App'
import Renderer from './components/Renderer'
import history from './history'
import registerServiceWorker from './registerServiceWorker'
import Avatar from 'avataaars'

const params = new URL(document.location.href).searchParams

// TODO: This bug all, maybe updating react will solve the problem
// Find all div elements with class "avatar"
const avatarElements = document.querySelectorAll('.avatar');



if (params.get('__render__') !== '1') {
  // link the history used in our app to url-query so it can update the URL with it.
  configureUrlQuery({ history })

  ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

  // Per ogni elemento, monta il componente React
  avatarElements.forEach((element) => {
    // data attribute extraction

    const dimension = element.getAttribute('width') || '50px'

    const props = {
      topType: element.getAttribute('top-type') || 'ShortHairShortWaved',
      accessoriesType: 'Blank',
      facialHairType: 'Blank',
      clotheType: 'BlazerShirt',
      eyeType: 'Predefinito',
      eyebrowType: 'UpDownNatural',
      mouthType: 'Predefinito',
      skinColor: 'Chiara'
    }

    // Render avatars divs
    ReactDOM.render((
      <Avatar
        style={{
          position: 'relative',
          left: '0',
          right: '0',
          bottom: '0',
          top: '0',
          width: dimension,
          height: dimension,
        }}
        avatarStyle='transparent'
        className=''
        {...props}
      />
    ), element);
  })

  registerServiceWorker()
  console.log("APP Mode")
  // server rendering mode
} else {
  console.log("Renderer Mode")
  ReactDOM.render(<Renderer />, document.body)
}
