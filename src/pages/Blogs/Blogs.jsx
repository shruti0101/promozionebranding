import { useEffect, useState } from "react";
import { getAllPosts } from "../../queries";
import { Link } from "react-router-dom";
import { urlFor } from "../../sanityClient";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data) => {
      console.log("Fetched posts:", data);
      setPosts(data);
    });
  }, []);

  if (!posts) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-secondary fs-5 fw-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-light">
      {/* Hero Header */}
      <div className="bg-primary  text-white text-center py-5 mb-5 rounded">
        <h1 className="text-white display-4 fw-bold">Explore All Blogs</h1>
        <p className="lead mb-0">Stay updated with more blogs and insights.</p>
      </div>

      {/* Blog Grid */}
      <div className="container pb-5">
        {posts.length === 0 ? (
          <p className="text-center text-secondary fs-5">No blogs available.</p>
        ) : (
          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post._id}>
                <div className="card h-75 shadow-sm border-0">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage)
                        .width(600)
                        .height(400)
                        .auto("format")
                        .url()}
                      alt={post.title}
                      className="card-img-top"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold">
                      {post.title || "Untitled"}
                    </h5>
                    <p className="card-text text-muted flex-grow-1">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="btn btn-primary mt-3 align-self-start"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
