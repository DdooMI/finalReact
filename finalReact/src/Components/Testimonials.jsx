import TestimonialsCard from "../Cards/testimonialsCard"

function Testimonials() {
  return (
    <section
  className="py-20 px-8 md:px-12 lg:px-24 bg-gray-100 text-center"
  id="testimonials"
>
  <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-10">
    What Our Clients Say
  </h2>
  <div className="flex flex-wrap justify-center gap-8">
   <TestimonialsCard img = "src\assets\woman 1.jpeg"/>
   <TestimonialsCard img = "src\assets\woman 2.jpeg"/>
   <TestimonialsCard img = "src\assets\man.jpeg"/>
  </div>
</section>

  )
}

export default Testimonials