import { useStore } from "vuex";
export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permissions = store.state.loginModule.permissions;
  console.log(permissions);

  const verifyPermission = `system:${pageName}:${handleName}`;
  return !!permissions.find((item: string) => {
    return item === verifyPermission;
  });
}