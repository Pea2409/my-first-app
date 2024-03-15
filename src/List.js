function List(props) {
  // fruits.sort((a, b) => a.name.localeCompare(b.name));
  // fruits.sort((a, b) => b.name.localeCompare(a.name));
  // fruits.sort((a, b) => a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);

  // const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
  // const highCalFruit = fruits.filter((fruit) => fruit.calories >= 100);

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}
export default List;
