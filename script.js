let toggles = document.querySelectorAll('.toggle');
let contents = document.querySelectorAll('.content');
let icon = document.querySelectorAll('.icon-plus');

for(let i = 0; i < toggles.length; i++){
    toggles[i].addEventListener('click', function(){
        if(contents[i].classList.contains('hidden')){
            contents[i].classList.remove('hidden')
            icon[i].src = '/images/icon-minus.svg';
        } else {
            contents[i].classList.add('hidden');
            icon[i].src = '/images/icon-plus.svg';
        }

        for(let c = 0; c < contents.length; c++){
            if(c!=i){
                contents[c].classList.add('hidden');
                icon[c].src = '/images/icon-plus.svg';
            }
        }
    })
}







