import CourseCard from "./Components/CourseCard";



function App() {

  const courseData = [
    {
      id: 1,
      name: 'This is a one line title',
      image: "/course-images/img-1.png",
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      listPrice: 1050,
      discount: 300,
      price: 750
    },
    {
      id: 2,
      name: 'This is a one line title',
      image: "/course-images/img-2.png",
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      listPrice: null,
      discount: null,
      price: 750
    },
    {
      id: 3,
      name: 'This is a one line title',
      image: "/course-images/img-3.png",
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      listPrice: null,
      discount: null,
      price: null
    },
  ]

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            courseData.map(card => <CourseCard
              key={card.id}
              card={card}
            ></CourseCard>)
          }
        </div>
        
      </div>
        
    </>
  )
}

export default App
