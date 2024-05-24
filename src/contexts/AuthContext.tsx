import { useState, createContext, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type AuthContextType = {
  userEmail?: string;
  signIn: (email: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authChecked, setAuthChecked] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

  const router = useNavigate();
  const pathname = useLocation().pathname;

  const signIn = (email: string) => {
    setUserEmail(email);
    localStorage.setItem("@electric-energy-dashboard:userEmail", email);
    router("/");
  };

  const signOut = () => {
    setUserEmail(undefined);
    localStorage.removeItem("@electric-energy-dashboard:userEmail");
    router("/login");
  };

  const checkAuthentication = useCallback(() => {
    if (typeof window === "undefined") return;

    const storedUserEmail = localStorage.getItem(
      "@electric-energy-dashboard:userEmail",
    );

    setAuthChecked(() => {
      if (pathname === "/login" && storedUserEmail) {
        setUserEmail(storedUserEmail);
        router("/");
        return true;
      }

      if (pathname !== "/login" && !storedUserEmail) {
        router("/login");
      }

      return true;
    });
  }, [pathname, router]);

  useEffect(checkAuthentication, [checkAuthentication]);

  if (!authChecked) return null;

  return (
    <AuthContext.Provider value={{ userEmail, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
