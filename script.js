let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)


//creating song object list
let songs_list = [{
        name: 'Lover',
        Image: 'C:\Users\VIKAS TRIPATHI\Pictures\Ambedkar park trip\ambedkar .mp4',
        Song: 'C:\Users\VIKAS TRIPATHI\Music\Music\_Sawan_Aaya_Hai__FULL_VIDEO_Song___Arijit_Singh___Bipasha_Basu___Imran_Abbas.mp3',
        Singer: 'Diljit'
    },
    {
        name: 'Love Story',
        Image: 'images/taylor_swift_love_story.jpg',
        Song: 'C:\Users\VIKAS TRIPATHI\Music\Music\_Sawan_Aaya_Hai__FULL_VIDEO_Song___Arijit_Singh___Bipasha_Basu___Imran_Abbas.mp3',
        Singer: 'Taylor Swift'
    },
    {
        name: 'Red',
        Image: 'images/Taylor_Swift_Red.png',
        Song: 'music/Taylor-Swift-Red.mp3',
        Singer: 'Taylor Swift'
    },
    {
        name: 'Wildest Dreams',
        Image: 'images/wildest_dreams_taylor.jfif',
        Song: 'music/Taylor-Swift-Wildest-Dreams.mp3',
        Singer: 'Taylor Swift'
    }
]

//keeping track of which song is playing and if song is playing or not
let i = 0;
let flag = false;


//showing song name and image on screen
var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

//function to play/pause song
song_play.addEventListener("click", function() {

    if (flag === false) {
        audio.play()
        flag = true;
        console.log(flag)
    } else {
        audio.pause()
        flag = false;
        console.log(flag)
    }
})

//function to play next song
song_next.addEventListener("click", function() {

    audio.pause()
    flag = false;
    i = i + 1;
    if (i >= songs_list.length) {

        i = 0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if (flag === false) {
        audio.play()
        flag = true;
        console.log(flag)
    }

})

//function to play previous song
song_prev.addEventListener("click", function() {

    audio.pause()
    flag = false;
    i = i - 1;
    if (i <= 0) {
        i = songs_list.length - 1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if (flag === false) {
        audio.play()
        flag = true;
        console.log(flag)
    }


})