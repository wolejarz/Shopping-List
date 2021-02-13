class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Tea", price: 3, active: true },
      { id: 2, name: "Potatoes", price: 1, active: true },
      { id: 3, name: "Soupe", price: 2, active: true },
      { id: 4, name: "Apples", price: 4, active: true },
      { id: 5, name: "Coffe", price: 8, active: true },
      { id: 6, name: "Sugar", price: 6, active: true },
      { id: 7, name: "Bread", price: 10, active: true },
      { id: 8, name: "Beer", price: 20, active: true },
    ],
    wallet: 200,
    order: 0,
    articleQuantity: 0,
  };
  render() {
    return (
      <React.Fragment>
        <Header
          wallet={this.state.wallet}
          order={this.state.order}
          items={this.state.items}
          articleQuantity={this.state.articleQuantity}
          buy={this.handleBuy}
        />
        <ListItems
          items={this.state.items}
          addItem={this.handleAddItem.bind(this)}
        />
      </React.Fragment>
    );
  }

  handleBuy = () => {
    this.setState({
      wallet: this.state.wallet - this.state.order,
      order: 0,
      articleQuantity: 0,
    });
    console.log(this.state);
  };

  handleAddItem = (item) => {
    this.setState((prevState) => ({
      order: prevState.order + item.price,
      articleQuantity: ++prevState.articleQuantity,
    }));
  };
}
