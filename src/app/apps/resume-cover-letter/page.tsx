import Link from "next/link";

export default function ResumeCoverLetterAppPage() {
  return (
    <main className="section-padding">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <p className="section-label mb-2">{"// "}Resume & Cover Letter Generator</p>
          <h1 className="text-3xl font-bold">Run The App Locally</h1>
          <p className="text-muted mt-2">
            This app runs as a local Streamlit project. It keeps your resumes and
            job data on your machine.
          </p>
        </div>

        <div className="card space-y-3">
          <h2 className="text-xl font-semibold">Quick Start</h2>
          <pre className="code-block">
{`cd C:\\Users\\Kruz\\Desktop\\Projects\\job-applications
pip install -r requirements.txt
streamlit run app.py`}
          </pre>
          <p className="text-sm text-muted">
            Add job descriptions to <code>jobs/inbox/</code> and run ingest to build
            matches.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link className="btn-primary" href="https://github.com/kjhholt-alt/job-applications">
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
