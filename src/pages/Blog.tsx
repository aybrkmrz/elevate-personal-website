
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Fitness Blog</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
        This is the blog page. Markdown-based posts with fitness tips, recipes, and success stories will be displayed here.
      </p>
    </motion.div>
  );
};

export default Blog;
