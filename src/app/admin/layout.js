"use client";

import { useAuthContext } from "../components/context/authContext";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();

  return <>{user.logged ? children : login}</>;
};

export default AdminLayout;
