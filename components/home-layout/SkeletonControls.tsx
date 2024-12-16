import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

const SkeletonControls = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-3 mt-5">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Loading locations..." />
        </SelectTrigger>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Loading providers..." />
        </SelectTrigger>
      </Select>

      <div className="grid grid-cols-[3fr_1fr] sm:col-span-full lg:col-span-1 gap-1">
        <Input
          type="text"
          placeholder="Loading..."
          className="pointer-events-none"
        />
        <Button disabled>Search</Button>
      </div>
    </div>
  );
};

export default SkeletonControls;
