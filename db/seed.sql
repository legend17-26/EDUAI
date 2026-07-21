-- Insert Initial Career Domains
INSERT INTO domains (title, slug, category, description)
VALUES 
('Full Stack Web Development', 'full-stack-web-dev', 'Software Engineering', 'Comprehensive guide to mastering frontend, backend, and DevOps for modern web applications.'),
('Data Science & AI', 'data-science-ai', 'Artificial Intelligence', 'From mathematics and Python basics to machine learning, deep learning, and LLM deployments.')
ON CONFLICT (slug) DO NOTHING;

-- Insert Sample Stages for Full Stack
WITH domain_ref AS (SELECT id FROM domains WHERE slug = 'full-stack-web-dev' LIMIT 1)
INSERT INTO roadmap_stages (domain_id, stage_order, title, duration, summary, topics)
VALUES
((SELECT id FROM domain_ref), 1, 'Frontend Fundamentals', '4 Weeks', 'Master HTML5, CSS3 layout engines, and modern JavaScript ES6+.', ARRAY['HTML5', 'CSS Grid', 'Flexbox', 'JavaScript ES6+']),
((SELECT id FROM domain_ref), 2, 'Frontend Frameworks', '6 Weeks', 'Build interactive UI using React or Vue, with state management.', ARRAY['React', 'State Management', 'Tailwind CSS', 'Vite']),
((SELECT id FROM domain_ref), 3, 'Backend & Databases', '6 Weeks', 'Create REST APIs and interact with SQL and NoSQL databases.', ARRAY['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST API']);