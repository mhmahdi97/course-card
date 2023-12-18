import CourseCard from "./Components/CourseCard"


function App() {

  const courseData = [
    {
      id: 1,
      name: 'This is a one line title',
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      price: 1050,
      discount: 300,
      discountedPrice: 800
    },
    {
      id: 2,
      name: 'This is a one line title',
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      price: 1050,
      discount: null,
      discountedPrice: null
    },
    {
      id: 3,
      name: 'This is a one line title',
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      price: null,
      discount: null,
      discountedPrice: null
    },
  ]

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {
            courseData.map(card => <CourseCard
              key={card.id}
            
            ></CourseCard>)
          }
        </div>
      </div>
        
    </>
  )
}

export default App
