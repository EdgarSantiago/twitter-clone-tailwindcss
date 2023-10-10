import Layout from "@/components/atoms/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to another page after a 2-second delay
    const redirectTimeout = setTimeout(() => {
      router.push("/auth/signin"); // Replace "/other-page" with the desired URL
    }, 20); // 2000 milliseconds (2 seconds)

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(redirectTimeout);
  }, []);
  return <Layout>Homepage</Layout>;
}
