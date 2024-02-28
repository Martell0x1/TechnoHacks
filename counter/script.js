$(()=>{
    var textarea = $(".number") // to set the text
    var counter = parseInt($(".number").text()) // get the text (currnet number)
    const start = $("button")[0] // the start button
    const reset = $("button")[1] // the reset button


    $(start).on("click",_=>{
        var intervalname = setInterval(_=>{ // using setinterval function
            if(counter < 0) counter = 10 // if the counter = 0 when i press start again resets the counter
            $(textarea).text(counter--); // count down
            if(counter == -1){
                clearInterval(intervalname) // if the current count = -1 stop interval
            }
            $(reset).on("click",()=>{ // if the reset button is clicked
                $(textarea).text("10"); // reest the counter
                clearInterval(intervalname) // clear the interval
                counter = 10 // reset the counter
            })
        },1000) // every 10e3 second will count down
    })

})