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