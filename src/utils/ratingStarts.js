export const stars = (rate) => {
  let filled = Math.round(rate);
  let stars = [];

  for (let i = 0; i < 5; i++) {
    if (filled > 0) {
      stars.push(
        <li key={i} className="star">
          <img alt="filled" src={require("../assets/lists/filled-star.png")} />
        </li>
      );
      filled--;
    } else {
      stars.push(
        <li key={i} className="star">
          <img alt="empty" src={require("../assets/lists/empty-star.png")} />
        </li>
      );
    }
  }
  return <ul className="stars"> {stars ? stars : ""} </ul>;
};
