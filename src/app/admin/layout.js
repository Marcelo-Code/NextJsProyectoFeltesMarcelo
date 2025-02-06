"use client";

import { useAuthContext } from "../components/context/authContext";
import Loading from "../loading";

const AdminLayout = ({ children, login }) => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return <Loading />;

  return <>{user.logged ? children : login}</>;
};

export default AdminLayout;
