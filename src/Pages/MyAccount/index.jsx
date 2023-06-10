import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../../Components/Layout";
import LogoutButton from "../../Components/LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, userMetadata } = useAuth0();


  return (
    isAuthenticated && (
      <Layout>
         <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        <LogoutButton />
      </Layout>
    )
  );
};

export default Profile;