import React, { useEffect, useRef, useState } from "react";
function MyComponent() {
  // const [name, setName] = useState("Guest");
  // const [age, setAge] = useState(0);
  // const [isEmployee, setIsEmployee] = useState(false);

  // const updateName = () => {
  //   setName("Pea");
  //   setAge(20);
  //   setIsEmployee(!isEmployee);
  // };
  // return (
  //   <div>
  //     <p>Name: {name}</p>
  //     <p>Age: {age}</p>
  //     <p>IsEmployee: {isEmployee ? "Yes" : "No"} </p>
  //     <button onClick={updateName}>Set Name</button>
  //   </div>
  // );

  // const [name, setName] = useState("Guest");
  // const [quantity, setQuantity] = useState(1);
  // const [comment, setComment] = useState();
  // const [payment, setPayment] = useState("visa");
  // const [shipping, setShipping] = useState("");
  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }
  // function handleQuantityChange(e) {
  //   setQuantity(e.target.value);
  // }
  // function handleCommentChange(e) {
  //   setComment(e.target.value);
  // }
  // function handlePaymentChange(e) {
  //   setPayment(e.target.value);
  // }
  // function handleShippingChange(e) {
  //   setShipping(e.target.value);
  // }

  // return (
  //   <div>
  //     <input value={name} onChange={handleNameChange} type="text" />
  //     <p>Name: {name}</p>
  //     <input value={quantity} onChange={handleQuantityChange} type="number" />
  //     <p>Quantity: {quantity}</p>
  //     <textarea
  //       value={comment}
  //       onChange={handleCommentChange}
  //       placeholder="Enter comment"
  //     />
  //     <p>Comment: {comment}</p>
  //     <select value={payment} onChange={handlePaymentChange}>
  //       <option value="">Select an option</option>
  //       <option value="visa">Visa</option>
  //       <option value="master-card">Master Card</option>
  //       <option value="money">Money</option>
  //     </select>
  //     <p>Payment: {payment}</p>
  //     <label>
  //       <input
  //         type="radio"
  //         value="Pick up"
  //         checked={shipping === "Pick up"}
  //         onChange={handleShippingChange}
  //       />
  //       Pick up
  //     </label>
  //     <br />
  //     <label>
  //       <input
  //         type="radio"
  //         value="Delivey"
  //         checked={shipping === "Delivey"}
  //         onChange={handleShippingChange}
  //       />
  //       Delivery
  //     </label>
  //     <p>Shipping: {shipping}</p>
  //   </div>

  // const [car, setCar] = useState({
  //   year: 2024,
  //   make: "Ford",
  //   model: "Mustang",
  // });
  // function handleYearChange(e) {
  //   setCar((car) => ({ ...car, year: e.target.value }));
  // }
  // function handleMakeChange(e) {
  //   setCar({ ...car, make: e.target.value });
  // }
  // function handleModelChange(e) {
  //   setCar((car) => ({ ...car, model: e.target.value }));
  // }
  // return (
  //   <div>
  //     <p>
  //       Your favourite car is: {car.year} {car.make} {car.model}
  //     </p>
  //     <input type="number" value={car.year} onChange={handleYearChange} />
  //     <br />
  //     <input type="text" value={car.make} onChange={handleMakeChange} />
  //     <br />
  //     <input type="text" value={car.model} onChange={handleModelChange} />
  //   </div>
  // );

  // const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  // function handleAddFood() {
  //   const newFood = document.getElementById("foodInput").value;
  //   document.getElementById("foodInput").value = "";

  //   setFoods((foods) => [...foods, newFood]);
  // }
  // function handleRemoveFood(index) {
  //   setFoods(foods.filter((_, i) => i !== index));
  // }
  // return (
  //   <div>
  //     <h2>List of food</h2>
  //     <ul>
  //       {foods.map((food, index) => (
  //         <li key={index} onClick={() => handleRemoveFood(index)}>
  //           {food}
  //         </li>
  //       ))}
  //     </ul>
  //     <input type="text" id="foodInput" placeholder="Enter food name" />
  //     <button onClick={handleAddFood}>Add Food</button>
  //   </div>
  // );

  // const [cars, setCars] = useState([]);
  // const [carYear, setCarYear] = useState(new Date().getFullYear());
  // const [carMake, setCarMake] = useState("");
  // const [carModel, setCarModel] = useState("");

  // function handleAddCar() {
  //   const newCar = { year: carYear, make: carMake, model: carModel };
  //   setCars((cars) => [...cars, newCar]);
  //   setCarYear(new Date().getFullYear());
  //   setCarMake("");
  //   setCarModel("");
  // }
  // function handleRemoveCar(index) {
  //   setCars((car) => car.filter((_, i) => i !== index));
  // }
  // function handleYearChange(e) {
  //   setCarYear(e.target.value);
  // }
  // function handleMakeChange(e) {
  //   setCarMake(e.target.value);
  // }
  // function handleModelChange(e) {
  //   setCarModel(e.target.value);
  // }

  // return (
  //   <div>
  //     <h2> List of Car Objects</h2>
  //     <ul>
  //       {cars.map((car, index) => (
  //         <li key={index} onClick={() => handleRemoveCar(index)}>
  //           {car.year} {car.make} {car.model}
  //         </li>
  //       ))}
  //     </ul>
  //     <input
  //       type="number"
  //       value={carYear}
  //       onChange={handleYearChange}
  //       placeholder="Enter year car"
  //     />
  //     <br />
  //     <input
  //       type="text"
  //       value={carMake}
  //       onChange={handleMakeChange}
  //       placeholder="Enter make car"
  //     />
  //     <br />
  //     <input
  //       type="text"
  //       value={carModel}
  //       onChange={handleModelChange}
  //       placeholder="Enter model car"
  //     />
  //     <br />
  //     <button onClick={handleAddCar}>Add Car</button>
  //   </div>
  // );

  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState();
  // useEffect(() => {
  //   document.title = `Count ${count} ${color}`;
  //   return () => {
  //     // SOME CLEANUP CODE
  //   };
  // }, [count, color]);
  // function addCount() {
  //   setCount((c) => c + 1);
  // }
  // function substactCount() {
  //   setCount((c) => c - 1);
  // }
  // function changeColor() {
  //   setColor((c) => (c === "green" ? "red" : "green"));
  // }
  // return (
  //   <>
  //     <p style={{ color: { color } }}>Count: {count}</p>
  //     <button onClick={addCount}>Click me</button>
  //     <button onClick={substactCount}>Substact</button>
  //     <button onClick={changeColor}>Change</button>
  //   </>
  // );

  // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   console.log("EVENT LISTENER ADDED");
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     console.log("EVENT LISTENER REMOVED");
  //   };
  // }, []);

  // useEffect(() => {
  //   document.title = `Size: ${width} x ${height}`;
  // }, [width, height]);

  // function handleResize() {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // }
  // return (
  //   <>
  //     <p>Window width: {width}px</p>
  //     <p>Window height: {height}px</p>
  //   </>
  // );

  let [number, setNumber] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input ref={inputRef} />
    </>
  );
}
export default MyComponent;
