import { Button } from "@/components/ui/button";
import { Download, Plus, Settings, ArrowRight, Heart, Star } from "lucide-react";

export const button = {
  name: "button",
  components: {
    "Small": <Button size="sm">Small Button</Button>,
    "Medium": <Button size="default">Medium Button</Button>,
    "Large": <Button size="lg">Large Button</Button>,
    "Small with Icon": (
      <Button size="sm" leftIcon={<Download className="h-3 w-3" />}>
        Download
      </Button>
    ),
    "Medium with Icon": (
      <Button size="default" leftIcon={<Download className="h-4 w-4" />}>
        Download
      </Button>
    ),
    "Large with Icon": (
      <Button size="lg" leftIcon={<Download className="h-5 w-5" />}>
        Download
      </Button>
    ),
    "Small Icon Only": (
      <Button size="icon-sm">
        <Settings className="h-3 w-3" />
      </Button>
    ),
    "Medium Icon Only": (
      <Button size="icon-default">
        <Settings className="h-4 w-4" />
      </Button>
    ),
    "Large Icon Only": (
      <Button size="icon-lg">
        <Settings className="h-5 w-5" />
      </Button>
    ),
  },
};
