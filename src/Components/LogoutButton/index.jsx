import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../Layout";
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Layout>
        <button
          className="bg-black rounded-lg text-white p-2 w-40 flex justify-center "
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <ArrowRightOnRectangleIcon className="w-5 mr-1 mt-0.5" />
          Log Out
        </button>
      </Layout>
    );
  }
};

export default LogoutButton;
