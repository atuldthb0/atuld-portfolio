import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
      <div className="container">
        <div className="prose prose-2xl max-w-6xl mx-auto text-center -mt-80">
          <p className="text-3xl font-extrabold mb-8">
            This site was impossible without{' '}
            <a
              href="https://www.instagram.com/jatin.darmwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              Jatin (@jatin.darmwal)
            </a>{' '}
            and Ofcourse Dennis Snellenberg.
          </p>
        </div>
      </div>
    </Transition>
  );
}
