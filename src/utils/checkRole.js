export const checkRole = (canAccessRoles, userRoles) => {
  try {
    return canAccessRoles.some((r) => userRoles.includes(r));
  } catch (error) {
    return false;
  }
};
