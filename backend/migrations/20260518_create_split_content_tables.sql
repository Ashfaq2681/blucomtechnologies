CREATE TABLE IF NOT EXISTS services LIKE pages;
CREATE TABLE IF NOT EXISTS work LIKE pages;
CREATE TABLE IF NOT EXISTS blogposts LIKE posts;
CREATE TABLE IF NOT EXISTS ideasposts LIKE posts;
CREATE TABLE IF NOT EXISTS newsposts LIKE posts;

INSERT INTO blogposts
SELECT *
FROM posts
WHERE LOWER(category) NOT IN ('ideas', 'idea', 'news')
  AND NOT EXISTS (
    SELECT 1 FROM blogposts target WHERE target.slug = posts.slug
  );

INSERT INTO ideasposts
SELECT *
FROM posts
WHERE LOWER(category) IN ('ideas', 'idea')
  AND NOT EXISTS (
    SELECT 1 FROM ideasposts target WHERE target.slug = posts.slug
  );

INSERT INTO newsposts
SELECT *
FROM posts
WHERE LOWER(category) = 'news'
  AND NOT EXISTS (
    SELECT 1 FROM newsposts target WHERE target.slug = posts.slug
  );
