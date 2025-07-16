// components/UpcomingEvents.jsx
export default function UpcomingEvents() {
  return (
    <div className="bg-[#1f1f1f] text-zinc-600 p-6 rounded-xl flex mt-20 flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto shadow-lg">
      {/* Left Panel */}
      <div className="flex-1 p-6 rounded-lg flex flex-col justify-between">
        <div className="flex items-start flex-col gap-2">
          <i className="ri-calendar-todo-fill text-3xl"></i>
          <div>
            <h2 className="text-lg font-[Notion-Regular] font-semibold leading-6">
              Connect AI Meeting Notes with your Calendar events
            </h2>
            <p className="text-sm mt-1 font-semibold py-2 text-gray-600">
              Join calls, transcribe audio, and summarize meetings all in Notion.
            </p>
          </div>
        </div>
        <a
          href="#"
          className="text-blue-400 mt-4 hover:underline text-sm"
        >
          Connect Notion Calendar
        </a>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6 rounded-lg">
        <h3 className="text-sm text-gray-600 mb-4">Upcoming events</h3>

        {/* Event 1 */}
        <div className="mb-6">
          <p className="text-xs text-gray-600">Today · Jul 14</p>
          <div className="flex items-start justify-between mt-1">
            <div>
              <h4 className="font-semibold">Team standup</h4>
              <p className="text-sm text-gray-600">9 AM · Office</p>
            </div>
            <button className="bg-[#3a3a3a] text-gray-600 text-sm px-3 py-1 rounded flex items-center gap-2">
              🎥 Join and take notes
            </button>
          </div>
        </div>

        {/* Event 2 */}
        <div>
          <p className="text-xs text-gray-600">Tue · Jul 15</p>
          <div className="flex items-start justify-between mt-1">
            <div>
              <h4 className="font-semibold">Project check-in</h4>
              <p className="text-sm text-gray-600">10 AM · Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
