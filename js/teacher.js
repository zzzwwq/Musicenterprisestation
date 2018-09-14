window.onload=function(){
    //师资团队
    let teacher=document.querySelector(".class-setting");
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
        if (Dh>50) {
            teachers.forEach((v1,i)=>{
                teachers[0].style.animation="slide .8s forwards";
                teachers[1].style.animation="slide 1s forwards";
                teachers[2].style.animation="slide 1.2s forwards";
                teachers[i].style.display="block";
            })
        }
    }

}