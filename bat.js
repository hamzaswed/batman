/*batman informantion divs (start)*/

var langAr = document.getElementsByClassName("lang")[0].children[0],//call arabic icon
    langTr = document.getElementsByClassName("lang")[0].children[1],//call turkish icon
    langEn = document.getElementsByClassName("lang")[0].children[2],//call english icon
    btnAr =document.getElementsByTagName("button")[0],//call "OK" button (arabic)
    btnEn = document.getElementsByTagName('button')[1],//call "OK" button (english)
    btnTr = document.getElementsByTagName("button")[2],//call "OK" button (turkish)
    infoAr = document.getElementsByClassName("info")[0],//call information div (arabic)
    infoEn = document.getElementsByClassName("info")[1],//call information div (english)
    infoTr = document.getElementsByClassName("info")[2];////call information div (turkish)

//for arabic information (start)
langAr.onclick = function(){
    infoEn.style.top = "-35%";
    infoTr.style.top = "-35%";
    infoAr.style.top = "35%";
    img.style.display = "none"
    
}
btnAr.onclick = function(){
    infoAr.style.top = "-35%";
    infoEn.style.top = "-35%";
    infoTr.style.top = "-35%";
    img.style.display = "block";
}
//for arabic information (end)

//for turkish information (start)
langTr.onclick = function(){
    infoEn.style.top = "-35%";
    infoAr.style.top = "-35%";
    infoTr.style.top = "35%";
    img.style.display = "none";
    
}
btnTr.onclick = function(){
    infoAr.style.top = "-35%";
    infoEn.style.top = "-35%";
    infoTr.style.top = "-35%";
    img.style.display = "block";
}
//for turkish information (end)

//for english information (start)
langEn.onclick = function(){
    infoTr.style.top = "-35%";
    infoAr.style.top = "-35%";
    infoEn.style.top = "35%";
    img.style.display = "none";
    
}
btnEn.onclick = function(){
    infoAr.style.top = "-35%";
    infoEn.style.top = "-35%";
    infoTr.style.top = "-35%";
    img.style.display = "block";
}
//for english information (end)

/*batman informantion divs (end)*/

/*change batman images (start)*/
var img = document.getElementsByClassName("image")[0],//call image src
    startBtn = document.getElementsByTagName("button")[3],//call start button
    yearsDiv = document.getElementsByClassName("year")[0],//call years div
    years = [ 
        '',
        '1965',
        '1966',
        '1977',
        '1983',
        '1989',
        '1989',
        '1992',
        '1993',
        '1995',
        '1995',
        '1998',
        '1999',
        '1999',
        '2001',
        '2003',
        '2003',
        '2004',
        '2005',
        '2007',
        '2008',
        '2008',
        '2009',
        '2009',
        '2009',
        '2011',
        '2012'
    ],
    Time,//set time for setTimeout
    i=1;//create i for images number


startBtn.onclick = function restart() {
    img.children[0].src = "imagess/img"+i+".png";//call first children for first image
    yearsDiv.children[1].innerHTML = years[i];
    i++;
    Time = setTimeout(
        function (){
            img.children[0].src = "imagess/img"+i+".png";
            yearsDiv.children[1].innerHTML = years[i];
                if(i<26){
                    restart();
                }else{
                    i=1;
                }
        },1000    //setTimeout for change the image after 900 millisecound
)
}
/*change batman images (end)*/

/*stop button (start*/
var endBtn = document.getElementsByTagName("button")[4];
endBtn.onclick = function(){
    clearTimeout(Time);
}
/*stop button (end)*/