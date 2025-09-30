import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getSinglePost } from "../../queries";
import { urlFor } from "../../sanityClient";
import { PortableText } from "@portabletext/react";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getSinglePost(slug).then(setPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-secondary fs-5 fw-semibold">
        Loading...
      </div>
    );
  }

  return (
    <article className="bg-light">
      {/* ✅ Dynamic Meta SEO */}
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta
          name="description"
          content={post.metaDescription || post.body?.[0]?.children?.[0]?.text}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="  position-relative" style={{ height: "60vh" }}>
        <div className=" w-100 h-100 bg-dark rounded  d-flex justify-content-center align-items-center text-center px-3">
          <h1 className="display-4 fw-bold text-white">{post.title}</h1>
        </div>
      </div>

      <div className="container mt-5 ">
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage)
            
              .auto("format")
              .url()}
            alt={post.title}
            className="card-img-top"
            style={{ height: "520px", objectFit: "cover" ,borderRadius:"10px"}}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="bg-white shadow-lg rounded-3 p-4 p-md-5">
          <div className="fs-5 lh-lg text-black">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </article>
  );
}
