"use client";

import { useState } from "react";

const SKILLS = [
  {
    name: "Python",
    level: 95,
    status: "MASTERED",
    icon: "code",
    iconBg: "bg-yellow-400",
    iconBorder: "border-yellow-700",
    iconTextColor: "text-black",
    description: "The foundational language of ML and data science. Grants the wielder mastery over data manipulation, machine learning models, transformers, and automation scripts. Highly effective against unstructured data.",
    rarity: "Legendary Artifact",
    attributes: [
      { name: "ML Integration", value: 95 },
      { name: "LLM & Transformers", value: 90 },
      { name: "Data Processing (NumPy/Pandas)", value: 88 },
    ],
  },
  {
    name: "PyTorch",
    level: 85,
    status: "EXPERT",
    icon: "local_fire_department",
    iconBg: "bg-orange-600",
    iconBorder: "border-orange-900",
    iconTextColor: "text-white",
    description: "A powerful deep learning framework. Enables the creation of custom neural architectures, transformer models, and advanced research experiments with dynamic computation graphs.",
    rarity: "Epic Artifact",
    attributes: [
      { name: "Neural Networks", value: 88 },
      { name: "Custom Training Loops", value: 85 },
      { name: "Model Optimization", value: 80 },
    ],
  },
  {
    name: "HuggingFace",
    level: 82,
    status: "EXPERT",
    icon: "smart_toy",
    iconBg: "bg-[#FFD21E]",
    iconBorder: "border-[#b8960f]",
    iconTextColor: "text-black",
    description: "The premier hub for transformer models. Provides pretrained LLMs, tokenizers, and pipelines for NLP tasks including text classification, NER, and generative AI.",
    rarity: "Epic Artifact",
    attributes: [
      { name: "Transformers API", value: 85 },
      { name: "Fine-tuning", value: 82 },
      { name: "Pipeline Integration", value: 80 },
    ],
  },
  {
    name: "React.js",
    level: 75,
    status: "ADVANCED",
    icon: "deployed_code",
    iconBg: "bg-blue-500",
    iconBorder: "border-blue-800",
    iconTextColor: "text-white",
    description: "A component-based UI framework. Crafts dynamic user interfaces with reusable building blocks, hooks, and state management patterns.",
    rarity: "Rare Artifact",
    attributes: [
      { name: "Component Design", value: 78 },
      { name: "State Management", value: 72 },
      { name: "UI Architecture", value: 75 },
    ],
  },
  {
    name: "SQL",
    level: 78,
    status: "EXPERT",
    icon: "database",
    iconBg: "bg-tertiary",
    iconBorder: "border-[#003848]",
    iconTextColor: "text-white",
    description: "A robust query language for relational databases. Manages structured data with advanced querying, indexing, joins, and transaction support across PostgreSQL and MySQL.",
    rarity: "Epic Artifact",
    attributes: [
      { name: "Query Optimization", value: 80 },
      { name: "Schema Design", value: 78 },
      { name: "Data Integrity", value: 76 },
    ],
  },
  {
    name: "Google Cloud",
    level: 65,
    status: "LEVEL UP READY",
    icon: "cloud",
    iconBg: "bg-blue-400",
    iconBorder: "border-blue-700",
    iconTextColor: "text-white",
    description: "Cloud infrastructure mastery. Deploys and scales ML models and applications using Vertex AI, BigQuery, and managed Kubernetes.",
    rarity: "Uncommon Artifact",
    attributes: [
      { name: "Vertex AI", value: 68 },
      { name: "BigQuery", value: 65 },
      { name: "Cloud Functions", value: 60 },
    ],
  },
];

const SECONDARY_SKILLS = [
  { name: "C++", level: 70, status: "ADVANCED", icon: "terminal", iconBg: "bg-indigo-600", iconBorder: "border-indigo-900", iconTextColor: "text-white" },
  { name: "Node.js", level: 72, status: "ADVANCED", icon: "javascript", iconBg: "bg-green-600", iconBorder: "border-green-900", iconTextColor: "text-white" },
  { name: "NLTK/NLP", level: 80, status: "EXPERT", icon: "translate", iconBg: "bg-purple-500", iconBorder: "border-purple-800", iconTextColor: "text-white" },
  { name: "Keras", level: 75, status: "ADVANCED", icon: "layers", iconBg: "bg-red-500", iconBorder: "border-red-800", iconTextColor: "text-white" },
];

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  return (
    <div className="pt-24 px-4 md:px-8 pb-12 min-h-screen max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="font-headline text-5xl font-black text-on-surface uppercase tracking-tight mb-2">
          Skill Inventory
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl">
          Equip and manage your technological arsenal. Level up your blocks to unlock new
          architectural capabilities.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Inventory Grid */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-high p-6 voxel-slab-shadow border-b-4 border-surface-dim">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">grid_view</span>
                Primary Hotbar
              </h2>
              <div className="text-xs font-bold bg-surface-dim px-2 py-1">
                10 / 64 SLOTS USED
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {SKILLS.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    className={`text-left group bg-surface-container-low p-4 voxel-slot-inset border-2 transition-colors cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 ${skill.iconBg} flex items-center justify-center border-b-4 ${skill.iconBorder}`}>
                        <span className={`material-symbols-outlined ${skill.iconTextColor} text-3xl`}>
                          {skill.icon}
                        </span>
                      </div>
                      <span className={`font-headline font-black text-xs ${isSelected ? "text-primary" : "text-on-surface-variant"}`}>
                        LVL {skill.level}
                      </span>
                    </div>
                    <h3 className={`font-headline font-bold text-sm mb-2 uppercase ${isSelected ? "text-primary" : ""}`}>
                      {skill.name}
                    </h3>
                    <div className="w-full bg-surface-dim h-2">
                      <div className="bg-primary h-full" style={{ width: `${skill.level}%` }} />
                    </div>
                    <div className={`mt-1 text-[10px] font-bold text-right uppercase ${
                      isSelected ? "text-primary" : "text-on-surface-variant"
                    } ${skill.status.includes("READY") ? "italic" : ""}`}>
                      {skill.status}
                    </div>
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-8 h-8 bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}

              {/* Empty Slots */}
              <div className="bg-surface-dim/30 p-4 voxel-slot-inset border-2 border-surface-variant flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-surface-dim text-4xl">add</span>
              </div>
              <div className="bg-surface-dim/30 p-4 voxel-slot-inset border-2 border-surface-variant flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-surface-dim text-4xl">lock</span>
              </div>
            </div>
          </div>

          {/* Secondary Inventory Row */}
          <div className="bg-surface-container-high p-6 voxel-slab-shadow border-b-4 border-surface-dim mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">inventory_2</span>
                Secondary Inventory
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SECONDARY_SKILLS.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill({
                    ...skill,
                    description: `A versatile tool in the developer's arsenal. ${skill.name} provides essential capabilities for building robust software systems.`,
                    rarity: skill.status === "EXPERT" ? "Epic Artifact" : "Rare Artifact",
                    attributes: [
                      { name: "Proficiency", value: skill.level },
                      { name: "Problem Solving", value: skill.level - 5 },
                      { name: "Integration", value: skill.level - 8 },
                    ],
                  })}
                  className={`text-left group bg-surface-container-low p-4 voxel-slot-inset border-2 transition-colors cursor-pointer relative overflow-hidden ${
                    selectedSkill.name === skill.name
                      ? "border-primary bg-primary/5"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className={`w-10 h-10 ${skill.iconBg} flex items-center justify-center border-b-4 ${skill.iconBorder}`}>
                      <span className={`material-symbols-outlined ${skill.iconTextColor} text-2xl`}>
                        {skill.icon}
                      </span>
                    </div>
                    <span className="font-headline font-black text-xs text-on-surface-variant">
                      LVL {skill.level}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-xs mb-1 uppercase">{skill.name}</h3>
                  <div className="w-full bg-surface-dim h-1.5">
                    <div className="bg-secondary h-full" style={{ width: `${skill.level}%` }} />
                  </div>
                  <div className="mt-1 text-[10px] font-bold text-on-surface-variant text-right uppercase">
                    {skill.status}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Description Box */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-secondary text-white voxel-slab-shadow border-b-4 border-[#4d362e] sticky top-24">
            <div className="bg-[#006E1C] p-4 flex items-center gap-4 border-b-4 border-[#004d14]">
              <div className="w-16 h-16 bg-white flex items-center justify-center voxel-slab-shadow">
                <span className="material-symbols-outlined text-primary text-4xl">
                  {selectedSkill.icon}
                </span>
              </div>
              <div>
                <h2 className="font-headline font-black text-2xl uppercase leading-tight">
                  {selectedSkill.name}
                </h2>
                <span className="bg-white/20 px-2 py-0.5 text-xs font-bold uppercase">
                  {selectedSkill.rarity}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <h3 className="font-headline font-bold text-xs uppercase tracking-widest text-secondary-fixed mb-4">
                  Performance Attributes
                </h3>
                <div className="space-y-4">
                  {selectedSkill.attributes.map((attr) => (
                    <div key={attr.name}>
                      <div className="flex justify-between text-xs font-bold mb-1 uppercase">
                        <span>{attr.name}</span>
                        <span className="text-primary-fixed">{attr.value}%</span>
                      </div>
                      <div className="w-full h-4 bg-[#4d362e] p-0.5">
                        <div
                          className="h-full bg-primary-container transition-all duration-300"
                          style={{ width: `${attr.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#4d362e] p-4">
                <h4 className="font-headline font-bold text-xs uppercase text-secondary-fixed mb-2">
                  Item Description
                </h4>
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Stats Footer */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-tertiary-container p-4 border-b-4 border-on-tertiary-fixed-variant flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
          </div>
          <div>
            <div className="text-[10px] font-bold text-on-tertiary-container uppercase">Health Points</div>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-4 h-4 bg-error" />
              ))}
              <div className="w-4 h-4 bg-white/30" />
            </div>
          </div>
        </div>
        <div className="bg-secondary-container p-4 border-b-4 border-on-secondary-fixed-variant flex items-center gap-4">
          <div className="w-12 h-12 bg-black/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              restaurant
            </span>
          </div>
          <div>
            <div className="text-[10px] font-bold text-on-secondary-container uppercase">Hunger Meter</div>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-4 h-4 bg-on-secondary-container" />
              ))}
              {[4, 5].map((i) => (
                <div key={i} className="w-4 h-4 bg-white/30" />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-primary-fixed p-4 border-b-4 border-on-primary-fixed-variant flex items-center gap-4">
          <div className="w-12 h-12 bg-black/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
              military_tech
            </span>
          </div>
          <div>
            <div className="text-[10px] font-bold text-on-primary-fixed uppercase">Total Experience</div>
            <div className="font-headline font-black text-on-primary-fixed">12,450 XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
