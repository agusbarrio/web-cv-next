"use client";
import { Send, Loader } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useRef, useState } from "react";
import Toast from "../ui/toast";
import { Locale } from "@/i18n/locales";
import { uiByLocale } from "@/i18n/ui";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = uiByLocale[locale];
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  /* Si hay un error, muestra un mensaje de error, si no, muestra un mensaje de éxito. Al finalizar, resetea el formulario y se pone el loading a false. */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(t.messageSentError);
        }
      })
      .then(() => {
        setMessage(t.messageSentOk);
      })
      .catch((err) => {
        setMessage(t.messageSentError);
      })
      .finally(() => {
        setIsLoading(false);
        formRef.current?.reset();
      });
  };

  return (
    <>
      <form className="flex flex-col gap-16" onSubmit={onSubmit} ref={formRef}>
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            label={t.name}
            className="col-span-1"
            required
            disabled={isLoading}
          />
          <Input
            type="text"
            name="companyName"
            label={t.company}
            className="col-span-1"
            disabled={isLoading}
          />
          <Input
            type="email"
            name="email"
            label="Email"
            className="col-span-1"
            required
            disabled={isLoading}
          />
          <Input
            type="text"
            name="phone"
            label={t.phone}
            className="col-span-1"
            disabled={isLoading}
          />
          <Input
            type="text"
            name="message"
            label={t.message}
            className="col-span-2"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <Button
            variant="highlight"
            type="submit"
            disabled={isLoading}
            endIcon={
              isLoading ? (
                <Loader size={12} className="animate-spin" />
              ) : (
                <Send size={12} />
              )
            }
          >
            {t.sendMessage.toUpperCase()}
          </Button>
        </div>
      </form>
      {message && <Toast message={message} />}
    </>
  );
}
