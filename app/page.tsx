 export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Lonstrin's work
          </h1>

          <div className="space-x-6">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>

            <a href="#" className="hover:text-blue-500">
              About
            </a>

            <a href="#" className="hover:text-blue-500">
              Projects
            </a>

            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-4">
          Hi, i'm a stupid man who wants to become succse 👋
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I am learning React, TypeScript, Tailwind CSS, and Next.js.
          This is my first modern web application. but via open AI :(
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          CONTACT ME: Abigail.lonstrin@gmail.com
        </button>
      </section>

      {/* Card Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">
           目标
          </h3>

          <p className="text-gray-600">
           争取通过零基础学习达到可观的水平 
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">
            动机
          </h3>

          <p className="text-gray-600">
            打工实在是苦！正所谓万般皆下品，唯有功夫高
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">
            为何如此自嘲且不自量力？
          </h3>

          <p className="text-gray-600">
            反正都这么烂了，与其继续烂下去不如试试能不能自己搞鼓出一番成就！尽人事，听天命
          </p>
        </div>
      </section>

    </main>
  );
}