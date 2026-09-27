import Link from 'next/link'
function notFound() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-9xl font-extrabold text-foreground">404</h1>
                        <h2 className="text-3xl font-bold mt-4">Page not found</h2>
                        <p className="py-6 text-base-content/70">
                            Sorry, we couldn’t find the page you’re looking for. Check the URL or go back to the home page.
                        </p>
                        <Link href="/" className="text-black btn bg-foreground">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default notFound
