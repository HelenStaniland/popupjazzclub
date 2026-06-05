export default function JoinForm() {
  return (
    <div className="space-y-6 rounded-sm border border-border bg-surface-elevated p-8 sm:p-10">
      <p className="text-sm leading-relaxed text-cream-muted">
        Our mailing list signup is coming soon.
      </p>
      <p className="text-sm leading-relaxed text-cream-muted">
        In the meantime, email{" "}
        <a
          href="mailto:hello@popupjazzclub.com"
          className="text-gold transition-colors hover:text-gold-light"
        >
          hello@popupjazzclub.com
        </a>{" "}
        and we&apos;ll add you to the list.
      </p>
    </div>
  );
}
