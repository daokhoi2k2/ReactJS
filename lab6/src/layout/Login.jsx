import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";

export default function Login({ getCheckLogin, checkLogin }) {
  const [inforUser, getInforUser] = useState({
    tokenId: "",
    hoten: "",
    email: "",
    imageUrl: "",
  });

  const dangNhhapThanhCong = (response) => {
    console.log("Đăng nhập thành công", response);
    getCheckLogin(true);
    getInforUser({
      tokenId: response.tokenId,
      hoten: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl,
    });
  };

  const thoat = (response) => {
    console.log("Đã đăng xuất");
    getCheckLogin(false);
    getInforUser({ tokenId: "", hoten: "", email: "", imageUrl: "" });
  };

  const dangNhapThatBai = (response) => {
    console.log("Đăng nhập thất bại", response);
  };

  return (
    <div>
      {checkLogin == false ? (
        <GoogleLogin
          clientId="889274188153-91r1u7efb9cmur315pri116ccgeiu9h9.apps.googleusercontent.com"
          buttonText="Đăng nhập"
          onSuccess={dangNhhapThanhCong}
          onFailure={dangNhapThatBai}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : (
        <div>
          <GoogleLogout
            clientId="889274188153-91r1u7efb9cmur315pri116ccgeiu9h9.apps.googleusercontent.com"
            buttonText="Thoát"
            onLogoutSuccess={thoat}
          />
          <div className="info mb-5 mt-4">
            <img src={inforUser.imageUrl} alt="" />
            <h1>{inforUser.hoten}</h1>
            <h3>{inforUser.email}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
