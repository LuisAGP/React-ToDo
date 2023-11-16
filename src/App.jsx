import CrossIcon from "./componets/icons/CrossIcon";
import MoonIcon from "./componets/icons/MoonIcon";

const App = () => {
  return <div className="min-h-[100vh] bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain md:bg-cover">
    <header className="container mx-auto px-4">
      <div className="flex justify-between pt-4">
        <h1 className="text-3xl font-semibold uppercase text-white tracking-[0.4em]">Todo</h1>
        <button>
          <MoonIcon />
        </button>
      </div>
      <form className="bg-white rounded-md overflow-hidden py-3 px-4 flex gap-4 items-center mt-8">
        <span className="inline-block border-2 rounded-full w-5 h-5"></span>
        <input 
          className="w-full text-gray-400 outline-none"
          type="text"
          placeholder="Create a new Todo"
        />
      </form>
    </header>
    <main className="container mx-auto px-4 mt-4">
      <div className="bg-white rounded-md py-2 [&>article]:px-4 [&>article]:py-3">
        <article className="flex gap-2 py-2 px-4 border-b-gray-200 border-b">
          <button className="inline-block border-2 rounded-full w-5 h-5 flex-none"></button>
          <p className="text-gray-600 text-sm grow">Complete online JavaScript curse in bluuweb</p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>

        <article className="flex gap-2 border-b-gray-200 border-b">
          <button className="inline-block border-2 rounded-full w-5 h-5 flex-none"></button>
          <p className="text-gray-600 text-sm grow">Complete online JavaScript curse in bluuweb</p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>

        <article className="flex gap-2 py-2 border-b-gray-200 border-b">
          <button className="inline-block border-2 rounded-full w-5 h-5 flex-none"></button>
          <p className="text-gray-600 text-sm grow">Complete online JavaScript curse in bluuweb</p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>

        <article className="flex gap-2 border-b-gray-200 border-b">
          <button className="inline-block border-2 rounded-full w-5 h-5 flex-none"></button>
          <p className="text-gray-600 text-sm grow">Complete online JavaScript curse in bluuweb</p>
          <button className="flex-none">
            <CrossIcon />
          </button>
        </article>

        <section className="py-2 px-4 flex justify-between">
          <span className="text-gray-400">1 item left</span>
          <button className="text-gray-400">Clear completed</button>
        </section>
      </div>
    </main>

    <section className="container mx-auto px-4">
      <div className="bg-white mt-4 flex gap-4 justify-center px-4 py-2 rounded-md">
        <button className="text-blue-600">All</button>
        <button className="hover:text-blue-600">Active</button>
        <button className="hover:text-blue-600">Completed</button>
      </div>
    </section>

    <p className="text-center mt-4">Drag and drop to reorder list</p>
  </div>
}


export default App;