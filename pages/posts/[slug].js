import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Header from '../../components/header'
import Container from '../../components/container'
//import PostHeader from '../../components/post-header'
import PostBody from '../../components/post-body'

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post }) {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Container>
            <Header />
            { router.isFallback ? (
              "Loading…"
            ) : (
              <>
                <article>
                 
                  <PostBody content={post.content} />
                  
                </article>
    
                }
              </>
            )
        }</Container>
         
      )
}

export async function getStaticProps({params, preview = false, previewData }) {
    const data = await getPostAndMorePosts(params.slug, preview, previewData)
    
    return {
        props: { 
            post: data.post,
        },
    }
  }

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
      fallback: true,
    }
  }