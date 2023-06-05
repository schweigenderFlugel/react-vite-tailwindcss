import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../../Components/Layout";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();


  return (
    isAuthenticated && (
      <Layout>
         <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Layout>
    )
  );
};

export default Profile;