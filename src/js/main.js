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
            $arBtn[i].addEventListener("click",function(){
                template = '<div class="tooltip" role="tooltip">' +
                           '<div class="arrow"></div>' +
                           '<div class="tooltip-inner"></div></div>';
            });
           }
        }
    }
}

//tooltip end

