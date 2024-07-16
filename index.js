//variables

const mainContainer = document.getElementById("container");
const interface = document.getElementById("interface");
const form = document.getElementById("create");

const stsCountInput = document.getElementById("sts-ct").value; 
const ribWidthInput = document.getElementById("rib-wdth").value; 

const submitBtn = document.getElementById("submit");
const stitchContainer = document.getElementById("visual");

//create stitches



//create display

function createVisual () {
    if (stsCountInput > 0 && ribWidthInput > 0) {
        for (let i = 0; i < stsCountInput; i++) {
            let stitch = document.createElement("div");
        }
        console.log(true);
    } else if (ribWidthInput > stsCountInput) {
        alert("Your rib width can't be greater than the stitch count");
    } else {
        alert("You need to input a value greater than 0 for one or both of your stitch counts");
        console.log(false);
    }
}