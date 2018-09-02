// 
//        
//    $("#Wrapper").animate({width:'100%'})
//$("#Wrapper").animate({height:'100%'}, function(){
//    $('h1').fadeIn(2000, function(){
//        $('.item').fadeIn(2000, function(){
//        
//            $('p').css("color","#05212F")
//            $('p').css("fontSize","20")
//            
//        })
//    })
//})
                
  $(".imgItem").click(function(){
    
    $(".imgS").attr('src',$(this).attr('src'))
})


$(document).ready(function(){
    
    $('#load').fadeOut(10000,function(){
        $('#load').remove();
    })
    
})