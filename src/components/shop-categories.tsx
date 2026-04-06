const categories = [
  {
    title: "Woman",
    image: "/LD23tJ1bKNEn5JF4I0ydbiQDRM.jpeg",
    alt: "Women's collection",
  },
  {
    title: "Man",
    image: "/5BiIzCvuaFWfMol4ShSeCtMwKas.jpeg",
    alt: "Men's collection",
  },
]

export default function ShopCategories() {
  return (
    <section className="mx-auto grid w-full max-w-300 gap-5 px-6 py-18 md:px-10 lg:grid-cols-2">
      {categories.map((category) => (
        <article
          key={category.title}
          className="group relative overflow-hidden rounded-[2rem] bg-muted"
        >
          <img
            src={category.image}
            alt={category.alt}
            className="h-[34rem] w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <h2 className="text-6xl font-black uppercase tracking-[-0.08em] text-white md:text-7xl">
              {category.title}
            </h2>
          </div>
        </article>
      ))}
    </section>
  )
}
