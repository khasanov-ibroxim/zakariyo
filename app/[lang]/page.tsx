import {ThemeToggle} from "@/components/ThemeToggle";


export default async function Home(){
    return(
        <>
            <div className="min-h-screen bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 py-8">
                    <ThemeToggle/>

                    {/* Test Section */}
                    <div className="mt-8 space-y-4">
                        <h1 className="text-4xl font-bold text-black dark:text-white">
                            Dark & Light mode ishlayapti 😎
                        </h1>

                        <p className="text-gray-800 dark:text-gray-200">
                            Bu yerda ranglar to'g'ri ishlashi kerak. Dark mode va Light mode o'rtasida almashinadi.
                        </p>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                    Card 1
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Bu karta ranglar bilan test qilish uchun
                                </p>
                            </div>

                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                                    Card 2
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Bu ham ranglar bilan test qilish uchun
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}