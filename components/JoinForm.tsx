import { MAILERLITE_JOIN_FORM_ID } from "@/lib/mailerlite";

export default function JoinForm() {
  return (
    <div className="rounded-sm border border-border bg-surface-elevated p-8 sm:p-10">
      <div className="ml-embedded" data-form={MAILERLITE_JOIN_FORM_ID} />
    </div>
  );
}
