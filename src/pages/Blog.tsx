import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, User, Clock, ArrowRight, 
  CheckCircle, Mail, BookOpen 
} from 'lucide-react';
import { blogData, blogCategories, newsletterData } from '../data/blogData';
import type { BlogPost } from '../data/blogData';
import Modal from '../components/Modal';
import '../styles/Blog.css';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePostModal, setActivePostModal] = useState<BlogPost | null>(null);
  
  // Newsletter subscription states
  const [newsEmail, setNewsEmail] = useState('');
  const [newsError, setNewsError] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) {
      setNewsError('Email address is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newsEmail)) {
      setNewsError('Please provide a valid email address.');
      return;
    }

    setNewsError('');
    // Simulate API dispatch
    console.log('Subscribed email to newsletter:', newsEmail);
    setNewsSuccess(true);
    setNewsEmail('');
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="blog-page"
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      
      {/* 1. Hero Section (Varying Background: Large image with dark overlay) */}
      <header className="blog-hero bg-hero" aria-label="Blog Insights Hero">
        <div className="hero-overlay"></div>
        <div className="container blog-hero-container">
          <div className="hero-content">
            <span className="hero-badge-glow">Insights & News</span>
            <h1 className="hero-title">Rakentra Engineering Journal</h1>
            <p className="hero-subtitle">
              Read technical analysis on modern structures, flat-monolithic concrete, CLT panels, and RALA audits from our engineers.
            </p>
          </div>
        </div>
      </header>

      {/* 2. Introduction: Category Selection & Search (Varying Background: Solid White) */}
      <section className="blog-filter-section bg-white section">
        <div className="container filter-container-blog">
          {/* Search Input */}
          <div className="search-input-wrapper-blog">
            <Search size={18} className="search-icon-blog" />
            <input
              type="text"
              placeholder="Search articles by keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar-field-blog"
              aria-label="Search articles"
            />
          </div>

          {/* Categories Grid */}
          <div className="categories-list-blog">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                className={`cat-btn-blog ${selectedCategory === cat.id ? 'active-cat-blog' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content: Blog Articles Grid (Varying Background: Warm White) */}
      <section className="blog-grid-section bg-warm section">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-2 blog-posts-grid">
              {filteredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="blog-post-card card"
                  onClick={() => setActivePostModal(post)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="post-header">
                    <span className="post-cat-badge">{post.category.replace('-', ' ')}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  
                  <div className="post-body">
                    <h3 className="post-title-text">{post.title}</h3>
                    <p className="post-summary-text">{post.summary}</p>
                  </div>

                  <div className="post-footer">
                    <div className="post-author-meta">
                      <User size={14} className="author-ico" />
                      <span>{post.author}</span>
                    </div>
                    <button className="post-read-btn" aria-label={`Read article: ${post.title}`}>
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-blog-results">
              <p>No articles match your search parameters. Try choosing another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Trust Section: Newsletter Signup Banner (Varying Background: Orange Gradient) */}
      <section className="newsletter-section bg-orange-gradient section">
        <div className="container newsletter-container">
          <div className="newsletter-icon-box">
            <Mail size={40} className="news-icon" />
          </div>
          <h2>{newsletterData.headline}</h2>
          <p>{newsletterData.description}</p>

          {!newsSuccess ? (
            <form onSubmit={handleNewsSubmit} className="newsletter-form">
              <div className="news-input-group">
                <input
                  type="email"
                  placeholder="Enter your corporate email..."
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className={`news-input ${newsError ? 'news-input-err' : ''}`}
                  aria-label="Newsletter email"
                />
                <button type="submit" className="btn btn-secondary news-btn-submit">
                  Subscribe
                </button>
              </div>
              {newsError && <span className="news-error-txt">{newsError}</span>}
            </form>
          ) : (
            <div className="news-success-box">
              <CheckCircle size={28} className="news-success-icon" />
              <span>Corporate email subscribed. Welcome to the Rakentra Journal.</span>
            </div>
          )}
        </div>
      </section>

      {/* Blog Article Reader Modal */}
      <Modal
        isOpen={activePostModal !== null}
        onClose={() => setActivePostModal(null)}
        title={activePostModal?.title}
      >
        {activePostModal && (
          <div className="blog-modal-reader">
            <div className="blog-reader-meta">
              <span className="badge badge-accent">{activePostModal.category}</span>
              <div className="meta-sub-items">
                <div className="meta-item-tag">
                  <User size={14} />
                  <span>{activePostModal.author}</span>
                </div>
                <div className="meta-item-tag">
                  <Calendar size={14} />
                  <span>{activePostModal.date}</span>
                </div>
                <div className="meta-item-tag">
                  <Clock size={14} />
                  <span>{activePostModal.readTime}</span>
                </div>
              </div>
            </div>

            <div className="blog-reader-content">
              {/* Full Article Content */}
              <p className="blog-paragraph-full">{activePostModal.content}</p>
              
              {/* Quote or summary highlight */}
              <blockquote className="blog-reader-blockquote">
                <BookOpen size={24} className="blockquote-icon-blog" />
                <p>{activePostModal.summary}</p>
              </blockquote>
              
              <p className="blog-paragraph-full">
                All studies published in the Rakentra Engineering Journal are compiled and reviewed by our central structural engineering department in Vantaa, Finland. For structural consulting or project bidding options based on these methodologies, please get in touch with our office.
              </p>
            </div>
          </div>
        )}
      </Modal>

    </motion.div>
  );
};
export default Blog;
