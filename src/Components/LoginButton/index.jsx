import Layout from "../../Components/Layout";
import { useAuth0 } from "@auth0/auth0-react";
import { LockClosedIcon } from "@heroicons/react/24/outline";


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
        <Layout>
          <p className="mb-5 sm:text-2xl text-center">Welcome! In this section you are going to initiate the process of authentication by using Auth0</p>
          <button className="bg-black rounded-lg text-white lg:p-2 lg:w-40 lg:h-10 lg:text-base flex justify-center sm:text-3xl sm:h-20 sm:w-72 sm:p-4" onClick={() => loginWithRedirect()}>
            <LockClosedIcon className="lg:w-5 sm:w-9 mr-1 sm:mr-1 sm:py-0.5" />
            Authenticate</button>
        </Layout>
      
    );
  }
 
};

export default LoginButton;
