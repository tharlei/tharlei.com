import { useApp } from '../../context/AppContext';
import { MARQUEE_KEYS } from '../../data/tech';
import { TechChip } from '../common/TechChip';

const SHUFFLED = [...MARQUEE_KEYS];
for (let i = SHUFFLED.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [SHUFFLED[i], SHUFFLED[j]] = [SHUFFLED[j], SHUFFLED[i]];
}
const MID = Math.ceil(SHUFFLED.length / 2);
const ROW_A = SHUFFLED.slice(0, MID);
const ROW_B = SHUFFLED.slice(MID);
const DUP_A = [...ROW_A, ...ROW_A];
const DUP_B = [...ROW_B, ...ROW_B];

export function TechSection() {
  const { t } = useApp();
  return (
    <section className="tech">
      <div className="container">
        <div className="tech__head">
          <p className="tech__eyebrow">{t.techEyebrow}</p>
          <h2 className="tech__title">{t.techTitle}</h2>
          <p className="tech__subtitle">{t.techSubtitle}</p>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {DUP_A.map((k, i) => (
            <TechChip key={`a-${i}`} techKey={k} />
          ))}
        </div>
      </div>
      <div className="marquee marquee--reverse" style={{ marginTop: 6 }}>
        <div className="marquee__track">
          {DUP_B.map((k, i) => (
            <TechChip key={`b-${i}`} techKey={k} />
          ))}
        </div>
      </div>
    </section>
  );
}
