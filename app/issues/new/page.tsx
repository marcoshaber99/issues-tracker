"use client";

import { Button, TextField } from "@radix-ui/themes";
import { Pen, Plus } from "lucide-react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage: React.FC = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="New Issue">
        <TextField.Slot />
      </TextField.Root>

      <SimpleMDE placeholder="Description" className="mt-5" />

      <Button>Create Issue</Button>
    </div>
  );
};

export default NewIssuePage;
