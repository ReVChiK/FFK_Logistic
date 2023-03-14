import '../sass/style.sass'

/*png*/
import logotype from '../img/Logo.png';
import airplane from '../img/airplane.png';
import flowers from '../img/flowers.png';
import ecuador_flower1 from '../img/flower1.png';
import ecuador_flower2 from '../img/flower2.png';
import ecuador_flower3 from '../img/flower3.png';
import ecuador_flower4 from '../img/flower4.png';
import ecuador_flower5 from '../img/flower5.png';
/*png*/

/*svg*/
import switcherSVG from '../icons/switcher.svg';
import mailSvg from '../icons/mail.svg';
import phoneSvg from '../icons/phone.svg';
import ecuador_map from '../icons/ecuador_map.svg';
import geo from '../icons/geolocation.svg';
/*svg*/

import setLogo from './components/logo'

/*functions*/
import { SvgIcon } from './components/svg';
import { SetImg, SetImgText } from './components/photos';
/*functions*/

const ecuador_flowers = [
    ecuador_flower1,
    ecuador_flower2,
    ecuador_flower3,
    ecuador_flower4,
    ecuador_flower5
]

const ecuador_flowers_text = [
    "ke", "co", "cl", "holl", "isr"
]

setLogo(document.querySelector('.header-logotype'), logotype)

SvgIcon(document.querySelector('.lang__content_switcher'), switcherSVG)

SvgIcon(document.querySelector('.phone-icon'), phoneSvg)

SvgIcon(document.querySelector('.mail-icon'), mailSvg)

SvgIcon(document.querySelector('.wrapper-container__shape_content-map'), ecuador_map)

SvgIcon(document.querySelector('.geolocation'), geo)

SetImg(document.querySelectorAll('.flower-img'), ecuador_flowers)
SetImgText(document.querySelectorAll('.pic__item_text'), ecuador_flowers_text)

(function Carousel(){
    let carousel = document.querySelector('.wrapper');
    carousel.style.backgroundBlendMode = 'multiply';
    carousel.style.background = `url(${airplane})`;
    carousel.style.backgroundSize = 'cover';
    carousel.style.backgroundColor = 'rgba(28, 38, 51, .36)';
}())
