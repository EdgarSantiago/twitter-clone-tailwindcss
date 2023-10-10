import { ReactNode } from "react";
import Box from "./Box";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box className="p-10 mx-auto max-w-full min-h-screen bg-black">
      {children}
    </Box>
  );
}
