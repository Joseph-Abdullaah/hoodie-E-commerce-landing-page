import Banner from "@/components/banner"
import Navbar from "@/components/layout/navbar"
import Hero from "@/components/hero"
import NewDrops from "@/components/newdrops"
import Bento from "@/components/bento"
import StoryManifesto from "@/components/story-manifesto"
import FeaturedDrops from "@/components/featured-drops"
import ProductSpotlight from "@/components/product-spotlight"
import MovementBanner from "@/components/movement-banner"
import WhyShop from "@/components/why-shop"
import ShopCategories from "@/components/shop-categories"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/layout/footer"

export function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <NewDrops />
      <Bento />
      <StoryManifesto />
      <FeaturedDrops />
      <ProductSpotlight />
      <MovementBanner />
      <WhyShop />
      <ShopCategories />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
