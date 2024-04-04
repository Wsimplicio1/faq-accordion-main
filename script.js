let toggles = document.querySelectorAll('.toggle');
let contentDiv = document.querySelectorAll('.content');
let icon = document.querySelectorAll('.icon-plus');

for(let i = 0; i < toggles.length; i++){
    toggles[i].addEventListener('click', () =>{
        if(contentDiv[i].style.display === 'none'){
            contentDiv[i].style.display = 'block';
            icon[i].src = "/images/icon-minus.svg";
        } else {
            contentDiv[i].style.display = 'none';
            icon[i].src = "/images/icon-plus.svg"
        };

        for(let y = 0; y < contentDiv.length; y++){
            if(y!=i){
                contentDiv[y].style.display = 'none';
                icon[y].src = "/images/icon-plus.svg"
            }
        };
    });
};





