import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

import configPromise from "@payload-config";
import { getPayload } from "payload";

interface Props {
  children: React.ReactNode;
}

/**
 * Layout component that renders a navbar, a flexible content area, and a footer in a full-height vertical layout.
 *
 * @param children - The page content to display between the Navbar and Footer.
 * @returns The root JSX element containing the composed layout (Navbar, content area, Footer).
 */
export default async function HomeLayout({ children }: Props) {
  const payload = await getPayload({ config: configPromise });

  const data = await payload.find({
    collection: "categories",
    depth: 1, //Depth is used to fetch the subcategories
    where: {
      // Fetching only top-level categories
      parent: {
        exists: false,
      },
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={data} />
      <div className="flex-1 bg-[#F4F4F4]">{children}</div>
      <Footer />
    </div>
  );
}
