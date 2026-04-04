import SideHUD from "@/components/SideHUD";

export const metadata = {
  title: "Quest Log | ANKIT.DEV",
  description: "Explore Ankit Belvanshi's data science projects — ML pipelines, analytics dashboards, data warehouses, and NLP toolkits.",
};

const PROJECTS = [
  {
    title: "THE ML PIPELINE FORGE",
    difficulty: "Hardcore",
    reward: "+800 XP",
    description: "An end-to-end machine learning pipeline built with Python, Apache Airflow, and TensorFlow. Automates data ingestion, feature engineering, model training, and deployment with CI/CD integration.",
    icons: ["terminal", "memory"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckIGAwFzCBwRQbKdvRsLQj_L_Sf_hMNhwNjt1mVozDigjyo0-La9ZrZZfbzFKnOzSXpFXFrztBzrJ2mzf3loIwxvxEU3YdYRSeWau9zi7AgcbJsTnZH1TU-Dl1m69fJbNG6poTFhXZowccaZhrncfWXdWPmblptHgjRVe49Sy1G6wf-XqKB_ogQGr6HqeAh0itJNptQJuJe-qHOWxeBV44MNldHN3VKpQn8L5rXonVfD0TpAwmYdPncecBAfi_KPXgfWzNyu-_W0",
    bgClass: "bg-primary-container",
    link: "https://github.com/ankitbelvanshi",
  },
  {
    title: "THE ANALYTICS DASHBOARD",
    difficulty: "Survival",
    reward: "New Skill: D3.js",
    description: "A real-time analytics dashboard built with React and D3.js for visualizing complex datasets. Features interactive charts, drill-down capabilities, and WebSocket-powered live data streaming.",
    icons: ["view_quilt", "bar_chart"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCii38d29UaOVJauB-nEGKpg_TkOxljolaEPQAGKTNsydzqHYVu0HWc1hMat1Mw7asNg63xJrRgFW_I8lO64ZOfS1n4Va-DDYI7N1gh6hgV-eHALzbOqkaFYtfvbuxe7coUruterpg0yN7W5s8O-qvpLqycPwyejNBAha6d-28e7r7nk0IHX5wHUUX4ZbmKOWIqL9qA27yZNjHm7QOccmWnNjT37PHKViT4S6uOyj7y4EqSZXT3RXD1tsa_oAXvqmPh1e-IuF8UV2Q",
    bgClass: "bg-tertiary-container",
    link: "https://github.com/ankitbelvanshi",
  },
  {
    title: "THE DATA CAVERN",
    difficulty: "Creative",
    reward: "+500 XP",
    description: "A scalable data warehouse solution using PostgreSQL and Apache Spark for processing millions of records. Implements star-schema design with optimized ETL pipelines.",
    icons: ["database", "bolt"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCemDAkPTtJhl2dDtixF1ZzDgaiyrIL88R9eqN0DeZR7DHmmRLgcNeqWIMGL1Ir4cnP8wYZpfddEhKKrja8gXq8obo3Va59JJ5m1g3ycklw782TprpkT8Rblph5ktCPlN6DEMu3q9LGaysGx-WJvFES3hkL72OGDidWIdbGBkKaGBFT2bzv4v-9bl7e9CGq-Abt1i2t0Ub38yRWAKWqboy6ec0Wg8dah_6Smeh7mQdLGdMVF8ATQ01xqhndZay2XLVODNNlEBuhBh0",
    bgClass: "bg-secondary-container",
    link: "https://github.com/ankitbelvanshi",
  },
  {
    title: "THE NLP SANCTUM",
    difficulty: "Survival",
    reward: "New Asset Pack",
    description: "A natural language processing toolkit leveraging transformers and BERT for sentiment analysis, text classification, and named entity recognition on large-scale text corpora.",
    icons: ["code", "psychology"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ex5vHtUcjZeXXYuSD84Qeqdzlwzhg2onGITuHPhI-K0WgMfvUR2lsqOJrgOfHuII3h7f7FPEtjoJLgB9O6DzKaFK0CtbWLiOovtq_lxrBFH6Nc2pFokgfQLSKxv8_4YMQwDEP7sh-ROZrOp_biDixQUXvYcLTMATQBAGPe4EbPz2UrY78lKpgN2sbN1Mp-9qx8_sTB34Q4Is7Z6TAB5fy8b1EoTrfZroXVGRwkqpROQ0zvM9o8vpFkwShWOhUy73jmkyIRGA4lk",
    bgClass: "bg-stone-300",
    link: "https://github.com/ankitbelvanshi",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SideHUD />
      <div className="lg:ml-64 pt-24 pb-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="font-headline text-5xl font-black uppercase tracking-tighter text-stone-900 mb-2">
              QUEST LOG: DATA SCIENCE DEPLOYMENTS
            </h1>
            <div className="h-2 w-48 bg-primary" />
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="bg-surface-container-lowest border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(26,28,28,1)] flex flex-col hover:-translate-y-1 transition-transform duration-100"
              >
                {/* Image */}
                <div className={`h-48 ${project.bgClass} relative overflow-hidden border-b-4 border-stone-800`}>
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover contrast-125 saturate-150"
                    src={project.image}
                  />
                  <div className="absolute top-4 right-4 bg-stone-900 text-white px-3 py-1 font-headline font-bold text-xs uppercase">
                    Difficulty: {project.difficulty}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-extrabold text-2xl uppercase leading-none">
                      {project.title}
                    </h3>
                    <span className="font-label text-xs font-bold text-primary-container bg-primary-container/10 px-2 py-1 shrink-0">
                      {project.reward}
                    </span>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md p-4 border-2 border-stone-200">
                    <p className="font-body text-sm text-stone-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.icons.map((icon) => (
                        <span key={icon} className="material-symbols-outlined text-tertiary">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="voxel-button-shadow bg-stone-700 text-white font-headline font-bold uppercase px-6 py-2 border-2 border-stone-800 transition-all duration-100"
                    >
                      START QUEST
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
