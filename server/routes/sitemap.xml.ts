// ignore no-restricted-syntax in this file
/* eslint-disable no-restricted-syntax */

import { SitemapStream, streamToPromise } from "sitemap"

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { serverQueryContent } from "#content/server"

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: "https://amittai.work",
    xslUrl: "/sitemap.xsl",
  })

  for (const doc of docs) {
    if (!doc._partial && doc.category !== "links") {
      sitemap.write({
        url: doc._path,
        changefreq: "monthly",
        priority: 1,
      })
    }
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
//
