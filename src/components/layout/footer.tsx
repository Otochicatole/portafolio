
export default function Footer() {

    return (
        <div
            className="w-full h-auto z-0 pb-[60px] sm:pb-0"
        >
            <div className="relative w-full h-full overflow-hidden">
                <img
                    loading="eager"
                    src="./footer.jpg"
                    className="w-full max-h-[500px] object-cover object-bottom"
                />
                <div className="absolute top-0 w-full h-50 sm:h-100 lg:h-100 bg-gradient-to-b from-[#0e0e0e] via-[#0e0e0ec4] to-transparent"></div>
            </div>
        </div>
    );
}