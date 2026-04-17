import { fetchPageByTitle } from "../../lib/drupal";
import TwoColumn from "../../components/TwoColumn";

export default async function Contact() {
  const page = await fetchPageByTitle("Contact");

  if (!page) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Unable to load Contact page.</h1>
        <p>Could not retrieve content for title "Contact" from the backend.</p>
      </div>
    );
  }

  const leftSide = (
    <div>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#0A5C61" }}>Contact Us</h2>
      <div 
        style={{ fontSize: "1.2rem", lineHeight: "2", color: "#444" }}
        dangerouslySetInnerHTML={{ __html: page.body }} 
      />
    </div>
  );

  const rightSide = page.mapEmbedUrl ? (
    <iframe 
      src={page.mapEmbedUrl}
      width="100%" 
      height="450" 
      style={{ border: 0, borderRadius: "8px" }} 
      allowFullScreen={true} 
      loading="lazy"
    ></iframe>
  ) : (
    <div style={{ 
      background: "#f4f4f4", 
      height: "450px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      borderRadius: "8px",
      color: "#999"
    }}>
      Map Placeholder
    </div>
  );

  return (
    <TwoColumn left={leftSide} right={rightSide} />
  );
}
