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
                //add event mouseover for button index
                $arBtn[i].addEventListener("mouseover",function(){
                    //create component tooltip html
                    template = '<div class="tooltip fade rbox_tooltip_'+this.getAttribute("data-placement")+'" id="tooltip" role="tooltip">' +
                    '<div class="arrow"></div>' +
                    '<div class="tooltip_inner">'+this.getAttribute("data-title")+'</div></div>';

                    //add component tooltip to inside button 
                    this.innerHTML+=template;

                    //set display block for this
                    this.children[0].style.display="block";
                  
                    //get height button
                    height=  this.offsetHeight ;

                    //get width button
                    width=  this.offsetWidth  ;
                    this.style.position="relative";
                    //get position from data-placement
                    pos= this.getAttribute("data-placement");

                    //css position for this tooltip with variable pos
                    switch(pos){
                        case "bottom":
                            this.children[0].style.top=height+"px" ;
                            break;
                        case "top":
                            this.children[0].style.top="-"+(height+5) +"px" ;
                            break;
                        case "right":
                            this.children[0].style.left=width +'px ';
                            this.children[0].style.top='10%';
                            break;
                        case "left":
                            this.children[0].style.left="-"+(width-10) +'px ';
                            this.children[0].style.top='10%';
                            break;
                    }
                    //add class show to element div class tooltip
                    this.children[0].classList.add("show");
                });

                //add event mouseout for button index
                $arBtn[i].addEventListener("mouseout",function(){
                    var element = document.getElementById("tooltip");
                    element.parentNode.removeChild(element);

                });
           }
        }
    }
}
//tooltip end

//notification start

//  function close Notification
function closeNotification(btnClose,time){
    if (time === undefined) {
        time = "500";
    }
    time=parseInt(time);
    console.log(btnClose);
    //get Parent element of button close notification
    divParrent =  btnClose.parentNode;
    //style opacity of divParrent to hide parent
    divParrent.style.opacity=0;
    //remove divParrent after 0.5s
    setTimeout(function(){divParrent.remove(this)},time);
}

// function checking auto hide all notification
function notification(){
    //get all elements have class toast
    var arrEle= document.getElementsByClassName("toast");

    for(var i = 0 ; i< arrEle.length;i++){
        ele =  arrEle[i];
        //add class show to element toast
        ele.classList.add("show");
        if(ele.getAttribute("data-auto")=="true"){
            //get time from data-delay
            time= parseInt(ele.getAttribute('data-delay'));
            //call function closeNotification after time
            setTimeout(function(){
                // console.log(ele);
                closeNotification(ele.children[0]);
            },time);
            
        }
    }
}

//notification end

