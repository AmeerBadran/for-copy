export default function Footer() {
  return (
    <div className="h-24 w-full absolute bottom-0 text-white flex flex-col items-center justify-center">
      <p className="text-sm">© 2024 شركتنا. جميع الحقوق محفوظة.</p>
      <div className="flex mt-2 gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          فيسبوك
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          تويتر
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          لينكدإن
        </a>
      </div>
    </div>
  );
}