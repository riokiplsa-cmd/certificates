export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Certificate Details
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Certificate IV in Youth Work
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Certificate details and qualification information issued to
            Patricia Wambui Kasivu by Luvium Pty Ltd.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Info label="Student Name" value="Patricia Wambui Kasivu" />

            <Info label="Qualification Code" value="CHC40421" />

            <Info
              label="Qualification"
              value="Certificate IV in Youth Work"
            />

            <Info label="Training Provider" value="Luvium Pty Ltd" />

            <Info label="National Provider Number" value="52865" />

            <Info label="Certificate Number" value="Q 7747/595" />

            <Info label="Date of Issue" value="1st of March 2024" />
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-lg font-semibold text-slate-950">
              Certificate Document
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              View the official certificate and Record of Results document.
            </p>

            <a
              href="/certificates/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              View Certificate PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-1 font-semibold text-slate-950">{value}</p>
    </div>
  );
}