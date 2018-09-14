window.onload=function(){
    let large_move_medium=document.querySelector(".large-move-medium");
    let large_move_mediumList=document.querySelectorAll(".large-move-medium .large-move-list");
    let Return=document.querySelector(".big-bottom");
    let hide=document.querySelector(".hide");
    window.onscroll=function(){
        let Dh=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(Dh);
        if (Dh>50) {
            large_move_mediumList.forEach((v1,i)=>{
                large_move_mediumList[0].style.animation="slide .8s forwards";
                large_move_mediumList[1].style.animation="slide 1.1s forwards";
                large_move_mediumList[2].style.animation="slide 1.5s forwards";
                large_move_mediumList[3].style.animation="slide 1.8s forwards";
                large_move_mediumList[4].style.animation="slide 2.1s forwards";
                large_move_mediumList[i].style.display="block";
                Return.onclick=function(){
                    large_move_mediumList.forEach((v1,i)=>{
                        large_move_mediumList[5].style.animation="slide .8s forwards";
                        large_move_mediumList[6].style.animation="slide 1.1s forwards";
                        large_move_mediumList[7].style.animation="slide 1.5s forwards";
                        large_move_mediumList[8].style.animation="slide 1.8s forwards";
                        large_move_mediumList[i].style.display="block";
                        hide.style.display="block";
                        large_move_medium.style.height="1359px";
                        Return.style.display="none";
                    })
                }
            })
        }
    }

}