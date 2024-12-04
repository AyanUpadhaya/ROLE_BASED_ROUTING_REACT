import useAuth from "../../../../hooks/useAuth";


const Nav = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="ms-auto text-end">
              {isAuthenticated && (
                <button
                  onClick={() => logout()}
                  type="button"
                  className="btn btn-outline-light me-2"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
