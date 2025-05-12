import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      {/* Gradient section */}
      <div className="bg-[linear-gradient(215.42deg,_#FF61D3_15.37%,_#1547FA_53.32%,_#0CE1FF_86.8%)] px-4 h-[800px] sm:px-6 md:px-8 lg:px-[135px] pb-40 md:pb-60">
        <nav className="flex flex-col sm:flex-row justify-between items-center pt-[32px] pb-6">
          <div className="left flex items-center gap-[8.69px]">
            <Image src="/logo.png" alt="Logo" width={33} height={29} />
            <span className="text-[20px] text-white font-semibold">AI Video</span>
          </div>
          <div className="center hidden md:flex items-center list-none gap-[48px] text-[18px] text-[#D0D9FC]">
            <li className="cursor-pointer hover:text-white transition-colors">
              Features
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              Products
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              Resources
            </li>
            <li className="cursor-pointer hover:text-white transition-colors">
              Pricing
            </li>
          </div>
          <div className="right flex items-center gap-4 mt-4 sm:mt-0">
            <Link href='/signup'>
            <button className="text-white font-medium px-4 py-2 hover:text-[#0b0d18] hover:bg-white rounded-sm transition-colors">
              Sign Up
            </button>
            </Link>
            <Link href='/signin'>
            <button className="text-white font-medium px-4 py-2 hover:text-[#0b0d18] hover:bg-white rounded-sm transition-colors">
              Sign In
            </button>
            </Link>
          </div>
        </nav>

        <main className="flex flex-col items-center justify-center text-center mt-16 md:mt-24 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
            AI Video Editing Made Simple
          </h1>
          <p className="text-[#D0D9FC] mt-6 max-w-2xl text-lg">
            The best video editors in town. The epitome of video editing, best
            effects and cuts Videos for a better life For a better watching
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <button className="bg-[#FF8A4C] text-white font-medium rounded-full px-8 py-4 hover:bg-opacity-90 transition-colors">
              Try for free
            </button>
            <button className="flex items-center justify-center gap-2 text-white font-medium rounded-full px-8 py-4 border border-white/30 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5"></div>
              </div>
              Watch video
            </button>
          </div>
        </main>
      </div>

      {/* Product showcase (straddling both sections) */}
      <div className="w-full max-w-6xl mx-auto px-4 -mt-32 md:-mt-48 rounded-xl overflow-hidden shadow-2xl border border-gray-200">
        <Image
          src="/dashboard2.png"
          alt="Revise Video Editor Interface"
          width={1170}
          height={700}
          className="w-full h-auto"
        />
      </div>

      {/* Features section */}
      <div className="bg-white pt-32 pb-20 px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Awesome features for your videos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The best video editors in town. The video editing, best effects
              and cuts videos for a better life
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            {/* Feature 1: Simple editing */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Simple editing
              </h3>
              <p className="text-gray-600 mb-6">
                We made editing very simple and easy. Crop, trim, adjust or
                resize with one click. Best effects and cuts videos for a better
                life For a better watching experience.
              </p>
              <div className="mt-auto rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/shoping.png"
                  alt="Simple editing interface"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 2: Multi-layer timeline */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Multi-layer timeline
              </h3>
              <p className="text-gray-600 mb-6">
                We made editing very simple and easy. Easily mix/arrange video
                clips in the timeline by dragging line by line. It&aposs so easy
                and super fast.
              </p>
              <div className="mt-auto space-y-4">
                {/* Blue track with two segments */}
                <div className="border-2 border-blue-500 rounded-md p-1 bg-blue-100">
                  <div className="flex gap-2 h-8">
                    <div className="bg-blue-500 w-1/3 rounded-sm"></div>
                    <div className="bg-blue-500 w-1/3 rounded-sm"></div>
                  </div>
                </div>

                {/* Purple track with audio waveform */}
                <div className="bg-purple-500 rounded-md p-2 h-10 flex items-center">
                  <div className="w-full flex items-center justify-between">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-white w-1 h-4"
                        style={{
                          height: `${Math.sin(i * 0.5) * 100 * 0.3 + 20}%`,
                          marginLeft: "1px",
                          marginRight: "1px",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Red track with one segment */}
                <div className="border-2 border-red-500 rounded-md p-1 bg-red-100">
                  <div className="bg-red-500 h-8 w-full rounded-sm"></div>
                </div>

                {/* Orange track with three segments */}
                <div className="border-2 border-orange-500 rounded-md p-1 bg-orange-100">
                  <div className="flex gap-2 h-8">
                    <div className="bg-orange-500 w-1/4 rounded-sm"></div>
                    <div className="bg-orange-500 w-1/3 rounded-sm"></div>
                    <div className="bg-orange-500 w-1/4 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Integrations section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Super integrations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The best video editors in town. The video editing, best effects
              and cuts videos for a better life
            </p>
          </div>

          {/* Auto-created subtitle feature */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              {/* Left side - gradient background with text */}
              <div className="bg-[linear-gradient(215.42deg,_#FF61D3_15.37%,_#1547FA_53.32%,_#0CE1FF_86.8%)] p-8 md:p-12 flex flex-col justify-center md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Auto-created subtitle
                </h3>
                <p className="text-white/90">
                  You need one click to create subtitle. We made editing very
                  simple and easy. Easily mix/arrange video clips in the
                  timeline by dragging line by line. Its so easy and supers fast
                  and flexible.
                </p>
              </div>

              {/* Right side - person with subtitle */}
              <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-6 md:w-1/2 relative">
                <div className="bg-pink-200 rounded-xl overflow-hidden relative">
                  <Image
                    src="/Group 17631.png"
                    alt="Person with auto-generated subtitles"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />

                  {/* Subtitle overlay */}
                  <div className="absolute bottom-6 left-0 right-0 mx-auto w-5/6 bg-red-300/80 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                    Hello everyone, welcome to my youtube channel. Hope you guys
                    are fine and doing well
                  </div>

                  {/* CC button */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm">
                    <div className="relative">
                      CC
                      {/* Finger pointer */}
                      <div className="absolute -bottom-8 -right-8 w-8 h-8 transform rotate-45">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-r-2 border-orange-400 transform -rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Design to video import section */}
      <div className="bg-white py-20 px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Design to video import
              </h2>
              <p className="text-gray-600">
                Move your design to video. We made editing very simple and easy.
                Easily mix/arrange video clips in the timeline by dragging line
                by line. Its so easy and supers fast and flexible.
              </p>
            </div>

            {/* Right side - Design tools diagram */}
            <div className="md:w-1/2 relative">
              <Image
                src="/Group 17641.png"
                alt="Design to video import diagram"
                width={500}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stock photos and video templates section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">
              Media <span className="text-[#FF61D3]">elements</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-center mx-auto">
              The best video editors in town. The video editing, best effects
              and cuts videos for a better life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Free stock photos and music */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Free stock photos and music
              </h2>
              <p className="text-gray-600 mb-8">
                We made editing very simple and easy. Crop, trim, adjust or
                resize with one click. Best effects and cuts videos for a better
                life For a better watching experience.
              </p>

              <div className=" ">
                {/* Stock photo grid */}
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <Image
                      src="/Group 17643.png"
                      alt="Headphones and accessories"
                      width={498}
                      height={265}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stunning video templates */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stunning video templates
              </h2>
              <p className="text-gray-600 mb-8">
                We made editing very simple and easy. Easily mix/arrange video
                clips in the timeline by dragging line by line. Its so easy and
                supers fast.
              </p>

              <div className="relative h-[400px]">
                {/* Stacked video templates */}
                <div className="absolute top-0 right-0 w-[90%] h-[300px] rounded-lg overflow-hidden shadow-md transform rotate-6 z-10">
                  <Image
                    src="/Rectangle 137.png"
                    alt="Video template - lavender field"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-4 right-4 w-[90%] h-[300px] rounded-lg overflow-hidden shadow-md transform rotate-3 z-20">
                  <Image
                    src="/3.png"
                    alt="Video template - ocean view"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-8 right-8 w-[90%] h-[300px] rounded-lg overflow-hidden shadow-md transform rotate-1 z-30">
                  <Image
                    src="/2.png"
                    alt="Video template - colorful buildings"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-12 right-12 w-[90%] h-[300px] rounded-lg overflow-hidden shadow-md z-40">
                  <div className="relative w-full h-full">
                    <Image
                      src="/1.png"
                      alt="Video template - desert road with van"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      HD 1:20
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#FFC62A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Online video editor we <br /> made super easy
          </h2>
          <p className="text-gray-800 mb-10">
            Make a video from other video clips and photos. No downloads
            required
          </p>

          {/* Upload box */}
          <div className="border-2 border-dashed border-black rounded-lg px-6 py-10 flex flex-col items-center sm:flex-row sm:justify-center gap-4">
            <span className="text-gray-700">Drop files here or</span>

            {/* Upload Button */}
            <button className="bg-[#3E5BFF] text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              + Add Your Files
            </button>

            {/* Dropdown Icon */}
            <button className="bg-[#3E5BFF] text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <footer className="bg-slate-950 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Use Revise For */}
          <div>
            <h3 className="text-lg font-medium mb-4">Use Revise For</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Promo Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Marketing Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Invitation Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">YouTube Intro Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Anniversary Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Trailer Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Slideshow Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Video Editor</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Movie Maker</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white flex items-center">
                View More <span className="ml-1">›</span>
              </Link></li>
            </ul>
          </div>

          {/* Column 2 - Tools */}
          <div>
            <h3 className="text-lg font-medium mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Free Video Converter</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Free Video Trimmer</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Free Video Compressor</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Free Screen Recorder</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white flex items-center">
                All Tools <span className="ml-1">›</span>
              </Link></li>
            </ul>

            <h3 className="text-lg font-medium mb-4 mt-8">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Stock Video</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Category</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Learn</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Support</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Features */}
          <div>
            <h3 className="text-lg font-medium mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Video Trimmer</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Add Text</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Add Music</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white flex items-center">
                All Features <span className="ml-1">›</span>
              </Link></li>
            </ul>

            <h3 className="text-lg font-medium mb-4 mt-8">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Affiliate</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Terms</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Security</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Cookies</Link></li>
            </ul>
          </div>

          {/* Column 4 - Language and Social */}
          <div className="flex flex-col items-end">
            <div className="mb-6">
              <select className="bg-transparent border border-gray-600 rounded py-2 px-4 focus:outline-none focus:border-white">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div className="flex space-x-4 mb-8">
              <Link href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <FaFacebookF className="text-gray-300" />
              </Link>
              <Link href="#" className="bg-orange-500 hover:bg-orange-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <FaLinkedinIn className="text-white" />
              </Link>
              <Link href="#" className="bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <FaTwitter className="text-gray-300" />
              </Link>
            </div>

            <div className="text-gray-400 text-sm">
              © UIHUT 2022 All Rights Reserved
            </div>

            <div className="mt-8">
              <Link href="#" className="bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded flex items-center transition-colors">
                <span className="mr-2">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="18" height="14" rx="1" stroke="white" strokeWidth="1.5"/>
                    <path d="M1 12H19" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </span>
                Revise For Desktop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
