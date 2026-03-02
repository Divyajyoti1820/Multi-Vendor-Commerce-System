import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
  });

  return (
    <div className="p-4">
      {data.docs.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </div>
  );
}
