import Hints from "./Hints";

export default function About() {
  return (
    <div className="bg-backgroundDiv2 h-screen">
      <h1>About Me</h1>
      <div className="flex text-gray-50 md:mx-12">

        <div className="flex flex-col md:pr-12">

            <div>
                <Hints />
            </div>

            <div className="mt-4">
                <p className="font-light">
                As an accomplished programmer, I derive immense joy from conquering intricate challenges and sharing the wonders of computer science. With 5 years of coding expertise and a journey that began with learning C++ at the age of 9, my fascination with computers sparked at 5 years old, igniting a relentless drive to unravel their endless possibilities and inspire others to do the same.
                </p>
            </div>

        </div>
     
        <div>
            <img src="computer.jpg" className="max-w-96 rounded-2xl"></img>
        </div>

      </div>
    </div>
  );
}
