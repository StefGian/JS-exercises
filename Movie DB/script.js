var movies = [
  {
    title: "The Lord of The Rings",
    rating: 5,
    hasWatched: true
  },
  {
    title: "The Hobbit",
    rating: 4,
    hasWatched: true
  },
  {
    title: "Harry Potter",
    rating: 4,
    hasWatched: false
  },
  {
    title: "Thor",
    rating: 3,
    hasWatched: false
  }
];

movies.forEach(function(movie){
  var print = "You have ";
  
  if(movie.hasWatched){
    print += "watched ";
  } else {
    print += "not watched ";
  };

  print += "\"" + movie.title + "\" - ";
  print += movie.rating + " stars.";
  console.log(print);
});

