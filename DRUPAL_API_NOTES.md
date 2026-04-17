# Drupal API Field Map

## Page node attribute fields confirmed:
- `title` (String)
- `field_hero_title` (String)
- `field_hero_subtitle` (String)
- `field_cta_label` (String)
- `field_cta_url` (Object with `uri` and `title`)
- `field_body` (Object with `value`, `processed`, `format`)
- `field_meta_description` (String - used for Google Maps embed URL)

## field_body structure:
- Consists of `.value` (raw HTML) and `.processed` (safe/filtered HTML).
- Use `.processed` for rendering in React via `dangerouslySetInnerHTML`.

## field_cta_url structure:
- Has `.uri` (e.g. `internal:/about` or `https://...`)
- Has `.title` (often empty if `field_cta_label` is used instead).

## field_hero_image resolution path:
- node → `relationships.field_hero_image.data.id`
- Find item in `included` array with `type: "media--image"` and matching ID.
- From media item → `relationships.field_media_image.data.id`
- Find item in `included` array with `type: "file--file"` and matching ID.
- File URL is at: `attributes.uri.url`
- **Is the URL relative?** Yes (e.g., `/sites/default/files/2026-04/image.jpg`). 
- **Prepending required?** Yes, prepend `process.env.NEXT_PUBLIC_DRUPAL_BASE_URL`.

## Page titles in Drupal (exact strings):
- `Home`
- `About`
- `Contact`
- (Verified: Case-sensitive, exactly as required for Phase 2 filters).
