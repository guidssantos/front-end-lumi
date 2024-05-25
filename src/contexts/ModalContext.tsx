import {
  Component,
  createContext,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { createHtmlPortalNode, HtmlPortalNode } from "react-reverse-portal";

type ModalContextProviderProps = {
  children: ReactNode;
};

type ModalContextData = {
  openedModals: string[];
  closeModal: (type: string | string[]) => void;
  openModal: (type: string) => void;
  modalPortalNode: HtmlPortalNode<Component<any>>;
};

export const ModalContext = createContext<ModalContextData | null>(null);

export default function ModalContextProvider({
  children,
}: ModalContextProviderProps) {
  const [openedModals, setOpenedModals] = useState<string[]>([]);

  const modalPortalNode = createHtmlPortalNode();

  const openModal = useCallback(
    (type: string) => {
      if (openedModals.some((i) => i === type)) return;

      setOpenedModals((oldState) => [...oldState, type]);
    },
    [openedModals],
  );

  const closeModal = useCallback(
    (type: string | string[]) => {
      const updatedOpenedModals = openedModals.map((i) => i);

      if (typeof type === "object") {
        const updatedModals = updatedOpenedModals.filter(
          (i) => !type.includes(i),
        );

        setOpenedModals(updatedModals);

        return;
      }

      const typeIndex = updatedOpenedModals.findIndex((i) => i === type);

      if (typeIndex < 0) return;

      updatedOpenedModals.splice(typeIndex, 1);

      setOpenedModals(updatedOpenedModals);
    },
    [openedModals],
  );

  return (
    <ModalContext.Provider
      value={{ openedModals, openModal, closeModal, modalPortalNode }}
    >
      {children}
    </ModalContext.Provider>
  );
}
