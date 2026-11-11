import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Form from "./form/form";
import useForm from "../hooks/useForm";
import { AnimationProps, slideUp } from "../resources/animations/animations";
import useWhenInView from "../hooks/useWhenInView";

const url = import.meta.env.VITE_CONTACT_API_URL || "/api";

const SInquiry = styled.div<AnimationProps>`
  ${slideUp};
  min-width: 0;
`;
const SSuccess = styled.div`
  padding: 24px;
  border: 1px solid #ffffff33;
  border-radius: 12px;
  background: #1c1c1e;
  h3 {
    font-size: 1.25rem;
    line-height: 1.4;
  }
  h3:focus {
    outline: none;
  }
  p {
    color: #b8b8b8;
    line-height: 1.6;
    margin: 12px 0 20px;
  }
  button {
    color: white;
    min-height: 44px;
    padding: 0;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  button:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
`;

const Inquiry: React.FC = () => {
  const { values, handleChange, clearForm } = useForm({});
  const { t } = useTranslation("contact");
  const [active, isActive] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const submitting = useRef(false);
  const successHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!active) successHeading.current?.focus();
  }, [active]);
  const { ref, visible } = useWhenInView(150);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setSending(true);
    setError(false);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 65000);
    try {
      const response = await fetch(`${url}/email`, {
        method: "POST",
        signal: controller.signal,
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: values.from,
          name: values.name,
          subject: values.subject,
          text: values.text,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.status !== true) {
        throw new Error("Email submission failed");
      }
      isActive(false);
      clearForm();
    } catch {
      setError(true);
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
      setSending(false);
    }
  };

  return (
    <SInquiry ref={ref} active={visible}>
      {active ? (
        <Form onSubmit={handleSubmit} active={true}>
          <Form.Input
            type="text"
            label={t("name")}
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <Form.Input
            type="email"
            label={t("email")}
            name="from"
            maxLength={254}
            value={values.from}
            onChange={handleChange}
            required
          />
          <Form.Input
            type="text"
            label={t("subject")}
            name="subject"
            value={values.subject}
            onChange={handleChange}
            required
          />
          <Form.Textarea
            label={t("message")}
            name="text"
            value={values.text}
            onChange={handleChange}
            required
            maxLength={5000}
          />
          {error && <p role="alert">{t("error")}</p>}
          <Form.Submit disabled={sending}>
            <span aria-live="polite">{t(sending ? "sending" : "send")}</span>
          </Form.Submit>
        </Form>
      ) : (
        <SSuccess>
          <h3 ref={successHeading} tabIndex={-1}>
            {t("thanks.title")}
          </h3>
          <p>{t("thanks.text")}</p>
          <button type="button" onClick={() => isActive(true)}>
            {t("thanks.again")}
          </button>
        </SSuccess>
      )}
    </SInquiry>
  );
};

export default Inquiry;
