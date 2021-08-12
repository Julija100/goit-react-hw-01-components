function Profile(props) {
  if (props.title && props.price && props.shops) {
      return (
    <div>
      {props.title ? <p>Title: {props.title}</p> : <p>NO TITLE</p>}
      {props.price > 10 ? <p>Price: ${props.price}</p> : <p>CHEAP</p>}
          {/* {props.shops && <p>Available in shops : {props.shops[0]}</p>} */}
            <ul>
    {props.shops.map(shop => (
      <li key = {shop.id}>{shop.value}</li>
    ))}
  </ul>
      <p>---------------------</p>
    </div>
    
  );
  }
return <p>There is not enought information</p>
}

export default Profile;
