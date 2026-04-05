import SideHUD from "@/components/SideHUD";

export const metadata = {
  title: "Quest Log | ANKIT.DEV",
  description: "Explore Ankit Belvanshi's ML & NLP projects — RAG Denoising, Suicide Risk Classification, and LexiSense semantic search.",
};

const PROJECTS = [
  {
    title: "THE RAG DENOISING FORGE",
    difficulty: "Legendary",
    reward: "+1000 XP (Thesis in Progress)",
    description: "Building a lightweight denoising model as a pre-processing layer to make RAG systems robust against typos and OCR errors. Designing a comprehensive benchmark to evaluate real-world resilience. Master's Thesis — Ongoing.",
    icons: ["neurology", "auto_fix_high"],
    techStack: ["Python", "RAG", "LLMs", "NLP"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDckIGAwFzCBwRQbKdvRsLQj_L_Sf_hMNhwNjt1mVozDigjyo0-La9ZrZZfbzFKnOzSXpFXFrztBzrJ2mzf3loIwxvxEU3YdYRSeWau9zi7AgcbJsTnZH1TU-Dl1m69fJbNG6poTFhXZowccaZhrncfWXdWPmblptHgjRVe49Sy1G6wf-XqKB_ogQGr6HqeAh0itJNptQJuJe-qHOWxeBV44MNldHN3VKpQn8L5rXonVfD0TpAwmYdPncecBAfi_KPXgfWzNyu-_W0",
    bgClass: "bg-primary-container",
    link: "https://github.com/AnkitBelvanshi",
    badge: "⚔️ MASTER'S THESIS",
  },
  {
    title: "THE SUICIDE RISK CLASSIFIER",
    difficulty: "Hardcore",
    reward: "+800 XP | New Skill: LLM Fine-tuning",
    description: "Hybrid ensemble of ML models (Logistic Regression, SVM, Random Forest, XGBoost) + LLMs (Llama2/3) for suicide risk detection from social media text. Achieved 95% accuracy.",
    icons: ["psychology", "monitoring"],
    techStack: ["Python", "Scikit-learn", "XGBoost", "PyTorch", "HuggingFace", "Llama3", "T5"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCii38d29UaOVJauB-nEGKpg_TkOxljolaEPQAGKTNsydzqHYVu0HWc1hMat1Mw7asNg63xJrRgFW_I8lO64ZOfS1n4Va-DDYI7N1gh6hgV-eHALzbOqkaFYtfvbuxe7coUruterpg0yN7W5s8O-qvpLqycPwyejNBAha6d-28e7r7nk0IHX5wHUUX4ZbmKOWIqL9qA27yZNjHm7QOccmWnNjT37PHKViT4S6uOyj7y4EqSZXT3RXD1tsa_oAXvqmPh1e-IuF8UV2Q",
    bgClass: "bg-tertiary-container",
    link: "https://github.com/AnkitBelvanshi",
    badge: "95% ACCURACY",
  },
  {
    title: "LEXISENSE — THE BOOK ORACLE",
    difficulty: "Survival",
    reward: "+500 XP | New Asset: Semantic Search",
    description: "Semantic book recommendation engine using Sentence Transformer embeddings, LangChain, and ChromaDB. Gradio dashboard with Zero-Shot Classification and Sentiment Analysis.",
    icons: ["auto_stories", "search"],
    techStack: ["Python", "NumPy", "Pandas", "Sentence Transformer", "ChromaDB"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCemDAkPTtJhl2dDtixF1ZzDgaiyrIL88R9eqN0DeZR7DHmmRLgcNeqWIMGL1Ir4cnP8wYZpfddEhKKrja8gXq8obo3Va59JJ5m1g3ycklw782TprpkT8Rblph5ktCPlN6DEMu3q9LGaysGx-WJvFES3hkL72OGDidWIdbGBkKaGBFT2bzv4v-9bl7e9CGq-Abt1i2t0Ub38yRWAKWqboy6ec0Wg8dah_6Smeh7mQdLGdMVF8ATQ01xqhndZay2XLVODNNlEBuhBh0",
    bgClass: "bg-secondary-container",
    link: "https://github.com/AnkitBelvanshi",
    badge: null,
  },
];

const CERTIFICATIONS = [
  { name: "Machine Learning", issuer: "Coursera", icon: "⚔️", color: "bg-primary-container", borderColor: "border-on-primary-fixed-variant" },
  { name: "Full Stack Development", issuer: "GeeksForGeeks", icon: "🛡️", color: "bg-tertiary-container", borderColor: "border-on-tertiary-fixed-variant" },
  { name: "OCI 2025 AI Foundations", issuer: "Oracle", icon: "☁️", color: "bg-secondary-container", borderColor: "border-on-secondary-fixed-variant" },
];

export default function ProjectsPage() {
  return (
    <>
      <SideHUD />
      <div className="pt-24 pb-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="font-headline text-5xl font-black uppercase tracking-tighter text-stone-900 mb-2">
              QUEST LOG: ML & NLP DEPLOYMENTS
            </h1>
            <div className="h-2 w-48 bg-primary" />
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {project.badge && (
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 font-headline font-bold text-[10px] uppercase">
                      {project.badge}
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-extrabold text-xl uppercase leading-none">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-label text-xs font-bold text-primary-container bg-primary-container/10 px-2 py-1 self-start">
                    {project.reward}
                  </span>
                  <div className="bg-white/60 backdrop-blur-md p-4 border-2 border-stone-200">
                    <p className="font-body text-sm text-stone-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="bg-surface-dim text-on-surface-variant px-2 py-0.5 text-[10px] font-headline font-bold uppercase">
                        {tech}
                      </span>
                    ))}
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

          {/* Certifications Section */}
          <div className="mt-16">
            <h2 className="font-headline text-3xl font-black uppercase tracking-tighter text-stone-900 mb-2">
              ACHIEVEMENT BADGES
            </h2>
            <div className="h-2 w-32 bg-secondary mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className={`${cert.color} p-6 border-b-4 border-r-4 ${cert.borderColor} flex items-center gap-4 hover:-translate-y-1 transition-transform duration-100`}
                >
                  <div className="w-14 h-14 bg-white/20 flex items-center justify-center text-3xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-sm uppercase text-white">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-medium text-white/80">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
