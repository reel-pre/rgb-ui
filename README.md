
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


You can include your own css classnames to override the button styles by passing the classname to the RGBbutton component:  
```jsx
<RGBbutton label="Click Me" className="customClass"/>  
```

However for few properties such as font-size, background-color of the button,use either the !important rule for your property:  
```css
.customClass{
font-size:25px !important;
}
```  

 Or use classname with high specificity, such as including atleast one selector before your classname.  
Eg:  
```css
div .customClass{
font-size:25px;
}
```  


## License

MIT © [reel-pre](https://github.com/reel-pre)
