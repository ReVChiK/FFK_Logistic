import '../sass/style.sass'

import logotype from '../img/Logo.png';

import switcherSVG from '../icons/switcher.svg';

import setLogo from './components/logo'
import { SvgSwitcher } from './components/svg';

setLogo(document.querySelector('.header-logotype'), logotype)
SvgSwitcher(document.querySelector('.lang__content_switcher'), switcherSVG)
