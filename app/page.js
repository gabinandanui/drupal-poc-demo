import { fetchPageByTitle } from "../lib/drupal";
import HeroBanner from "../components/HeroBanner";

export default async function Home() {
  const page = await fetchPageByTitle("Home");

  if (!page) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Could not load Home page content from Drupal.</h1>
        <p>Check NEXT_PUBLIC_DRUPAL_BASE_URL and that the page is published.</p>
      </div>
    );
  }

  return (
    <div>
      <HeroBanner 
        title={page.heroTitle} 
        description={page.heroSubtitle} 
        ctaLabel={page.ctaLabel} 
        ctaLink={page.ctaUrl} 
      />
    </div>
  );
}
