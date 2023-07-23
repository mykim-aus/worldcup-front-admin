import LocaleSwitcher from './LocaleSwitcher';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 inset-x-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2023 My Website</p>
        <div className="flex items-center">
          <LocaleSwitcher />
        </div>
      </div>
    </footer>
  );
}
