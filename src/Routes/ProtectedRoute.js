import { Fragment, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuthProfile } from "../store/auth/auth.fetch";
import { checkRole } from "../utils/checkRole";

export const ProtectedRoute = ({ children, roles, allowedPublic = false }) => {
  const { role, user, authToken } = useSelector((state) => state.auth);

  if (authToken && user === null && allowedPublic) {
    return <AuthLoader />;
  }

  if (authToken && user === null) {
    return <AuthLoader />;
  }

  if ((role && checkRole(roles, role)) || allowedPublic) {
    return children;
  }

  return <Navigate to={`/`} />;
};

const AuthLoader = () => {
  const dispatch = useDispatch();
  const { auth_loader } = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth_loader === false) dispatch(getAuthProfile());
  }, [dispatch, auth_loader]);

  return (
    <Fragment>
      <div className="auth-loader">
        <div className="text-center w-100">
          <Spinner animation="border" className="me-2" />
        </div>
      </div>
    </Fragment>
  );
};
