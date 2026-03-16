import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Category } from "@/payload-types";

import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";
import { Footer } from "./footer";
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
    depth: 1, //Populate subcategories, subcategories will be a type of "Category"
    pagination: false,
    where: {
      // Fetching only top-level categories
      parent: {
        exists: false,
      },
    },
  });

  // Transform the data to include subcategories in a more accessible format
  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      ...(doc as Category),
    })),
  }));

  console.log("Formatted Categories with Subcategories:", formattedData);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F4]">{children}</div>
      <Footer />
    </div>
  );
}
