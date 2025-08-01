

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {children}
        </div>
    );
}
