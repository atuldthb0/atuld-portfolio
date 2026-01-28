import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Atul Raj',
  description:
    'Helping brands thrive in the digital world. Located in India. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Atuld. This site was impossible without Jatin and Ofcourse Dennis Snellenberg.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
