import '../sass/style.sass'

import logotype from '../img/Logo.png';
import airplane from '../img/airplane.png';
import flowers from '../img/flowers.png';

import switcherSVG from '../icons/switcher.svg';
import mailSvg from '../icons/mail.svg';
import phoneSvg from '../icons/phone.svg';

import setLogo from './components/logo'

import { SvgIcon } from './components/svg';

setLogo(document.querySelector('.header-logotype'), logotype)

SvgIcon(document.querySelector('.lang__content_switcher'), switcherSVG)

SvgIcon(document.querySelector('.phone-icon'), phoneSvg)
SvgIcon(document.querySelector('.mail-icon'), mailSvg)

(function Carousel(){
    let carousel = document.querySelector('.wrapper');
    carousel.style.backgroundBlendMode = 'multiply';
    carousel.style.background = `url(${airplane})`;
    carousel.style.backgroundSize = 'cover';
    carousel.style.backgroundColor = 'rgba(28, 38, 51, .36)';
}())
