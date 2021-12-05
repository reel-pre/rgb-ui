![rgb-ui logo](./images/logo.gif)

> A React UI library inspired by RGB style flashy lights that best suits the dark theme.

## Install

```bash
npm install --save rgb-ui
```

## Import
Components can be imported from rgb-ui using named import. You also need to import the css file for rgb-ui.
```jsx
import { RGBbutton, RGBslider, RGBchip, RGBcheckbox } from 'rgb-ui'
import 'rgb-ui/dist/index.css'
```

## Components

### 1. RGBslider

A rgb-ui variant of a input range slider.

<b>Prop-name(type)</b>:

min(number), max(number), step(number), value(number), onChange(function), type(string = 'red'||'green'||'blue'), className(string).  
All three variants of the RGBslider(red, green or blue) can be accessed through the type prop.

### 2. RGBchip

A rgb-ui variant of a chip to display data.

<b>Prop-name(type)</b>:

label(number or string), type(string = 'red'||'green'||'blue'), className(string), onClick(function), value(number).  
All three variants of the RGBchip(red, green or blue) can be accessed through the type prop.

Example usage(RGBslider and RGBchip):  
![rgb-ui_range](./images/range_gif_animation.gif)

Example code:

```jsx
  const [input, setInput] = useState(40)
  const handleRangeChange = (e) => {
    setInput(e.target.value)
  }
return <div className='rangecontainer'>
        <RGBslider
          type='red'
          min={0}
          max={40}
          value={input}
          onChange={handleRangeChange}
        />
        <RGBchip label={input} type='red' />
      </div>;
```
### 3. RGBcheckbox
A rgb-ui variant of a checkbox input.


<b>Prop-name(type)</b>:

label(number or string), type(string = 'red'||'green'||'blue'), onClick(function), checkstate(boolean).  
All three variants of the RGBcheckbox(red, green or blue) can be accessed through the type prop.   


Example usage:  
![rgb-ui_checkbox](./images/check_gif_animation.gif)


Example code:
```jsx
const [checkbox, setCheckbox] = useState(false)
return <RGBcheckbox
        label='red checkbox'
        type='red'
        checkstate={checkbox}
        onClick={() => {
          setCheckbox((prevState) => !prevState)
        }}
      />;
```

### 4. RGBbutton

<b>Prop-name(type)</b>:

label(string | number), type(string = 'scratch'||'lines'||undefined), className(string).

Example usage:  
![rgb-ui demo example](./images/example.gif)

You can include your own css classnames to override the styles.  
For example, you can override the button styles by passing the classname to any component:

```jsx
<RGBbutton label='Click Me' className='customClass' />
```

However for few properties such as font-size, background-color of the button,use either the !important rule for your property:

```css
.customClass {
  font-size: 25px !important;
}
```

Or use classname with high specificity, such as including atleast one selector before your classname.  
Eg:

```css
div .customClass {
  font-size: 25px;
}
```

## License

MIT © [reel-pre](https://github.com/reel-pre)
