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

import sky from '../img/sky.png';

import plane from '../img/plane.png';
/*png*/

/*svg*/
import switcherSVG from '../icons/switcher.svg';
import mailSvg from '../icons/mail.svg';
import phoneSvg from '../icons/phone.svg';
import ecuador_map from '../icons/ecuador_map.svg';
import geo from '../icons/geolocation.svg';

import about_year from '../icons/years.svg';
import about_weigth from '../icons/weight.svg';
import about_procent from '../icons/procent.svg';
import about_countries from '../icons/countries.svg';
import about_temperature from '../icons/temperature.svg';
import about_clients from '../icons/clients.svg';

import aboutMap1 from '../icons/Map.svg';
import aboutMap2 from '../icons/Map1.svg';

import planeSvg from '../icons/plane.svg';
import logisticMap from '../icons/logisticMap.svg';
import logisticMapPin from '../icons/pin.svg';
/*svg*/

import setLogo from './components/logo'

/*functions*/
import { SvgIcon } from './components/svg';
import { SetImg, SetImgText, Carousel, AboutBackground } from './components/photos';
import Cards from './components/cards';
import { LogisticNav } from './components/logistic';
LogisticNav
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

const logistic_nav_text = [
    "ecuador", "ke", "co", "cl", "holl", "isr"
]

const aboutData = {
    icons: [
        about_year, about_weigth, about_procent, about_countries, about_temperature, about_clients
    ],

    titles: [
        "7 лет", "775 тонн", "94 %",
        "14 стран", "+2/8 градуса", "174 клиента"
    ],

    descriptions: [
        "Успешно работаем уже более семи лет", "Мы перевезли почти 780 тонн груза", "Средний процент выполнения заказа: 94%", "Осуществляем перевозки из 14 стран", "Соблюдение температур при перевозке", "С нами работают 174 клиента"
    ]
}

setLogo(document.querySelector('.header-logotype'), logotype)

SvgIcon(document.querySelector('.lang__content_switcher'), switcherSVG)

SvgIcon(document.querySelector('.phone-icon'), phoneSvg)

SvgIcon(document.querySelector('.mail-icon'), mailSvg)

SvgIcon(document.querySelector('.wrapper-container__shape_content-map'), ecuador_map)

SvgIcon(document.querySelector('.geolocation'), geo)

SvgIcon(document.querySelector('.logistic-container__content_right-map'), logisticMap)
SvgIcon(document.querySelector('.logistic-container__content_right-map__pin'), logisticMapPin)
SvgIcon(document.querySelector('.logistic-container__plane'), planeSvg)

SetImg(document.querySelectorAll('.flower-img'), ecuador_flowers)
SetImgText(document.querySelectorAll('.pic__item_text'), ecuador_flowers_text)

Carousel(document.querySelector('.wrapper'), [airplane, flowers])

AboutBackground(document.querySelector('.about'), sky)
AboutBackground(document.querySelector('.logistic'), plane)

Cards(document.querySelectorAll('.about__item_icon'), document.querySelectorAll('.about__item_data-title'), document.querySelectorAll('.about__item_data-desc'), aboutData)

LogisticNav(document.querySelectorAll('.logistic__navigation_item-title'), logistic_nav_text)
