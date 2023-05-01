async function myFunction(){
  let res = await fetch("https://dummyjson.com/quotes/random")
  let data = await res.json()
  console.log(data.quote)
  document.getElementById("quote").innerHTML = data.quote
  document.getElementById("author").innerHTML = "By : " +data.author
}