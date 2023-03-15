function Cards(selector_icons, selector_titles, selector_descs, obj_card){
    for(let i = 0; i < selector_icons.length; i++){
        selector_icons[i].innerHTML = obj_card.icons[i]
        selector_titles[i].textContent = obj_card.titles[i]
        selector_descs[i].textContent = obj_card.descriptions[i]
    }
}

export default Cards;