/*  global iInit 
    TODO: grab what is usefull, 
    then remove this file.
*/

// this is colors.js
// init 
console.log("colors init");

// Q. what is the proprer jsLint way to initialize a variable ?
if (typeof colorsNumber === 'undefined') {
  var colorsNumber = 3;
}

// we create teh colors holders depending on the number defined
colorsInit(colorsNumber);
selectColorHolder();



// functions -------------------------------------------------------
// DONE : create a colorHolder as an Object than can be instanciated;

// todo : rename classes and IDs function of new DOM tags architecture
// todo : use an <input type="text"> only at click event over colorTag
// todo : html code should be as simple as possible (one div ?)
// todo : allowing to add more colorHolders through UI 
// todo : allow to delete a given colorHolder through UI
// todo : function that clear all colorHolders color values
// todo : function that paste in the buffer all defined hexColorCodes
// todo : pass hexColorCodes to buffer through keypress : ex. CTRL+C
// todo : reorder colorHolders by drag and drop
// todo : export color swatches in simple textFile
// todo : use sliders for hex values
// todo : use various color scales and colors systems
// todo : provide hex to rgb and rgb to hex conversion system
// todo : provide minimalist and visually pleasant UI for the color system conversions
// todo : provide color editor with colors harmony rules
// todo : port this code to an html5 adobe panel component in Illustrator > for use in Atys Web projects to come
//        or Photoshop

// inits the colorsWorkbench
function colorsInit(colorsNumber) {
    console.log("holders init | number = " + colorsNumber);
    for(iInit=0; iInit < colorsNumber; iInit++) {
        console.log("holder process");
        var objCrtColorTag = new colorTag(iInit);
        
        $('#colorsList').append(
            objCrtColorTag.content
        );
  }
}

// color Tag object
function colorTag (id) {
    this.id = id;
    this.color = "000000";
    this.content = 
        '<div class="colorHolder' + id + '">' + 
            '<p class="colorTag" style="background-color:#' + this.color + '"></p>' + 
            '<p class="label"><input type="text" value="#" size="6"/></p>' +
        '</div>';
}


$('#colorsList input').on("focusout", function (){
  updateColorTag ($(this));
});

$('#colorsList input').on("keyup", function(e){
    var inputComponent = this;
    
    if(e.keyCode == 13){
        console.log("Touche ENTER détectée"); 
        updateColorTag ($(inputComponent));
    }
});

function selectColorHolder (){
    // select
    $("div[class^='colorHolder']").on("click", function (){
        // deselect all
        $("div[class^='colorHolder']").css("border", "2px solid #fff");
        // select the clicked element
        $(this).css("border", "2px solid #77bbff");
    });
    
    // deselect
    $("div[class^='colorHolder']").on("focusout", function (){
        $(this).css("border", "2px solid #fff");        
    });
}

function updateColorTag (textfield){
    // get color information in textfield
    var crtColorTagValue = textfield.val();
    var crtIndex = "";
    crtColorTagValue = filterColorValue(crtColorTagValue);
    console.log("valeur du champ : " + crtColorTagValue);
    
    // get the index of the colorHolder
    /*crtIndex = $(this).parent().index();
    console.log("valeur d'index du colorHolder en cours : " + crtIndex);*/
    
    // set colorTag background value
    textfield.parent().siblings("p.colorTag").css("background-color", "#" + crtColorTagValue + "");
}

function filterColorValue(colorValue){
    // remove starting sharp "#" caracter
    colorValue = colorValue.slice(1);
    return colorValue;
}