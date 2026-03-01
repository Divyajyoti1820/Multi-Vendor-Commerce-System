import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

/**
 * Layout component that renders a navbar, a flexible content area, and a footer in a full-height vertical layout.
 *
 * @param children - The page content to display between the Navbar and Footer.
 * @returns The root JSX element containing the composed layout (Navbar, content area, Footer).
 */
export default function HomeLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F4F4F4]">{children}</div>
      <Footer />
    </div>
  );
}