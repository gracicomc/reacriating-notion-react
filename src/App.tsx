export function App() {
  return (
    <div className='min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
      <div className='bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]'>
        <aside className='bg-zinc-50 border-r border-r-zinc-100 p-4'>
          <div className='flex gap-2 group'>
            <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400'></button>
            <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400'></button>
            <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400'></button>
          </div>
        </aside>
        <main className='p-4'>
          <div className='max-w-[700px] mx-auto pt-16 prose prose-emerald'>
            <header>
              <h1>
                The Power of Tailwind CSS: Simplifying Styling for Web
                Developers
              </h1>
              <p>Published on April 1, 2024</p>
            </header>

            <p>
              You can learn more about this at{' '}
              <a href='https://rocketseat.com.br'>rocketseat.com.br</a>
            </p>

            <article>
              <p>
                In the world of web development, styling and designing user
                interfaces can be a daunting task. With countless CSS frameworks
                available, developers often find themselves juggling between
                classes, managing stylesheets, and struggling to maintain
                consistency across their projects. However, with the rise of
                Tailwind CSS, a utility-first CSS framework, developers now have
                a powerful tool at their disposal to streamline their styling
                process and enhance their productivity.
              </p>

              <h2>Advantages of Tailwind CSS</h2>

              <h3>1. Rapid Development</h3>
              <p>
                One of the key advantages of Tailwind CSS is its ability to
                facilitate rapid development. By leveraging utility classes,
                developers can quickly apply styles directly within their HTML
                markup without the need to write custom CSS. This approach
                eliminates the need to constantly switch between HTML and CSS
                files, resulting in a more efficient workflow.
              </p>

              <p>Example:</p>
              <pre>
                <code>
                  &lt;button class="bg-blue-500 hover:bg-blue-700 text-white
                  font-bold py-2 px-4 rounded"&gt; Button &lt;/button&gt;
                </code>
              </pre>

              <h3>2. Highly Customizable</h3>
              <p>
                Tailwind CSS offers a high degree of customization, allowing
                developers to tailor styles to meet the specific requirements of
                their projects. With its extensive list of utility classes,
                developers can easily modify colors, spacing, typography, and
                more, ensuring that their designs remain consistent and visually
                appealing.
              </p>

              <p>Example:</p>
              <pre>
                <code>
                  &lt;div class="bg-gray-200 p-4"&gt; &lt;p
                  class="text-blue-500"&gt;This is a custom-styled
                  paragraph.&lt;/p&gt; &lt;/div&gt;
                </code>
              </pre>

              <h3>3. Scalability</h3>
              <p>
                Scalability is another significant advantage of Tailwind CSS.
                Whether you're working on a small website or a large-scale
                application, Tailwind's utility-first approach scales
                effortlessly to meet the needs of any project. Additionally, its
                modular architecture promotes code reusability and simplifies
                maintenance, making it ideal for teams of all sizes.
              </p>

              <h3>4. Developer-Friendly</h3>
              <p>
                Designed with developers in mind, Tailwind CSS offers a
                straightforward and intuitive syntax that is easy to learn and
                master. By providing a comprehensive set of utility classes,
                developers can focus on building functionality without getting
                bogged down by complex CSS rules. This developer-friendly
                approach makes Tailwind CSS an excellent choice for both
                beginners and experienced developers alike.
              </p>

              <h3>5. Active Community and Ecosystem</h3>
              <p>
                Finally, Tailwind CSS benefits from a vibrant community and
                ecosystem that continues to grow and evolve. From official
                documentation and tutorials to third-party plugins and
                extensions, developers have access to a wealth of resources that
                facilitate learning and enhance productivity. Whether you're
                seeking guidance or looking to extend Tailwind's capabilities,
                the supportive community is always ready to assist.
              </p>

              <h2>Conclusion</h2>
              <p>
                In conclusion, Tailwind CSS has revolutionized the way web
                developers approach styling and design. With its emphasis on
                utility classes, customization options, scalability, and
                developer-friendliness, Tailwind CSS empowers developers to
                build beautiful and responsive user interfaces with unparalleled
                efficiency. Whether you're a solo developer or part of a larger
                team, integrating Tailwind CSS into your workflow can help you
                save time, reduce complexity, and deliver exceptional results.
              </p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
