'use client';

import { BlackBox, Gap } from './Decoration';

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="flex"></div>
      {/* Row 1 */}
      <div className="flex">
        <div className="flex-grow"></div>
        <BlackBox />
        <Gap w={6} />
        <BlackBox />
      </div>
      {/* Row 2 */}
      <div className="flex">
        <BlackBox />
        <div className="flex-grow"></div>
        <BlackBox w={3} />
        <Gap w={5} />
        <BlackBox />
      </div>
      {/* Row 3 */}
      <div className="flex">
        <BlackBox w={6} />
        <div className="flex-grow"></div>
        <BlackBox w={5} />
        <Gap w={3} />
        <BlackBox w={2} />
      </div>
      {/* Row 4 */}
      <div className="flex">
        <BlackBox w={8} />
        <div className="flex-grow"></div>
        <BlackBox />
        <Gap w={4} />
        <BlackBox w={3} />
      </div>
      <div>
        <BlackBox className="h-16 w-full" />
      </div>
    </footer>
  );
}
