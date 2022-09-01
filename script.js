$(function(){


    var x = 8 ,
        hr = $("<div></div>"),
        ceil = $("<div></div>"),
        img =$("<div></div>"),
        player1 = true, 
        player2= false,
        flag=false,
        count1=0,
        count2=0;
   
    
    
    $(hr).addClass("line hr");
    $(ceil).addClass("Point")
    $(img).addClass("comp")
    
    
    var vr = $(hr).clone();
    $(vr).addClass("vr")
    $(vr).removeClass("hr") 
    function swap(){
        player1 = ! player1 ;
        player2 = ! player2 ;
        
            $(".player1").find(".playing").toggle()
            $(".player2").find(".playing").toggle()
        
    }
    
    for(var j=0 ; j <x-1 ; j++){  
        for(var i =0 ; i<x-1 ; i++){
            $(ceil).clone().appendTo(".gameBoard")
            $(hr).clone().appendTo(".gameBoard")
            
        }
         $(ceil).clone().appendTo(".gameBoard")
         for(var i =0 ; i<x ; i++){
                $(vr).clone().appendTo(".gameBoard")
                $(img).clone().appendTo(".gameBoard")    
         }
        $(".comp").last().remove()
    }
    
     for(var i =0 ; i<x-1 ; i++){
            $(ceil).clone().appendTo(".gameBoard")
            $(hr).clone().appendTo(".gameBoard")
            
        }
    $(ceil).clone().appendTo(".gameBoard")
    
   var line = $('.line')
  for( var i =0 ; i < line.length ; i++ ){
      $($('.line')[i]).attr("id",i)
  }
    

                                    
    $(".line").click(function(){
        
        var index = $(this).attr("id");
        index *=1; 
        $(this).attr('value','clicked').addClass('clicked');
        
        // line is hor
        
        if( $(this).attr("class").includes('hr') ){
          
            // line at the top
            if( index < x-1 ){
                
                if( $($(".line")[index + 2*x-1]).attr("value") == "clicked" )
                {
                    if( $($(".line")[index + x-1]).attr("value") == "clicked" && $($(".line")[index + x]).attr("value") == "clicked" ){
                        
                        
                        if(player1){
                            $($(".line")[index + x-1]).next().addClass('PlayerA')
                            
                            count1++ ;
                        }else{
                            $($(".line")[index + x-1]).next().addClass('PlayerB')
                            count2++ ;
                            
                        }
                        flag=true
                        
                    }
                }
                
            }else if( index >= 2*x*x -3*x +1 ){
                 // line at the bottom 
                
                if( $($(".line")[index -2*x+1]).attr("value") == "clicked" )
                {
                    
                    if( $($(".line")[index - Math.floor( (2*x-1)/2 )]).attr("value") == "clicked" && $($(".line")[index - Math.ceil( (2*x-1)/2 )]).attr("value") == "clicked" ){
                       
                         if(player1){
                             $($(".line")[index - Math.ceil( (2*x-1)/2 )]).next().addClass('PlayerA')
                            
                            count1++ ;
                        }else{
                            $($(".line")[index - Math.ceil( (2*x-1)/2 )]).next().addClass('PlayerB')
                            
                            count2++ ;
                        }
                         flag=true
                         
                    }
                }
                
            }else{
                       // line hr in rundom 
                
                if( $($(".line")[index + 2*x-1]).attr("value") == "clicked" )
                {
                    if( $($(".line")[index + x-1]).attr("value") == "clicked" && $($(".line")[index + x]).attr("value") == "clicked" ){
                        
                          if(player1){
                              $($(".line")[index + x-1]).next().addClass('PlayerA')
                            count1++ ;
                        }else{
                            $($(".line")[index + x-1]).next().addClass('PlayerB')
                            count2++ ;
                        }
                         flag=true
                         
                    }
                }
                    
                if( $($(".line")[index -2*x+1]).attr("value") == "clicked" )
                            {
                                
                                 if( $($(".line")[index - x]).attr("value") == "clicked" && $($(".line")[index -x+1]).attr("value") == "clicked" ){
                                     

                                      if(player1){
                                           $($(".line")[index - x]).next().addClass('PlayerA')
                                            count1++ ;
                                        }else{
                                           $($(".line")[index - x]).next().addClass('PlayerB')
                                            count2++ ;
                                        }
                                         flag=true
                                     
                                 }
                            }

                }
               
        }else{
            // line is ver
            if( (index +1 -x) % (2*x-1) == 0 ){
                // line left
                
                if( $($(".line")[index+1]).attr("value") == "clicked" )
                {
                    
                    if( $($(".line")[index+1-x] ).attr("value") == "clicked" && $($(".line")[index + x]).attr("value") == "clicked" ){
                         
                        if(player1){
                            $(this).next().addClass('PlayerA')
                                count1++ ;
                            }else{
                                $(this).next().addClass('PlayerB')
                                count2++ ;
                            }
                             flag=true
                         
                    }
                }
                
            }else if( (index+1) % (2*x-1) == 0 ){
                // line right
                
                if( $($(".line")[index -1]).attr("value") == "clicked" )
                {
                    
                    if( $($(".line")[index -x]).attr("value") == "clicked" && $($(".line")[index +x-1]).attr("value") == "clicked" ){
                         
                         if(player1){
                             $(this).prev().addClass('PlayerA')
                                count1++ ;
                            }else{
                                $(this).prev().addClass('PlayerB')
                                count2++ ;
                            }
                             flag=true
                         
                    }
                }
                
            }else{
                // line vr in rundom
                
                if( $($(".line")[index -1]).attr("value") == "clicked" )
                {
                    
                    if( $($(".line")[index -x]).attr("value") == "clicked" && $($(".line")[index +x-1]).attr("value") == "clicked" ){
                       
                          if(player1){
                               $(this).prev().addClass('PlayerA') 
                                count1++ ;
                            }else{
                                 $(this).prev().addClass('PlayerB') 
                                count2++ ;
                            }
                             flag=true
                         
                    }
                }
                
                if( $($(".line")[index+1]).attr("value") == "clicked" )
                    {

                        if( $($(".line")[index+1-x] ).attr("value") == "clicked" && $($(".line")[index + x]).attr("value") == "clicked" ){
                           
                             if(player1){
                                $(this).next().addClass('PlayerA') 
                                count1++;
                            }else{
                                 $(this).next().addClass('PlayerB')
                                count2++ ;
                            }
                             flag=true
                        }
                   }
                }   
            }
        if(!flag){
            swap()
        }else{
            $('.score1').html(count1)
            $('.score2').html(count2)
            if(count1+count2 == 49){
                $(".line").off('click');
                var temp = $(".finished")
                $('.gameBoard').empty().append(temp)
                $(".finished").show();
                if(count2 > count1){
                    $(".winner").html("player2")
                    $(".loser").html("player1")
                }
            }
        }
        flag=false;
        $(this).off('click')
        
    })

    $('#playAgain').click(()=>{
        window.location.reload()
    })


});