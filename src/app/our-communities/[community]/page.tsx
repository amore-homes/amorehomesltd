import AmoreCommunitySection from "@/components/amore"
import BlogPostSection from "@/components/blog-post"
import {
  createContentClient,
  getEntryBySlug,
} from "@/components/data/contentful"
import LummiCommunitySection from "@/components/lummi"

const client = createContentClient()
export async function generateStaticParams() {
  const queryOptions = {
    content_type: "homepageOurCommunities",
    select: "fields.slug",
  }
  const stories = await client.getEntries(queryOptions)
  return stories.items.map((story) => ({
    slug: story.fields.slug,
  }))
}
function updateKey(str: string) {
  if (typeof str !== "string") return ""
  const regex = /-/g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, " ")
  return update
}
export default async function HomePage({ params }: any) {
  const { community } = params
  const blog = await getEntryBySlug(community, "homepageOurCommunities")
  const { image }: any = blog

  return (
    <div className="w-full">
      {/* Community */}
      {updateKey(community).includes("lummi") ? (
        <LummiCommunitySection imageData={image} name={updateKey(community)} />
      ) : (
        <AmoreCommunitySection imageData={image} name={updateKey(community)} />
      )}

      {/* *** BLOG *** */}
      <BlogPostSection />
    </div>
  )
}
