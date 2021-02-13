const Item = (props) => {
  return (
    <li
      className={props.item.active ? "enabled" : "disabled"}
      onClick={() => props.addItem(props.item)}
    >
      article: {props.item.name} price: {props.item.price}
    </li>
  );
};
