import { WorkUs } from "@/features/WorkUs/WorkUs";
import { Questions } from "@/features/Questions/Questions";
import { Business } from "@/features/Business/Business";
import { Hero } from "@/features/Hero/Hero";
import { Way } from "@/features/Way/Way";


export default function Home() {
  return (
    <main>
        <Hero />
        <WorkUs/>
        <Way/>
        <Business/>
        <Questions/>
    </main>
  );
}
