import useAuth from "../../../hooks/useAuth";

function UserHome() {
  const { user } = useAuth();
  return (
    <div>
      <h4>Welcome {(user && user?.email) || "user"}</h4>
      <p>Role: {(user && user?.role) || "user"}</p>
    </div>
  );
}

export default UserHome;
