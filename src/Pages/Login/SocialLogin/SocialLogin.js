import React from "react";
import google from "../../../images/google-logo-9808.png";
import facebook from "../../../images/logo-facebookpng-32202.png";
import github from "../../../images/5847f98fcef1014c0b5e48c0.png";
import auth from "../../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message}
        {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 mx-auto d-block my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" srcset="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-50 mx-auto d-block my-2">
          <img style={{ width: "30px" }} src={facebook} alt="" srcset="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 mx-auto d-block my-2"
        >
          <img style={{ width: "30px" }} src={github} alt="" srcset="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
