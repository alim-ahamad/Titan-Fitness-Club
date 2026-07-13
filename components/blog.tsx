"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Science Behind Progressive Overload",
      excerpt:
        "Learn how increasing training demands leads to continuous muscle growth and strength gains. A complete guide to structuring your training for maximum results.",
      category: "Training",
      image: "/assets/Man_standing_arms_crossed_gym_202607131105.jpeg",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Optimal Recovery: More Than Just Sleep",
      excerpt:
        "Discover the hidden factors that accelerate recovery. From nutrition timing to active recovery strategies, learn what separates champions from beginners.",
      category: "Recovery",
      image: "/assets/Man_kneeling_mid-stretch_gym_202607131104.jpeg",
      readTime: "10 min read",
    },
    {
      id: 3,
      title: "Nutrition Timing for Muscle Growth",
      excerpt:
        "Understanding when and what to eat can make all the difference. Explore macro timing strategies designed by our elite nutritionists.",
      category: "Nutrition",
      image: "/assets/Man_holding_protein_shaker_gym_202607131104.jpeg",
      readTime: "7 min read",
    },
  ];

  return (
    <section id="blog" className="relative py-32 lg:py-48 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Latest Insights</span>
          </div>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-text mb-8 leading-tight">
            Training Tips & <br /> Knowledge
          </h2>
          <p className="text-lg text-text-muted max-w-3xl">
            Expert advice from our elite coaches to optimize your training, nutrition strategies, and recovery protocols for peak performance
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group rounded-2xl overflow-hidden bg-card/50 border border-border hover:border-accent/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{post.category}</span>
                  <span className="text-xs text-text-muted font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text mb-4 line-clamp-2 leading-tight">{post.title}</h3>
                <p className="text-text-muted mb-8 line-clamp-2 leading-relaxed">{post.excerpt}</p>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  whileHover={{ gap: "12px" }}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors"
                >
                  Read Article
                  <motion.div whileHover={{ x: 4 }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="inline-block px-8 py-4 rounded-xl border border-accent text-accent hover:bg-accent/10 font-bold transition-all duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
