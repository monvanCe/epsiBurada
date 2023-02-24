import "./Colorbar.css";

const colorbar = (props) => {
  const paddingTop = props.paddingTop;

  return (
    <div className="colorbar" style={{ paddingTop: paddingTop }}>
      <div className="colorbar_item-1"></div>
      <div className="colorbar_item-2"></div>
      <div className="colorbar_item-3"></div>
      <div className="colorbar_item-4"></div>
      <div className="colorbar_item-5"></div>
      <div className="colorbar_item-6"></div>
    </div>
  );
};

export default colorbar;
