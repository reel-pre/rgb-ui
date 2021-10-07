import React from 'react'
import { RGBbutton } from 'rgb-ui'
import 'rgb-ui/dist/index.css'

const App = () => {
  return (<>
<RGBbutton label="RGB-UI" type="scratch"/>
<p className="classifier">{"<RGBbutton label='Click Me'/>"}</p>
<RGBbutton label="Click Me" />
<p className="classifier">{"<RGBbutton label='Click Me' type='scratch'/>"}</p>
<RGBbutton label="Click Me" type="scratch"/>
<p className="classifier">{"<RGBbutton label='Click Me' type='lines'/>"}</p>
<RGBbutton label="Click Me" type="lines"/>
  </>)
}

export default App
