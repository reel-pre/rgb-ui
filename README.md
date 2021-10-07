
![rgb-ui logo](./images/logo.gif)

> A React UI library inspired by RGB style flashy lights.


## Install

```bash
npm install --save rgb-ui
```

## Usage

```jsx
import React from 'react'
import { RGBbutton } from 'rgb-ui'
import 'rgb-ui/dist/index.css'

const App = () => {
  return <RGBbutton label="Click Me" />
}

export default App
```  


Currently there is only support for RGBbutton component and the button component has 3 variants which are shown below:  


![rgb-ui demo example](./images/example.gif)  


You can override the button properties by using the css button element selector for properties such as font and margin.  

## License

MIT © [reel-pre](https://github.com/reel-pre)
