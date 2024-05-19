const thediv = document.getElementById("thediv");
const thediv2=document.getElementById("thediv2");
const thediv3=document.getElementById("thediv3");
const thediv4=document.getElementById("thediv4");
const thediv5=document.getElementById("thediv5");
const search=document.getElementById("search-bar");
const searchBtn=document.getElementById("search-btn");
const pagetwo=document.getElementById("pagetwo");
const searchResultpage=document.getElementById("searchresult");
const resultdiv=document.getElementById("searched-div");
const moreBtn=document.getElementById("more-btn");
const moreBtn1=document.getElementById("more-btn1");
const moreBtn2=document.getElementById("more-btn2");
const moreBtn3=document.getElementById("more-btn3");
const moreBtn4=document.getElementById("more-btn4");


                    // search results
                    
searchBtn.addEventListener("click",()=>{
    async function serachresult(){
        const data=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c3a827d84c713b6be30fc6a9c85b8b5c&query=${search.value}`)
        const response= await data.json();
        console.log(response);
        let allMoviesHtml = '';
        response.results.forEach(movie => {
            const movieHtml = `
            <div id="card">
            <img id="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
            <h3 id="moviename">${movie.original_title}</h3>
            <h4 id="release-date"><span>${movie.release_date}</span></h4>
            <h4>IMDB:<span id="imdb-score"> ${movie.vote_average}</span></h4>
            </div>
            `;
            allMoviesHtml += movieHtml;
        });
        resultdiv.innerHTML = allMoviesHtml;
    }
    serachresult();
    pagetwo.style.display="none";
    searchResultpage.style.display="contents";

})
                    // popularmovies
async function popularmovies() {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c3a827d84c713b6be30fc6a9c85b8b5c");

        const response = await data.json();
        console.log(response);

        let allMoviesHtml = '';
        response.results.forEach(movie => {
            let imdb=Math.ceil( (movie.vote_average)* 10) / 10;
                      
            const movieHtml = `
            <div id="card">
            <img id="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
            <h3 id="moviename">${movie.original_title}</h3>
            <h4 id="release-date"><span>${movie.release_date}</span></h4>
            <h4>IMDB:<span id="imdb-score"> ${imdb}</span></h4>
            </div>
            `;
            allMoviesHtml += movieHtml;
        });
        thediv.innerHTML = allMoviesHtml;
    } 
popularmovies();
                // trending

async function trendingmovies() {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=c3a827d84c713b6be30fc6a9c85b8b5c");
            
        const response = await data.json();
        console.log(response);
            
        let allMoviesHtml = '';
        response.results.forEach(movie => {
            let imdb=Math.ceil( (movie.vote_average)* 10) / 10;
        const movieHtml = `
        <div id="card">
        <img id="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
        <h3 id="moviename">${movie.original_title}</h3>
        <h4 id="release-date"><span>${movie.release_date}</span></h4>
        <h4>IMDB:<span id="imdb-score"> ${imdb}</span></h4>
        </div>`;
        allMoviesHtml += movieHtml;
        });
        thediv2.innerHTML = allMoviesHtml;
    } 
trendingmovies();
 
                            // upcoming movies
async function upcomingmovies() {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c3a827d84c713b6be30fc6a9c85b8b5c");

    const response = await data.json();
    console.log(response);

    let allMoviesHtml = '';
    response.results.forEach(movie => {
        let imdb=Math.ceil( (movie.vote_average)* 10) / 10;
        const movieHtml = `
        <div id="card">
        <img id="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
        <h3 id="moviename">${movie.original_title}</h3>
        <h4 id="release-date"><span>${movie.release_date}</span></h4>
        <h4>IMDB:<span id="imdb-score"> ${imdb}</span></h4>
        </div>
        `;
        allMoviesHtml += movieHtml;
    });
    thediv3.innerHTML = allMoviesHtml;
} 
upcomingmovies();


                            // currently playing
async function playingmovies() {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c3a827d84c713b6be30fc6a9c85b8b5c");

    const response = await data.json();
    console.log(response);

    let allMoviesHtml = '';
    response.results.forEach(movie => {
        let imdb=Math.ceil( (movie.vote_average)* 10) / 10;
        const movieHtml = `
        <div id="card">
        <img id="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
        <h3 id="moviename">${movie.original_title}</h3>
        <h4 id="release-date"><span>${movie.release_date}</span></h4>
        <h4>IMDB:<span id="imdb-score"> ${imdb}</span></h4>
        </div>
        `;
        allMoviesHtml += movieHtml;
    });
    thediv4.innerHTML = allMoviesHtml;
} 
playingmovies();

                            // Top Rated Movies
async function topmovies() {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c3a827d84c713b6be30fc6a9c85b8b5c");

    const response = await data.json();
    console.log(response);

    let allMoviesHtml = '';
    response.results.forEach(movie => {
        let imdb=Math.ceil( (movie.vote_average)* 10) / 10;
        const movieHtml = `
        <div id="card">
        <img id="card-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Poster">
        <h3 id="moviename">${movie.original_title}</h3>
        <h4 id="release-date"><span>${movie.release_date}</span></h4>
        <h4>IMDB:<span id="imdb-score"> ${imdb}</span></h4>
        </div>
        `;
        allMoviesHtml += movieHtml;
    });
    thediv5.innerHTML = allMoviesHtml;
} 
topmovies();

flag=0;
moreBtn.addEventListener("click",function(){
    if(flag==0){
        thediv.style.height="auto";
        thediv.style.flexWrap="wrap";
        flag=1;
    }
    else{
        thediv.style.height="51vh";
        thediv.style.flexWrap="nowrap";
        flag=0;
    }
})

flag1=0;
moreBtn2.addEventListener("click",function(){
    if(flag1==0){
        thediv2.style.height="auto";
        thediv2.style.flexWrap="wrap";
        flag1=1;
    }
    else{
        thediv2.style.height="51vh";
        thediv2.style.flexWrap="nowrap";
        flag1=0;
    }
})

 flag2=0;
 moreBtn3.addEventListener("click",function(){
     if(flag2==0){
         thediv3.style.height="auto";
         thediv3.style.flexWrap="wrap";
         flag2=1;
     }
     else{
         thediv3.style.height="51vh";
         thediv3.style.flexWrap="nowrap";
         flag2=0;
     }
 })

 flag3=0;
 moreBtn4.addEventListener("click",function(){
     if(flag3==0){
         thediv4.style.height="auto";
         thediv4.style.flexWrap="wrap";
         flag3=1;
     }
     else{
         thediv4.style.height="51vh";
         thediv4.style.flexWrap="nowrap";
         flag3=0;
     }
 })

 flag4=0;
 moreBtn1.addEventListener("click",function(){
     if(flag4==0){
         thediv5.style.height="auto";
         thediv5.style.flexWrap="wrap";
         flag4=1;
     }
     else{
         thediv5.style.height="51vh";
         thediv5.style.flexWrap="nowrap";
         flag4=0;
     }
 })
