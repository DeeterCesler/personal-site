import React from "react";
import WaveCanvas from "../components/WaveCanvas";
import "./Blog.css";

const articles = [
  { title: "3 Ways a Senior Thinks", href: "/blog/senior" },
  { title: "8 Security Principles EVERY Software Dev Should Know", href: "/blog/security" },
  {
    title: "The 10 Commandments of Clean Code",
    href: "https://deetercesler.medium.com/the-ten-commandments-of-clean-code-89b22a6f01d1",
    external: true,
    featured: true,
    badge: "Editor's Pick · Medium",
  },
  { title: "6 Ways to De-Junior Your Code", href: "/blog/junior" },
  { title: "Working at Big Tech vs. Startups", href: "/blog/startups-vs-big-tech" },
  {
    title: "You Know More Than You Think",
    href: "https://deetercesler.medium.com/you-know-more-than-you-think-bcea318b4d09",
    external: true,
  },
  {
    title: "Use GraphQL with React: So Easy, a Junior Dev Can Do It",
    href: "https://deetercesler.medium.com/using-graphql-with-react-2778750a768d",
    external: true,
  },
  { title: "Immutability in JavaScript", href: "/blog/immutability" },
  { title: "What is BDD? Intro to Behavior-Driven Development", href: "/blog/bdd" },
  { title: "Use TDD for Faster Development", href: "/blog/tdd" },
  { title: "Everything You Need to Know About Looping in JavaScript", href: "/blog/looping" },
  { title: "Managing Frontend Layouts: Bootstrap vs Flexbox vs CSS Grid", href: "/blog/bootstrap-flexbox-css-grid" },
];

const Blog = () => {
  return (
    <div className="blog-page">
      <WaveCanvas />
      <div className="blog-page-content">
        <h1 className="blog-page-title">Writing</h1>
        <div className="article-list">
          {articles.map((article) => (
            <a
              key={article.href}
              className="article-card"
              href={article.href}
              target={article.external ? "_blank" : undefined}
              rel={article.external ? "noreferrer noopener" : undefined}
            >
              <div className="article-card-left">
                {article.badge && (
                  <span className="article-card-badge">⭐ {article.badge}</span>
                )}
                <span className="article-card-title">{article.title}</span>
              </div>
              {article.external
                ? <span className="article-external-icon">↗</span>
                : <span className="article-card-arrow">→</span>
              }
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
