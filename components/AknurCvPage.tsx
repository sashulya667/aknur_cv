import Head from 'next/head'

type Link = {
  label: string
  href: string
  icon: string
}

type TimelineItem = {
  period: string
  title: string
  organization: string
  location: string
  details?: string[]
  meta?: string[]
}

type Publication = {
  title: string
  authors: string
  venue: string
}

type SkillGroup = {
  label: string
  skills: string[]
}

const links: Link[] = [
  {
    label: 'Email',
    href: 'mailto:aknurkailiaeva@gmail.com',
    icon: 'https://img.icons8.com/fluency/48/000000/new-post.png',
  },
  
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aknurk/',
    icon: 'https://img.icons8.com/fluency/48/000000/linkedin.png',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aknurrk',
    icon: 'https://img.icons8.com/fluency/48/000000/github.png',
  },
]

const education: TimelineItem[] = [
  {
    period: 'Aug 2025 - May 2027',
    title: 'Master of Science in Statistics (Analytics)',
    organization: 'University of Illinois at Urbana-Champaign',
    location: 'Urbana, IL, USA',
    meta: ['GPA: 3.7 / 4.0'],
    details: [
      'Coursework: Statistical Modeling, Statistical Learning, Regression Analysis, Applied Bayesian Analysis, Time Series Analysis',
    ],
  },
  {
    period: 'Jun 2024',
    title: 'Bachelor of Science in Mathematics',
    organization: 'Nazarbayev University',
    location: 'Astana, Kazakhstan',
    meta: ['Magna Cum Laude Honors', 'GPA: 3.80 / 4.00', 'Top 2 / 93'],
    details: [
      'Coursework: Statistical Programming, Image Processing, Machine Learning, Linear Programming, Mathematical Statistics, Optimization, Probability, Actuarial Science 1 and 2 (Exam P, Exam FM), Microeconomics, Macroeconomics, Stochastics',
    ],
  },
]

const experience: TimelineItem[] = [
  {
    period: 'Aug 2025 - Present',
    title: 'Lead Technology Assistant',
    organization: 'ATLAS',
    location: 'Illinois, USA',
    details: [
      'Provided technical support to faculty members and students, resolving 5-10 tickets per day through clear verbal and written communication.',
    ],
  },
  {
    period: 'Aug 2022 - May 2025',
    title: 'Research Assistant',
    organization: 'Department of Mathematics',
    location: 'Astana, Kazakhstan',
    details: [
      'Designed and validated a three-parameter generalized logistic forecasting model for mortality data, reducing mean squared error by 15% versus standard logistic models.',
      'Developed hypergeometric-equation and Taylor-series based population models that turn raw demographic data into interpretable actuarial and demographic forecasts.',
    ],
  },
  {
    period: 'Jun 2023 - Jul 2023',
    title: 'Data Analyst',
    organization: 'Data Lab',
    location: 'Remote',
    details: [
      'Built a quarterly regression forecasting framework linking portfolio default rates to macroeconomic factors; unified heterogeneous time series, treated outliers, and achieved RMSE of 0.020-0.023.',
      'Developed classification models with stratified splits and class-imbalance handling to segment risk profiles and support more targeted business actions.',
      'Improved model discrimination versus baseline from ROC AUC 0.714 to 0.744 and PR-AUC 0.141 to 0.195, then optimized thresholds to boost minority-class recall to 0.24 at acceptable precision.',
    ],
  },
  {
    period: 'Jan 2020 - May 2022',
    title: 'Head of PR Department, Marketing Manager',
    organization: 'Society for Industrial and Applied Mathematics (SIAM)',
    location: 'Astana, Kazakhstan',
    details: [
      'Led marketing and PR for the student chapter, organizing and promoting 50+ mathematics-related events across social media channels.',
      'Created 35 consulting-style presentation materials in PowerPoint and Canva using charts, infographics, and clear visual narratives.',
      'Monitored social media engagement and increased event sign-ups by 65% by using analytics to guide content decisions.',
    ],
  },
]

const leadership: TimelineItem[] = [
  {
    period: 'Jan - Jun 2023',
    title: 'Teaching Assistant for Calculus and Probability',
    organization: 'Nazarbayev University',
    location: 'Astana, Kazakhstan',
    details: [
      'Led weekly office hours and facilitated monthly group study sessions, providing academic support to over 300 students.',
    ],
  },
  {
    period: 'Jan 2025',
    title: 'SUSI Global Leadership Workshop',
    organization: 'Study of the U.S. Institutes',
    location: 'Prague, Czechia',
    details: [
      "Explored strategies to amplify women's voices in STEM and education.",
    ],
  },
  {
    period: 'Jun - Jul 2022',
    title: 'Study of the U.S. Institutes, Green River College',
    organization: 'Women Leadership in STEM and Economic Empowerment',
    location: 'Washington, USA',
  },
]

const publications: Publication[] = [
  {
    title:
      'Investigation of Stereolithography Additively Manufactured Components for Deviations in Dimensional and Geometrical Features',
    authors:
      'A.K., D. Zhumashev, D. Wei, A. Perveen, and D. Talamona',
    venue: 'Polymers, 16(23), 3311, 2024',
  },
  {
    title:
      'Nonlinear Implicit Regression Fit of the Mortality Data by the Three Parameter Generalized Logistic Model',
    authors: 'A.K.',
    venue:
      'Capstone project, Nazarbayev University, 2024. Supervisors: Prof. Dongming Wei and Prof. Kerem Ugurlu',
  },
]

const skillGroups: SkillGroup[] = [
  {
    label: 'Programming',
    skills: ['Python', 'R', 'SQL', 'Matlab'],
  },
  {
    label: 'Python and R Libraries',
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'SciPy',
    ],
  },
  {
    label: 'Data Science',
    skills: [
      'Data Cleaning',
      'Data Mining',
      'Forecasting',
      'Regression',
      'Classification',
      'Experimental Design',
      'A/B Testing',
    ],
  },
  {
    label: 'Data Processing and BI',
    skills: ['ETL', 'Snowflake', 'MS Excel', 'Power BI', 'Tableau'],
  },
  {
    label: 'Development Tools',
    skills: ['Git', 'Jupyter Notebooks', 'Anaconda'],
  },
]

const awards = [
  'Presidential Scholarship, top 1%',
  'Skywalk of Fame, top 1%',
  'Konrad Adenauer Foundation Sur-Place Scholarship, top 5%',
  'Yessenov Scholarship, top 10%',
  'Alumni Relief Scholarship',
  'Mereke Scholarship',
]

const highlights = [
  { value: '3.7/4.0', label: 'UIUC Statistics GPA' },
  { value: 'Top 2/93', label: 'Mathematics cohort' },
  { value: '3+ Years', label: 'Forecasting and ML' },
  { value: '50+', label: 'SIAM events promoted' },
]

const SectionTitle = ({ children }: { children: string }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500" />
    <h2 className="text-2xl font-light text-slate-900">{children}</h2>
  </div>
)

const TimelineEntry = ({ item }: { item: TimelineItem }) => (
  <article className="relative rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div className="absolute left-0 top-6 h-10 w-1 rounded-r-full bg-gradient-to-b from-fuchsia-500 to-sky-500" />
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
        <h4 className="text-sm font-light text-slate-600">
          {item.organization}
          <span className="text-slate-400"> | {item.location}</span>
        </h4>
      </div>
      <p className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-700">
        {item.period}
      </p>
    </div>
      {item.meta && (
        <div className="mt-1 flex flex-wrap gap-2">
          {item.meta.map((detail) => (
            <span
              className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-light text-fuchsia-700"
              key={detail}
            >
              {detail}
            </span>
          ))}
        </div>
      )}
      {item.details && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-light leading-6 text-slate-600">
          {item.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
  </article>
)

const AknurCvPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#fce7f3,_transparent_32%),radial-gradient(circle_at_top_right,_#dbeafe,_transparent_30%),linear-gradient(135deg,_#fff7ed_0%,_#ffffff_45%,_#eef2ff_100%)] px-4 py-8 text-slate-900">
      <Head>
        <title>Aknur | Statistics and Data Science</title>
        <meta
          name="description"
          content="Aknur's professional CV website for statistics, analytics, research, and data science."
        />
        <link rel="shortcut icon" href="/ak-icon.ico?v=2" />
        <link rel="icon" href="/ak-icon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/ak-icon.png?v=2" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_1fr]">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/70">
            <div className="relative bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 px-7 pt-7 pb-20 text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 z-0 h-36 w-36 rounded-full bg-white/20" />
              <div className="pointer-events-none absolute -bottom-10 left-7 z-0 h-24 w-24 rounded-full bg-amber-300/35" />
              <h1 className="relative z-10 text-3xl font-light leading-tight">
                Aknur
              </h1>
              <p className="relative z-10 mt-3 text-sm font-light leading-6 text-white/90">
                Statistics (Analytics) graduate student passionate about
                forecasting, machine learning, and applied statistics.
              </p>
            </div>

            <div className="relative z-20 px-7 pb-7">
              <div className="-mt-16 flex justify-center">
                <img
                  alt="Aknur"
                  className="h-36 w-36 rounded-full border-[6px] border-white bg-white object-cover object-center shadow-2xl shadow-slate-400/30"
                  src="/images/aknur-kalilayeva.png"
                />
              </div>
              <div className="mt-5 text-center">
                <h2 className="text-lg font-medium text-slate-900">
                  M.S. Statistics (Analytics)
                </h2>
                <p className="mt-1 text-sm font-light text-slate-500">
                  University of Illinois at Urbana-Champaign
                </p>
              </div>

              <div className="mt-5 grid gap-3">
                {links.map((link) => (
                  <a
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-light text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    <img alt="" className="h-5 w-5" src={link.icon} />
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-200">
                  Focus Areas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    'Statistical Modeling',
                    'Forecasting',
                    'Risk Analytics',
                    'Machine Learning',
                    'BI Dashboards',
                  ].map((focus) => (
                    <span
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-light text-white"
                      key={focus}
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="space-y-8">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-fuchsia-600">
              Statistics | Analytics | Data Science
            </p>
            <h2 className="mt-4 text-4xl font-light leading-tight text-slate-950 md:text-5xl">
              Data, models, and decisions.
            </h2>
            <p className="mt-5 max-w-3xl text-base font-light leading-8 text-slate-600">
              My name is Aknur, and I am a{' '}
              <a
                className="font-medium text-sky-700 transition hover:text-fuchsia-600"
                href="https://stat.illinois.edu/academics/graduate-programs/ms-statistics-analytics"
                rel="noreferrer"
                target="_blank"
              >
                Statistics (Analytics)
              </a>{' '}
              graduate student passionate about turning data into{' '}
              <strong className="font-medium text-slate-800">
                clear models
              </strong>{' '}
              and informed decisions. I am currently pursuing an M.S. at the{' '}
              <a
                className="font-medium text-sky-700 transition hover:text-fuchsia-600"
                href="https://illinois.edu/"
                rel="noreferrer"
                target="_blank"
              >
                University of Illinois Urbana-Champaign
              </a>
              , with 3+ years of experience building{' '}
              <strong className="font-medium text-slate-800">
                forecasting and machine learning models
              </strong>{' '}
              across actuarial and credit-risk problems.
            </p>
            <p className="mt-4 max-w-3xl text-base font-light leading-8 text-slate-600">
              I have worked across research, analytics, and technical support:
              developing forecasting models, building{' '}
              <strong className="font-medium text-slate-800">
                credit-risk forecasting
              </strong>{' '}
              and classification frameworks, and supporting faculty and students
              through technical troubleshooting. I am especially interested in
              work where{' '}
              <a
                className="font-medium text-sky-700 transition hover:text-fuchsia-600"
                href="https://en.wikipedia.org/wiki/Applied_statistics"
                rel="noreferrer"
                target="_blank"
              >
                applied statistics
              </a>{' '}
              can inform planning, policy, or business decisions.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((highlight) => (
                <div
                  className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm ring-1 ring-slate-100"
                  key={highlight.label}
                >
                  <p className="bg-gradient-to-r from-fuchsia-600 to-sky-600 bg-clip-text text-2xl font-medium text-transparent">
                    {highlight.value}
                  </p>
                  <p className="mt-1 text-xs font-light uppercase tracking-wide text-slate-500">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-4">
              {education.map((item) => (
                <TimelineEntry
                  item={item}
                  key={`${item.title}-${item.period}`}
                />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <SectionTitle>Work and Research Experience</SectionTitle>
            <div className="space-y-4">
              {experience.map((item) => (
                <TimelineEntry
                  item={item}
                  key={`${item.title}-${item.period}`}
                />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <SectionTitle>Publications</SectionTitle>
            <div className="grid gap-4">
              {publications.map((publication) => (
                <article
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  key={publication.title}
                >
                  <h3 className="text-lg font-medium text-slate-900">
                    {publication.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-slate-500">
                    {publication.authors}
                  </p>
                  <p className="mt-1 text-sm font-light italic text-slate-500">
                    {publication.venue}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <SectionTitle>Skills</SectionTitle>
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  key={group.label}
                >
                  <h3 className="pb-3 text-sm font-medium uppercase tracking-wide text-slate-700">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        className="rounded-full bg-gradient-to-r from-sky-50 to-fuchsia-50 px-3 py-1 text-xs font-light text-slate-600 ring-1 ring-slate-100"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <SectionTitle>Leadership</SectionTitle>
            <div className="space-y-4">
              {leadership.map((item) => (
                <TimelineEntry
                  item={item}
                  key={`${item.title}-${item.period}`}
                />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:p-8">
            <SectionTitle>Awards and Scholarships</SectionTitle>
            <div className="flex flex-wrap gap-3">
              {awards.map((award) => (
                <span
                  className="rounded-full bg-white px-4 py-2 text-sm font-light text-slate-600 shadow-sm ring-1 ring-slate-100"
                  key={award}
                >
                  {award}
                </span>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default AknurCvPage
