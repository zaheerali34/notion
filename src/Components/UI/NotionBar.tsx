import Button from "./Button"

function NotionBar() {
  return (
    <div className="showBar w-full h-[55vh] absolute top-15 left-0 z-50 right-0 py-8 px-20 bg-white shadow-md shadow-zinc-200 flex items-center justify-between">
        <div className="w-full h-full flex flex-col">
          <span className="text-sm text-gray-500 px-4">Features</span>
          <ul className="mt-3 hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Notion AI</li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>

          <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Doc</li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>

          <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Wikis</li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>

          <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Projects</li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div className="w-full h-full flex flex-col">
          <span className="text-sm text-gray-500 px-4">Features</span>
          <ul className="mt-3 hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Enterprise Search <span className="bg-blue-100 text-blue-800 py-[1px] px-2 rounded-2xl text-[12px] font-semibold hover:bg-zinc-100 transition-all duration-200 cursor-pointer">
                New
              </span></li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>

          <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">AI Meeting Notes  <span className="bg-blue-100 text-blue-800 py-[1px] px-2 rounded-2xl text-[12px] font-semibold hover:bg-zinc-100 transition-all duration-200 cursor-pointer">
                New
              </span> </li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>

          <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Froms</li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>

          <ul className="hover:bg-gray-100 py-3 px-4 rounded-xl cursor-pointer">
            <li className="text-2xl font-bold text-zinc-700">Site</li>
            <li className="text-[13px] text-gray-500">Lorem ipsum dolor sit.</li>
          </ul>
        </div>

        <div className="w-full h-full flex flex-col">
          <span className="text-sm text-gray-500 px-4">Get Started</span>
          <ul className="mt-2 hover:bg-gray-100 py-1 px-4 rounded-md cursor-pointer">
            <li className="text-sm font-semibold text-zinc-700">Browse marketplace</li>
            <li className="text-[12px] text-gray-500 py-1">Templates for everything</li>
          </ul>

          <ul className=" hover:bg-gray-100 py-1 px-4 rounded-md cursor-pointer">
            <li className="text-sm font-semibold text-zinc-700">Browse marketplace</li>
            <li className="text-[12px] text-gray-500 py-1">Templates for everything</li>
          </ul>

          <ul className="hover:bg-gray-100 py-1 px-4 rounded-md cursor-pointer">
            <li className="text-sm font-semibold text-zinc-700">Browse marketplace</li>
            <li className="text-[12px] text-gray-500 py-1">Templates for everything</li>
          </ul>
        </div>

        <div className="w-full h-full ml-4 bg-gray-100 rounded-2xl py-4 px-6">
          <p className="font-semibold text-zinc-700 text-md">Try the Notion desktop app for a faster experience</p>
          <Button />
          <img src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fmeta%2Fstartups_background.png&w=384&q=75" alt="" className="w-2/4 mx-auto" />
        </div>
    </div>
  )
}

export default NotionBar