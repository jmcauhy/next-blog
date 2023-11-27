import Layout from '../components/Layout'
import { load } from 'outstatic/server'
import ContentGrid from '../components/ContentGrid'
import markdownToHtml from '../lib/markdownToHtml'

const MAX_POSTS = 9

export default async function Index() {
   const { content, allPosts } = await getData()

   return (
      <Layout>
         <div className="max-w-6xl mx-auto px-5">
            <section className="mt-16 mb-16 md:mb-12">
               <div
                  className="prose lg:prose-2xl home-intro"
                  dangerouslySetInnerHTML={{ __html: content }}
               />
            </section>
            {allPosts.length > 0 && <ContentGrid title="Posts" items={allPosts} priority />}
         </div>
      </Layout>
   )
}

async function getData() {
   const db = await load()

   const page = await db
      .find({ collection: 'pages', slug: 'home' }, ['content'])
      .first()

   const content = await markdownToHtml(page.content)

   const allPosts = await db
      .find({ collection: 'posts' }, [
         'title',
         'publishedAt',
         'slug',
         'coverImage',
         'description',
         'tags',
      ])
      .limit(MAX_POSTS)
      .sort({ publishedAt: -1 })
      .toArray()

   return { content, allPosts }
}
