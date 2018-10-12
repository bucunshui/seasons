$(function(){
    /*轮播图 */
    /*自动轮播*/
    var c=0;//c控制索引号对应的图和li
    var timer=setInterval(function(){//写一个计时器，并启动自动轮播
        c++;
        if(c==4){//只有4张图，索引号最大是3，所以到4了让计数又从0开始
            c=0;
        };
        $('#carousel img').eq(c).fadeIn(300).siblings('img').fadeOut(300);//指定索引数到c的淡入，其他兄弟元素淡出
        $('#items li').eq(c).css('background-color','#92D3BB').siblings('li').css('background','white');
    },3000);

    /*鼠标滑入停止，鼠标移出又自动轮播*/
    $('#carousel').hover(function(){
        clearInterval(timer);//鼠标移入清除计时器
    },function(){//反之启动之前已经声明过的计时器
        timer=setInterval(function(){
            c++;
            if(c==4){
                c=0;
            };
            $('#carousel img').eq(c).fadeIn(300).siblings('img').fadeOut(300);//指定索引数到c的淡入，其他兄弟元素淡出
            $('#items li').eq(c).css('background-color','#92D3BB').siblings('li').css('background','white');
        },3000);
    });

    /*鼠标滑入圆点可以停留在索引相同的那个图上*/
    $('#carousel ul li').mouseenter(function(){
        c=$(this).index();//获取到当前元素的索引号并赋值给c

        $('#carousel img').eq(c).fadeIn(300).siblings('img').fadeOut(300);//指定索引数到c的淡入，其他兄弟元素淡出
        $('#items li').eq(c).css('background-color','#92D3BB').siblings('li').css('background','white');
    });
    

    /*节气时间 */
    $('.list').css('visibility','hidden');
    $('#season li').hover(function(){
        var a=$(this).index();
        $('.list').eq(a).css('visibility','visible').siblings('.list').css('visibility','hidden');
    });

    /*节气诗歌 */
    $('.poetry>div').children().hide();
    $('.poetry>div').mouseenter(function(){
        $(this).children().css('background-color','rgba(255,255,255,0.5)').fadeIn(500).show()
        .parents('.poetry>div').siblings('.poetry>div').children().hide();
    });
    
    
    
   /*切换季节 */
   $('photo').eq(0).css('z-index','9');
   $('.poetry').eq(0).css('z-index','10');
    var i=4;
    $('#pre').click(function(){
        i--;
        if(i==-1){
            i=3;
        };
        $('.photo').eq(i).css('z-index','9').siblings('.photo').css('z-index','0');
        $('.poetry').eq(i).css('z-index','10').siblings('.poetry').css('z-index','1');
        $('.poetry>div').children().hide();
    })  
    var n=0;
    $('#next').click(function(){
        n++;
        if(n==4){
            n=0;
        };
        $('.photo').eq(n).css('z-index','9').siblings('.photo').css('z-index','0');
        $('.poetry').eq(n).css('z-index','10').siblings('.poetry').css('z-index','1');
        $('.poetry>div').children().hide();
    })

    /*旋转图 */
    
    $('.rotation').mouseenter(function(){
        $(this).css({
            // "transformStyle": "preserve-3d",
            "transform": "rotateY(180deg)",
            "transition": "all 1s"
        });
    
    })
        
    $('.rotation').mouseout(function(){
        $(this).css({
            // "transformStyle": "preserve-3d",
            "transform": "rotateY(-360deg)",
            "transition": "all 1s"
        });
    
    })

    
})