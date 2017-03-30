 var i=7;
function addEventListener(){
  console.log("here");
  var div=document.getElementById('card_area1');

  div.addEventListener("click", function(rawElement){
    console.log(rawElement);
    var element = rawElement.srcElement,
      currentElement = {};

    if( element.className === "fa fa-times"){
      parentElement = rawElement.srcElement.parentElement;

      while(parentElement.className != "card_area"){
        if(parentElement.className == "card")
          currentCard = parentElement;
        parentElement = parentElement.parentElement;
      }

      parentElement.removeChild(currentCard);
    }

    else if ( element.className === "fa fa-plus-circle"){
      parentElement = rawElement.srcElement.parentElement;

      while(parentElement.className != "card_area"){
        if(parentElement.className == "card")
          currentCard = parentElement;
        parentElement = parentElement.parentElement;
      }
      console.log(parentElement);
      addCard(parentElement);
    }
  });
}

function createItem(){
    var div=document.getElementsByClassName('card_area');
    console.log(div.innerHTML);
}

function removeCard(id){
    var div=document.getElementById('card_area1');
    var element=document.getElementById(id);
    div.removeChild(element);
}

function addCard(cardAreaDiv){
    var div=cardAreaDiv,
      node=document.createElement("DIV");

    node.className="card";
    node.id="card"+i;
    node.innerHTML += ' <div class="card_info"> \
                        <img \
                            src="static/helsinki-card (1).png" \
                            alt="Smiley face" height="230" width="280" \
                        > \
                    <div class="status"> \
                        <div class="back_btn"> \
                        <i class="fa fa-undo" aria-hidden="true"></i> \
                        </div> \
                        <div class="status_btns"> \
                            <i class="fa fa-eye" aria-hidden="true"> \
                                300 \
                            </i> \
 \
                            <i class="fa fa-heart" aria-hidden="true"> \
                                40 \
                            </i> \
                        </div> \
                    </div> \
                </div> \
                <div class="card_name_area" id="card"> \
                    <div class="card_name"> \
                        <i class="fa fa-user-circle" aria-hidden="true"> \
                            Jhon \
                        </i> \
                    </div> \
                    <div class="buttons"> \
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> \
                        <i class="fa fa-times" aria-hidden="true"></i> \
                    </div> \
                </div> \
    ';
    div.appendChild(node);
}

addEventListener();
