import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container } from "@/components/layout/Section";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <main id="content" className="py-16">
      <Container className="max-w-3xl">
        <p className="bg-accent/15 text-accent-foreground mb-6 rounded-md px-3 py-2 text-sm">
          {t("legal.disclaimer")}
        </p>
        <h1 className="text-4xl">{title}</h1>
        <div className="prose-legal mt-8 space-y-4 text-sm leading-relaxed">{children}</div>
        <p className="mt-10">
          <a className="text-primary underline" href="#top">
            {t("legal.back")}
          </a>
        </p>
        <p className="text-muted-foreground mt-6 text-xs">
          {site.legalName} · {site.address.full} · {site.email}
        </p>
      </Container>
    </main>
  );
}

export function RodoPage() {
  const { t } = useTranslation();
  return (
    <LegalLayout title={t("legal.rodoTitle")}>
      <p>
        Administratorem danych osobowych jest {site.legalName}, {site.address.full}, e-mail:{" "}
        {site.email}, tel. {site.phone}.
      </p>
      <p>
        Dane przetwarzamy w celu odpowiedzi na zapytania, umówienia wizyty oraz — po wyrażeniu
        zgody — w celach analitycznych (pliki cookies). Podstawą jest art. 6 ust. 1 lit. a, b lub f
        RODO.
      </p>
      <p>
        Dane nie są sprzedawane. Mogą być powierzane dostawcom hostingu i poczty. Przysługuje
        Państwu prawo dostępu, sprostowania, usunięcia, ograniczenia, przenoszenia, sprzeciwu oraz
        skargi do Prezesa UODO.
      </p>
      <p>
        Szczegóły znajdują się w{" "}
        <a className="underline" href="#/polityka">
          polityce prywatności
        </a>
        .
      </p>
    </LegalLayout>
  );
}

export function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <LegalLayout title={t("legal.privacyTitle")}>
      <p>
        Strona {site.name} wykorzystuje niezbędne pliki cookies do zapamiętania zgody, języka,
        wariantu graficznego i trybu jasnego/ciemnego. Nie ładujemy narzędzi analitycznych przed
        akceptacją banera.
      </p>
      <p>
        Dane podane telefonicznie lub e-mailem służą wyłącznie obsłudze zapytania. Nie prowadzimy
        newslettera, dopóki nie zostanie to wyraźnie włączone w projekcie klienta.
      </p>
      <p>
        Kontakt w sprawie danych: {site.email}. Treść tego dokumentu jest szablonem i wymaga
        dostosowania do realnych procesów gabinetu / firmy.
      </p>
    </LegalLayout>
  );
}
