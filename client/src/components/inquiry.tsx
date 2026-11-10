import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Form from "./form/form";
import useForm from "../hooks/useForm";
import Button from "./button/button";
import Click from "./button/click";
import Section from "./section";
import { AnimationProps, slideUp } from "../resources/animations/animations";
import media from "../resources/stylesheets/media";
import { phone } from "../resources/stylesheets/dimensions";
import useWhenInView from "../hooks/useWhenInView";

const url =
  process.env.REACT_APP_CONTACT_API_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/api");

const SInquiry = styled.div<AnimationProps>`
  ${slideUp};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  grid-template-areas: "form";

  @media (max-width: ${media.phone}) {
    padding: 0 ${phone.padding};
    grid-template-columns: 1fr;
    grid-template-areas: "form";
  }
`;

const SSection = styled(Section)`
  ${slideUp};
  grid-area: form;
  height: 300px;
  padding: 0;
`;

const Inquiry: React.FC = () => {
  const { values, handleChange, clearForm } = useForm({});
  const { t } = useTranslation("contact");
  const [active, isActive] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const submitting = useRef(false);
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
      <Form onSubmit={handleSubmit} active={active}>
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
          <span aria-live="polite">
            <Button label={t(sending ? "sending" : "send")} />
          </span>
        </Form.Submit>
      </Form>
      <SSection active={!active}>
        <Section.Title>{t("thanks.title")}</Section.Title>
        <Section.Text>{t("thanks.text")}</Section.Text>
        <Click onAction={() => isActive(true)}>
          <Button label={t("thanks.again")} />
        </Click>
      </SSection>
    </SInquiry>
  );
};

export default Inquiry;
