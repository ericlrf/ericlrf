import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eric França — Engenheiro e Cientista de Dados" },
      { name: "description", content: "Portfólio de Eric França: Mestre em Ciência da Computação (UFPE), engenharia de dados, machine learning e séries temporais." },
      { property: "og:title", content: "Eric França — Engenheiro e Cientista de Dados" },
      { property: "og:description", content: "Ciência e engenharia de dados, machine learning e IA aplicada à tomada de decisão." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  ["Python & Dados", "Pré-processamento, seleção de atributos, bases de dados e Apache Spark."],
  ["Machine Learning & IA", "Machine learning, deep learning, LSTM, séries temporais e detecção de outliers."],
  ["Explicabilidade", "Interpretação de modelos com Captum e Integrated Gradients."],
  ["Engenharia de Software", "APIs REST, integração de sistemas, testes e versionamento com Git."],
  ["Pesquisa & Colaboração", "Experimentação, documentação técnica, Kanban, PLN e LLMs."],
];
const jobs = [
  ["2026", "Pesquisador PDII Nível B", "SENAI Pernambuco"],
  ["2025–2026", "Pesquisador PDII Nível A", "SENAI Pernambuco"],
  ["2023–2026", "Assessor de TI", "Banco do Brasil"],
  ["2022–2023", "Analista de TI", "DATAPREV"],
];
const other = [
  ["2021–2022", "Pesquisador", "IMD/UFRN — FUNPEC"],
  ["2020–2021", "Pesquisador", "AiBox Lab/UFRPE — FACEPE"],
  ["2019–2020", "Assistente de Central de Processamento de Dados", "F. B. Com. de Tec."],
  ["2016–2017", "Desenvolvedor Jr.", "UstoRe"],
  ["2015–2016", "Pesquisador PIBIC", "IFPE Campus Recife"],
  ["2014–2015", "Estagiário de Redes de Computadores", "IFPE Campus Recife"],
  ["2014–2016", "Monitor", "Espaço Ciência — FACEPE"],
  ["2014; 2018", "Desenvolvedor freelancer", "Projetos independentes"],
];
const edu = [
  ["2022–2025", "Mestrado em Ciência da Computação", "UFPE"],
  ["2020–2021", "Especialização em Inteligência Computacional Aplicada", "UFRPE"],
  ["2013–2019", "Tecnólogo em Análise e Desenvolvimento de Sistemas", "IFPE"],
  ["2011–2016", "Técnico em Redes de Computadores", "SENAI Pernambuco"],
];
const phd = [
  ["2026", "Ciência da Computação (aluno especial)", "UFPE"],
  ["2026", "Ciência da Computação (aluno especial)", "USP/ICMC"],
  ["2025", "Ciência da Computação (aluno especial)", "Unicamp"],
];
const courses = [
  "Cloudera Data Scientist e Data Analyst (ILT)",
  "Cloudera Data Engineering: Apache Spark (ILT)",
  "5th Advanced School in Big Data Analysis — ICMC/USP",
  "Machine Learning e Data Science com Weka e Java — Udemy",
  "Python para Processamento de Linguagem Natural — ICMC/USP",
  "Neural Networks and Deep Learning — Coursera",
  "Team Kanban Practitioner — K21",
  "Modelagem de Dados — Alura",
];
const links = [
  ["E-mail", "mailto:eric.lrf@gmail.com", "eric.lrf@gmail.com"],
  ["GitHub", "https://github.com/ericlrf", "github.com/ericlrf"],
  ["LinkedIn", "https://linkedin.com/in/eric-frança-766a576a", "linkedin.com/in/eric-frança"],
  ["Lattes", "http://lattes.cnpq.br/7591396038615559", "lattes.cnpq.br/7591396038615559"],
];

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-8 border-t border-border py-16 md:grid-cols-[220px_1fr]">
      <div className="font-mono text-sm text-primary">{n} / {title}</div>
      <div>{children}</div>
    </section>
  );
}

function Timeline({ items }: { items: string[][] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map(([y, t, o]) => (
        <li key={t + o + y} className="grid gap-1 py-4 sm:grid-cols-[130px_1fr]">
          <span className="font-mono text-sm text-muted-foreground">{y}</span>
          <div>
            <div className="text-lg font-medium">{t}</div>
            <div className="text-muted-foreground">{o}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <header className="grid-bg border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <p className="font-mono text-sm text-primary">// Recife, PE · Dados & IA</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-8xl">
            Eric<br />França
          </h1>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Engenheiro de Dados · Cientista de Dados · Analista de Dados
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer"
                className="border border-border bg-background px-4 py-2 font-mono text-sm transition-colors hover:border-primary hover:text-primary">
                {l} ↗
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <Section n="01" title="Perfil">
          <p className="text-2xl leading-relaxed md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Mestre em Ciência da Computação pela UFPE, especialista em Inteligência Computacional Aplicada pela UFRPE e
            tecnólogo pelo IFPE. Aplico <span className="text-primary">Python, modelos preditivos, séries temporais e
            interpretação de modelos</span> à tomada de decisão em diferentes contextos de negócio.
          </p>
        </Section>

        <Section n="02" title="Competências">
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {skills.map(([t, d]) => (
              <div key={t} className="bg-background p-6">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section n="03" title="Experiência"><Timeline items={jobs} /></Section>
        <Section n="04" title="Outras experiências"><Timeline items={other} /></Section>
        <Section n="05" title="Formação"><Timeline items={edu} /></Section>
        <Section n="06" title="Doutorado"><Timeline items={phd} /></Section>

        <Section n="07" title="Cursos">
          <ul className="grid gap-3 sm:grid-cols-2">
            {courses.map((c) => (
              <li key={c} className="border-l-2 border-primary pl-4">{c}</li>
            ))}
          </ul>
        </Section>

        <Section n="08" title="Idiomas">
          <div className="grid gap-6 sm:grid-cols-3">
            {[["Português", "Nativo"], ["Inglês", "B2 · Linguaskill 2025"], ["Espanhol", "Intermediário"]].map(([l, n]) => (
              <div key={l}>
                <div className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>{l}</div>
                <div className="font-mono text-sm text-muted-foreground">{n}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section n="09" title="Contato">
          <ul className="space-y-3">
            {links.map(([l, h, t]) => (
              <li key={l} className="flex flex-wrap gap-4">
                <span className="w-24 font-mono text-sm text-muted-foreground">{l}</span>
                <a href={h} target="_blank" rel="noreferrer" className="text-lg hover:text-primary">{t}</a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © 2026 Eric Luiz Rodrigues de França
      </footer>
    </main>
  );
}
