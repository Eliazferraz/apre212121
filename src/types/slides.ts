import { ReactNode } from "react";

export interface SlideData {
  id: number;
  type: "cover" | "content" | "profile" | "characteristics" | "comparison" | "quote" | "links";
  title?: string;
  subtitle?: string;
  content?: ReactNode;
  accent?: string;
}
