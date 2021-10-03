import React from 'react';
import styles from './button.module.scss'
const RGBbutton=(props)=>{
    return (
    <button onClick={props.onClick} className={styles.baseButtonRgb}>
   <div className={styles.baseButtonRgb__upperSVG}>
    <svg className={styles.upperSVG} width="68" height="3" viewBox="0 0 68 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect className={styles.line} width="68" height="2" rx="1" fill="#FF1714"/>
    <rect x="44" width="2" height="3" fill="black"/>
    <rect x="4" width="2" height="3" fill="black"/>
    </svg>
    </div>
    <div className={styles.baseButtonRgb__leftSVG}>
    {props.type==="scratch"?<svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.36948" y="0.281213" width="0.964173" height="15.6443" transform="rotate(-16.9575 1.36948 0.281213)" fill="#FFB800"/>
<rect x="0.461212" y="14.7335" width="0.477661" height="15.6443" transform="rotate(-152.353 0.461212 14.7335)" fill="#FFB800"/>
<rect y="7.07757" width="0.964173" height="15.6443" transform="rotate(-25.6278 0 7.07757)" fill="#FFB800"/>
<rect x="0.947144" y="16.446" width="0.626747" height="8.89811" transform="rotate(-134.888 0.947144 16.446)" fill="#FFB800"/>
<rect x="1.33008" y="22.47" width="0.964173" height="15.6443" transform="rotate(-148.86 1.33008 22.47)" fill="#FFB800"/>
<rect x="3.61227" y="26.4638" width="0.288787" height="22.0518" transform="rotate(-148.86 3.61227 26.4638)" fill="#FFB800"/>
<rect x="10.8219" y="24.4148" width="0.282349" height="15.1164" transform="rotate(-168.923 10.8219 24.4148)" fill="#FFB800"/>
<rect x="17.4752" y="10.8634" width="0.565891" height="13.8835" transform="rotate(77.362 17.4752 10.8634)" fill="#FFB800"/>
<rect x="15.3556" y="7.80019" width="0.284355" height="13.8835" transform="rotate(85.1639 15.3556 7.80019)" fill="#FFB800"/>
<rect x="13.9259" y="7.20564" width="0.284355" height="13.8835" transform="rotate(111.941 13.9259 7.20564)" fill="#FFB800"/>
</svg>
:props.type==="lines"?<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" width="14" height="2" fill="#FFB800"/>
<rect y="6" width="23" height="3" fill="#FFB800"/>
<rect y="12" width="14" height="2" fill="#FFB800"/>
<rect x="1" y="22" width="7" height="2" fill="#FFB800"/>
<rect x="1" y="16" width="23" height="3" fill="#FFB800"/>
</svg>:''}

    </div>
    <div className={styles.baseButtonRgb__rightSVG}>
    {props.type==="scratch"?<svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14.1501" y="32.6282" width="0.964173" height="16.4902" transform="rotate(173.05 14.1501 32.6282)" fill="#FF03B6"/>
<rect x="14.8146" y="21.1341" width="0.477661" height="11.3243" transform="rotate(37.6547 14.8146 21.1341)" fill="#FF03B6"/>
<rect x="17.3839" y="28.218" width="0.964173" height="18.6394" transform="rotate(164.38 17.3839 28.218)" fill="#FF03B6"/>
<rect x="17.9424" y="9.94422" width="0.964173" height="15.6443" transform="rotate(41.1469 17.9424 9.94422)" fill="#FF03B6"/>
<rect x="16.3313" y="4.85638" width="0.831026" height="22.5848" transform="rotate(41.1469 16.3313 4.85638)" fill="#FF03B6"/>
<rect x="11.3926" width="0.282349" height="21.9537" transform="rotate(21.0845 11.3926 0)" fill="#FF03B6"/>
<rect x="0.0259705" y="18.5685" width="0.565891" height="13.8835" transform="rotate(-92.6307 0.0259705 18.5685)" fill="#FF03B6"/>
<rect x="1.58102" y="21.9535" width="0.284355" height="13.8835" transform="rotate(-84.8288 1.58102 21.9535)" fill="#FF03B6"/>
<rect x="2.88568" y="22.7875" width="0.284355" height="12.115" transform="rotate(-58.0516 2.88568 22.7875)" fill="#FF03B6"/>
</svg>:
props.type==="lines"?<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="22" y="24" width="20" height="2" transform="rotate(-180 22 24)" fill="#FF01B8"/>
<rect x="24" y="19" width="17" height="4" transform="rotate(-180 24 19)" fill="#FF01B8"/>
<rect x="23" y="3" width="16" height="3" transform="rotate(-180 23 3)" fill="#FF01B8"/>
<rect x="23" y="7" width="23" height="2" transform="rotate(-180 23 7)" fill="#FF01B8"/>
</svg>:''}

    </div>
    {props.label}
    </button>
   );
}

export default RGBbutton;