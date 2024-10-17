import { createClient } from "contentful"

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })
}
const client = createContentClient()

// Function to handle retries
const withRetry = async (fn: any, retries = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (attempt === retries) {
        throw error
        // return []
      }
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
}

// Example usage of the client with retry logic
const getContentWithRetry = async (
  contentType: string,
  retries: number,
  delay: number
) => {
  let object = {
    content_type: contentType,
  }
  return await withRetry(() => client.getEntries(object), retries, delay)
}

export const getEntriesByType = async (type: any) => {
  try {
    const { items } = await getContentWithRetry(type, 3, 1000)
    return items
  } catch (error) {
    return []
  }
}

export const getEntryBySlug = async (slug: any, type: any) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  }
  try {
    const { items } = await client.getEntries(queryOptions)
    return items?.[0].fields
  } catch (error) {
    return []
  }
}
