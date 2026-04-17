const DRUPAL_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;

/**
 * Normalizes a Drupal JSON:API node object into a clean flat object.
 * Based on field map in DRUPAL_API_NOTES.md
 */
function normalizePage(node, included = []) {
  if (!node) return null;

  const attributes = node.attributes || {};
  const relationships = node.relationships || {};

  // Resolve hero image URL
  let heroImageUrl = "";
  const heroImageId = relationships.field_hero_image?.data?.id;
  
  if (heroImageId) {
    const media = included.find(item => item.type === 'media--image' && item.id === heroImageId);
    if (media) {
      const fileId = media.relationships?.field_media_image?.data?.id;
      if (fileId) {
        const file = included.find(item => item.type === 'file--file' && item.id === fileId);
        if (file && file.attributes?.uri?.url) {
          const relativeUrl = file.attributes.uri.url;
          heroImageUrl = relativeUrl.startsWith('http') 
            ? relativeUrl 
            : `${DRUPAL_BASE_URL}${relativeUrl}`;
        }
      }
    }
  }

  return {
    title: attributes.title || "",
    heroTitle: attributes.field_hero_title || "",
    heroSubtitle: attributes.field_hero_subtitle || "",
    ctaLabel: attributes.field_cta_label || "",
    ctaUrl: (attributes.field_cta_url?.uri || "").replace('internal:', ''),
    body: attributes.field_body?.processed || "",
    mapEmbedUrl: attributes.field_meta_description || "",
    heroImageUrl: heroImageUrl
  };
}

export async function fetchPageByTitle(title) {
  try {
    const url = new URL(`${DRUPAL_BASE_URL}/jsonapi/node/page`);
    url.searchParams.set("filter[title]", title);
    url.searchParams.set("include", "field_hero_image,field_hero_image.field_media_image");

    const response = await fetch(url.toString(), {
      next: { revalidate: 10 }, // 10s cache for demo responsiveness
      headers: {
        "Accept": "application/vnd.api+json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const json = await response.json();
    if (!json.data || json.data.length === 0) {
      return null;
    }

    return normalizePage(json.data[0], json.included);
  } catch (error) {
    console.error(`Error fetching page "${title}":`, error);
    return null;
  }
}
