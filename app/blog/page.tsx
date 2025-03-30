import BlogList from "./BlogList";

export const metadata = {
  title: "Blog | Acquiescent Consultancy Services",
  description: "Latest insights, tips, and industry updates from Acquiescent Consultancy Services",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Blog</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <BlogList />
        </div>
      </section>
    </main>
  );
}
