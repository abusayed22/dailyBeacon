"use client";
import GenaralLayout from "@/components/master/GenaralLayout";
import UserForm from "@/components/users/UserForm";
import React from "react";

function page() {
  return (
    <GenaralLayout>
      <div className="flex justify-center py-5">
        <UserForm />
      </div>
    </GenaralLayout>
  );
}

export default page;
