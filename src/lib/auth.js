
import { mockUsers } from "@/data/mockData";

export const loginUser = (email, password) => {
  const user = mockUsers.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  return {
    success: true,
    user,
  };
};

export const getDashboardPath = (role) => {
  switch (role) {
    case "admin":
      return "/admin/dashboard";

    case "hr":
      return "/hr/dashboard";

    case "employee":
      return "/employee/dashboard";

    default:
      return "/login";
  }
};
