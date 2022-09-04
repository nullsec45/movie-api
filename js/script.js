function searchMovie(){
    $("#movie-list").html("");
    $.ajax({
        url:"https://omdbapi.com",
        type:"get",
        dataType:"json",
        data:{
            "apikey":"438f2b3f",
            "s":$("#search-input").val()
        },
        success:function(result){
            if(result.Response === "True"){
                let movies=result.Search;
                $.each(movies, function(i,data){
                    $("#movie-list").append(`
                    <div class="col-md-4">
                    <div class="card mb-3">
                        <img src="${data.Poster}" class="card-img-top img-fluid" alt="${data.Poster}">
                        <div class="card-body">
                            <h5 class="card-title">${data.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                            <a href="#" class="btn btn-primary">See Detail</a>
                        </div>
                    </div>
                  </div>`)
                })
            }else{
                $("#movie-list").html("<div class='col'><h1 class='text-center'>Movie Not Found!</h1></div>");
            }
        }
    })
}

$("#search-button").on("click", function(){
    searchMovie();
})
$("#search-input").on("keyup", function(e){
    if(e.keyCode === 13){
      searchMovie();
    }
})