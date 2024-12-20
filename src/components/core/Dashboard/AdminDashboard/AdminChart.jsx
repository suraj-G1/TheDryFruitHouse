import { useState } from "react"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)

export default function AdminChart({ products }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("customer")

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = []
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
      colors.push(color)
    }
    return colors
  }

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: products?.map((product) => product.productName),
    datasets: [
      {
        data: products?.map((product) => product?.customerPurchased?.length),
        backgroundColor: generateRandomColors(products?.length),
      },
    ],
  }

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: products?.map((product) => product.productName),
    datasets: [
      {
        data: products?.map((product) => product.prize * product?.customerPurchased.length),
        backgroundColor: generateRandomColors(products?.length),
      },
    ],
  }

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
  }

  return (
    <div className="flex flex-1 flex-col gap-y-2 rounded-md bg-richblack-800 p-2">
      <p className="text-lg font-bold text-richblack-5">Visualize</p>
      <div className="space-x-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("customer")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "customer"
              ? "bg-richblack-700 text-yellow-50"
              : "text-yellow-400"
          }`}
        >
          Customer
        </button>
        {/* Button to switch to the "income" chart */}
        <button
          onClick={() => setCurrChart("income")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "income"
              ? "bg-richblack-700 text-yellow-50"
              : "text-yellow-400"
          }`}
        >
          Income
        </button>
      </div>
      <div className="relative mx-auto aspect-square h-[400px] w-full">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          data={currChart === "customer" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  )
}
