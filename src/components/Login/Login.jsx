import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../config/firebase";
import { login } from "../../redux/slices/userSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="gmail"
        />
        <Button color="primary" onClick={() => signIn()}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
