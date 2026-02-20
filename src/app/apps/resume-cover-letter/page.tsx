import Link from "next/link";

export default function ResumeCoverLetterAppPage() {
  return (
    <main className="section-padding">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <p className="section-label mb-2">{"// "}Resume & Cover Letter Generator</p>
          <h1 className="text-3xl font-bold">Resume & Cover Letter App</h1>
          <p className="text-muted mt-2">
            Use the hosted app or run it locally. Data stays on your machine when
            you run it locally.
          </p>
        </div>

        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">Hosted App</h2>
          <p className="text-sm text-muted">
            The hosted version is password protected and lives at
            <code>resume.buildkit.store</code>.
          </p>
        </div>

        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">Run Locally</h2>
          <pre className="code-block">
{`git clone https://github.com/kjhholt-alt/job-applications.git
cd job-applications
pip install -r requirements.txt
streamlit run app.py`}
          </pre>
          <p className="text-sm text-muted">
            Add job descriptions to <code>jobs/inbox/</code> and run ingest to build
            matches.
          </p>
        </div>

        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">What You Get</h2>
          <ul className="text-sm text-muted space-y-2">
            <li>Job matcher with Claude-powered fingerprints</li>
            <li>One-click resume + cover letter drafts per role</li>
            <li>All data stored locally on your machine</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link className="btn-primary" href="https://resume.buildkit.store">
            Open App
          </Link>
          <Link className="btn-outline" href="https://github.com/kjhholt-alt/job-applications">
            View on GitHub
          </Link>
          <Link className="btn-outline" href="/projects">
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
