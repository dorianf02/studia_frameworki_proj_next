import ProtectedLayout from "@/app/(protected)/layout"; // lub odpowiednia ścieżka

// eslint-disable-next-line react/prop-types
export default function PublicLayout({ children }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
