module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/app/favicon.ico (static in ecmascript, tag client)\n\nCaused by:\n- Missing content when trying to generate the content hash for StaticOutputAsset\n\nDebug info:\n- An error occurred while generating the chunk item [project]/app/favicon.ico (static in ecmascript, tag client)\n- Execution of <StaticUrlJsModule as EcmascriptChunkPlaceable>::chunk_item_content failed\n- Execution of <StaticOutputAsset as OutputAsset>::path failed\n- Missing content when trying to generate the content hash for StaticOutputAsset");

}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/favicon.ico.mjs'\n\nInput image not found\n\nDebug info:\n- Execution of <StructuredImageFileSource as Asset>::content failed\n- Execution of get_meta_data failed\n- Input image not found");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/lib/drupal.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPageByTitle",
    ()=>fetchPageByTitle
]);
const DRUPAL_BASE_URL = ("TURBOPACK compile-time value", "https://dev-drupal-poc-demo.pantheonsite.io");
/**
 * Normalizes a Drupal JSON:API node object into a clean flat object.
 * Based on field map in DRUPAL_API_NOTES.md
 */ function normalizePage(node, included = []) {
    if (!node) return null;
    const attributes = node.attributes || {};
    const relationships = node.relationships || {};
    // Resolve hero image URL
    let heroImageUrl = "";
    const heroImageId = relationships.field_hero_image?.data?.id;
    if (heroImageId) {
        const media = included.find((item)=>item.type === 'media--image' && item.id === heroImageId);
        if (media) {
            const fileId = media.relationships?.field_media_image?.data?.id;
            if (fileId) {
                const file = included.find((item)=>item.type === 'file--file' && item.id === fileId);
                if (file && file.attributes?.uri?.url) {
                    const relativeUrl = file.attributes.uri.url;
                    heroImageUrl = relativeUrl.startsWith('http') ? relativeUrl : `${DRUPAL_BASE_URL}${relativeUrl}`;
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
async function fetchPageByTitle(title) {
    try {
        const url = new URL(`${DRUPAL_BASE_URL}/jsonapi/node/page`);
        url.searchParams.set("filter[title]", title);
        url.searchParams.set("include", "field_hero_image,field_hero_image.field_media_image");
        const response = await fetch(url.toString(), {
            next: {
                revalidate: 10
            },
            headers: {
                "Accept": "application/vnd.api+json"
            }
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
}),
"[project]/components/HeroBanner.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "HeroBanner-module__9FIPKW__button",
  "container": "HeroBanner-module__9FIPKW__container",
  "description": "HeroBanner-module__9FIPKW__description",
  "hero": "HeroBanner-module__9FIPKW__hero",
  "title": "HeroBanner-module__9FIPKW__title",
});
}),
"[project]/components/HeroBanner.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/HeroBanner.module.css [app-rsc] (css module)");
;
;
;
function HeroBanner({ title, description, ctaLabel, ctaLink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].hero,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/HeroBanner.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                    children: description
                }, void 0, false, {
                    fileName: "[project]/components/HeroBanner.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                ctaLabel && ctaLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: ctaLink,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                    children: ctaLabel
                }, void 0, false, {
                    fileName: "[project]/components/HeroBanner.js",
                    lineNumber: 11,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroBanner.js",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HeroBanner.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/page.js', file not found");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ludsii._.js.map