document.addEventListener("DOMContentLoaded", (e) => {
    init();
});

var tags = [];

function init(){
    // initialize colorTags app

    createTags(5);
    console.log("tags array : " + tags);
    console.table(tags);

    fillTags();
}

function createTags(tagsNumber){
    (typeof tagsNumber  === 'undefined')? tagsNumber = 1 : tagsNumber = tagsNumber;

    for(i = 0; i < tagsNumber; i++){
        var tag = {
            color : setRandColor(),
            id : setID()
        }

        tags.push(tag);
    }
}

function fillTags(){
    var board = document.getElementsByClassName("board")[0];
    
    if(tags){
        tags.forEach(tag => {
            var tagNode = document.createElement("div");
            console.log("tag element : " + tagNode);
            tagNode.classList.add("tag");
            tagNode.title = tag.color;
            tagNode.style.backgroundColor = tag.color;

            board.appendChild(tagNode);
        });
    }else{
        console.log("no tags to display");
    }
}

/*  TODO: make each generated color unique in the same array: 
      - no exact same value duplicate; 
      - no near-color duplicate */
function setRandColor(){
    var color = "#000000".replace(/0/g,function(){
        return(~~(Math.random()*16)).toString(16);
    });

    return color;
}

function setID(){
    var tagID = 0;
    tagID = checkID(tagID);

    return tagID;
}

function checkID(inputId){
    var isUnique = false; 

    if(tags.length){
        while(!isUnique){
            tags.forEach(tag => {
                if(inputId == tag.id){
                    console.log("existing ID found");
                    console.log("Incrementing inputID"); 
                    inputId++;
                }else{
                    console.log("inputID is unique")
                    isUnique = true;
                }
            });
        }
        return inputId;
    }else{
        // no tag inside tags YET
        return inputId;
    }
}