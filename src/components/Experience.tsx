import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Pipeline from "./Pipeline";

const ITEMS = [
  "Consultas SQL complexas no dia a dia",
  "Oracle Database em ambiente profissional",
  "Integrações entre sistemas internos e externos",
  "Desenvolvimento de APIs REST",
  "Processamento de informações empresariais",
  "Automação de processos manuais",
  "Integração com Sankhya ERP",
  "Integração com sistemas externos",
  "Manipulação de dados comerciais e operacionais",
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-28 md:px-10">
      <SectionHeading index="05" tag="Experiência real" accent="coral" title={<>Dados já fazem parte do meu trabalho.</>} lead="Minha relação com dados não começou nos estudos de Data Engineering — vem da prática diária como desenvolvedor back-end." />

      <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="neu relative p-5 md:p-6">
          <div className="mb-6 flex items-center justify-between border-b border-deepest pb-3">
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted">integracao_erp.sistema</span>
            <span className="rounded-full bg-coral/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.18em] text-coral">PRODUÇÃO</span>
          </div>

          <Pipeline
            direction="vertical"
            nodes={[
              { label: "Sankhya ERP", sub: "origem comercial", tone: "muted" },
              { label: "Java / SQL", sub: "processamento", tone: "plum" },
              { label: "API / Integration", sub: "camada de integração", tone: "teal" },
              { label: "External System", sub: "destino", tone: "coral" },
            ]}
          />

          <div className="mt-6 border-t border-deepest pt-3 font-mono text-[10px] tracking-[0.14em] text-teal">● fluxo ativo em ambiente profissional</div>
        </motion.div>

        <div>
          <div className="mb-5 font-mono text-[10px] tracking-[0.26em] text-faint">registro_de_experiencia.log</div>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
                className="group flex list-none items-start gap-3 border-b border-deepest py-3.5"
              >
                <span className="mt-0.5 inline-block font-mono text-teal transition-transform group-hover:translate-x-1">▸</span>
                <span className="text-sm leading-snug text-ink/85">{item}</span>
              </motion.li>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.2 }} className="neu-sm mt-8 p-4 font-mono text-[12px] leading-relaxed text-ink/85">
            <span className="text-plum">conclusão:</span> backend + bancos de dados + integrações = a base real da minha engenharia de dados.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
