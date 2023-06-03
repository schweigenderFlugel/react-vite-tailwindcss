import Layout from "../../Components/Layout";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  

  return (
      <Layout>
        <p>Welcome! In this section you are going to initiate the process of authentication by using Auth0</p>
        <button className="bg-black rounded-lg text-white p-2" onClick={() => loginWithRedirect()}>Log In</button>
      </Layout>
    
  );
};

export default LoginButton;
