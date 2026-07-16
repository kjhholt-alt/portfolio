import Link from "next/link";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18">
      <path d="M3 15 15 3M7 3h8v8" />
    </svg>
  );
}

function SectionFolio({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-folio">
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
}

function FieldNote() {
  return (
    <aside className="field-note reveal" aria-label="Current field note: Orbit">
      <header className="field-note__header">
        <div>
          <span>Orbit / Field note 01</span>
          <strong>Calm control room</strong>
        </div>
        <p>IN ACTIVE DEVELOPMENT</p>
      </header>

      <div className="field-note__artifact" role="img" aria-label="Orbit watchstander decision surface">
        <div className="artifact-topbar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>BUILDKIT / ORBIT / PRODUCT STUDY</span>
          <b>FIG. 01</b>
        </div>
        <div className="artifact-body" aria-hidden="true">
          <aside className="artifact-rail">
            <span className="is-active" />
            <span />
            <span />
            <span />
          </aside>
          <div className="artifact-main">
            <p>WATCHSTANDER / LIVE</p>
            <h2>Watchstander</h2>
            <div className="artifact-metrics">
              <span><b>03</b>healthy</span>
              <span><b>01</b>review</span>
              <span><b>14</b>receipts</span>
            </div>
            <div className="artifact-decision">
              <i />
              <span><small>Decision required</small>Approve dependency update</span>
              <b>Review</b>
            </div>
            <div className="artifact-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>

      <div className="field-note__caption">
        <span>Observation 01</span>
        <p>One watchstander brief across every active agent. One consequential decision at a time.</p>
      </div>
      <footer>
        <span>Verified surface</span>
        <span>Design · systems · implementation</span>
      </footer>
    </aside>
  );
}

function OrbitVisual() {
  return (
    <div className="case-visual orbit-visual" role="img" aria-label="Orbit watchstander interface study">
      <div aria-hidden="true">
        <div className="visual-chrome">
          <span><i /><i /><i /></span>
          <b>BuildKit / Orbit / product study</b>
          <em>Fig. 01</em>
        </div>
        <div className="orbit-ui">
          <nav>
            <strong>OR</strong>
            <i className="on" /><i /><i /><i />
            <span>KH</span>
          </nav>
          <div className="orbit-main">
            <small>WATCHSTANDER / LIVE</small>
            <h4>Watchstander</h4>
            <p>One brief across every active agent.</p>
            <div className="orbit-summary">
              <span><b>03</b>healthy</span>
              <span><b>01</b>review</span>
              <span><b>14</b>receipts</span>
            </div>
            <div className="orbit-call">
              <i />
              <span>
                <small>DECISION REQUIRED</small>
                <strong>Approve dependency update</strong>
                <em>Verification complete · now</em>
              </span>
              <button type="button" tabIndex={-1}>Review evidence</button>
            </div>
            <div className="orbit-table">
              <span>WORKCELL</span><span>PHASE</span><span>PROOF</span><span>UPDATED</span>
              <b>CODEX / UI</b><i>Building</i><em>12 / 12</em><small>12m</small>
              <b>CLAUDE / API</b><i>Healthy</i><em>08 / 08</em><small>08m</small>
            </div>
          </div>
          <aside>
            <span>DECISION 01</span>
            <h5>One human intervention.</h5>
            <p>The rest of the fleet is moving without you.</p>
            <button type="button" tabIndex={-1}>Open receipt <b>↗</b></button>
            <div>
              <small>LAST VERIFIED / 04:18</small>
              <svg viewBox="0 0 180 40"><path d="M0 29 24 28 39 31 57 20 74 23 91 13 108 17 129 9 148 15 180 6" /></svg>
            </div>
          </aside>
        </div>
        <p className="visual-caption"><span>FIG. 01 / VERIFIED SURFACE</span><b>Control room / decision surface</b></p>
      </div>
    </div>
  );
}

function BuildForgeVisual() {
  return (
    <div className="case-visual forge-visual" role="img" aria-label="BuildForge leveling path product study">
      <div aria-hidden="true">
        <div className="forge-masthead"><span>BUILDFORGE / POE2</span><b>BUILD FILE READY</b></div>
        <div className="forge-title">
          <div><small>LEVELING PATH</small><strong>Stormweaver · Spark</strong></div>
          <p>84 points <span>·</span> 3 transitions <span>·</span> ready to share</p>
        </div>
        <div className="forge-track"><i className="done">1</i><span /><i className="done">2</i><span /><i className="active">3</i><span /><i>4</i><span /><i>5</i></div>
        <div className="forge-cards">
          <article><span>ACT 1</span><strong>Level 12</strong><p>Early spell damage and mana sustain.</p><small>12 points · complete</small></article>
          <article className="is-current"><span>ACT 2</span><strong>Level 28</strong><p>Swap supports when Arcane Tempo arrives.</p><small>16 points · current</small></article>
          <article><span>ENDGAME</span><strong>Level 72</strong><p>Transition into the final critical tree.</p><small>34 points · planned</small></article>
        </div>
        <footer><span><i />.build ready</span><button type="button" tabIndex={-1}>Copy share link <b>↗</b></button></footer>
        <p className="visual-caption"><span>FIG. 02 / VERIFIED SURFACE</span><b>Leveling path / export proof</b></p>
      </div>
    </div>
  );
}

function DealsVisual() {
  const deals = [
    ["01", "ROLE-PLAYING", "One long night", "Editor’s pick"],
    ["02", "STRATEGY", "Under twenty", "Best value"],
    ["03", "CO-OP", "Bring a friend", "Trending"],
    ["04", "INDIE", "The hidden one", "Worth a look"],
  ];

  return (
    <div className="case-visual deals-visual" role="img" aria-label="GambaTime curated game deals product study">
      <div aria-hidden="true">
        <header>
          <div><small>GAMBATIME / EDITOR&apos;S DESK</small><strong>Tonight’s short list</strong></div>
          <span>08 CURATED GAMES</span>
        </header>
        <div className="deals-list">
          {deals.map(([number, category, title, note]) => (
            <article key={number}>
              <i>{number}</i>
              <span><small>{category}</small><strong>{title}</strong></span>
              <em>{note}</em>
              <b>↗</b>
            </article>
          ))}
        </div>
        <footer><p><span />PRICES CHECKED RECENTLY</p><button type="button" tabIndex={-1}>See every deal <b>→</b></button></footer>
        <p className="visual-caption"><span>FIG. 03 / VERIFIED SURFACE</span><b>Owned discovery / conversion path</b></p>
      </div>
    </div>
  );
}

const methods = [
  ["01", "QUESTION", "Find the real constraint.", "Strip the request down to the decision, bottleneck, or repeated pain that actually matters.", "Clarify before scope."],
  ["02", "SHAPE", "Make the shape visible.", "Prototype the full workflow until the consequential parts become the right kind of obvious.", "Abstraction follows proof."],
  ["03", "BUILD", "Build the narrowest useful thing.", "Choose architecture around the proof path and the operator—not around imaginary scale.", "Delight follows trust."],
  ["04", "PROVE", "Prove it in the real world.", "Ship the credible release, watch the signals, and use evidence for the next move.", "Reality writes the roadmap."],
];

const principles = [
  ["01", "Small surfaces, deep care.", "A focused product earns more trust than a crowded roadmap."],
  ["02", "Calm is functional.", "Restraint helps the consequential thing arrive with weight."],
  ["03", "Proof is a feature.", "A result should be inspectable, not merely announced."],
];

export default function HomePage() {
  return (
    <div id="top" className="field-journal-home">
      <section className="hero shell">
        <aside className="margin-note hero-margin reveal">
          <p className="folio">FJ / 001</p>
          <div className="margin-rule" />
          <p>Chicago, Illinois<br />Working worldwide</p>
          <p className="margin-note__bottom">Product direction<br />Interface systems<br />Implementation</p>
        </aside>

        <div className="hero-statement reveal">
          <p className="overline"><span />From rough brief to working product</p>
          <h1>I turn complicated ideas into <em>software people can trust.</em></h1>
          <p className="hero-lede">I design and build focused web products, AI systems, and internal tools end to end—keeping the strategy, interface, code, and proof in one pair of hands.</p>
          <div className="hero-actions">
            <Link className="button button--primary" href="#work"><span>Explore selected work</span><ArrowIcon /></Link>
            <Link className="text-link" href="#method">How I work <span>↓</span></Link>
          </div>
        </div>

        <FieldNote />
      </section>

      <section className="proof-ribbon shell reveal" aria-label="Practice summary">
        <p><span>Practice</span>Independent. Trusted end to end.</p>
        <p><span>Mode</span>AI systems and products working.</p>
        <p><span>Standard</span>Useful, legible, verified.</p>
        <p className="proof-ribbon__thesis">Proof over theatre.</p>
      </section>

      <section className="work-section shell" id="work">
        <header className="section-intro reveal">
          <SectionFolio number="01" label="Selected work" />
          <h2>A small collection of <em>specific answers.</em></h2>
          <p>Each build starts with a real constraint and ends with a working surface. The technology matters; the judgment matters more.</p>
        </header>

        <div className="work-index reveal" aria-label="Selected projects">
          <span>Case</span><span>Project</span><span>Discipline</span><span>State</span>
        </div>

        <article className="case-study case-study--orbit reveal">
          <div className="case-copy">
            <header className="case-meta"><span>CASE 01 / AI OPERATIONS</span><span>Native AI application</span><i>Live system</i></header>
            <h3>Orbit</h3>
            <p className="case-thesis">A calm control room for watching, steering, and verifying fleets of AI coding agents.</p>
            <p className="case-body">Orbit translates consequential signals into one legible watchstander brief without burying the operator in telemetry.</p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>Product direction · interface system · implementation</dd></div>
              <div><dt>Proof</dt><dd>Released workflows · reviewable decisions</dd></div>
            </dl>
            <Link className="case-link" href="#contact"><span>Open the field journal</span><ArrowIcon /></Link>
          </div>
          <OrbitVisual />
        </article>

        <article className="case-study case-study--forge reveal">
          <div className="case-copy">
            <header className="case-meta"><span>CASE 02 / CREATOR TOOLING</span><span>Browser utility</span><i>Ship-ready</i></header>
            <h3>BuildForge</h3>
            <p className="case-thesis">A Path of Exile 2 build export becomes a clean, level-ordered guide in seconds.</p>
            <p className="case-body">Paste an existing Path of Building 2 export. Get the useful decisions back: leveling path, swap thresholds, and a build worth sharing.</p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>Product strategy · interaction design</dd></div>
              <div><dt>Proof</dt><dd>Creator workflow · patch-day ready</dd></div>
            </dl>
            <a className="case-link" href="https://buildforge.buildkit.store" target="_blank" rel="noreferrer"><span>Open the live product</span><ArrowIcon /></a>
          </div>
          <BuildForgeVisual />
        </article>

        <article className="case-study case-study--deals reveal">
          <div className="case-copy">
            <header className="case-meta"><span>CASE 03 / AUDIENCE PRODUCT</span><span>Owned discovery surface</span><i>Live signal</i></header>
            <h3>GambaTime</h3>
            <p className="case-thesis">Deals built as a fast, owned game-discovery path around an audience that already exists.</p>
            <p className="case-body">A calm shortlist turns scattered attention into a measurable affiliate surface without burying the front-end experience under clutter.</p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>Product direction · editorial system</dd></div>
              <div><dt>Proof</dt><dd>Market signal · owned channel</dd></div>
            </dl>
            <Link className="case-link" href="/deals"><span>Browse the live hub</span><ArrowIcon /></Link>
          </div>
          <DealsVisual />
        </article>
      </section>

      <section className="method-section shell" id="method">
        <header className="section-intro section-intro--compact reveal">
          <SectionFolio number="02" label="Working method" />
          <h2>One continuous line from <em>question to proof.</em></h2>
          <p>Strategy, interface, implementation, and verification stay connected. That keeps a small build from turning into an expensive chain of handoffs.</p>
        </header>

        <ol className="method-ledger reveal">
          {methods.map(([number, eyebrow, title, body, aside]) => (
            <li key={number}>
              <span className="method-number">{number}</span>
              <div><small>{eyebrow}</small><strong>{title}</strong><p>{body}</p></div>
              <em>{aside}</em>
            </li>
          ))}
        </ol>

        <div className="principles reveal">
          <p className="folio">OPERATING NOTES / 04</p>
          <blockquote>“The interface is not decoration applied after the system works. It is where the system becomes understandable.”</blockquote>
          <div className="principle-grid">
            {principles.map(([number, title, body]) => (
              <p key={number}><span>{number}</span><strong>{title}</strong>{body}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <aside className="margin-note about-margin reveal">
          <p className="folio">FJ / 004</p>
          <div className="margin-rule" />
          <p>Builder’s note<br />Written in Chicago</p>
        </aside>
        <div className="about-heading reveal">
          <p className="overline"><span />About the practice</p>
          <h2>I care about the part between <em>“great idea”</em> and <em>“people use it.”</em></h2>
        </div>
        <div className="about-copy reveal">
          <p>I’m Kruz Holt, an independent builder working across product direction, interface design, AI systems, and full-stack implementation.</p>
          <p>I’m most useful while a problem is still messy, the surface matters, and there is no honest seam between “design” and “engineering.” I stay with the work from the first ugly brief through deployment, proof, and the next decision.</p>
          <div className="capabilities" aria-label="Capabilities">
            <span>Product direction</span><span>Interface systems</span><span>AI workflows</span><span>Full-stack delivery</span><span>Verification</span><span>Launch support</span>
          </div>
        </div>
        <div className="about-figures reveal">
          <p><strong>11+</strong><span>products and systems shaped</span></p>
          <p><strong>01</strong><span>builder from first brief to proof</span></p>
          <p><strong>03</strong><span>core lanes: AI, web, tooling</span></p>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <p className="folio reveal">04 / START A BUILD</p>
        <div className="contact-grid">
          <div className="contact-heading reveal"><h2>Bring the messy version.<br /><em>We’ll find the useful one.</em></h2></div>
          <div className="contact-copy reveal">
            <p>Tell me what you are trying to change, what keeps getting in the way, and what a real win would look like.</p>
            <a className="button button--primary button--large" href="mailto:kjh.holt@gmail.com"><span>kjh.holt@gmail.com</span><ArrowIcon /></a>
            <a className="text-link" href="https://github.com/kjhholt-alt" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="contact-note reveal">
          <span className="availability-dot" />
          <p>Available for a small number of focused builds and product partnerships.</p>
          <b>Chicago · Central Time</b>
        </div>
      </section>
    </div>
  );
}
