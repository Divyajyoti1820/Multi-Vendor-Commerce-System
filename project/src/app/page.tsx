import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4">
          <Button variant="elevated">Primary</Button>
        </div>
        <div className="flex justify-center">
          <Textarea placeholder="Observing Textarea design" />
        </div>
        <div className="flex justify-center">
          <Input placeholder="Testing input box design" />
        </div>
        <div className="flex justify-start">
          <Checkbox />
        </div>
        <div className="flex justify-center">
          <Progress value={50} />
        </div>
      </div>
    </div>
  );
}
