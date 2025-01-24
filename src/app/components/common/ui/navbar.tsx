import Link from "next/link";

function Navbar() {
  return (
      <nav className={'fixed top-0 left-0 right-0 flex px-6 py-4 items-center bg-transparent backdrop-blur-sm z-50'}>
        <Link href="/"
           className="roboto-regular text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-3xl font-bold">
          <span>
            SnipURL
          </span>
        </Link>
      </nav>
  )
}

export default Navbar
