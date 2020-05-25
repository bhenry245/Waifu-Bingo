$(document).ready(function(){

    // var randomNumbers = [];
    // //Gets unique random numbers
    // while(randomNumbers.length < 26) {
    //     var r = Math.floor((Math.random() * 100) + 1); 
    //     if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    // }



    var randomNumbers = [];
 
    for(i=1; i < 26; i++) {
        randomNumbers[i] = i;
    }



    


    $('li.board').each(function (i){  
        if (i === 12) return true;

        var waifuImg = 'Images/Waifu' + randomNumbers[i+1] + '.png';
        $(this).append("<img src=" + '"' + waifuImg + '"' + "class='center-piece'>" );
        i++;
    })

})



// $('#boardPostion2').append("<img src='Images/Waifu12.png' class='center-piece'>");








