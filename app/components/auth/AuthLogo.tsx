interface LogoProps {
    text: string;
    error: string;
}

export default function AuthLogo({text, error}: LogoProps) {
    return (
        <div className="flex flex-col gap-1 text-center mb-6">
            <h1 className="uppercase text-titleGray font-bold text-2xl">Web Crawler</h1>
            {error && <h1 className="text-red-700 text-lg">{error}</h1>}
            {!error && <h1 className="text-titleGray text-lg">{text}</h1>}
        </div>
    );
}