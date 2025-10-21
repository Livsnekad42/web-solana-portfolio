
'use client';
import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

type Project = { name: string; repo: string; description?: string };

const useStore = create<{ projects: Project[]; setProjects: (p: Project[]) => void }>(set => ({
  projects: [],
  setProjects: (p) => set({ projects: p })
}));

export default function Home() {
  const { projects, setProjects } = useStore();
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('/projects.json');
      return res.json();
    },
    onSuccess: (d) => setProjects(d)
  });
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Web3 Portfolio Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.name} className="border border-gray-700 rounded-2xl p-4">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-400">{p.description || 'No description'}</p>
            <a className="text-blue-400" href={p.repo} target="_blank">GitHub</a>
          </div>
        ))}
      </div>
    </main>
  );
}
