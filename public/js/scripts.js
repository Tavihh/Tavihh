function redirectToLink(img) {
    var link = img.parentNode.parentNode.querySelector('a').href;
    window.location.href = link;
}

function setImage(id,path){
    var img = document.getElementById(id)
    img.setAttribute('src','./public/img/'+path+'-bk.png')
}

function resetImage(id,path){
    var img = document.getElementById(id)
    img.setAttribute('src','./public/img/'+path+'.png')
}