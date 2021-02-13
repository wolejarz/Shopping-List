const ListItems = (props) => {
  const items = props.items.map((curritem) => {
    return (
      <ul>
        <Item item={curritem} addItem={props.addItem} />
      </ul>
    );
  });
  return (
    <div className="list">
      <h1>Your order</h1>
      <ul>{items}</ul>
    </div>
  );
};
