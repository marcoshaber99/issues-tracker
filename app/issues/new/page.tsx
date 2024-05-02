"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import React from "react";

const NewIssuePage: React.FC = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="New Issue">
        <TextField.Slot>
          <Plus height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <TextArea placeholder="Description" className="mt-5" />

      <Button>Create Issue</Button>
    </div>
  );
};

export default NewIssuePage;
