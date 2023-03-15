export function SetImg(selectors, [...imgs]){
    for(let i = 0; i < selectors.length; i++){
        selectors[i].src = imgs[i]
    }
}

export function SetImgText(selectors, [...texts]){
    for(let i = 0; i < selectors.length; i++){
        selectors[i].textContent = texts[i]
    }
}

export function Carousel(selector, [...imgs]){
    selector.style.backgroundBlendMode = 'multiply';
    selector.style.background = `url(${imgs[0]})`;
    selector.style.backgroundSize = 'cover';
    selector.style.backgroundColor = 'rgba(28, 38, 51, .36)';
}

export function AboutBackground(selector, img){
    selector.style.backgroundBlendMode = 'multiply';
    selector.style.background = `url(${img})`;
    selector.style.backgroundSize = 'cover';
    selector.style.backgroundColor = 'rgb(22, 33, 46)';
}