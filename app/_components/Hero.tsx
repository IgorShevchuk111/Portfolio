import SocialLinks from './SocialLinks';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center space-y-6">
        <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/69105126?v=4"
            alt="Igor Shevchuk"
            fill
            sizes="(max-width: 768px) 128px, 128px"
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold mb-4 leading-normal py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Igor Shevchuk
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300">
          Software Developer
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}
