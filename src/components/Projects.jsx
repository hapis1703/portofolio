import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchPinnedRepos, fetchRecentRepos } from "../utils/api";

export default function Projects({ theme }) {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [recentRepos, setRecentRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchPinnedRepos(), fetchRecentRepos()])
      .then(([pinned, recent]) => {
        setPinnedRepos(pinned.slice(0, 2));
        setRecentRepos(recent.slice(0, 6));
      })
      .finally(() => setLoading(false));
  }, []);

  const RepoSkeleton = ({ count }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`rounded-lg p-4 border ${theme === "dark" ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200"}`}
        >
          <div
            className={`h-6 w-3/4 mb-2 rounded animate-pulse ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
          />
          <div
            className={`h-4 w-full mb-3 rounded animate-pulse ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
          />
          <div className="flex justify-between">
            <div
              className={`h-6 w-16 rounded animate-pulse ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
            />
            <div
              className={`h-6 w-6 rounded animate-pulse ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className={`py-20 px-4 relative ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl font-black mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Featured Projects
          </h2>
          <p
            className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            My work from GitHub
          </p>
        </motion.div>

        <div className="mb-12">
          <h3
            className={`text-xl font-bold mb-6 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
          >
            Pinned Repositories
          </h3>
          {loading ? (
            <RepoSkeleton count={2} />
          ) : pinnedRepos.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {pinnedRepos.map((repo, index) => (
                <motion.a
                  key={repo.repo}
                  href={`https://github.com/${repo.owner}/${repo.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.1, delay: 0 }}
                  className={`block rounded-lg p-6 border transition duration-100 ${theme === "dark" ? "bg-slate-800/50 border-slate-700 hover:border-cyan-500 hover:bg-slate-800" : "bg-white border-slate-200 hover:border-cyan-400 hover:bg-slate-50"}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4
                      className={`font-bold text-lg truncate ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      {repo.repo}
                    </h4>
                    <Code2
                      size={20}
                      className={
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }
                    />
                  </div>
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                      >
                        {repo.language}
                      </span>
                    )}
                    <span
                      className={`text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-600"}`}
                    >
                      {repo.stars} ★
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <p
              className={theme === "dark" ? "text-slate-400" : "text-slate-600"}
            >
              No pinned repositories found.
            </p>
          )}
        </div>

        <div>
          <h3
            className={`text-xl font-bold mb-6 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}
          >
            Recent Repositories
          </h3>
          {loading ? (
            <RepoSkeleton count={6} />
          ) : recentRepos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentRepos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.1, delay: 0 }}
                  className={`block rounded-lg p-6 border transition duration-100 ${theme === "dark" ? "bg-slate-800/30 border-slate-700 hover:border-cyan-500 hover:bg-slate-800/50" : "bg-white border-slate-200 hover:border-cyan-400 hover:bg-slate-50"}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4
                      className={`font-bold text-lg truncate ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      {repo.name}
                    </h4>
                    <ExternalLink
                      size={18}
                      className={
                        theme === "dark" ? "text-slate-500" : "text-slate-600"
                      }
                    />
                  </div>
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                      >
                        {repo.language}
                      </span>
                    )}
                    <span
                      className={`text-xs ${theme === "dark" ? "text-slate-500" : "text-slate-600"}`}
                    >
                      {repo.stargazers_count} ★
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <p
              className={theme === "dark" ? "text-slate-400" : "text-slate-600"}
            >
              No recent repositories found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
