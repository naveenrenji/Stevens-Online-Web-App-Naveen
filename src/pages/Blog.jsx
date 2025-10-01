
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import BlogList from '@/components/blog/BlogList';
import BlogDetail from '@/components/blog/BlogDetail';
import BlogErrorBoundary from '@/components/blog/BlogErrorBoundary';
import completeBlogData from '@/data/blogs.json';

// Single Post View Component
const SinglePost = ({ post, onBack }) => (
  <div className="bg-stevens-white py-stevens-3xl">
    <div className="max-w-7xl mx-auto px-stevens-md">
      <BlogDetail 
        post={post} 
        onBack={onBack}
        relatedPosts={[]} // Will be populated with actual related posts
      />
    </div>
  </div>
);

// Blog Page Content Component
const BlogPageContent = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const navigate = useNavigate();
  
  const categories = [
    'All',
    'Engineering Management', 
    'Mastering Computer Science',
    'Online MBA Success',
    'Other Programs'
  ];

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSelectedCategory('All');
      return;
    }
    
    // Navigate to the appropriate topic page
    switch (category) {
      case 'Engineering Management':
        navigate('/topics/engineering-essentials/');
        break;
      case 'Mastering Computer Science':
        navigate('/topics/mastering-computer-science/');
        break;
      case 'Online MBA Success':
        navigate('/topics/online-mba-success/');
        break;
      case 'Other Programs':
        navigate('/topics/uncategorized/');
        break;
      default:
        setSelectedCategory(category);
    }
  };

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const visiblePosts = filteredPosts.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-stevens-white py-stevens-3xl">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <div className="text-center">
            <h1 className="font-stevens-display text-stevens-hero text-stevens-primary mb-stevens-lg">
              Stevens Online Blog: Insights, Inspiration and Information
            </h1>
            
            <div className="max-w-6xl mx-auto space-y-stevens-md text-left">
              <p className="text-stevens-lg text-stevens-gray-700 leading-relaxed">
                Stevens Online education blogs are excellent resources for current and prospective students and professionals looking to stay up-to-date on the latest industry developments supported by our programs.
              </p>
              <p className="text-stevens-lg text-stevens-gray-700 leading-relaxed">
                Through our blog, you can access in-depth articles, interviews and other resources that provide valuable insights into the skills and knowledge needed to succeed in today's rapidly-changing business, technology and engineering landscapes. Whether you are considering enrolling in one of our programs, want to explore a new career path or deepen your knowledge in your current field, the Stevens online blog is an excellent source of information and inspiration for you to take advantage of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-stevens-white py-stevens-xl">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <div className="flex flex-col items-center">
            <h2 className="font-stevens-display text-stevens-2xl text-stevens-primary mb-stevens-lg">
              Categories:
            </h2>
            <div className="flex flex-wrap justify-center gap-stevens-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-stevens-md py-stevens-sm text-stevens-sm font-medium border border-stevens-gray-300 bg-stevens-white text-stevens-gray-700 hover:border-stevens-primary hover:text-stevens-primary transition-all duration-stevens-normal ${
                    selectedCategory === category
                      ? 'border-stevens-primary text-stevens-primary bg-stevens-primary/5'
                      : 'hover:bg-stevens-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-stevens-white py-stevens-3xl">
        <div className="max-w-7xl mx-auto px-stevens-md">
          <BlogList 
            posts={visiblePosts}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            loading={false}
          />
        </div>
      </section>
    </div>
  );
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    if (slug) {
      setLoading(true);
      // Find the specific post by slug (ID)
      const foundPost = completeBlogData.posts.find(post => post.id === slug);
      if (foundPost) {
        setSinglePost(foundPost);
      }
      setLoading(false);
    } else {
      setLoading(true);
      // Use the complete blog data
      // Clear any previously selected post so the list view renders
      setSinglePost(null);
      
      // Filter posts by category if category parameter is provided
      if (category) {
        const filteredPosts = completeBlogData.posts.filter(post => post.category === category);
        setPosts(filteredPosts);
      } else {
        setPosts(completeBlogData.posts);
      }
      setLoading(false);
    }
  }, [location.search, slug]);

  const handleBack = () => {
    navigate('/blog/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stevens-white">
        <div className="max-w-7xl mx-auto px-stevens-md py-stevens-3xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-stevens-lg">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="skeleton-stevens-card">
                <div className="skeleton-stevens h-48 rounded-t-stevens-md mb-stevens-md"></div>
                <div className="p-stevens-lg">
                  <div className="skeleton-stevens-title mb-stevens-md"></div>
                  <div className="skeleton-stevens-text mb-stevens-sm"></div>
                  <div className="skeleton-stevens-text mb-stevens-sm"></div>
                  <div className="skeleton-stevens-text w-3/4 mb-stevens-md"></div>
                  <div className="skeleton-stevens-button"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <BlogErrorBoundary>
      {singlePost ? <SinglePost post={singlePost} onBack={handleBack} /> : <BlogPageContent posts={posts} />}
    </BlogErrorBoundary>
  );
}
