import { cn } from "@/lib/utils";
import PageTitle from "../ui/PageTitle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { redirect } from "next/navigation";
import ContactForm from "./ContactForm";

export default function Contact({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <PageTitle firstLine="PONGÁMONOS EN" secondLine="CONTACTO" />
      <ContactForm></ContactForm>
    </div>
  );
}
