$(()=>{
    const numbers = $("#numbers").find("button") 
    const signs = $(".signs").find("button")
    const value = $(".input") 
    let result = 0.0

    $(".number , .sign").on('click',function(){
        $(".input").val($(".input").val().concat($(this).text())) 
      
    })

    $("#calc").on('click',()=>{
        let first = parseFloat(/^-?\d+(\.\d+)?/.exec(value.val())[0]) 
        let second = parseFloat(/(\d+(\.\d+)?)$/.exec(value.val())[0])
        const sign = (/(\+)|(\-)|(\*)|(\/)/).exec(value.val())[0]
        console.log(first)
        console.log(second) 
       
        switch(sign){
            case '+': result = first + second; break
            case '-': result = first - second; break
            case '/': result = first / second; break
            case '*': result = first * second; break
            default : result = "I can just calcuate tow numbers"
        }
        value.val(result)
    })

    $("#clear").on('click',()=>{
        $(".input").val("") 
    })
    $("#del").on('click',()=>{
        const index = value.val().length - 1
        const pattern = value.val().slice(0,index)
        value.val(pattern) 
        
    })

    $(".input").on("keyup",()=>{
        const pattern = /^([0-9]+(.[0-9]+)?)(\+|\-|\/|\*)([0-9]+(.[0-9]+)?)$/
        if(value.val().match(pattern)){
            $("#test").text("writing........")
        }
        else{
            $("#test").text("WRONG INPUT")
            $("#test").css("display","block")
            $(".input").css("border","solid 5px red")
        }
    })
    $(".input").on("blur",()=>{
        $("#test").css("display","none")
        $(".input").css("border","none")
    })


})