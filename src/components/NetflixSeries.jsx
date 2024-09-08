import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid">
      {
        seriesData.map((curElem) => (
         <SeriesCard key={curElem.id} data={curElem} />
        ))
      }

    </ul>
  );
};

export default NetflixSeries;
// const name ="Queen of Tears";
  // const rating ="8.2";
  // const summary =" The queen of department stores and the prince of supermarkets weather a marital crisis, until love miraculously begins to bloom again.";
  // let age = 18;
  // const returnGenre =() =>{
  //   const genre = "RomCom";
  //   return genre;
  // };

  // if(age < 18){
  //   return (
  //     <div>
  //       <div>
  //         <img src="Queen of Tears.jpg" alt="Queen of Tears.jpg" width="40%" height="40%" />
  //       </div>
  //       <h2>Name :{name}</h2>
  //       <h3>Rating : {rating}</h3>
  //       <p>Summary :{summary}</p>
  //       <p>Genre : {returnGenre ()}</p> 
  //       {/* dynamic function call */}
  //       <button>Not Available</button>
  //     </div>
  //   );
  // }
//   <li>
//   <div>
//   <img src={seriesData[1].img_url} alt="Queen of Tears.jpg" width="40%" height="40%" />

//   </div>
//   <h2>Name :{seriesData[1].name}</h2>
//   <h3>Rating : {seriesData[1].rating}</h3>
//   <p>Summary :{seriesData[1].description}</p>
//   <p>Genre : {seriesData[1].genre}</p> 
//   <p>Cast : {seriesData[1].cast}</p>
//   {/* dynamic function call */}
//   {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
//   <a href={seriesData[1].watch_url} target="_blank">
//   <button>Watch Now</button>
//   </a>
// </li>

/* <li>
  <div>
  <img src={seriesData[2].img_url} alt="Queen of Tears.jpg" width="40%" height="40%" />

  </div>
  <h2>Name :{seriesData[2].name}</h2>
  <h3>Rating : {seriesData[2].rating}</h3>
  <p>Summary :{seriesData[2].description}</p>
  <p>Genre : {seriesData[2].genre}</p> 
  <p>Cast : {seriesData[2].cast}</p>
  {/* dynamic function call */
/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */ 
//   <a href={seriesData[2].watch_url} target="_blank">
//   <button>Watch Now</button>
//   </a>
// </li>  