import SlackLayout from "./components/SlackLayout";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center px-6 py-16 overflow-hidden">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        See how Sitdown works
      </h1>
      <p className="text-lg text-gray-500 mb-12 text-center max-w-xl">
        Your team&apos;s daily standup, delivered right inside Slack.
      </p>
      <div className="relative">
        <div className="slack-scene">
          <SlackLayout />
        </div>
      </div>

      <div className="height-[1200px]"></div>
      <p className="text-lg text-gray-500 mb-12 mt-100 text-center max-w-xl">
        More content so you can see scrolling how it works.
      </p>
      <p className="text-lg text-gray-500 mb-12 text-center max-w-xl">
        More content so you can see scrolling how it works.
      </p>
      <p className="text-lg text-gray-500 mb-12 text-center max-w-xl">
        More content so you can see scrolling how it works.
      </p>
    </div>
  );
}
