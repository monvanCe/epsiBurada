import "./Bottombar.css";
const Bottombar = () => {
  return (
    <div className="bottombar">
      <img
        className="homebar"
        src={require("../../assets/bottombar/home.png")}
        alt="homebar"
      />
      <img
        className="categoriesbar"
        src={require("../../assets/bottombar/categories.png")}
        alt="homebar"
      />
      <img
        className="favoritesbar"
        src={require("../../assets/bottombar/favorites.png")}
        alt="homebar"
      />
    </div>
  );
};
export default Bottombar;
