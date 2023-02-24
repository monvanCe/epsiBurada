import "./Bottombar.css";
const Bottombar = () => {
  return (
    <div className="bottombar">
      <img
        className="homebar"
        src={require("./assets/home.png")}
        alt="homebar"
      />
      <img
        className="categoriesbar"
        src={require("./assets/categories.png")}
        alt="homebar"
      />
      <img
        className="favoritesbar"
        src={require("./assets/favorites.png")}
        alt="homebar"
      />
    </div>
  );
};
export default Bottombar;
