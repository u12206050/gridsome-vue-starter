<template>
  <div>
    <ArticleOverlay 
      :type="article.type"
      :title="article.title"
      :subtitle="article.subtitle"
      :author="article.author"
      :excerpt="article.excerpt"
      :timeToRead="article.timeToRead"
      :bgImage="article.bgImage"
    />
    <ArticleOverlay 
      :type="quote.type"
      :quote="quote.quote"
      :tagline="quote.tagline"
      :timeToRead="quote.timeToRead"
      :bgImage="quote.bgImage"
      :author="article.author"
    />
  </div>
</template>

<script>
import ArticleOverlay from './ArticleOverlay.vue'
export default {
  data() {
    return {
      article: {
        type: 'Article',
        title: '"At Your word" - the motto that brings results',
        subtitle: 'Why Great Stories Always Hurt',
        excerpt: 'Do you obey God\'s Word and His leading, without delay or reasoning? Try it, and experience how it really works!',
        author: 'Milenko van der Staal',
        timeToRead: 4,
        bgImage: 'https://images.unsplash.com/photo-1539636384427-16777e191b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
      },
      quote: {
        type: 'Quote',
        quote: '"We cannot make any progress at all on the way of life just by relying on Christ’s substitutional obedience."',
        tagline: '—Kaare Johan Smith, from The Secret to Following Jesus',
        author: 'Milenko van der Staal',
        timeToRead: 25,
        bgImage: 'https://images.unsplash.com/photo-1539636384427-16777e191b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
      }
    }
  },
  components: {
    ArticleOverlay
  }
}
</script>