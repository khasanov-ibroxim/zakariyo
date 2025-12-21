import {ThemeToggle} from "@/components/ThemeToggle.tsx";


export default async function Home(){
    return(<>
        <ThemeToggle/>
        <div className="bg-white  text-black dark:bg-black dark:text-white">
            Dark & Light mode ishlayapti 😎
        </div>

    </>)
}