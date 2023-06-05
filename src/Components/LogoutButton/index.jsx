import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../Layout";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Layout>
        <button
          className="bg-black rounded-lg text-white p-2"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </Layout>
    );
  }
};

export default LogoutButton;
