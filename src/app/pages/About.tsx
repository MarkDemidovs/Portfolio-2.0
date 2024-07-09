import Hints from "../components/Hints";

export default function About() {
  return (
    <div className="bg-backgroundDiv2 h-screen">
      <h1 className="text-4xl text-offwhite md:mx-12 pt-3">About Me</h1>
      <div className="flex flex-row justify-center text-offwhite">

        <div className="flex flex-col">

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
