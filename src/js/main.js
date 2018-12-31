/*
Notice: The code below just test, You can delete it and code normally. Enjoy!!!!
*/
//function find child element by ClassName
//paremeters: arr_ele: collections object html, name: classname need to find.
//return: object html
function findElementsByClassName(arr_ele,name){
    for(var i = 0 ; i<arr_ele.length;i++){
        if(arr_ele[i].className!=null){
            if(arr_ele[i].className.search(name)>=0){
                return arr_ele[i];
            }
        }
        
    }
}
//tooltip start
// Function setting eventListener for all element tooltip
//parameters:
//return:
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

// function close Notification
// paremeters: divHeader: parent element  have button close notification 
// return: 
function closeNotification(divHeader){
    //get Parent element of button close notification
    divParrent =  divHeader.parentNode;
    //style opacity of divParrent to hide parent
    divParrent.style.opacity=0;
    //remove divParrent after 0.5s
    setTimeout(function(){divParrent.remove(this)},500);
}

// function checking auto hide all notification
// paremeters:
// return:
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

//dropdown start

//function setting eventListener for all element dropdown button
//parameters:
//return:
function dropdown(){
    //get all element have classname dropdown_toggle
    arrEle = document.getElementsByClassName("dropdown_toggle");
    for(var i = 0 ; i<arrEle.length;i++){
        //add event click for dropdown button
        arrEle[i].addEventListener("click",function(){
            //get parrent element div have classname btn_drop or dropdown
            divParent=this.parentNode;
            //get element have class dropdown_menu 
            dropdown_menu= findElementsByClassName(divParent.childNodes,"dropdown_menu");
            //check status dropdown is show or hide
            if(dropdown_menu.className.search("show")>=0){
                //setting hide dropdown menu
                dropdown_menu.classList.remove("show");
            }else{
                //setting show dropdown menu
                dropdown_menu.classList.add("show");
            }       
        })
    }
}
//dropdown end

//collapse start
function collapse(ele){
    if(ele.hasAttribute("href")){
       href=ele.getAttribute("href");
       val=href.substr(1,href.length);
    }else{
        //get value attribute data-target 
        target=ele.getAttribute("data-target");
        //get name from target ex: #modal => name= modal
        val=target.substr(1,target.length);
        //get fisrt character of target ( '.' || '#')
        char = target.substr(0,1);
        //if char is '.'  then show all element have class val
        if(char=="."){
            ar_content = document.getElementsByClassName(val);
            for(j=0 ; j<ar_content.length;j++){
                collapsing(ar_content[j]);
            }
            // stop show content
            return false;
        }
    }
    //show element have id  val
    content = document.getElementById(val);
    collapsing(content);
}
//function doing collapse element
//parameters: content: element need to show by collapse
function collapsing(content){
    //if this element have class show then which will be remove class show
    if(content.className.search('show')>=0){
        content.classList.remove('collapse')
        content.classList.remove("show");
        height = content.offsetHeight;  
        content.style.height=height+"px";
        content.classList.add("collapsing");
        setTimeout(function(){
           content.style.height=0+"px";
        },100);
      
        setTimeout(function(){
           content.classList.remove("collapsing");
           content.classList.add('collapse')
           content.style.height="";
        },500);
    }
    //else this element will be add class show
    else{
        content.classList.remove("collapse");
        height = content.offsetHeight;  
        content.classList.add("collapsing");
        setTimeout(function(){
            content.style.height=height+"px";
        },100);
        setTimeout(function(){
            content.classList.remove("collapsing");
            content.classList.add("collapse");
            content.style.height="";
            content.classList.add("show");
        },500);
    }
}
//collapse end

//modal start
//show modal
function showModal(ele){
    //hide the scroll in body;
    document.getElementsByTagName("body")[0].style.overflow="hidden";
    //get value attribute data-target 
    target=ele.getAttribute("data-target");
    //get name from target ex: #modal => name = modal
    name=target.substr(1,target.length);
    //get div element need show modal
    modal = document.getElementById(name);

    //show element have class modal
    modal.classList.add("show");
    modal.style.display="block";

    //setting style for animation show modal
    modal_dialog = findElementsByClassName(modal.childNodes,"modal-dialog");
    modal_dialog.style.opacity=0;
    modal_dialog.style.top="-20px";
    setTimeout(function(){
        modal_dialog.style.opacity=1;
        modal_dialog.style.top="0";
    },100)
}

//setting default hide modal when click over modal content
function modal(){
    arModal =  document.getElementsByClassName("modal")
    window.onclick = function(event) {
        for(var i = 0 ; i<arModal.length;i++){
            if(event.target==arModal[i]){
                arModal[i].style.display="none";
                arModal[i].classList.remove("show");
                document.getElementsByTagName("body")[0].style.overflow="auto";
            }
        } 
    }
}
//hide modals
function hideModal(){
    arModal =  document.getElementsByClassName("modal");
    for(var i = 0 ; i<arModal.length;i++){   
        arModal[i].style.display="none";
        arModal[i].classList.remove("show");
        document.getElementsByTagName("body")[0].style.overflow="auto";
    } 
}

//modal end
