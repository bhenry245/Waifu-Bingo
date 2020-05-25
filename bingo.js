$(document).ready(function(){
    var randomNumbers = [];

    //Gets 25 unique random numbers
    while(randomNumbers.length < 26) {
        var r = Math.floor((Math.random() * 100) + 1); 
        if( r === 13) continue;

        if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }


    $('li.board').each(function (i){  
        if (i === 12) return true;

        var waifuImg = 'Images/Waifu' + randomNumbers[i+1] + '.png';
        $(this).append("<img src=" + '"' + waifuImg + '"' + "class='center-piece'>" );
        i++;
    })

})
