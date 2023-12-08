async function prueba(){
  const data = await fetch("https://api-anime-production-0f6a.up.railway.app/getAllAnime?limit=10&page=1", {mode: "no-cors"});
  const dataJson = await data.json();
  console.log(dataJson)
  return dataJson
} 

function MiApi(){
  prueba()
  return
}
export default MiApi;