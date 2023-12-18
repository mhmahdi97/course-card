import CourseCard from "./Components/CourseCard"


function App() {

  const courseData = [
    {
      name: 'This is a one line title',
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      price: 1050,
      discount: 300,
      discountedPrice: 800
    },
    {
      name: 'This is a one line title',
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      price: 1050,
      discount: null,
      discountedPrice: null
    },
    {
      name: 'This is a one line title',
      description: 'Two line paragraph Lorem ipsum dolor sit amet, consectetur',
      price: null,
      discount: null,
      discountedPrice: null
    },
  ]

  return (
    <>
      <CourseCard></CourseCard>
        
    </>
  )
}

export default App
