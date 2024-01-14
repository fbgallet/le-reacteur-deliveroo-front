const Restaurant = (props) => {
  const { name, description, picture } = props.infos;
  return (
    <div className="content-wrapper">
      <div className="restaurant">
        <div className="resto-infos-wrapper">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default Restaurant;
