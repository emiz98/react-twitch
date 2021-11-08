import "./categoryCard.scss";

const CategoryCard = ({ title, bg, ico }) => {
  return (
    <div
      className="categoryCard"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <h2>{title}</h2>
      <div className="ico">
        <img src={ico} alt="" />
      </div>
    </div>
  );
};

export default CategoryCard;
