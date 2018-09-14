window.onload=function(){
    let picture=document.querySelector(".picture");
    let boxLi=document.querySelectorAll(".box li");
    let arrowRight=document.querySelector(".arrow-right");
    let arrowLeft=document.querySelector(".arrow-left");
    let pointLi=document.querySelectorAll(".point li");

    let box=document.querySelector(".box")
    let width5=parseInt(getComputedStyle(box,null).width);
    let now=next=0;
    let t=setInterval(move,3000);
    picture.onmouseenter=function(){
        clearInterval(t);
    }
    picture.onmouseleave=function(){
        t=setInterval(move,3000);
    }
    arrowRight.onclick=function(){
        move();
    }
    arrowLeft.onclick=function(){
        moveL();
    }
    pointLi.forEach(function(v,i){
        pointLi[i].onclick=function(){
            pointLi.forEach(function(v){
                pointLi[next].className="";
            })
            if (i==now) {
                return;
            }else if(i>now){
                boxLi[i].style.left=`${width5}+px`;
                animate(boxLi[now],{left:-width5});
                animate(boxLi[i],{left:0});
                now=next=i;
            }else{
                boxLi[i].style.left=`-${width5}+px`;
                animate(boxLi[now],{left:width5});
                animate(boxLi[i],{left:0});
                now=next=i;
            }
            pointLi[next].className="point1";
        };
    })
    function move(){
        next++;
        if(next==boxLi.length){
            next=0;
        }
        boxLi[next].style.left="1349px";
        animate(boxLi[now],{left:-1349});
        animate(boxLi[next],{left:0});
        pointLi[next].className="point1";
        pointLi[now].className="";
        now=next;
    }
    function moveL(){
        next--;
        if(next<0){
            next=boxLi.length-1;
        }
        boxLi[next].style.left="-1349px";
        animate(boxLi[now],{left:1349});
        animate(boxLi[next],{left:0});
        pointLi[next].className="point1";
        pointLi[now].className="";
        now=next;
    }
    // 班级设置
    let classSetting=document.querySelector(".class-setting");
    let Width=classSetting.querySelector(".medium-box");
    let bigMedium=classSetting.querySelectorAll("ul");
    let mediumLeft=classSetting.querySelector(".medium-arrow-left");
    let mediumRight=classSetting.querySelector(".medium-arrow-right");
    let width=parseInt(getComputedStyle(Width,null).width);
    let current=pass=0;
    mediumLeft.onclick=function(){
        RunL();
    }
    mediumRight.onclick=function(){
        Run();
    }
    function Run(){
        pass++;
        if(pass==bigMedium.length){
            pass=0;
        }
        bigMedium[pass].style.left=width+"px";
        animate(bigMedium[current],{left:-width});
        animate(bigMedium[pass],{left:0});
        current=pass;
    }
    function RunL(){
        pass--;
        if(pass<0){
            pass=bigMedium.length-1;
        }
        bigMedium[pass].style.left=-width+"px";
        animate(bigMedium[current],{left:width});
        animate(bigMedium[pass],{left:0});
        current=pass;

    }

    //师资团队
    let teacher=document.querySelector(".teacher");
    let selectBefore=teacher.querySelector(".medium-arrow-left");
    let selectAfter=teacher.querySelector(".medium-arrow-right");
    let big1Medium=teacher.querySelector(".big1-medium");
    let mediumBox=document.querySelector(".medium-box");
    let width2=parseInt(getComputedStyle(mediumBox,null).width);
    console.log(big1Medium,width2);

    selectAfter.onclick=function(){
            big1Medium.style.transform="translateX(-403px)";
    }
    selectBefore.onclick=function(){
            big1Medium.style.transform="translateX(0px)";
    }

    // 滚动条
    let word=document.querySelector(".word");
    let classes=Width.querySelectorAll("ul li");
    let teachers=big1Medium.querySelectorAll("li");
    let large_move_medium=document.querySelectorAll(".large-move-medium .large-move-list");
    let Lh=innerHeight;
    let teachersTop=mediumBox.offsetTop;
    let arr=[];
    large_move_medium.forEach(function(v){
        arr.push(v.offsetTop)
    })
    window.onscroll=function(){
        let Dh=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(teachersTop,Lh,Dh,arr);
        if (Dh>2){
           word.style.opacity="0.8";
        }
        if (Dh>600) {
            classes.forEach((v1,i)=>{
                classes[0].style.animation="slide .8s forwards";
                classes[1].style.animation="slide 1s forwards";
                classes[2].style.animation="slide 1.2s forwards";
                classes[i].style.display="block";
            })
        }
        if (Dh>2000) {
            teachers.forEach((v1,i)=>{
                teachers[0].style.animation="slide .8s forwards";
                teachers[1].style.animation="slide 1s forwards";
                teachers[2].style.animation="slide 1.2s forwards";
                teachers[i].style.display="block";
            })
        }
        if (Dh>3100) {
            large_move_medium.forEach((v1,i)=>{
                large_move_medium[0].style.animation="slide .8s forwards";
                large_move_medium[1].style.animation="slide 1.1s forwards";
                large_move_medium[2].style.animation="slide 1.5s forwards";
                large_move_medium[3].style.animation="slide 1.8s forwards";
                large_move_medium[i].style.display="block";
            })
        }
    }
    let zhiding=document.querySelector(".up-fixed");
    zhiding.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

}