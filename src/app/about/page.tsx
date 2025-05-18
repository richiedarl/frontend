export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About SongDis</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <strong>SongDis</strong> – your go-to demo marketplace for exploring frontend features!
        This project was built with modern web technologies including:
      </p>
      <ul className="list-disc pl-5 text-gray-600 mb-4">
        <li>Next.js App Router</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Reusable Components</li>
        <li>Mock & API-integrated product data</li>
        <li>Simple cart functionality (coming soon!)</li>
      </ul>
      <p className="text-gray-600">
        It is part of a frontend test project, focused on clean architecture, great developer experience,
        and modern UI practices. Built by Darlington Okorie.
      </p>
    </div>
  );
}
