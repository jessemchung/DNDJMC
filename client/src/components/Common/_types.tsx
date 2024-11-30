import { PropsWithChildren } from "react";
// import { ConfirmDialogProps } from "../dialogs/ConfirmDialog";
// import { ErrorDialogProps } from "../dialogs/ErrorDialog";

export interface DialogButtonProps {
  disabled?: boolean
  onClick: () => void;
  text: string;
  type?: "Info" | "Success" | "Danger" | "Warning"
}

export type DialogProps = PropsWithChildren<{
  closeOnOverlayClick?: boolean
  id: number
  isClosing: boolean
  type?: "wide" | "normal" | "form"
  title?: string
}>

export type PublicDialogProps = Omit<DialogProps, "id" | "isClosing">;

export interface DialogContextType {
  alert: (message: string, title?: string) => void;
  clear: () => void;
  // confirm: (props: ConfirmDialogProps) => void;
  dialogs: DialogProps[];
  // error: (props: ErrorDialogProps) => void;
  hide: () => void;
  show: (props: PublicDialogProps) => void;
}

export type DialogHeaderProps = {
  disabled?: boolean
  title?: string
}

export type DialogFooterProps = {
  buttons?: Array<DialogButtonProps>
}