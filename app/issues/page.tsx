import { Button } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const IssuesPage: React.FC = () => {
  return (
    <div>
      <Button>
        <Plus size={18} />
        <Link href="/issues/new">Create Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
