import { fetchPageByTitle } from "../../lib/drupal";
import TwoColumn from "../../components/TwoColumn";

export default async function About() {
  const page = await fetchPageByTitle("About");

  if (!page) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Unable to load About page.</h1>
        <p>Could not retrieve content for title "About" from the backend.</p>
      </div>
    );
  }

  const leftSide = page.heroImageUrl ? (
    <img 
      src={page.heroImageUrl} 
      alt="About BrightPath" 
      style={{ borderRadius: "8px", width: "100%" }} 
    />
  ) : (
    <div style={{ 
      background: "#0A5C61", 
      color: "#fff", 
      height: "400px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      borderRadius: "8px",
      fontSize: "1.5rem",
      fontWeight: "700"
    }}>
      BrightPath Learning
    </div>
  );

  const rightSide = (
    <div>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#0A5C61" }}>Our Story</h2>
      <div 
        style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}
        dangerouslySetInnerHTML={{ __html: page.body }} 
      />
    </div>
  );

  return (
    <TwoColumn left={leftSide} right={rightSide} />
  );
}
