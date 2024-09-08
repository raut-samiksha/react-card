/* eslint-disable react/prop-types */

export const SeriesCard = ({ data }) => {
    // console.log(props);
    // eslint-disable-next-line no-unused-vars
    const { id, img_url, name, rating, description, genre, cast, watch_url }
        = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "#000",
        fontWeight: "bold",
        cursor: "pointer",
    };

    const ratingClass = rating >= 8.5 ? "super_hit" : "average";

    return (
        <li className="col">
            <div className="img-col">
                <img src={img_url} alt="Queen of Tears.jpg" width="40%" height="40%" />
            </div>

            <div className="card-content">
                <h3>Name :{name}</h3>
                <h4>
                    Rating :<span className={`rating ${ratingClass}`}>
                        {rating}</span>
                </h4>
                <p>Summary :{description}</p>
                <p>Genre : {genre}</p>
                <p>Cast : {cast}</p>

                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    );


}