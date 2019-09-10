<template>
  <Layout>
    <div class="p-8 text-gray-700">
      <h1 class="text-xl text-gray-900">Vue Component Browser for Gridsome</h1>
      <p>Easily display your vue components</p>
      <div class="text-base my-6">
        <h2 class="font-semibold text-lg text-gray-900 sticky top-0">Getting Started</h2>
        <h3 class="font-semibold text-md text-gray-900 sticky top-0">Setup</h3>
        <ol class="list-decimal shadow m-6 py-4 px-16">
          <li>Run <pre>git clone https://github.com/u12206050/gridsome-vue-starter.git</pre></li>
          <li>Run <pre>cd gridsome-vue-starter</pre></li>
          <li>Run <pre>npm install</pre></li>
          <li>Run <pre>npm start</pre></li>
        </ol>

        <h3 class="font-semibold text-md text-gray-900">Adding Components</h3>
        <ol class="list-decimal shadow m-6 py-4 px-16">
          <li>Organize all components you want to browse in the <pre>src/library</pre> folder</li>
          <li>Add <pre>faker.hacker.phrase</pre> functions as comments above your props. <a class="text-blue-700 font-semibold text-sm" target="_blank" href="https://www.npmjs.com/package/faker">View Faker Functions →</a></li>
        </ol>

        <h3 class="font-semibold text-md text-gray-900">Props</h3>
        <h4>Adding predefined options to list for a prop:</h4>
        <div class="shadow m-6 py-4 px-16">
          <p>Add a comment right above the type of the prop containing a csv list of options prefixed with the phrase <pre>options:</pre></p>
          <Code :code="`// Button.vue within <script>
{
  props: {
    color: {
      // options: gray,red,orange,yellow,green,teal,blue,indigo,purple,pink
      type: String,
      default: 'gray'
    }
  }
}`" />
          <p>You can optionally specify a default value.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Overview'
  },
  components: {
    Code: () => import('~/components/Code.vue')
  }
}
</script>
