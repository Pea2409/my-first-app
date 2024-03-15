function Button() {
  //   let count = 0;

  //   const handelClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you clicked me ${count} time/s`);
  //     } else {
  //       console.log(`${name} stop clicking me`);
  //     }
  //   };
  const handelClick = (e) => (e.target.textContent = "OUCH");
  return <button onDoubleClick={(e) => handelClick(e)}>Click me</button>;
}
export default Button;
