import Image from "next/image";

export default function BioSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl bg-[var(--muted)] md:h-80 md:w-80">
            <Image
              src="/images/Photo.png"
              alt="Portrait"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                I am a creative multimedia professional,
                specializing in video editing, color grading, and motion
                graphics. With years of experience in post-production, I bring
                stories to life through careful pacing, intentional color, and
                thoughtful motion design.
              </p>
              <p>
                My work spans commercial content, brand films, music videos, and
                digital products. I also build websites and apps with the help
                of AI — combining creative vision with modern development tools
                to create complete digital experiences.
              </p>
              <p>
                When I am not in the edit suite, you will find me exploring 3D
                modeling in Blender, experimenting with VFX compositing, or
                learning the next tool that will expand my creative toolkit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
