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

               //get position to add class rbox_tooltip_
               pos= $arBtn[i].getAttribute("data-placement");

               //set position relative for button index
                $arBtn[i].style.position="relative";

               //create component tooltip html
                template = '<div class="tooltip rbox_tooltip_'+pos+'" role="tooltip">' +
                '<div class="arrow"></div>' +
                '<div class="tooltip_inner">'+$arBtn[i].innerHTML+'</div></div>';

                //add component tooltip to inside button 
                $arBtn[i].innerHTML+=template;

                //setting attribute title null to it don't display when mouse hover button
                $arBtn[i].setAttribute("title","");

                //add event mouseover for button index
                $arBtn[i].addEventListener("mouseover",function(){
                    //set display block for this
                    this.children[0].style.display="block";

                    //get height button
                    height=  this.offsetHeight ;

                    //get width button
                    width=  this.offsetWidth +'px ' ;

                    //get position from data-placement
                    pos= this.getAttribute("data-placement");

                    //css position for this tooltip with variable pos
                    switch(pos){
                        case "bottom":
                            this.children[0].style.top=height+"px" ;
                            break;
                        case "top":
                            this.children[0].style.top="-"+(height+10) +"px" ;
                            break;
                        case "right":
                            this.children[0].style.left=width;
                            this.children[0].style.width=width;
                            this.children[0].style.top='10%';
                            break;
                        case "left":
                            this.children[0].style.left="-"+width;
                            this.children[0].style.width=width;
                            this.children[0].style.top='10%';
                            break;
                    }
                    //add class show to element div class tooltip
                    this.children[0].classList.add("show");
                });

                //add event mouseout for button index
                $arBtn[i].addEventListener("mouseout",function(){
                    //set display none for this
                    this.children[0].style.display="none";

                    //remove class show to element div class tooltip
                    this.children[0].classList.remove("show");
                });
           }
        }
    }
}

//tooltip end

