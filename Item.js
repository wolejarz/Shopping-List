const Item = (props) => {
  return (
    <li
      className={props.item.active ? "enabled" : "disabled"}
      onClick={() => props.addItem(props.item.id)}
      key={props.item.id}
    >
      article: {props.item.name} price: {props.item.price}
    </li>
  );
};
