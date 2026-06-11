import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import { MY_EXPERIENCE } from '@/lib/data';
import Experiences from './_components/Experiences';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            {MY_EXPERIENCE.length > 0 && <Experiences />}
            <ProjectList />
        </div>
    );
}
