import Hints from "../components/Hints";

export default function About() {
  return (
    <div className="bg-backgroundDiv2 h-fit pb-14">
      <h1 className="text-5xl text-offwhite md:mx-14 md:mb-8 md:pt-5  pt-3">About Me</h1>
      <div className="flex flex-row justify-center text-offwhite my-12">

        <div className="flex flex-col items-center">

            <div>
                <Hints />
            </div>

            <div className="mt-8">
                <p className="font-light max-w-96">
                As an accomplished programmer, I derive immense joy from conquering intricate challenges and sharing the wonders of computer science. With 5 years of coding expertise and a journey that began with learning C++ at the age of 9, my fascination with computers sparked at 5 years old, igniting a relentless drive to unravel their endless possibilities and inspire others to do the same.
                </p>
            </div>

        </div>
     
        <div>
            <img src="computer.jpg" className="max-w-96 rounded-2xl ml-52"></img>
        </div>

      </div>
    </div>
  );
}
