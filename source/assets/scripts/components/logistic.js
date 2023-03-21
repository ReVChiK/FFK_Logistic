export function LogisticNav(selector, nav_items){
    for(let i = 0; i < selector.length; i++){
        selector[i].textContent = nav_items[i]
    }
}