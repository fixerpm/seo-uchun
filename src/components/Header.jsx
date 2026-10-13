import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold tracking-tight text-gray-900 transition hover:opacity-70"
                >
                    OSON <span className="text-blue-600">PRAVA</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        Bosh sahifa
                    </Link>

                    <Link
                        href="/products"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        Products
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        Aloqa
                    </Link>

                    {/* Kirish */}
                    <Link
                        href="/login"
                        className="ml-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
                    >
                        Kirish
                    </Link>
                </nav>
            </div>
        </header>
    );
}