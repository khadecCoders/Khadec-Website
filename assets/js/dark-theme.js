if(!localStorage.getItem('Theme')){
    localStorage.setItem("Theme", 'Light');
}else{
    // ....
}

var Theme = localStorage.getItem("Theme");
let element = document.getElementById('hero');

if(Theme == 'Light'){
    document.getElementById('body').classList.remove('dark');
    document.getElementById('changeTheme').innerHTML = `<p>Theme</p><i class="bi bi-sun"></i>`
    document.getElementById('heroBg').src = 'assets/img/intro-img.svg';
    // document.getElementById('hero').style.backgroundImage = 'url("../img/intro-bg.jpg")';
    // document.getElementById('hero').style.backgroundSize = 'cover';
    // document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
    // document.getElementById('hero').style.backgroundPosition = 'center';
    
}else{
    document.getElementById('body').classList.add('dark');
    document.getElementById('changeTheme').innerHTML = `<p>Theme</p><i class="bi bi-moon"></i>`
    document.getElementById('heroBg').src = 'assets/img/intro-img-2.svg';
    // document.getElementById('hero').style.backgroundImage = 'url("../img/intro-bg.png")';
    // document.getElementById('hero').style.backgroundSize = 'cover';
    // document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
    // document.getElementById('hero').style.backgroundPosition = 'center';
}

document.getElementById('changeTheme').addEventListener('click', () => {
    document.getElementById('body').classList.toggle('dark');
    if(document.getElementById('body').className == 'dark'){
        document.getElementById('changeTheme').innerHTML = `<p>Theme</p><i class="bi bi-moon"></i>`
        document.getElementById('heroBg').src = 'assets/img/intro-img-2.svg';
        // document.getElementById('hero').style.backgroundImage = 'url("../img/intro-bg.png")';
        // document.getElementById('hero').style.backgroundSize = 'cover';
        // document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
        // document.getElementById('hero').style.backgroundPosition = 'center';
        localStorage.setItem("Theme", 'Dark');

    }else{
        document.getElementById('changeTheme').innerHTML = `<p>Theme</p><i class="bi bi-sun"></i>`
        document.getElementById('heroBg').src = 'assets/img/intro-img.svg';
        // document.getElementById('hero').style.backgroundImage = 'url("../img/intro-bg.jpg")';
        // document.getElementById('hero').style.backgroundSize = 'cover';
        // document.getElementById('hero').style.backgroundRepeat = 'no-repeat';
        // document.getElementById('hero').style.backgroundPosition = 'center';
        localStorage.setItem("Theme", 'Light');
    }
})

