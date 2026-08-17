import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchPinnedRepos, fetchRecentRepos } from "../utils/api";

export default function ProjectsPage({ colors }) {
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
        <div key={i} className={`rounded-lg p-4 border ${colors.card}`}>
          <div
            className={`h-6 w-3/4 mb-2 rounded animate-pulse ${colors.card}`}
          />
          <div
            className={`h-4 w-full mb-3 rounded animate-pulse ${colors.card}`}
          />
          <div className="flex justify-between">
            <div className={`h-6 w-16 rounded animate-pulse ${colors.card}`} />
            <div className={`h-6 w-6 rounded animate-pulse ${colors.card}`} />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className={`min-h-screen py-20 px-4 relative ${colors.bgAlt}`}>
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-black mb-4 ${colors.text}`}>
            Featured Projects
          </h2>
          <p className={colors.textMuted}>My work from GitHub</p>
        </motion.div>

        <div className="mb-12">
          <h3 className={`text-xl font-bold mb-6 text-${colors.primary}`}>
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`block rounded-lg p-6 border transition duration-100 ${colors.card} ${colors.cardHover}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg truncate ${colors.text}`}>
                      {repo.repo}
                    </h4>
                    <Code2 size={20} className={`text-${colors.primary}`} />
                  </div>
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${colors.textMuted}`}
                  >
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${colors.card}`}
                      >
                        {repo.language}
                      </span>
                    )}
                    <span className={`text-xs ${colors.textMuted}`}>
                      {repo.stars} ★
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <p className={colors.textMuted}>No pinned repositories found.</p>
          )}
        </div>

        <div>
          <h3 className={`text-xl font-bold mb-6 text-${colors.primary}`}>
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`block rounded-lg p-6 border transition duration-100 ${colors.card} ${colors.cardHover}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg truncate ${colors.text}`}>
                      {repo.name}
                    </h4>
                    <ExternalLink size={18} className={colors.textMuted} />
                  </div>
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${colors.textMuted}`}
                  >
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${colors.card}`}
                      >
                        {repo.language}
                      </span>
                    )}
                    <span className={`text-xs ${colors.textMuted}`}>
                      {repo.stargazers_count} ★
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <p className={colors.textMuted}>No recent repositories found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
