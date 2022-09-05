// This is parent Component

// Event delegation

document.querySelector("#Products").addEventListener("click",(event)=>{

    console.log(event);

    // in browser it shows the loctaion which the product is clicked,route to the

    if(event.target.tagName==='li'){

        window.location.href +='#' +event.target.id;
    }
});