/*
Notice: The code below just test, You can delete it and code normally. Enjoy!!!!
*/
//tooltip start
function tooltip(){
    $arBtn= document.getElementsByTagName("button");
    
    for(var i = 0;i<$arBtn.length;i++){
        // console.log($arBtn[i]);
        if ($arBtn[i].hasAttribute("data-toggle")) {
           if($arBtn[i].getAttribute("data-toggle")=='tooltip'){
               position= $arBtn[i].getAttribute("data-placement");
                template = '<div class="tooltip rbox_tooltip_'+position+'" role="tooltip">' +
                '<div class="arrow"></div>' +
                '<div class="tooltip_inner">'+$arBtn[i].innerHTML+'</div></div>';
                $arBtn[i].innerHTML+=template;
                $arBtn[i].setAttribute("title","");
                $arBtn[i].addEventListener("mouseover",function(){
                   
                    this.children[0].classList.add("show");
                    // this.children[0].style.top="10px";
                });
                $arBtn[i].addEventListener("mouseout",function(){
                    this.children[0].classList.remove("show");
                });
           }
        }
    }
}

//tooltip end

