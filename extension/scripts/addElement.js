window.onload = function () {
    let listArray = JSON.parse(localStorage.getItem('dsaSheeterListArray'));


    if(listArray){
        for(let i = 0; i < listArray.length; i++){
            const linksDiv = document.getElementById('links');
            const newElement = document.createElement('div');
            newElement.classList.add('listElement');
            
            const anchor = document.createElement('a');
            anchor.setAttribute('href', listArray[i].url)
            anchor.setAttribute('target', '_blank')
            anchor.classList.add('anchorStyle');
            anchor.innerText = listArray[i].questionTitle;
            newElement.insertAdjacentElement('afterbegin', anchor);
        
        
        
            linksDiv.insertAdjacentElement('beforeend', newElement);
        }
    }
}
