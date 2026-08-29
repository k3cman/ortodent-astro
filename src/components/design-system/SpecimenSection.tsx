import type { ReactNode } from "react";

type SpecimenSectionProps = {
  number: string;
  title: string;
  children: ReactNode;
};

export default function SpecimenSection({ number, title, children }: SpecimenSectionProps) {
  return (
    <section className="oc-specimen">
      <h2 className="oc-specimen__title"><span>{number}.</span> {title}</h2>
      {children}
    </section>
  );
}
