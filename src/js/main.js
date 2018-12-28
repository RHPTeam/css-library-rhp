/*
Notice: The code below just test, You can delete it and code normally. Enjoy!!!!
*/
//tooltip start
function tooltip(){
    //get all button element in document file.
    $arBtn= document.getElementsByTagName("button");
    
    
    for(var i = 0;i<$arBtn.length;i++){
        //check element is data-toggle
        if ($arBtn[i].hasAttribute("data-toggle")) {
            //check attribute data-toggle is tooltip
           if($arBtn[i].getAttribute("data-toggle")=='tooltip'){
               //get position show tooltip for button
               position= $arBtn[i].getAttribute("data-placement");

               //create component tooltip html
                template = '<div class="tooltip rbox_tooltip_'+position+'" role="tooltip">' +
                '<div class="arrow"></div>' +
                '<div class="tooltip_inner">'+$arBtn[i].innerHTML+'</div></div>';
                //add component tooltip to inside button 
                $arBtn[i].innerHTML+=template;
                //setting attribute title null to it don't display when mouse hover button
                $arBtn[i].setAttribute("title","");
                //add event mouseover for button index
                $arBtn[i].addEventListener("mouseover",function(){
                    //add class show to element div class tooltip
                    this.children[0].classList.add("show");
                });
                //add event mouseout for button index
                $arBtn[i].addEventListener("mouseout",function(){
                    //remove class show to element div class tooltip
                    this.children[0].classList.remove("show");
                });
           }
        }
    }
}

//tooltip end

