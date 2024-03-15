import Button from "./Button";
import imageUrl from "./assets/personal.jpg";

function ProfilePicture() {
  const handelClick = (e) => (e.target.style.display = "none");
  return <img onClick={(e) => handelClick(e)} height="200" src={imageUrl} />;
}
export default ProfilePicture;
