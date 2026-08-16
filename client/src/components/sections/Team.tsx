import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";

const PEOPLE = [
  { name: "Anna Nowak", roleKey: "team.roles.owner" as const },
  { name: "Piotr Wiśniewski", roleKey: "team.roles.specialist" as const },
  { name: "Marta Zielińska", roleKey: "team.roles.assistant" as const },
];

export function Team() {
  const { t } = useTranslation();

  return (
    <Section id="zespol">
      <Container>
        <SectionHeader kicker={t("team.kicker")} title={t("team.title")} />
        <div className="grid gap-6 sm:grid-cols-3">
          {PEOPLE.map((person, index) => (
            <article key={person.name} className="text-center">
              <img
                src={images.team[index]}
                alt={person.name}
                className="mx-auto h-72 w-full max-w-xs rounded-xl object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-lg">{person.name}</h3>
              <p className="text-muted-foreground text-sm">{t(person.roleKey)}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
