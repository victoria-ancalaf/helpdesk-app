import React from "react";
import CreateForm from "./createForm";

export const metadata = {
  title: "Helpdesk | New Ticket",
};

export default function CreateTicket() {
  return (
    <main>
      <h2 className="text-primary text-center">Add a New Ticket</h2>
      <CreateForm />
    </main>
  );
}
