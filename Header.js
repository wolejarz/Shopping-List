const Header = (props) => {
  return (
    <div>
      <header>
        <div>Number of articles: {props.articleQuantity}</div>
        <div>Wallet: {props.wallet}</div>
        <div>Order: {props.order}</div>
      </header>
      <button id="buy" onClick={() => {}}>
        BUY
      </button>
    </div>
  );
};
