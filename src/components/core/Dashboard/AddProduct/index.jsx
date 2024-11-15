import RenderSteps from "./RenderSteps"

export default function AddProduct() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Product
          </h1>
          <div className="flex-1">
             <RenderSteps /> 
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
    <p className="mb-8 text-lg text-richblack-5">🍇 Product Upload Tips</p>
    <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
        <li>Set the product price or mark it as a featured item.</li>
        <li>Recommended image size for product thumbnail is 1024x576.</li>
        <li>Use high-quality images to highlight product details like texture and color.</li>
        <li>Product Details section is where you specify attributes like weight, size, and origin.</li>
        <li>Specify variants if available (e.g., sizes, types, packaging options).</li>
        <li>Provide a detailed description of the dry fruit or nut, including any unique benefits.</li>
        <li>Add nutritional information, if available, in the Additional Data section.</li>
        <li>Use the Announcements section to inform customers about discounts, offers, or new stock.</li>
    </ul>
    </div>
      </div>
    </>
  )
}
