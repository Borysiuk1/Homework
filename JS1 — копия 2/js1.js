var listItem = document.querySelector('.list');
var playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

playList.forEach(x => {
    listItem.innerHTML += `<li><p>${x.author}, ${x.song};</p></li>`;
});
function searchFuncGenerator() {
    var playList = [
        {
            author: "LED ZEPPELIN",
            song:"STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song:"BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song:"FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song:"SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song:"ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song:"BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song:"WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song:"ENTER SANDMAN"
        }
    ];
    var counter = 0;
    return (id) => { 
        counter +=1;
        $('.counter').html(`Counter - ${counter}`)
        return  playList[id - 1];
    }
}
const getSongById = searchFuncGenerator();
$( "#button" ).click(function() {
    const inputValue = $('#input').val();
    const searchResult = getSongById(inputValue);
    $('#myUl').text(`${searchResult.author} - ${searchResult.song}`)
});

$( "#input" ).keypress(function( event ) {
    if ( event.which == 13 ) {
        $('#input').val('BUG') 
        event.preventDefault();
    }
});

const tem = {
    songList = [song1, song2, song3],
    counter: 0,
    printHello: function () {
        console.log('Hello World!')
    }
}
