export default function SideHUD() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col p-6 gap-8 bg-stone-200/50 backdrop-blur-sm border-r-8 border-stone-800 shadow-[8px_0px_0px_0px_rgba(122,86,73,1)] z-40 hidden lg:flex">
      <div className="flex flex-col gap-2 pt-4">
        <div className="w-16 h-16 bg-stone-800 border-4 border-white mb-2 overflow-hidden">
          <img
            alt="Ankit Belvanshi Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBdLDhHyTFcUrblLQmc-CoVYTo4zVEdiqzyPKRIKDBT_gCKW-OKSNDQnvQJQKqJ_dqgWJtx063zj7ckhBQVS5Nz2zGRk8svMZs5LrV7WO0M4Liwlqe8uAQKhKte7kPTRVJ1KdAsjYPqm8bypEM1V0dmK7UkEtRqzxdBq1BXS-pUqbJiWpZ_4os02pDiQyNU-xPZxUs2Vkt11_jomYcqEL4razAxS4ZOYvsNvlmT4jxP2q5hfs0JF1fshxJKSiu-amr_zfwHyxo8NA"
          />
        </div>
        <h2 className="font-headline font-black text-2xl text-stone-800 uppercase leading-none">
          ANKIT.DEV
        </h2>
        <p className="font-headline font-bold text-sm text-secondary uppercase">
          LEVEL 42 DATA SCIENTIST
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Energy Level */}
        <div className="flex flex-col gap-1">
          <span className="font-headline font-bold text-xs uppercase text-stone-700">
            Energy Level
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined text-error"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            ))}
            <span className="material-symbols-outlined text-stone-400">favorite</span>
          </div>
        </div>
        {/* Years of Experience */}
        <div className="flex flex-col gap-1">
          <span className="font-headline font-bold text-xs uppercase text-stone-700">
            Years of Experience
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                restaurant
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <button className="w-full py-4 bg-stone-700 text-white font-headline font-black uppercase tracking-widest shadow-[0px_6px_0px_0px_rgba(40,40,40,1)] hover:shadow-[0px_2px_0px_0px_rgba(40,40,40,1)] hover:translate-y-1 transition-all duration-100">
          Download Resume
        </button>
      </div>
    </aside>
  );
}
